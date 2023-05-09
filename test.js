"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filenames = fs.readdirSync('kolmapaev');
console.log(filenames);
console.log(filenames.length);
var directoryPath = 'kolmapaev';
var files = fs.readdirSync(directoryPath);
var contents = [];
for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
    var file = files_1[_i];
    if (file.endsWith('.txt')) {
        var filePath = "".concat(directoryPath, "/").concat(file);
        var fileContent = fs.readFileSync(filePath, 'utf-8');
        contents.push(fileContent);
        console.log("".concat(file, ": ").concat(fileContent.length, " characters"));
    }
}
console.log('All file contents:', contents);
