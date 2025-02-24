import { gapi } from "gapi-script";

// Google OAuth Client ID - Replace with your own Client ID
const CLIENT_ID = "600341186488-usbqo5opl0ipfscaq2m9lmrtbj32r4a9.apps.googleusercontent.com";

// The scope defines the level of access required; here, it is set to allow file creation and management in Google Drive
const SCOPES = "https://www.googleapis.com/auth/drive.file";

/**
 * Initializes the Google Drive API client.
 * This function loads the Google API client and initializes it with the specified Client ID and scope.
 * @returns {Promise<void>} A promise that resolves when the API is successfully initialized.
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
 * Ensures the API is initialized before signing in.
 * @returns {Promise<string>} A promise that resolves to the OAuth access token.
 */
export const signInWithGoogle = async () => {
  if (!gapi.auth2) {
    console.error("gapi.auth2 is not loaded yet. Waiting...");
    await initializeGDrive(); // Ensure API is initialized before proceeding
  }

  const authInstance = gapi.auth2.getAuthInstance();

  // Check if the user is already signed in; if not, prompt sign-in
  if (!authInstance.isSignedIn.get()) {
    await authInstance.signIn();
  }

  return authInstance.currentUser.get().getAuthResponse().access_token;
};

/**
 * Creates a new folder in Google Drive.
 * @param {string} folderName - The name of the folder to be created.
 * @returns {Promise<string|null>} The ID of the created folder or null if creation fails.
 */
export const createDriveFolder = async (folderName) => {
  const accessToken = await signInWithGoogle(); // Obtain OAuth token

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
 * @returns {Promise<Array>} A promise that resolves to an array of folders.
 */
export const fetchDriveFolders = async () => {
  const accessToken = await signInWithGoogle(); // Obtain OAuth token

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
 * @param {File} file - The file object to be uploaded.
 * @param {string} folderId - The ID of the folder where the file should be stored.
 * @returns {Promise<string|null>} The public URL of the uploaded file or null if the upload fails.
 */
export const uploadImageToFolder = async (file, folderId) => {
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
    const response = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
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
