import fs from "fs"
const filename = "file.txt"

//1st way of doing it. ( callback)
// fs.readFile(filename,"utf8", function (err,data) {
//     console.log(data)
// })

//2nd way of doing it. ( promise ) .then
// fs.readFile(filename,"utf8").then(err,data) => {
//     console.log(data);
// }

//3rd way of doing ti, (async)
async function showTet() {
const data = await fs.promises.readFile(filename,"utf8")
return data 
}
console.log(await showTet())