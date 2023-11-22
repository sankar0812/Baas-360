/**
@CreatedBy : Dinesh
@CreatedDate : 08 Jan 2023
@Description : This File Contains Read Operation Related Function For paymentstatus Schema
*/

/**
* Importing all the required modules
*/

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const paymentMock = require("../../mocks/payment.mock.json");

/**
* Initializing objects for all the imported classes
*/
const Commons = new commons();
const Messages = new messages();

module.exports = class readPaymentStatusService {

/**
* CreatedBy : Dinesh
* CreatedTime : jan 08 2023
* ModifiedBy : Dinesh
* ModifiedTime : jan 08 2023
* Description : This function read
**/
async readPaymentStatuses(databaseConnector, apiID, config, input) {
try {
if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
if (config.IsMockEnabled == true) { return paymentMock[apiID] }
else {
let output = await databaseConnector.PaymentStatus.findMany(
Commons.generatePrismaFindManyInput(input)
).catch((error) => {
throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
});
if(output.length == 0){
return Commons.generateServiceOutput(null, 404, Messages.MESSAGE_PAYMENT_STATUS_NOT_FOUND);
}else{
return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_PAYMENT_STATUS_READ_SUCCESSFULLY);
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
async readOnePaymentStatus(databaseConnector, apiID, config, input) {
try {
if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
if (config.IsMockEnabled == true) { return paymentMock[apiID] }
else {
let output = await databaseConnector.PaymentStatus.findUnique({
where: {
PaymentStatusID: parseInt(input.paymentstatusid)
},
}).catch((error) => {
throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
});
if(output==null){
return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_PAYMENT_STATUS_NOT_FOUND);
}
else{
return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_PAYMENT_STATUS_HAS_BEEN_FOUND);
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
async readPaymentStatusCount(databaseConnector, apiID, config, input) {
try {
if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
if (config.IsMockEnabled == true) { return paymentMock[apiID] }
else {
let output = await databaseConnector.PaymentStatus.aggregate(
Commons.generatePrismaAggregateInput(input)

).catch((error) => {
console.log(error);
throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
});

return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_PAYMENT_STATUS_READ_COUNT_SUCCESSFULLY);

}
}
catch (error) {
throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
}

}


}