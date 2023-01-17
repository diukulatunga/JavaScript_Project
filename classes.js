
class Employee{
    
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
       
    showPersonalDetails(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.address);
    }
}


class HNEmployee extends Employee{
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