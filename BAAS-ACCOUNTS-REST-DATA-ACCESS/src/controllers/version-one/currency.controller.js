/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all currency module api
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
const createCurrencyService = require("../../services/currency/create.currency.service");
const readCurrencyService = require("../../services/currency/read.currency.service");
const readoneCurrencyService = require("../../services/currency/read.currency.service");
const countCurrencyService = require("../../services/currency/read.currency.service");
const updateCurrencyService = require("../../services/currency/update.currency.service");
const deleteCurrencyService = require("../../services/currency/delete.currency.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateCurrencyService = new createCurrencyService();
const ReadCurrencyService = new readCurrencyService();
const ReadoneCurrencyService = new readoneCurrencyService();
const CountCurrencyService = new countCurrencyService();
const UpdateCurrencyService = new updateCurrencyService();
const DeleteCurrencyService = new deleteCurrencyService();


/**
 * Initializing the controller object
 */
const CurrencyController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

CurrencyController.post(Endpoints.ENDPOINT_CURRENCY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.currency.create.v1"
    Commons.executeController(request, response, apiID, CreateCurrencyService.createOneCurrency ) 
}); 

CurrencyController.post(Endpoints.ENDPOINT_CURRENCYS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.currency.read.v1"
    Commons.executeController(request, response, apiID, ReadCurrencyService.readCurrencys ) 
});

CurrencyController.get(Endpoints.ENDPOINT_ONE_CURRENCY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.currency.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCurrencyService.readOneCurrency ) 
});

CurrencyController.post(Endpoints.ENDPOINT_CURRENCYS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.currency.count.v1"
    Commons.executeController(request, response, apiID, CountCurrencyService.readCurrencyCount ) 
});

CurrencyController.patch(Endpoints.ENDPOINT_CURRENCYS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.currency.update.v1"
    Commons.executeController(request, response, apiID, UpdateCurrencyService.updateCurrency ) 
});

CurrencyController.delete(Endpoints.ENDPOINT_ONE_CURRENCY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.currency.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCurrencyService.deleteOneCurrency ) 
});



module.exports = CurrencyController;
