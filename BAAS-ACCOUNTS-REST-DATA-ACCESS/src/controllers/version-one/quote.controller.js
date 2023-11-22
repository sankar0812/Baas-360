/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all quote module api
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
const createQuoteItemService = require("../../services/quote/create.quoteitem.service");
const readQuoteItemService = require("../../services/quote/read.quoteitem.service");
const readoneQuoteItemService = require("../../services/quote/read.quoteitem.service");
const countQuoteItemService = require("../../services/quote/read.quoteitem.service");
const updateQuoteItemService = require("../../services/quote/update.quoteitem.service");
const deleteQuoteItemService = require("../../services/quote/delete.quoteitem.service");
const createQuoteService = require("../../services/quote/create.quote.service");
const readQuoteService = require("../../services/quote/read.quote.service");
const readoneQuoteService = require("../../services/quote/read.quote.service");
const countQuoteService = require("../../services/quote/read.quote.service");
const updateQuoteService = require("../../services/quote/update.quote.service");
const deleteQuoteService = require("../../services/quote/delete.quote.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateQuoteItemService = new createQuoteItemService();
const ReadQuoteItemService = new readQuoteItemService();
const ReadoneQuoteItemService = new readoneQuoteItemService();
const CountQuoteItemService = new countQuoteItemService();
const UpdateQuoteItemService = new updateQuoteItemService();
const DeleteQuoteItemService = new deleteQuoteItemService();
const CreateQuoteService = new createQuoteService();
const ReadQuoteService = new readQuoteService();
const ReadoneQuoteService = new readoneQuoteService();
const CountQuoteService = new countQuoteService();
const UpdateQuoteService = new updateQuoteService();
const DeleteQuoteService = new deleteQuoteService();


/**
 * Initializing the controller object
 */
const QuoteController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

QuoteController.post(Endpoints.ENDPOINT_QUOTE_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quoteitem.create.v1"
    Commons.executeController(request, response, apiID, CreateQuoteItemService.createOneQuoteItem ) 
}); 

QuoteController.post(Endpoints.ENDPOINT_QUOTE_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quoteitem.read.v1"
    Commons.executeController(request, response, apiID, ReadQuoteItemService.readQuoteItems ) 
});

QuoteController.get(Endpoints.ENDPOINT_ONE_QUOTE_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quoteitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneQuoteItemService.readOneQuoteItem ) 
});

QuoteController.post(Endpoints.ENDPOINT_QUOTE_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quoteitem.count.v1"
    Commons.executeController(request, response, apiID, CountQuoteItemService.readQuoteItemCount ) 
});

QuoteController.patch(Endpoints.ENDPOINT_QUOTE_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quoteitem.update.v1"
    Commons.executeController(request, response, apiID, UpdateQuoteItemService.updateQuoteItem ) 
});

QuoteController.delete(Endpoints.ENDPOINT_ONE_QUOTE_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quoteitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteQuoteItemService.deleteOneQuoteItem ) 
});


QuoteController.post(Endpoints.ENDPOINT_QUOTE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quote.create.v1"
    Commons.executeController(request, response, apiID, CreateQuoteService.createOneQuote ) 
}); 

QuoteController.post(Endpoints.ENDPOINT_QUOTES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quote.read.v1"
    Commons.executeController(request, response, apiID, ReadQuoteService.readQuotes ) 
});

QuoteController.get(Endpoints.ENDPOINT_ONE_QUOTE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quote.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneQuoteService.readOneQuote ) 
});

QuoteController.post(Endpoints.ENDPOINT_QUOTES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quote.count.v1"
    Commons.executeController(request, response, apiID, CountQuoteService.readQuoteCount ) 
});

QuoteController.patch(Endpoints.ENDPOINT_QUOTES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quote.update.v1"
    Commons.executeController(request, response, apiID, UpdateQuoteService.updateQuote ) 
});

QuoteController.delete(Endpoints.ENDPOINT_ONE_QUOTE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.quote.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteQuoteService.deleteOneQuote ) 
});



module.exports = QuoteController;
