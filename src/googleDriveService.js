import { upload } from "@testing-library/user-event/dist/cjs/utility/upload.js";
import { gapi } from "gapi-script";

// Google OAuth Client ID - Replace with your own Client ID
const CLIENT_ID = "600341186488-usbqo5opl0ipfscaq2m9lmrtbj32r4a9.apps.googleusercontent.com";
// The scope defines the level of access required; here, it is set to allow file creation and management in Google Drive
const SCOPES = "https://www.googleapis.com/auth/drive.file";

/**
 * Initializes the Google Drive API client.
 */
export const initializeGDrive = () => {
  return new Promise((resolve, reject) => {
    gapi.load("client:auth2", async () => {
      try {
        await gapi.client.init({
          clientId: CLIENT_ID,
          scope: SCOPES,
        });
        console.log("Google Drive API initialized.");
        resolve();
      } catch (error) {
        console.error("Error initializing Google Drive API:", error);
        reject(error);
      }
    });
  });
};

/**
 * Signs in the user using Google authentication.
 */
export const signInWithGoogle = async () => {
  if (!gapi.auth2) {
    console.error("gapi.auth2 is not loaded yet. Waiting...");
    await initializeGDrive();
  }

  const authInstance = gapi.auth2.getAuthInstance();
  if (!authInstance.isSignedIn.get()) {
    await authInstance.signIn();
  }
  return authInstance.currentUser.get().getAuthResponse().access_token;
};

/**
 * Creates a new folder in Google Drive.
 */
export const createDriveFolder = async (folderName) => {
  const accessToken = await signInWithGoogle();
  if (!accessToken) {
    console.error("No access token available.");
    return null;
  }

  const metadata = {
    name: folderName,
    mimeType: "application/vnd.google-apps.folder",
  };

  try {
    const response = await fetch("https://www.googleapis.com/drive/v3/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metadata),
    });

    const data = await response.json();
    if (response.ok) {
      console.log(`Folder "${folderName}" created successfully! ID:`, data.id);
      return data.id;
    } else {
      console.error("Failed to create folder:", data);
      return null;
    }
  } catch (error) {
    console.error("Error creating folder:", error);
    return null;
  }
};

/**
 * Fetches all folders from Google Drive.
 */
export const fetchDriveFolders = async () => {
  const accessToken = await signInWithGoogle();
  if (!accessToken) {
    console.error("No access token available.");
    return [];
  }

  try {
    const response = await fetch(
      "https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.folder'&fields=files(id,name)",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return data.files || [];
  } catch (error) {
    console.error("Error fetching folders from Google Drive:", error);
    return [];
  }
};

/**
 * Uploads an image file to a specified Google Drive folder.
 */
export const uploadImageToFolder = async (file, folderId) => {
  const accessToken = await signInWithGoogle();
  if (!accessToken) {
    console.error("No access token available.");
    return null;
  }

  const metadata = {
    name: file.name,
    mimeType: file.type,
    parents: [folderId],
  };

  const formData = new FormData();
  formData.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  formData.append("file", file);

  try {
    const response = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
      body: formData,
    });
    const data = await response.json();
    console.log("File uploaded:", data);
    if (!data.id) {
      console.error("No file ID returned!");
      return null;
    }

    // Set public permissions
    const permissionResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${data.id}/permissions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "reader", type: "anyone" }),
    });
    const permissionResult = await permissionResponse.json();
    console.log("Permission response:", permissionResult);

    // Generate and return the direct image URL
    const imageUrl = `https://drive.google.com/uc?export=view&id=${data.id}`;
    console.log("Generated Image URL:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};

/**
 * Uploads a file to a specified Google Drive folder.
 */
export const uploadFileToFolder = async (file, folderId) => {
  const accessToken = await signInWithGoogle(); // Obtain OAuth token
  if (!accessToken) {
    console.error("No access token available.");
    return null;
  }

  const metadata = {
    name: file.name,
    mimeType: file.type,
    parents: [folderId],
  };

  const formData = new FormData();
  formData.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  formData.append("file", file);

  try {
    const response = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
      body: formData,
    });
    const data = await response.json();
    console.log("File uploaded:", data);

    await fetch(`https://www.googleapis.com/drive/v3/files/${data.id}/permissions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "reader", type: "anyone" }),
    });

    const fileResponse = await fetch(
      `https://www.googleapis.com/drive/v3/files/${data.id}?fields=webViewLink,webContentLink`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const fileData = await fileResponse.json();
    console.log("File public URL:", fileData.webContentLink);
    return fileData.webViewLink || `https://drive.google.com/uc?export=view&id=${data.id}`;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};


//upload large file to folder
const initiateUpload = async (file, folderId) => {
  const accessToken = await signInWithGoogle(); // Obtain OAuth token
  if (!accessToken) {
    console.error("No access token available.");
    return null;
  }
  const metadata = {
    name: file.name,
    mimeType: file.type,
    parents: [folderId],
  };
  console.log("folder", folderId);
  const response = await fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metadata),
    }
  );
  if (!response.ok) throw new Error("Failed to initiate upload");

  return response.headers.get("Location"); // Upload URL
};

const uploadVideo = async (file, uploadUrl) => { //how to perform a resumable upload...
  let formData = new FormData();
  formData.append("file", file);
  const response = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Length": file.size,
      "Content-Type": file.type,
    },
    body: formData,
  });
  console.log("up res", response.status);

  return response.json();
};


const getUploadedBytes = async (uploadUrl) => {
  const response = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Range": "bytes */*", // Query the upload status
    },
  });

  if (response.status === 308) {
    const rangeHeader = response.headers.get("Range");
    if (rangeHeader) {
      const match = rangeHeader.match(/bytes=([0-9]+)-([0-9]+)/);
      if (match) return parseInt(match[2]) + 1;
    }
  }
  return 0; // If no bytes were uploaded
};

const uploadVideoInChunks = async (file, uploadUrl, chunkSize = 5 * 1024 * 1024) => {
  let start = await getUploadedBytes(uploadUrl); // Resume from this byte
  const fileSize = file.size;

  while (start < fileSize) {
    const end = Math.min(start + chunkSize, fileSize) - 1;
    const chunk = file.slice(start, end + 1);

    const response = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Length": chunk.size,
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      },
      body: chunk,
    });

    if (!response.ok && response.status !== 308) throw new Error("Upload failed");

    start = end + 1; // Move to next chunk
  }

  return uploadUrl; // The file is fully uploaded
};



export const uploadLargeFileToFolder = async (file, folderId) => {
  const uploadUrl = await initiateUpload(file, folderId); //works
  //const fileData =  await uploadVideo(file, uploadUrl);
  const fileData = uploadVideoInChunks(file, uploadUrl);
  console.log("File public URL:", fileData.webContentLink);
  return fileData.webViewLink || `https://drive.google.com/uc?export=view&id=${fileData.id}`;
};


export const uploadLargerFileToFolder = async (file, folderId) => {
  const accessToken = await signInWithGoogle(); // Obtain OAuth token
  if (!accessToken) {
    console.error("No access token available.");
    return null;
  }

  let metadata = {
    name: file.name,
    mimeType: file.type,
    parents: [folderId],
  };

  let formData = new FormData();
  formData.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  formData.append("file", file);

  try {
    console.log("attempt video");
    const response = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=media", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });
    console.log("video response", response);

    const data = await response.json();
    console.log("File uploaded:", data);

    await fetch(`https://www.googleapis.com/drive/v3/files/${data.id}/permissions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: "reader",
        type: "anyone",
      }),
    });

    const fileResponse = await fetch(
      `https://www.googleapis.com/drive/v3/files/${data.id}?fields=webViewLink,webContentLink`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const fileData = await fileResponse.json();
    console.log("File public URL:", fileData.webContentLink);
    return fileData.webViewLink || `https://drive.google.com/uc?export=view&id=${data.id}`;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};


