import * as fs from 'fs';

let filenames: string[] = fs.readdirSync('kolmapaev');
console.log(filenames);
console.log(filenames.length);


const directoryPath = 'kolmapaev';
let files = fs.readdirSync(directoryPath);

let contents: string[] = [];

for (const file of files) {
    if (file.endsWith('.txt')) {
        let filePath = `${directoryPath}/${file}`;
        let fileContent = fs.readFileSync(filePath, 'utf-8');
        contents.push(fileContent);
        console.log(`${file}: ${fileContent.length}`);
    }
}

console.log('All file contents:', contents);


let directory = 'kolmapaev';
let sum: number = 0;
let filenames2:string[] = fs.readdirSync(directory);
for(let filename of filenames2){
    let contents:string=fs.readFileSync(`${directory}/${filename}`, "utf-8");
    sum+=parseInt(contents);
}
console.log(sum)
