/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all payroll module api
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
const createPayrollBatchItemService = require("../../services/payroll/create.payrollbatchitem.service");
const readPayrollBatchItemService = require("../../services/payroll/read.payrollbatchitem.service");
const readonePayrollBatchItemService = require("../../services/payroll/read.payrollbatchitem.service");
const countPayrollBatchItemService = require("../../services/payroll/read.payrollbatchitem.service");
const updatePayrollBatchItemService = require("../../services/payroll/update.payrollbatchitem.service");
const deletePayrollBatchItemService = require("../../services/payroll/delete.payrollbatchitem.service");
const createPayrollBatchService = require("../../services/payroll/create.payrollbatch.service");
const readPayrollBatchService = require("../../services/payroll/read.payrollbatch.service");
const readonePayrollBatchService = require("../../services/payroll/read.payrollbatch.service");
const countPayrollBatchService = require("../../services/payroll/read.payrollbatch.service");
const updatePayrollBatchService = require("../../services/payroll/update.payrollbatch.service");
const deletePayrollBatchService = require("../../services/payroll/delete.payrollbatch.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreatePayrollBatchItemService = new createPayrollBatchItemService();
const ReadPayrollBatchItemService = new readPayrollBatchItemService();
const ReadonePayrollBatchItemService = new readonePayrollBatchItemService();
const CountPayrollBatchItemService = new countPayrollBatchItemService();
const UpdatePayrollBatchItemService = new updatePayrollBatchItemService();
const DeletePayrollBatchItemService = new deletePayrollBatchItemService();
const CreatePayrollBatchService = new createPayrollBatchService();
const ReadPayrollBatchService = new readPayrollBatchService();
const ReadonePayrollBatchService = new readonePayrollBatchService();
const CountPayrollBatchService = new countPayrollBatchService();
const UpdatePayrollBatchService = new updatePayrollBatchService();
const DeletePayrollBatchService = new deletePayrollBatchService();


/**
 * Initializing the controller object
 */
const PayRollController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

PayRollController.post(Endpoints.ENDPOINT_PAYROLL_BATCH_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatchitem.create.v1"
    Commons.executeController(request, response, apiID, CreatePayrollBatchItemService.createOnePayrollBatchItem ) 
}); 

PayRollController.post(Endpoints.ENDPOINT_PAYROLL_BATCH_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatchitem.read.v1"
    Commons.executeController(request, response, apiID, ReadPayrollBatchItemService.readPayrollBatchItems ) 
});

PayRollController.get(Endpoints.ENDPOINT_ONE_PAYROLL_BATCH_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatchitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePayrollBatchItemService.readOnePayrollBatchItem ) 
});

PayRollController.post(Endpoints.ENDPOINT_PAYROLL_BATCH_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatchitem.count.v1"
    Commons.executeController(request, response, apiID, CountPayrollBatchItemService.readPayrollBatchItemCount ) 
});

PayRollController.patch(Endpoints.ENDPOINT_PAYROLL_BATCH_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatchitem.update.v1"
    Commons.executeController(request, response, apiID, UpdatePayrollBatchItemService.updatePayrollBatchItem ) 
});

PayRollController.delete(Endpoints.ENDPOINT_ONE_PAYROLL_BATCH_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatchitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePayrollBatchItemService.deleteOnePayrollBatchItem ) 
});


PayRollController.post(Endpoints.ENDPOINT_PAYROLL_BATCH, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatch.create.v1"
    Commons.executeController(request, response, apiID, CreatePayrollBatchService.createOnePayrollBatch ) 
}); 

PayRollController.post(Endpoints.ENDPOINT_PAYROLL_BATCHS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatch.read.v1"
    Commons.executeController(request, response, apiID, ReadPayrollBatchService.readPayrollBatchs ) 
});

PayRollController.get(Endpoints.ENDPOINT_ONE_PAYROLL_BATCH, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatch.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePayrollBatchService.readOnePayrollBatch ) 
});

PayRollController.post(Endpoints.ENDPOINT_PAYROLL_BATCHS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatch.count.v1"
    Commons.executeController(request, response, apiID, CountPayrollBatchService.readPayrollBatchCount ) 
});

PayRollController.patch(Endpoints.ENDPOINT_PAYROLL_BATCHS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatch.update.v1"
    Commons.executeController(request, response, apiID, UpdatePayrollBatchService.updatePayrollBatch ) 
});

PayRollController.delete(Endpoints.ENDPOINT_ONE_PAYROLL_BATCH, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.payrollbatch.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePayrollBatchService.deleteOnePayrollBatch ) 
});



module.exports = PayRollController;
