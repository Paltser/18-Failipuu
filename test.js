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
        console.log("".concat(file, ": ").concat(fileContent.length));
    }
}
console.log('All file contents:', contents);
var directory = 'kolmapaev';
var sum = 0;
var filenames2 = fs.readdirSync(directory);
for (var _a = 0, filenames2_1 = filenames2; _a < filenames2_1.length; _a++) {
    var filename = filenames2_1[_a];
    var contents_1 = fs.readFileSync("".concat(directory, "/").concat(filename), "utf-8");
    sum += parseInt(contents_1);
}
console.log(sum);
