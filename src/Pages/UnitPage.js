import { equipImages, equipPDFs, equipQuizzes, equipVideos } from "../ModuleEditFunctions/UserSideFunctions.js";
import { getHTMLData } from "../api/api.js";


//AWS imports
import { downloadData } from "aws-amplify/storage";
import { Amplify } from "aws-amplify";

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

 
//process the HTML file and write it to the page
async function processAndWriteHTML(htmlContent) {
  console.log("called");
    try {
      //let htmlContent = await readHTMLFile(file);
      document.write(htmlContent); 

    } catch (error) {
      console.error(error);
    }
}


window.onload = async function () {
  const queryParams = new URLSearchParams(window.location.search);
  const unitName = queryParams.get("unit_name"); //get the unit name from the url query param (http://localhost:3000/unitpage?unit_name=[unitName]&module_name=)

  const moduleName = queryParams.get("module_name");

  if(unitName && moduleName)  { //only do this if the parameters are present (on the unit page...)
  

    const realUnitName = unitName.replace("%20", " ");
    

    //use AWS
    const unitHTMLData = await getHTMLData(realUnitName);
    const unit_doc = unitHTMLData.filter((doc) => doc.unitName === realUnitName)[0]; 

    const downloadResult = await downloadData({path: unit_doc.awsKey}).result; 
    const unitFile = await downloadResult.body.text();
      
    if(unitFile){
      await processAndWriteHTML(unitFile);
          //console.log("called");

      await equipVideos(realUnitName); 
      await equipQuizzes(realUnitName);
      await equipImages(realUnitName);
      await equipPDFs(realUnitName);

      //BACK NAV ONLY FOR DEMO
      const nonFooter = document.getElementById("non-footer");
      nonFooter.classList.add("flex", "flex-col");
      const backNavBtn = document.createElement("button");
      backNavBtn.classList.add("text-lg", "border", "border-solid", "border-black", "rounded-sm", "px-4", "py-2", "ml-2", "absolute", "bottom-4");
      backNavBtn.textContent = "Back to Module Page"; 
      backNavBtn.onclick = () => {
        window.location.href = `http://localhost:3000/modulepage?module_name=${moduleName}`;
      };
      nonFooter.appendChild(backNavBtn);
   
    } 
  }
}
  //}
    
 
const UnitPage = () => {
    return (
        <div className="relative bg-white pt-5">
          <div className="relative z-10">
            <div id = "non-footer">
              <p>Unit Loading...</p>
            </div>
          </div>
        </div>
    );
};

export default UnitPage;