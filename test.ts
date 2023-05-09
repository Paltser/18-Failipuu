import * as fs from 'fs';

let filenames:string[] = fs.readdirSync('kolmapaev');
console.log(filenames);
console.log(filenames.length);
// count all files in that start with a

