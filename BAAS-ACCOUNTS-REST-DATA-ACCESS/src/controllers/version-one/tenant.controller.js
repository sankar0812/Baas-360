/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all tenant module api
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
const createTenantService = require("../../services/tenant/create.tenant.service");
const readTenantService = require("../../services/tenant/read.tenant.service");
const readoneTenantService = require("../../services/tenant/read.tenant.service");
const countTenantService = require("../../services/tenant/read.tenant.service");
const updateTenantService = require("../../services/tenant/update.tenant.service");
const deleteTenantService = require("../../services/tenant/delete.tenant.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateTenantService = new createTenantService();
const ReadTenantService = new readTenantService();
const ReadoneTenantService = new readoneTenantService();
const CountTenantService = new countTenantService();
const UpdateTenantService = new updateTenantService();
const DeleteTenantService = new deleteTenantService();


/**
 * Initializing the controller object
 */
const TenantController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

TenantController.post(Endpoints.ENDPOINT_TENANT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenant.create.v1"
    Commons.executeController(request, response, apiID, CreateTenantService.createOneTenant ) 
}); 

TenantController.post(Endpoints.ENDPOINT_TENANTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenant.read.v1"
    Commons.executeController(request, response, apiID, ReadTenantService.readTenants ) 
});

TenantController.get(Endpoints.ENDPOINT_ONE_TENANT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenant.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneTenantService.readOneTenant ) 
});

TenantController.post(Endpoints.ENDPOINT_TENANTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenant.count.v1"
    Commons.executeController(request, response, apiID, CountTenantService.readTenantCount ) 
});

TenantController.patch(Endpoints.ENDPOINT_TENANTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenant.update.v1"
    Commons.executeController(request, response, apiID, UpdateTenantService.updateTenant ) 
});

TenantController.delete(Endpoints.ENDPOINT_ONE_TENANT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenant.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteTenantService.deleteOneTenant ) 
});



module.exports = TenantController;
