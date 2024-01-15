/*
  Assignment 5 [Challenge] : Can you run a system command from Node JS javascript file e.g. ls dir commands ? and can you store its output in a text file ?
  Hint: You can use child_process module of Node JS for this assignment.
 */
const { exec } = require('child_process');

// Replace 'ls' or 'dir' with the desired system command
const command = 'dir'; // Unix-like
// const command = 'dir'; // Windows

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }

  // `stdout` contains the command's output
  console.log(`Command output:\\n${stdout}`);
});


// Path: WebDev/BackEnd/NodeJS/basics/1_Chapter/childProcessModule.js



//