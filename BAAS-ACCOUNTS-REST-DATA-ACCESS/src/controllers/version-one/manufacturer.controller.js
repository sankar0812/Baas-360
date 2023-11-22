/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all manufacturer module api
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
const createManufacturerService = require("../../services/manufacturer/create.manufacturer.service");
const readManufacturerService = require("../../services/manufacturer/read.manufacturer.service");
const readoneManufacturerService = require("../../services/manufacturer/read.manufacturer.service");
const countManufacturerService = require("../../services/manufacturer/read.manufacturer.service");
const updateManufacturerService = require("../../services/manufacturer/update.manufacturer.service");
const deleteManufacturerService = require("../../services/manufacturer/delete.manufacturer.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateManufacturerService = new createManufacturerService();
const ReadManufacturerService = new readManufacturerService();
const ReadoneManufacturerService = new readoneManufacturerService();
const CountManufacturerService = new countManufacturerService();
const UpdateManufacturerService = new updateManufacturerService();
const DeleteManufacturerService = new deleteManufacturerService();


/**
 * Initializing the controller object
 */
const ManufacturerController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

ManufacturerController.post(Endpoints.ENDPOINT_MANUFACTURER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.manufacturer.create.v1"
    Commons.executeController(request, response, apiID, CreateManufacturerService.createOneManufacturer ) 
}); 

ManufacturerController.post(Endpoints.ENDPOINT_MANUFACTURERS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.manufacturer.read.v1"
    Commons.executeController(request, response, apiID, ReadManufacturerService.readManufacturers ) 
});

ManufacturerController.get(Endpoints.ENDPOINT_ONE_MANUFACTURER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.manufacturer.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneManufacturerService.readOneManufacturer ) 
});

ManufacturerController.post(Endpoints.ENDPOINT_MANUFACTURERS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.manufacturer.count.v1"
    Commons.executeController(request, response, apiID, CountManufacturerService.readManufacturerCount ) 
});

ManufacturerController.patch(Endpoints.ENDPOINT_MANUFACTURERS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.manufacturer.update.v1"
    Commons.executeController(request, response, apiID, UpdateManufacturerService.updateManufacturer ) 
});

ManufacturerController.delete(Endpoints.ENDPOINT_ONE_MANUFACTURER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.manufacturer.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteManufacturerService.deleteOneManufacturer ) 
});



module.exports = ManufacturerController;
