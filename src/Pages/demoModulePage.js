import { Box, Flex, Heading, ScrollArea } from "@radix-ui/themes";
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
            <Heading size="8" mb="2" trim="start" weight="medium" className="ml-4">
                Unit List
            </Heading>
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }} className="mb-3.5">
                <Box p="2" pr="8">
                    
                    <Flex direction="column" gap="0">
                        {unitNames.map((name) => (
                            <div key = {name} className="text-left font-medium text-2xl border border-gray-400 bg-zinc-100 space-y-0 h-16 flex items-center">
                                <a href={`${BASE_URL}unitpage?unit_name=${name}&module_name=DemoModule`} className="hover:text-blue-600  ml-5">{name.split("-").slice(1).join("-").replace("%20", " ")}</a>
                               {/* <Separator orientation="horizontal" size="4"/> */}
                            </div>
                        ))}
                        
                    </Flex>
                </Box>
            </ScrollArea>
        </div>
    );
};

export default DemoModulePage;