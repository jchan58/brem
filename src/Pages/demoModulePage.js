import { Box, Flex, Heading, ScrollArea, Separator, Text } from "@radix-ui/themes";
import { getFiles } from "../api/api";
import { useEffect, useState } from "react";


const BASE_URL = "http://localhost:3000/";


 
const DemoModulePage = () => {
    const [unitNames, setUnitNames] = useState([]);
    // Read the contents of demo units folder
     useEffect(() => {
        async function getUnitNames() {
            const data = await getFiles("../public/demo_units"); //will be run from /server, so have to ..
            const justNames = [];
            for(let i = 0; i < data.length; i ++) {
                justNames.push(data[i].replace(" ", "%20").split(".")[0]); //get rid of path part
            }
            setUnitNames(justNames);
        }
        getUnitNames();
        console.log(unitNames);
    }, [])

    
    return (
        <div>
            <p className="text-center text-5xl font-bold mb-5">Welcome to the Demo Module</p>
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }} className="mb-3.5">
                <Box p="2" pr="8">
                    <Heading size="4" mb="2" trim="start">
                        Unit List
                    </Heading>
                    <Flex direction="column" gap="4">
                        {unitNames.map((name) => (
                            <div key = {name} className="text-center text-3xl space-y-2">
                                <a href={`${BASE_URL}unitpage?unit_name=${name}&module_name=DemoModule`} className="hover:text-blue-600">{name.split("-").slice(1).join("-").replace("%20", " ")}</a>
                                <Separator orientation="horizontal" size="4"/>
                            </div>
                        ))}
                        
                    </Flex>
                </Box>
            </ScrollArea>
        </div>
    );
};

export default DemoModulePage;