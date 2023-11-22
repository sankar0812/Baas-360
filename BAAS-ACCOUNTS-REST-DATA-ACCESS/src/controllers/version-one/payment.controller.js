/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all payment module api
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
const createPaymentStatusService = require("../../services/payment/create.paymentstatus.service");
const readPaymentStatusService = require("../../services/payment/read.paymentstatus.service");
const readonePaymentStatusService = require("../../services/payment/read.paymentstatus.service");
const countPaymentStatusService = require("../../services/payment/read.paymentstatus.service");
const updatePaymentStatusService = require("../../services/payment/update.paymentstatus.service");
const deletePaymentStatusService = require("../../services/payment/delete.paymentstatus.service");
const createPaymentMethodService = require("../../services/payment/create.paymentmethod.service");
const readPaymentMethodService = require("../../services/payment/read.paymentmethod.service");
const readonePaymentMethodService = require("../../services/payment/read.paymentmethod.service");
const countPaymentMethodService = require("../../services/payment/read.paymentmethod.service");
const updatePaymentMethodService = require("../../services/payment/update.paymentmethod.service");
const deletePaymentMethodService = require("../../services/payment/delete.paymentmethod.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreatePaymentStatusService = new createPaymentStatusService();
const ReadPaymentStatusService = new readPaymentStatusService();
const ReadonePaymentStatusService = new readonePaymentStatusService();
const CountPaymentStatusService = new countPaymentStatusService();
const UpdatePaymentStatusService = new updatePaymentStatusService();
const DeletePaymentStatusService = new deletePaymentStatusService();
const CreatePaymentMethodService = new createPaymentMethodService();
const ReadPaymentMethodService = new readPaymentMethodService();
const ReadonePaymentMethodService = new readonePaymentMethodService();
const CountPaymentMethodService = new countPaymentMethodService();
const UpdatePaymentMethodService = new updatePaymentMethodService();
const DeletePaymentMethodService = new deletePaymentMethodService();


/**
 * Initializing the controller object
 */
const PaymentController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

PaymentController.post(Endpoints.ENDPOINT_PAYMENT_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentstatus.create.v1"
    Commons.executeController(request, response, apiID, CreatePaymentStatusService.createOnePaymentStatus ) 
}); 

PaymentController.post(Endpoints.ENDPOINT_PAYMENT_STATUSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentstatus.read.v1"
    Commons.executeController(request, response, apiID, ReadPaymentStatusService.readPaymentStatuses ) 
});

PaymentController.get(Endpoints.ENDPOINT_ONE_PAYMENT_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentstatus.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePaymentStatusService.readOnePaymentStatus ) 
});

PaymentController.post(Endpoints.ENDPOINT_PAYMENT_STATUSES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentstatus.count.v1"
    Commons.executeController(request, response, apiID, CountPaymentStatusService.readPaymentStatusCount ) 
});

PaymentController.patch(Endpoints.ENDPOINT_PAYMENT_STATUSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentstatus.update.v1"
    Commons.executeController(request, response, apiID, UpdatePaymentStatusService.updatePaymentStatus ) 
});

PaymentController.delete(Endpoints.ENDPOINT_ONE_PAYMENT_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentstatus.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePaymentStatusService.deleteOnePaymentStatus ) 
});


PaymentController.post(Endpoints.ENDPOINT_PAYMENT_METHOD, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentmethod.create.v1"
    Commons.executeController(request, response, apiID, CreatePaymentMethodService.createOnePaymentMethod ) 
}); 

PaymentController.post(Endpoints.ENDPOINT_PAYMENT_METHODS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentmethod.read.v1"
    Commons.executeController(request, response, apiID, ReadPaymentMethodService.readPaymentMethods ) 
});

PaymentController.get(Endpoints.ENDPOINT_ONE_PAYMENT_METHOD, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentmethod.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePaymentMethodService.readOnePaymentMethod ) 
});

PaymentController.post(Endpoints.ENDPOINT_PAYMENT_METHODS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentmethod.count.v1"
    Commons.executeController(request, response, apiID, CountPaymentMethodService.readPaymentMethodCount ) 
});

PaymentController.patch(Endpoints.ENDPOINT_PAYMENT_METHODS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentmethod.update.v1"
    Commons.executeController(request, response, apiID, UpdatePaymentMethodService.updatePaymentMethod ) 
});

PaymentController.delete(Endpoints.ENDPOINT_ONE_PAYMENT_METHOD, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.paymentmethod.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePaymentMethodService.deleteOnePaymentMethod ) 
});



module.exports = PaymentController;
