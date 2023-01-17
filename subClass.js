import {Employee} from "./classes.js";

// {Employee} = require ('./classes.js');

class HNEmployee extends Employee{
    constructor() {
        super();
    }
    showEmployeeAge(){
        console.log("Age : " + this.age);
    }

    getAddress(){
        return this.address;
    }
}

let nswEmployee = new HNEmployee("Indika", "17A Hills Ave, Epping, NSW 2121", 41);

nswEmployee.showPersonalDetails();
nswEmployee.showEmployeeAge();
console.log("My mailing address1 :" + nswEmployee.getAddress());
console.log("My mailing address2 :" + nswEmployee.address);