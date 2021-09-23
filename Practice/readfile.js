import fs from 'fs'; // File system module
let file_name = "login.html";
var file_path = process.argv[2];
var file_buffer =  fs.readFileSync(file_name);
var to_string = file_buffer.toString();
var split_lines = to_string.split("\n");
console.log(split_lines.length-1);