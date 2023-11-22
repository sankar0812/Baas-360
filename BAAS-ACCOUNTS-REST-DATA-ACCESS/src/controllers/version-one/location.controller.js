/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all location module api
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
const createLocationService = require("../../services/location/create.location.service");
const readLocationService = require("../../services/location/read.location.service");
const readoneLocationService = require("../../services/location/read.location.service");
const countLocationService = require("../../services/location/read.location.service");
const updateLocationService = require("../../services/location/update.location.service");
const deleteLocationService = require("../../services/location/delete.location.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateLocationService = new createLocationService();
const ReadLocationService = new readLocationService();
const ReadoneLocationService = new readoneLocationService();
const CountLocationService = new countLocationService();
const UpdateLocationService = new updateLocationService();
const DeleteLocationService = new deleteLocationService();


/**
 * Initializing the controller object
 */
const LocationController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

LocationController.post(Endpoints.ENDPOINT_LOCATION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.location.create.v1"
    Commons.executeController(request, response, apiID, CreateLocationService.createOneLocation ) 
}); 

LocationController.post(Endpoints.ENDPOINT_LOCATIONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.location.read.v1"
    Commons.executeController(request, response, apiID, ReadLocationService.readLocations ) 
});

LocationController.get(Endpoints.ENDPOINT_ONE_LOCATION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.location.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneLocationService.readOneLocation ) 
});

LocationController.post(Endpoints.ENDPOINT_LOCATIONS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.location.count.v1"
    Commons.executeController(request, response, apiID, CountLocationService.readLocationCount ) 
});

LocationController.patch(Endpoints.ENDPOINT_LOCATIONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.location.update.v1"
    Commons.executeController(request, response, apiID, UpdateLocationService.updateLocation ) 
});

LocationController.delete(Endpoints.ENDPOINT_ONE_LOCATION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.location.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteLocationService.deleteOneLocation ) 
});



module.exports = LocationController;
