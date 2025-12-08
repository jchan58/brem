import { Box, Flex, Heading, ScrollArea } from "@radix-ui/themes";
import { getFiles } from "../api/api";
import { useEffect, useState } from "react";


const BASE_URL = "http://localhost:3000/";

const DemoModulePage = () => {
    const [unitNames, setUnitNames] = useState([]);
    const [completedUnits, setCompletedUnits] = useState([]);
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

    // load completed demo units from localStorage
    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = localStorage.getItem("demoUnitsCompleted");
        if (stored) {
            try {
                setCompletedUnits(JSON.parse(stored));
            } catch (err) {
                console.error("Could not parse completed units", err);
            }
        }
    }, [])

    
    // Optional: clear stored completions to reset UI to all black on load
    useEffect(() => {
        if (typeof window === "undefined") return;
        localStorage.removeItem("demoUnitsCompleted");
        setCompletedUnits([]);
    }, []);

    
    return (
        <div>
            <p className="text-center text-4xl font-bold mb-5">Module 2: Laboratory Methods</p>
            <Heading size="30" mb="2" trim="start" weight="medium" className="ml-4">
                Units
            </Heading>
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }} className="mb-3.5">
                <Box p="2" pr="8">
                    
                    <Flex direction="column" gap="0">
                        {unitNames.map((name) => (
                            (() => {
                                const decodedName = name.split("-").slice(1).join("-").replace("%20", " ");
                                const isCompleted = completedUnits.includes(name) || completedUnits.includes(decodedName);
                                const linkColor = isCompleted ? "text-green-600" : "text-black";
                                return (
                                    <div key = {name} className="text-left font-medium text-2xl border border-gray-400 bg-zinc-100 space-y-0 h-16 flex items-center">
                                        <a href={`${BASE_URL}unitpage?unit_name=${name}&module_name=DemoModule`} className={`${linkColor} hover:text-blue-600 ml-5`}>{decodedName}</a>
                                    </div>
                                );
                            })()
                        ))}
                        
                    </Flex>
                </Box>
            </ScrollArea>
        </div>
    );
};

export default DemoModulePage;
