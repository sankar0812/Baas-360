/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all package module api
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
const createPackageTypeService = require("../../services/package/create.packagetype.service");
const readPackageTypeService = require("../../services/package/read.packagetype.service");
const readonePackageTypeService = require("../../services/package/read.packagetype.service");
const countPackageTypeService = require("../../services/package/read.packagetype.service");
const updatePackageTypeService = require("../../services/package/update.packagetype.service");
const deletePackageTypeService = require("../../services/package/delete.packagetype.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreatePackageTypeService = new createPackageTypeService();
const ReadPackageTypeService = new readPackageTypeService();
const ReadonePackageTypeService = new readonePackageTypeService();
const CountPackageTypeService = new countPackageTypeService();
const UpdatePackageTypeService = new updatePackageTypeService();
const DeletePackageTypeService = new deletePackageTypeService();


/**
 * Initializing the controller object
 */
const PackageController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

PackageController.post(Endpoints.ENDPOINT_PACKAGE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.packagetype.create.v1"
    Commons.executeController(request, response, apiID, CreatePackageTypeService.createOnePackageType ) 
}); 

PackageController.post(Endpoints.ENDPOINT_PACKAGE_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.packagetype.read.v1"
    Commons.executeController(request, response, apiID, ReadPackageTypeService.readPackageTypes ) 
});

PackageController.get(Endpoints.ENDPOINT_ONE_PACKAGE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.packagetype.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePackageTypeService.readOnePackageType ) 
});

PackageController.post(Endpoints.ENDPOINT_PACKAGE_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.packagetype.count.v1"
    Commons.executeController(request, response, apiID, CountPackageTypeService.readPackageTypeCount ) 
});

PackageController.patch(Endpoints.ENDPOINT_PACKAGE_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.packagetype.update.v1"
    Commons.executeController(request, response, apiID, UpdatePackageTypeService.updatePackageType ) 
});

PackageController.delete(Endpoints.ENDPOINT_ONE_PACKAGE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.packagetype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePackageTypeService.deleteOnePackageType ) 
});



module.exports = PackageController;
