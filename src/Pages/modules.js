import React, { useState, useEffect } from "react";
import { createDriveFolder, uploadImageToFolder, signInWithGoogle } from "../googleDriveService";
import plusIcon from "../Image_folder/plus (1).png";

const Modules = () => {
  const [folderName, setFolderName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [modules, setModules] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchModulesFromDrive();
  }, []);

  const fetchModulesFromDrive = async () => {
    const accessToken = await signInWithGoogle();
    if (!accessToken) {
      console.error("No access token available.");
      return;
    }

    try {
      const folderResponse = await fetch(
        "https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.folder'&fields=files(id,name)",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const folderData = await folderResponse.json();
      if (!folderData.files) {
        console.error("No folders found.");
        return;
      }

      let fetchedModules = [];

      for (const folder of folderData.files) {
        const fileResponse = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folder.id}'+in+parents and mimeType contains 'image'&fields=files(id,name,webContentLink,thumbnailLink)`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const fileData = await fileResponse.json();
        if (fileData.files && fileData.files.length > 0) {
          fetchedModules.push({
            folderName: folder.name,
            imageUrl: fileData.files[0].thumbnailLink || fileData.files[0].webContentLink,
          });
        }
      }

      setModules(fetchedModules);
    } catch (error) {
      console.error("Error fetching modules from Google Drive:", error);
    }
  };

  const handleCreateModule = async () => {
    if (!folderName || !imageFile) {
      alert("Please enter a folder name and upload an image.");
      return;
    }

    const folderId = await createDriveFolder(folderName);
    if (!folderId) {
      alert("Failed to create folder.");
      return;
    }

    const imageUrl = await uploadImageToFolder(imageFile, folderId);
    if (!imageUrl) {
      alert("Failed to upload image.");
      return;
    }

    const newModule = { folderName, imageUrl };
    setModules([...modules, newModule]);

    alert(`Module Created! Folder ID: ${folderId}`);
    setShowPopup(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create Module</h1>

      <button onClick={() => setShowPopup(true)} className="flex items-center justify-center w-12 h-12">
        <img src={plusIcon} alt="Add Module" className="w-8 h-8" />
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Create Modules</h2>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Enter module name"
              className="border p-2 w-full mb-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end">
              <button onClick={handleCreateModule} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                Create
              </button>
              <button onClick={() => setShowPopup(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-lg font-bold">Modules</h2>
        <div className="grid grid-cols-5 gap-1">
          {modules.map((module, index) => (
            <div key={index} className="border p-2 rounded shadow-md w-60">
              <h3 className="text-sm font-semibold truncate text-center">{module.folderName}</h3>
              <img src={module.imageUrl} alt={module.folderName} className="mt-2 w-full h-32 object-cover rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modules;
