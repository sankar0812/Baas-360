/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 05 2023
* ModifiedBy   : RaviBalan 
* ModifiedTime : OCT 24 2023
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
const downloadInvoiceCoreRule = require("../../../src/rules/invoice/download/core.rule");
const addInvoiceCoreRule = require("../../../src/rules/invoice/add/core.rule")
const generateNumberCoreRule = require("../../../src/rules/invoice/generatenumber/core.rule")
const changeToOpenCoreRule = require("../../../src/rules/invoice/changetoopen/core.rule");
const changeToVoidCoreRule = require("../../../src/rules/invoice/changetovoid/core.rule");



/* Initializing objects for all the rule classes */
const DownloadInvoiceCoreRule = new downloadInvoiceCoreRule();
const AddInvoiceCoreRule = new addInvoiceCoreRule();
const GenerateNumberCoreRule = new generateNumberCoreRule();
const ChangeToOpenCoreRule = new changeToOpenCoreRule();
const ChangeToVoidCoreRule = new changeToVoidCoreRule();


/**
 * Initializing the controller object
 */
const InvoiceController = express.Router();


/* Creating all the API endpoint to function mapping */

InvoiceController.post(Endpoints.ENDPOINT_API_DOWNLOAD, async (request, response) => {
    const apiID = "accounts.api.rest.business.invoice.downloadinvoice.v1"
    Commons.executeController(request, response, apiID, DownloadInvoiceCoreRule.downloadInvoice)
});

InvoiceController.post(Endpoints.ENDPOINT_API_ADD_INVOICE, async (request, response) => {
    const apiID = "accounts.api.rest.business.invoice.add.v1"
    Commons.executeController(request, response, apiID, AddInvoiceCoreRule.addInvoice)
});

InvoiceController.post(Endpoints.ENDPOINT_API_GENERATE_NUMBER, async (request, response) => {
    const apiID = "accounts.api.rest.business.invoice.generatenumber.v1"
    Commons.executeController(request, response, apiID, GenerateNumberCoreRule.generateNumber)
});

InvoiceController.post(Endpoints.ENDPOINT_API_INVOICE_STATUS_OPEN, async (request, response) => {
    const apiID = "accounts.api.rest.business.invoice.changetoopen.v1"
    Commons.executeController(request, response, apiID, ChangeToOpenCoreRule.changeToOpen)
});

InvoiceController.post(Endpoints.ENDPOINT_API_INVOICE_STATUS_VOID, async (request, response) => {
    const apiID = "accounts.api.rest.business.invoice.changetovoid.v1"
    Commons.executeController(request, response, apiID, ChangeToVoidCoreRule.changeToVoid)
});

module.exports = InvoiceController;
