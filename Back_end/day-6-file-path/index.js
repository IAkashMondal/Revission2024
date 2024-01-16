const fs = require("fs");
const path = require("path");
const folderName = "files";
const filesName = "data";
const dirpath = path.join(__dirname, folderName);
// for creating files-------------------------------------------------------------------->
for (let i = 0; i < 5; i++) {
  // define file path along with name in'filePath and declear sms in 'fileContent'
  const filePath = path.join(dirpath, `/${filesName}${i}.txt`);
  const fileContent = `data no ${i + 10}`;
  fs.writeFileSync(filePath, fileContent);
}

// for read files name------------------------------------------------------------------->

fs.readdir(dirpath, (err, files) => {
  files.forEach((item) => {
    console.log(item);
  });
});

// for delete------------------------------------------------------------------------------>

// let d =0;
// while (d< 5) {
//   fs.unlinkSync(path.join(dirpath, `/${filesName}${d}.txt`));
//   d++;
// }
