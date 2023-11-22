/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 24 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 24 2023
* Description  : This file contains the all api endpoint to function mapping for all price module
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
const addPriceListCoreRule = require("../../../src/rules/pricelist/add/core.rule")
const getPriceListCoreRule = require("../../../src/rules/pricelist/getpricelist/core.rule")
const changePriceListCoreRule = require("../../rules/pricelist/change/core.rule")
const statusChangeRuleCore = require("../../rules/pricelist/statuschange/core.rule")
const addProductCoreRule = require("../../rules/pricelist/addproduct/core.rule")
const removeProductCoreRule = require("../../rules/pricelist/removeproduct/core.rule")



/* Initializing objects for all the rule classes */
const AddPriceListCoreRule = new addPriceListCoreRule();
const GetPriceListCoreRule = new getPriceListCoreRule();
const ChangePriceListCoreRule = new changePriceListCoreRule();
const StatusChangeRuleCore = new statusChangeRuleCore();
const AddProductCoreRule = new addProductCoreRule();
const RemoveProductCoreRule = new removeProductCoreRule();


/**
 * Initializing the controller object
 */
const PriceController = express.Router();


/* Creating all the API endpoint to function mapping */

PriceController.post(Endpoints.ENDPOINT_API_ADD_PRICE_LIST, async (request, response) => {
    const apiID = "accounts.api.rest.business.pricelist.add.v1"
    Commons.executeController(request, response, apiID, AddPriceListCoreRule.addPriceList)
});

PriceController.post(Endpoints.ENDPOINT_API_GET_PRICE_LIST_ITEMS, async (request, response) => {
    const apiID = "accounts.api.rest.business.pricelist.getpricelistitems.v1"
    Commons.executeController(request, response, apiID, GetPriceListCoreRule.getPriceList)
});

PriceController.patch(Endpoints.ENDPOINT_API_CHANGE_PRICE_LIST, async (request, response) => {
    const apiID = "accounts.api.rest.business.pricelist.change.v1"
    Commons.executeController(request, response, apiID, ChangePriceListCoreRule.changePriceListCore)
});

PriceController.patch(Endpoints.ENDPOINT_API_PRICELIST_STATUS_CHANGE, async (request, response) => {
    const apiID = "accounts.api.rest.business.pricelist.statuschange.v1"
    Commons.executeController(request, response, apiID, StatusChangeRuleCore.statusChangeCore)
});

PriceController.post(Endpoints.ENDPOINT_API_PRICELIST_ADD_PRODUCT, async (request, response) => {
    const apiID = "accounts.api.rest.business.pricelist.addproduct.v1"
    Commons.executeController(request, response, apiID, AddProductCoreRule.addProductCore)
});

PriceController.patch(Endpoints.ENDPOINT_API_PRICELIST_REMOVE_PRODUCT, async (request, response) => {
    const apiID = "accounts.api.rest.business.pricelist.removeproduct.v1"
    Commons.executeController(request, response, apiID, RemoveProductCoreRule.removeProductCore)
});

module.exports = PriceController;
