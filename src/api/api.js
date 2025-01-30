export async function postUnit(base64String) {
    try {
        await fetch(`http://localhost:5050/units`, {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify({ base64String }) //still get json error from byte method...
        }).then(resp => resp.json());
        
    } catch (err) {
        console.error("Error:", err);
    }
}

export async function pullUnit() { //will need to have unit identifier as a param in the future
    try {
        let results = await fetch(`http://localhost:5050/units/`).then(resp => resp.json()); //testing out mongodb stuff, will change to more like smth above; issue
        return results
    } catch (err) {
        console.error("Error:", err);
    }
}