/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all store module api
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
const createStoreTypeService = require("../../services/store/create.storetype.service");
const readStoreTypeService = require("../../services/store/read.storetype.service");
const readoneStoreTypeService = require("../../services/store/read.storetype.service");
const countStoreTypeService = require("../../services/store/read.storetype.service");
const updateStoreTypeService = require("../../services/store/update.storetype.service");
const deleteStoreTypeService = require("../../services/store/delete.storetype.service");
const createStoreService = require("../../services/store/create.store.service");
const readStoreService = require("../../services/store/read.store.service");
const readoneStoreService = require("../../services/store/read.store.service");
const countStoreService = require("../../services/store/read.store.service");
const updateStoreService = require("../../services/store/update.store.service");
const deleteStoreService = require("../../services/store/delete.store.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateStoreTypeService = new createStoreTypeService();
const ReadStoreTypeService = new readStoreTypeService();
const ReadoneStoreTypeService = new readoneStoreTypeService();
const CountStoreTypeService = new countStoreTypeService();
const UpdateStoreTypeService = new updateStoreTypeService();
const DeleteStoreTypeService = new deleteStoreTypeService();
const CreateStoreService = new createStoreService();
const ReadStoreService = new readStoreService();
const ReadoneStoreService = new readoneStoreService();
const CountStoreService = new countStoreService();
const UpdateStoreService = new updateStoreService();
const DeleteStoreService = new deleteStoreService();


/**
 * Initializing the controller object
 */
const StoreController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

StoreController.post(Endpoints.ENDPOINT_STORE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.storetype.create.v1"
    Commons.executeController(request, response, apiID, CreateStoreTypeService.createOneStoreType ) 
}); 

StoreController.post(Endpoints.ENDPOINT_STORE_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.storetype.read.v1"
    Commons.executeController(request, response, apiID, ReadStoreTypeService.readStoreTypes ) 
});

StoreController.get(Endpoints.ENDPOINT_ONE_STORE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.storetype.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneStoreTypeService.readOneStoreType ) 
});

StoreController.post(Endpoints.ENDPOINT_STORE_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.storetype.count.v1"
    Commons.executeController(request, response, apiID, CountStoreTypeService.readStoreTypeCount ) 
});

StoreController.patch(Endpoints.ENDPOINT_STORE_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.storetype.update.v1"
    Commons.executeController(request, response, apiID, UpdateStoreTypeService.updateStoreType ) 
});

StoreController.delete(Endpoints.ENDPOINT_ONE_STORE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.storetype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteStoreTypeService.deleteOneStoreType ) 
});


StoreController.post(Endpoints.ENDPOINT_STORE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.store.create.v1"
    Commons.executeController(request, response, apiID, CreateStoreService.createOneStore ) 
}); 

StoreController.post(Endpoints.ENDPOINT_STORES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.store.read.v1"
    Commons.executeController(request, response, apiID, ReadStoreService.readStores ) 
});

StoreController.get(Endpoints.ENDPOINT_ONE_STORE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.store.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneStoreService.readOneStore ) 
});

StoreController.post(Endpoints.ENDPOINT_STORES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.store.count.v1"
    Commons.executeController(request, response, apiID, CountStoreService.readStoreCount ) 
});

StoreController.patch(Endpoints.ENDPOINT_STORES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.store.update.v1"
    Commons.executeController(request, response, apiID, UpdateStoreService.updateStore ) 
});

StoreController.delete(Endpoints.ENDPOINT_ONE_STORE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.store.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteStoreService.deleteOneStore ) 
});



module.exports = StoreController;
