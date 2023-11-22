/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all role module api
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
const createRoleService = require("../../services/role/create.role.service");
const readRoleService = require("../../services/role/read.role.service");
const readoneRoleService = require("../../services/role/read.role.service");
const countRoleService = require("../../services/role/read.role.service");
const updateRoleService = require("../../services/role/update.role.service");
const deleteRoleService = require("../../services/role/delete.role.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateRoleService = new createRoleService();
const ReadRoleService = new readRoleService();
const ReadoneRoleService = new readoneRoleService();
const CountRoleService = new countRoleService();
const UpdateRoleService = new updateRoleService();
const DeleteRoleService = new deleteRoleService();


/**
 * Initializing the controller object
 */
const RoleController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

RoleController.post(Endpoints.ENDPOINT_ROLE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.role.create.v1"
    Commons.executeController(request, response, apiID, CreateRoleService.createOneRole ) 
}); 

RoleController.post(Endpoints.ENDPOINT_ROLES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.role.read.v1"
    Commons.executeController(request, response, apiID, ReadRoleService.readRoles ) 
});

RoleController.get(Endpoints.ENDPOINT_ONE_ROLE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.role.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneRoleService.readOneRole ) 
});

RoleController.post(Endpoints.ENDPOINT_ROLES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.role.count.v1"
    Commons.executeController(request, response, apiID, CountRoleService.readRoleCount ) 
});

RoleController.patch(Endpoints.ENDPOINT_ROLES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.role.update.v1"
    Commons.executeController(request, response, apiID, UpdateRoleService.updateRole ) 
});

RoleController.delete(Endpoints.ENDPOINT_ONE_ROLE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.role.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteRoleService.deleteOneRole ) 
});



module.exports = RoleController;
