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
                justNames.push(data[i].split(".")[0]); //get rid of path part
            }
            setUnitNames(justNames);
        }
        getUnitNames();
        console.log(unitNames);
    }, [])

    
    return (
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
            <Box p="2" pr="8">
                <Heading size="4" mb="2" trim="start">
                    Unit List
                </Heading>
                <Flex direction="column" gap="4">
                    {unitNames.map((name) => (
                        <div key = {name}>
                            <a href={`${BASE_URL}unitpage?unit_name=${name}&module_name=DemoModule`}>{name}</a>
                        </div>
                    ))}
                    <Separator />
                </Flex>
            </Box>
    </ScrollArea>
    );
};

export default DemoModulePage;