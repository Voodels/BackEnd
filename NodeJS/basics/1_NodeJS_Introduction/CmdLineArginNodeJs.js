// accesing the CMDline args 
const argument = process.argv.slice(2);

const arg1 = parseInt(argument[0]);
const arg2 = parseInt(argument[1]);


const sum = arg1 + arg2;
console.log(`Sum of ${arg1} and ${arg2} is ${sum}`);