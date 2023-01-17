import HNEmployee from './subClass.js';

//import Customer from './subClass.js';

//const {HNEmployee} = require ('./subClass.js');

let nswEmployee = new HNEmployee("Indika", "17A Hills Ave, Epping, NSW 2121", 41);

nswEmployee.showPersonalDetails();
nswEmployee.showEmployeeAge();
console.log("My mailing address1 :" + nswEmployee.getAddress());
console.log("My mailing address2 :" + nswEmployee.address);

