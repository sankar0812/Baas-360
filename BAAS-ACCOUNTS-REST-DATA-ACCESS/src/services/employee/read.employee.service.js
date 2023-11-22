/**
@CreatedBy : Dinesh
@CreatedDate : 08 Jan 2023
@Description : This File Contains Read Operation Related Function For employee Schema
*/

/**
* Importing all the required modules
*/

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const employeeMock = require("../../mocks/employee.mock.json");

/**
* Initializing objects for all the imported classes
*/
const Commons = new commons();
const Messages = new messages();

module.exports = class readEmployeeService {

/**
* CreatedBy : Dinesh
* CreatedTime : jan 08 2023
* ModifiedBy : Dinesh
* ModifiedTime : jan 08 2023
* Description : This function read
**/
async readEmployees(databaseConnector, apiID, config, input) {
try {
if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
if (config.IsMockEnabled == true) { return employeeMock[apiID] }
else {
let output = await databaseConnector.Employee.findMany(
Commons.generatePrismaFindManyInput(input)
).catch((error) => {
throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
});
if(output.length == 0){
return Commons.generateServiceOutput(null, 404, Messages.MESSAGE_EMPLOYEE_NOT_FOUND);
}else{
return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_EMPLOYEE_READ_SUCCESSFULLY);
}
}
}
catch (error) {
throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
}
}

/**
* CreatedBy : Dinesh
* CreatedTime : jan 08 2023
* ModifiedBy : Dinesh
* ModifiedTime : jan 08 2023
* Description : This function read
**/
async readOneEmployee(databaseConnector, apiID, config, input) {
try {
if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
if (config.IsMockEnabled == true) { return employeeMock[apiID] }
else {
let output = await databaseConnector.Employee.findUnique({
where: {
EmployeeID: parseInt(input.employeeid)
},
}).catch((error) => {
throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
});
if(output==null){
return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_EMPLOYEE_NOT_FOUND);
}
else{
return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_EMPLOYEE_HAS_BEEN_FOUND);
}
}
}
catch (error) {
throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
}
}

/**
* CreatedBy : Dinesh
* CreatedTime : jan 08 2023
* ModifiedBy : Dinesh
* ModifiedTime : jan 08 2023
* Description : This function read
**/
async readEmployeeCount(databaseConnector, apiID, config, input) {
try {
if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
if (config.IsMockEnabled == true) { return employeeMock[apiID] }
else {
let output = await databaseConnector.Employee.aggregate(
Commons.generatePrismaAggregateInput(input)

).catch((error) => {
console.log(error);
throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
});

return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_EMPLOYEE_READ_COUNT_SUCCESSFULLY);

}
}
catch (error) {
throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
}

}


}