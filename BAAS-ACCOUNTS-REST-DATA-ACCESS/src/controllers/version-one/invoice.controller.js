/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all invoice module api
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


/* Importing all the services classes (INJECTED USING CODE GENERATOR) */
const createInvoiceStatusService = require("../../services/invoice/create.invoicestatus.service");
const readInvoiceStatusService = require("../../services/invoice/read.invoicestatus.service");
const readoneInvoiceStatusService = require("../../services/invoice/read.invoicestatus.service");
const countInvoiceStatusService = require("../../services/invoice/read.invoicestatus.service");
const updateInvoiceStatusService = require("../../services/invoice/update.invoicestatus.service");
const deleteInvoiceStatusService = require("../../services/invoice/delete.invoicestatus.service");
const createInvoiceItemService = require("../../services/invoice/create.invoiceitem.service");
const readInvoiceItemService = require("../../services/invoice/read.invoiceitem.service");
const readoneInvoiceItemService = require("../../services/invoice/read.invoiceitem.service");
const countInvoiceItemService = require("../../services/invoice/read.invoiceitem.service");
const updateInvoiceItemService = require("../../services/invoice/update.invoiceitem.service");
const deleteInvoiceItemService = require("../../services/invoice/delete.invoiceitem.service");
const createInvoiceService = require("../../services/invoice/create.invoice.service");
const readInvoiceService = require("../../services/invoice/read.invoice.service");
const readoneInvoiceService = require("../../services/invoice/read.invoice.service");
const countInvoiceService = require("../../services/invoice/read.invoice.service");
const updateInvoiceService = require("../../services/invoice/update.invoice.service");
const deleteInvoiceService = require("../../services/invoice/delete.invoice.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateInvoiceStatusService = new createInvoiceStatusService();
const ReadInvoiceStatusService = new readInvoiceStatusService();
const ReadoneInvoiceStatusService = new readoneInvoiceStatusService();
const CountInvoiceStatusService = new countInvoiceStatusService();
const UpdateInvoiceStatusService = new updateInvoiceStatusService();
const DeleteInvoiceStatusService = new deleteInvoiceStatusService();
const CreateInvoiceItemService = new createInvoiceItemService();
const ReadInvoiceItemService = new readInvoiceItemService();
const ReadoneInvoiceItemService = new readoneInvoiceItemService();
const CountInvoiceItemService = new countInvoiceItemService();
const UpdateInvoiceItemService = new updateInvoiceItemService();
const DeleteInvoiceItemService = new deleteInvoiceItemService();
const CreateInvoiceService = new createInvoiceService();
const ReadInvoiceService = new readInvoiceService();
const ReadoneInvoiceService = new readoneInvoiceService();
const CountInvoiceService = new countInvoiceService();
const UpdateInvoiceService = new updateInvoiceService();
const DeleteInvoiceService = new deleteInvoiceService();


/**
 * Initializing the controller object
 */
const InvoiceController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

InvoiceController.post(Endpoints.ENDPOINT_INVOICE_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoicestatus.create.v1"
    Commons.executeController(request, response, apiID, CreateInvoiceStatusService.createOneInvoiceStatus ) 
}); 

InvoiceController.post(Endpoints.ENDPOINT_INVOICE_STATUSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoicestatus.read.v1"
    Commons.executeController(request, response, apiID, ReadInvoiceStatusService.readInvoiceStatuses ) 
});

InvoiceController.get(Endpoints.ENDPOINT_ONE_INVOICE_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoicestatus.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneInvoiceStatusService.readOneInvoiceStatus ) 
});

InvoiceController.post(Endpoints.ENDPOINT_INVOICE_STATUSES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoicestatus.count.v1"
    Commons.executeController(request, response, apiID, CountInvoiceStatusService.readInvoiceStatusCount ) 
});

InvoiceController.patch(Endpoints.ENDPOINT_INVOICE_STATUSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoicestatus.update.v1"
    Commons.executeController(request, response, apiID, UpdateInvoiceStatusService.updateInvoiceStatus ) 
});

InvoiceController.delete(Endpoints.ENDPOINT_ONE_INVOICE_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoicestatus.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteInvoiceStatusService.deleteOneInvoiceStatus ) 
});


InvoiceController.post(Endpoints.ENDPOINT_INVOICE_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoiceitem.create.v1"
    Commons.executeController(request, response, apiID, CreateInvoiceItemService.createOneInvoiceItem ) 
}); 

InvoiceController.post(Endpoints.ENDPOINT_INVOICE_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoiceitem.read.v1"
    Commons.executeController(request, response, apiID, ReadInvoiceItemService.readInvoiceItems ) 
});

InvoiceController.get(Endpoints.ENDPOINT_ONE_INVOICE_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoiceitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneInvoiceItemService.readOneInvoiceItem ) 
});

InvoiceController.post(Endpoints.ENDPOINT_INVOICE_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoiceitem.count.v1"
    Commons.executeController(request, response, apiID, CountInvoiceItemService.readInvoiceItemCount ) 
});

InvoiceController.patch(Endpoints.ENDPOINT_INVOICE_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoiceitem.update.v1"
    Commons.executeController(request, response, apiID, UpdateInvoiceItemService.updateInvoiceItem ) 
});

InvoiceController.delete(Endpoints.ENDPOINT_ONE_INVOICE_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoiceitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteInvoiceItemService.deleteOneInvoiceItem ) 
});


InvoiceController.post(Endpoints.ENDPOINT_INVOICE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoice.create.v1"
    Commons.executeController(request, response, apiID, CreateInvoiceService.createOneInvoice ) 
}); 

InvoiceController.post(Endpoints.ENDPOINT_INVOICES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoice.read.v1"
    Commons.executeController(request, response, apiID, ReadInvoiceService.readInvoices ) 
});

InvoiceController.get(Endpoints.ENDPOINT_ONE_INVOICE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoice.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneInvoiceService.readOneInvoice ) 
});

InvoiceController.post(Endpoints.ENDPOINT_INVOICES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoice.count.v1"
    Commons.executeController(request, response, apiID, CountInvoiceService.readInvoiceCount ) 
});

InvoiceController.patch(Endpoints.ENDPOINT_INVOICES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoice.update.v1"
    Commons.executeController(request, response, apiID, UpdateInvoiceService.updateInvoice ) 
});

InvoiceController.delete(Endpoints.ENDPOINT_ONE_INVOICE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.invoice.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteInvoiceService.deleteOneInvoice ) 
});



module.exports = InvoiceController;
