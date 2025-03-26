import { Box, Flex, Heading, ScrollArea, Separator, Text } from "@radix-ui/themes";
import { fetchDriveFolders, signInWithGoogle } from "../googleDriveService";
import { useEffect, useState } from "react";



const BASE_URL = "http://localhost:3000/";





    
 
const ModulePage = () => {

    const [unitNames, setUnitNames] = useState([]);
    const [moduleName, setModuleName] = useState("");

    window.onload = async function () {
        const queryParams = new URLSearchParams(window.location.search);
        const module = queryParams.get("module_name"); //get the module name from the url query param (http://localhost:3000/modulepage?module_name= Module 5)
        setModuleName(module);
    }

    useEffect(() => {
        async function getUnitNames() {
            const unitNamesList = [];
            console.log(moduleName)
            //fetch all unit names from module folder
            try {
                //get the access token
                const accessToken = await signInWithGoogle();
                if (!accessToken) {
                    console.error("No access token available.");
                    return;
                }
            
                const folders = await fetchDriveFolders();
                let folderId = "";
            
                // Find the module's folder ID
                for(let i = 0; i < folders.length; i++) {
                    if(folders[i].name === moduleName) {
                        folderId = folders[i].id;
                        break;
                    }
                }
            
                console.log(folderId);
            
                if (!folderId) {
                    console.error(`Module "${moduleName}" not found.`);
                }
            
                // Fetch files in the folder
                const filesResponse = await fetch(
                    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents and mimeType contains 'text/html'&fields=files(id,name)`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
            
                const filesData = await filesResponse.json();
                const units = filesData.files;
            
                for(let i = 0; i < units.length; i++) {
                    unitNamesList.push(units[i].name); 
                }

                setUnitNames(unitNamesList);
                console.log(unitNames);
            } catch (error) {
                console.log("Error getting unit names: ", error);
            }
        }

        if(moduleName !== "") {
            getUnitNames();
        }
    
    }, [moduleName])
    
    if(unitNames.length === 0) {
        return (
            <div className="relative bg-white pt-5">
              <div className="relative z-10">
                <div id = "non-footer">
                  <p>Units Loading...</p>
                </div>
              </div>
            </div>
        );
    }

    return (
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
            <Box p="2" pr="8">
                <Heading size="4" mb="2" trim="start">
                    Unit List
                </Heading>
                <Flex direction="column" gap="4">
                    {unitNames.map((name) => (
                        <div key = {name}>
                            <a href={`${BASE_URL}unitpage?unit_name=${name}&module_name=${moduleName}`}>{name}</a>
                        </div>

                    ))}
                </Flex>
            </Box>
    </ScrollArea>
    );
};

export default ModulePage;