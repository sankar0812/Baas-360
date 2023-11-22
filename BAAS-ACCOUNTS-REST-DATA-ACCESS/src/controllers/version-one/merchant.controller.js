/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all merchant module api
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
const createMerchantService = require("../../services/merchant/create.merchant.service");
const readMerchantService = require("../../services/merchant/read.merchant.service");
const readoneMerchantService = require("../../services/merchant/read.merchant.service");
const countMerchantService = require("../../services/merchant/read.merchant.service");
const updateMerchantService = require("../../services/merchant/update.merchant.service");
const deleteMerchantService = require("../../services/merchant/delete.merchant.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateMerchantService = new createMerchantService();
const ReadMerchantService = new readMerchantService();
const ReadoneMerchantService = new readoneMerchantService();
const CountMerchantService = new countMerchantService();
const UpdateMerchantService = new updateMerchantService();
const DeleteMerchantService = new deleteMerchantService();


/**
 * Initializing the controller object
 */
const MerchantController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

MerchantController.post(Endpoints.ENDPOINT_MERCHANT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.merchant.create.v1"
    Commons.executeController(request, response, apiID, CreateMerchantService.createOneMerchant ) 
}); 

MerchantController.post(Endpoints.ENDPOINT_MERCHANTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.merchant.read.v1"
    Commons.executeController(request, response, apiID, ReadMerchantService.readMerchants ) 
});

MerchantController.get(Endpoints.ENDPOINT_ONE_MERCHANT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.merchant.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneMerchantService.readOneMerchant ) 
});

MerchantController.post(Endpoints.ENDPOINT_MERCHANTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.merchant.count.v1"
    Commons.executeController(request, response, apiID, CountMerchantService.readMerchantCount ) 
});

MerchantController.patch(Endpoints.ENDPOINT_MERCHANTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.merchant.update.v1"
    Commons.executeController(request, response, apiID, UpdateMerchantService.updateMerchant ) 
});

MerchantController.delete(Endpoints.ENDPOINT_ONE_MERCHANT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.merchant.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteMerchantService.deleteOneMerchant ) 
});



module.exports = MerchantController;
