//test mongo db
export async function test() {
    try {
        await fetch(`http://localhost:5173/units`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }
        })
        
    } catch (err) {
        console.error("Error:", err);
    }
}


//video data
export async function postVideoData(video_element_data) {
    console.log(video_element_data);
    try {
        await fetch(`http://localhost:5173/video-elements`, {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify({ video_element_data }) 
        }).then(resp => resp.json());
    } catch (err) {
        console.error("Error:", err);
    }
}

export async function getVideoData(unit_name) {
    console.log(`api getting video data for unit ${unit_name}`);
    try {
        const response = await fetch(`http://localhost:5173/video-elements?unit_name=${unit_name}`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }, 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
        
    } catch (err) {
        console.error("Error:", err);
    }
}

//quiz data
export async function postQuizData(quiz_element_data) {
    console.log(quiz_element_data);   
    try {
        await fetch(`http://localhost:5173/quiz-elements`, {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify({ quiz_element_data }) 
        }).then(resp => resp.json());
        
    } catch (err) {
        console.error("Error:", err);
    }
}

//image data
export async function postImageData(image_element_data) {
    console.log(image_element_data);   
    try {
        await fetch(`http://localhost:5173/image-elements`, {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify({ image_element_data }) 
        }).then(resp => resp.json());
        
    } catch (err) {
        console.error("Error:", err);
    }
}


export async function getImageData(unit_name) {
    console.log(`api getting image data for unit ${unit_name}`);
    try {
        const response = await fetch(`http://localhost:5173/image-elements?unit_name=${unit_name}`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }, 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
        
    } catch (err) {
        console.error("Error:", err);
    }
}


//pdf data
export async function postPDFData(pdf_element_data) {
    console.log("pdf data: ", pdf_element_data);   
    try {
        await fetch(`http://localhost:5173/pdf-elements`, {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify({ pdf_element_data }) 
        }).then(resp => resp.json());
        
    } catch (err) {
        console.error("Error:", err);
    }
}

export async function getPDFData(unit_name) {
    console.log(`api getting pdf data for unit ${unit_name}`);
    try {
        const response = await fetch(`http://localhost:5173/pdf-elements?unit_name=${unit_name}`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }, 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
        
    } catch (err) {
        console.error("Error:", err);
    }
}


export async function getQuizData(unit_name) {
    console.log(`api getting quiz data for unit ${unit_name}`);
    try {
        const response = await fetch(`http://localhost:5173/quiz-elements?unit_name=${unit_name}`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }, 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
        
    } catch (err) {
        console.error("Error:", err);
    }
}


//html file data
export async function postHTMLData(html_data) {
    console.log(html_data);
    try {
        await fetch(`http://localhost:5173/html-files`, {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify({ html_data }) 
        }).then(resp => resp.json());
    } catch (err) {
        console.error("Error:", err);
    }
}

export async function getHTMLData(unit_name) {
    console.log(`api getting html data for unit ${unit_name}`);
    try {
        const response = await fetch(`http://localhost:5173/html-files?unit_name=${unit_name}`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }, 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
        
    } catch (err) {
        console.error("Error:", err);
    }
}

//files
export async function getFiles(file_path) {
    //console.log(file_path);
    try {
        const response = await fetch(`http://localhost:5173/files?file_path=${file_path}`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }, 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const res = await response.json();
        //console.log(res);
        return res;
        
    } catch (err) {
        console.error("Error:", err);
    }
}

//file contents
export async function readFile(file_path) {//issue here
    console.log("path", file_path);
    try {
        const response = await fetch(`http://localhost:5173/file-contents?file_path=${file_path}`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }, 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const res = await response.json();
        //console.log(res);
        return res.html;
        
    } catch (err) {
        console.error("Error:", err);
    }
}


