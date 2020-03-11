'use strict';


module.exports = class Student{ 
    constructor(name,matricNo,major) {
        this.name = name;
        this.matricNo = matricNo;
        this.major = major;
    }

    
get Name() {
    return this.name;
}

set Name(name) {
    this.name = name;
}

get MatricNo() {
    return this.matricNo;
}

set MatricNo(matricNo) {
    this.matricNo = matricNo;

}

get Major() {
    return this.major;
}

set Major(major){
    this.major = major;
}

display(name,matricNo,major){

    this.name=name;
    this.matricNo=matricNo;
    this.major=major;
    
    
    console.log(`Your Name: ${name}`);
    console.log(`Your Matric No: ${matricNo}`);
    console.log(`Your Major: ${major}`);
    
}
}


