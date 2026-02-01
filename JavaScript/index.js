const fs = require("fs");

function fileReadCallback(err, contents) {
    console.log(contents);
    console.log(contents);
    console.log(contents);
}
fs.readFile("a.txt", "utf-8", fileReadCallback);
