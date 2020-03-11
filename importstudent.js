'use strict';

let stud = require('./exportstudent.js');

//const myimport = require('./exportstudent.js');

const readline = require('readline');



const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});



rl.question('Name: ', (name) => {
rl.question('Matric No: ', (matricNo) => {
rl.question('Major:' , (major) => {

    

    
    
    stud.prototype.display(name, matricNo, major);

rl.close();

});

});

});





