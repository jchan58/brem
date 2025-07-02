import { Box, Flex, Heading, ScrollArea, Separator, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

//AWS imports
import { Amplify } from "aws-amplify";
import { getHTMLData } from "../api/api";

const IDENTITY_POOL_ID = process.env.REACT_APP_IDENTITY_POOL_ID;
const USER_POOL_ID = process.env.REACT_APP_USER_POOL_ID;
const USER_POOL_CLIENT_ID = process.env.REACT_APP_USER_POOL_CLIENT_ID;
const BUCKET = "delta-bucket-alpha";
const REGION = "us-east-2";

//configure AWS amplify storage
Amplify.configure({
    Auth: {
        Cognito: {
            identityPoolId: IDENTITY_POOL_ID,
            userPoolId: USER_POOL_ID,
            userPoolClientId: USER_POOL_CLIENT_ID,
            allowGuestAccess: true,  // Enable unauthenticated access
            
        },
      },
    Storage:{
        S3: {
          bucket: BUCKET,
          region: REGION, 
        }
    }
})

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
            
            try {
         
                const unitHTMLData = await getHTMLData("!!!"); //!!! will give all of the units



                const moduleUnitsData = unitHTMLData.filter((doc) => doc.data[0].moduleName === moduleName); 
                moduleUnitsData.forEach((unit) => {
                    unitNamesList.push(unit.unitName);
                });

                setUnitNames(unitNamesList);
      
            } catch (error) {
                console.log("Error:", error);
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
        <div>
            <p className="text-center text-5xl font-bold mb-5">Welcome to the Module: {moduleName}</p>
                <Heading size="8" mb="2" trim="start" weight="medium" className="ml-4">
                    Unit List
                </Heading>
                <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }} className="mb-3.5">
                    <Box p="2" pr="8">
                            
                        <Flex direction="column" gap="0">
                            {unitNames.map((name) => (
                                <div key = {name} className="text-left font-medium text-2xl border border-gray-400 bg-zinc-100 space-y-0 h-16 flex items-center">
                                    <a href={`${BASE_URL}unitpage?unit_name=${name}&module_name=${moduleName}`} className="hover:text-blue-600  ml-5">{name}</a>
                                    {/* <Separator orientation="horizontal" size="4"/> */}
                                </div>
                            ))}
                                
                        </Flex>
                    </Box>
                </ScrollArea>
        </div>
    );
};

export default ModulePage;