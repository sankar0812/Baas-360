/**
* CreatedBy    : RaviBalan
* CreatedTime  : OCT 17 2023
* ModifiedBy   : RaviBalan 
* ModifiedTime : OCT 17 2023
* Description  : This file contains the all api endpoint to function mapping for all invoice module
**/

/**
 *  Importing all the required modules
 */
const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Endpoints = new endpoints();


/* Importing all the rule classes */
const addCustomerAccountCoreRule = require("../../../src/rules/customer/addcustomeraccount/core.rule");
const addCustomerPaymentCoreRule = require("../../../src/rules/customer/addcustomerpayment/core.rule")
const addCustomerPriceListtCoreRule = require("../../../src/rules/customer/addcustomerpricelist/core.rule");




/* Initializing objects for all the rule classes */
const AddCustomerAccountCoreRule = new addCustomerAccountCoreRule();
const AddCustomerPaymentCoreRule = new addCustomerPaymentCoreRule();
const AddCustomerPriceListtCoreRule = new addCustomerPriceListtCoreRule()


/**
 * Initializing the controller object
 */
const CustomerController = express.Router();


/* Creating all the API endpoint to function mapping */

CustomerController.post(Endpoints.ENDPOINT_API_PAYMENT, async (request, response) => {
    const apiID = "accounts.api.rest.business.customer.addpayment.v1"
    Commons.executeController(request, response, apiID, AddCustomerPaymentCoreRule.addCustomerPayment)
});


CustomerController.post(Endpoints.ENDPOINT_API_ADD_CUSTOMER_ACCOUNT, async (request, response) => {
    const apiID = "accounts.api.rest.business.customer.addcustomeraccount.v1"
    Commons.executeController(request, response, apiID, AddCustomerAccountCoreRule.addCustomerAccount)
});

CustomerController.post(Endpoints.ENDPOINT_API_CUSTOMER_ADD_PRICELIST, async (request, response) => {
    const apiID = "accounts.api.rest.business.customer.addpricelist.v1"
    Commons.executeController(request, response, apiID, AddCustomerPriceListtCoreRule.addCustomerPriceList)
});


module.exports = CustomerController;
