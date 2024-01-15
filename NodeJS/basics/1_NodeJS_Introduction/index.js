const exModule = require('./example.js')
const fs = require('fs')
const t1 = performance.now()
// const txt = fs.readFileSync('demo.txt', 'utf8')

fs.readFile('demo.txt', 'utf-8', (err, output) => {
  console.log(output)
})
// console.log(txt)


console.log("Hello World!")
console.log("Sum->", exModule.sum(121, 312))
console.log("Diff->", exModule.diff(121, 312))
console.log("Multiply->", exModule.multiply(121, 312))
const t2 = performance.now()
console.log(`Took ${t2 - t1} milliseconds.`)