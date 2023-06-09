import * as fs from "fs";
function minDayData(dirname:string){
    let values:number[]=fs.readdirSync(dirname).map(filename =>
        parseInt(fs.readFileSync(dirname+"/"+filename, "utf-8") ));
    return Math.min(...values);
}
function maxDayData(dirname:string){
    let values:number[]=fs.readdirSync(dirname).map(filename =>
        parseInt(fs.readFileSync(dirname+"/"+filename, "utf-8") ));
    return Math.max(...values);
}
function minDaysData(startdir:string){
    let daynames:string[]=fs.readdirSync(startdir);
    let values:number[]=daynames.map(dayname => minDayData(startdir+dayname));
    return Math.min(...values);
}
function maxDaysData(startdir:string){
    let daynames:string[]=fs.readdirSync(startdir);
    let values:number[]=daynames.map(dayname => maxDayData(startdir+dayname));
    return Math.max(...values);
}


console.log(minDayData("teekond1/kolmapaev/"));
console.log(maxDayData("teekond1/kolmapaev/"));
console.log(minDaysData("teekond1/"));
console.log(maxDaysData("teekond1/"));