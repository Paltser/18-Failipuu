"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filenames = fs.readdirSync('kolmapaev');
console.log(filenames);
console.log(filenames.length);
