// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;
let star: string = ''

for (let i: number = 0; i <= lineCount; i++) {
    if (i==0){
    console.log('')
} else {
    star+='*';
    console.log(star)
}}