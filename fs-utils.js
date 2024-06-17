import fs from "fs";

const createDate= () => {
  try {
    if (!fs.existsSync("files")) {
     
      fs.mkdirSync("files");
    }
   
    const date = new Date().toString();
    const textDate = date.toString();
    const txt = textDate.split(":").join("-");
    
    fs.writeFileSync(`./files/${txt}.txt`, `TimeStamp : ${Date.now()}`);
  }
   catch (e) {
    console.log(`Error creating Dir : ${e.message}`);
  }
};



//read the folder
const readFolder = (folderName) => {
  try {
    const files = fs.readdirSync(folderName);
    return files;
  } catch (error) {
    console.log(`Error reading: ${error.message}`);
  }
};

export { createDate, readFolder };