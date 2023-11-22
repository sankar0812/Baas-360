/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 06 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 10 2023
* Description  : This file contains the all api endpoint to function mapping for all store module
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
const addCoreRule = require("../../rules/store/add/core.rule")
const changeCoreRule = require("../../rules/store/change/core.rule")
const addPriceListCoreRule = require("../../rules/store/addpricelist/core.rule")
const removePriceListCoreRule = require("../../rules/store/removepricelist/core.rule")
const changeEffectiveDate = require("../../rules/store/changeeffectivedate/core.rule")
const enableStoreCoreRule = require("../../rules/store/enable/core.enable.rule")



/* Initializing objects for all the rule classes */
const AddCoreRule = new addCoreRule()
const ChangeCoreRule = new changeCoreRule();
const AddPriceListCoreRule = new addPriceListCoreRule();
const RemovePriceListCoreRule = new removePriceListCoreRule();
const ChangeEffectiveDate = new changeEffectiveDate();
const EnableStoreCoreRule = new enableStoreCoreRule();

/**
 * Initializing the controller object
 */
const StoreController = express.Router();


/* Creating all the API endpoint to function mapping */

StoreController.post(Endpoints.ENDPOINT_API_ADD_STORE, async (request, response) => {
    const apiID = "accounts.api.rest.business.store.add.v1"
    Commons.executeController(request, response, apiID, AddCoreRule.coreAddStore)
});

StoreController.post(Endpoints.ENDPOINT_API_CHANGE_STORE, async (request, response) => {
    const apiID = "accounts.api.rest.business.store.change.v1"
    Commons.executeController(request, response, apiID, ChangeCoreRule.coreChangeStore)
});


StoreController.post(Endpoints.ENDPOINT_API_STORE_ADD_PRICELIST, async (request, response) => {
    const apiID = "accounts.api.rest.business.store.addpricelist.v1"
    Commons.executeController(request, response, apiID, AddPriceListCoreRule.coreAddPriceList)
})

StoreController.post(Endpoints.ENDPOINT_API_STORE_REMOVE_PRICELIST, async (request, response) => {
    const apiID = "accounts.api.rest.business.store.removepricelist.v1"
    Commons.executeController(request, response, apiID, RemovePriceListCoreRule.coreRemovePriceList)
})

StoreController.post(Endpoints.ENDPOINT_API_STORE_CHANGE_EFFECTIVE_DATE, async (request, response) => {
    const apiID = "accounts.api.rest.business.store.changeeffectivedate.v1"
    Commons.executeController(request, response, apiID, ChangeEffectiveDate.coreChangeEffectiveDate)
})

StoreController.patch(Endpoints.ENDPOINT_API_STORE_ENABLE, async (request, response) => {
    const apiID = "accounts.api.rest.business.store.enable.v1"
    Commons.executeController(request, response, apiID, EnableStoreCoreRule.enableCore)
})

module.exports = StoreController;
