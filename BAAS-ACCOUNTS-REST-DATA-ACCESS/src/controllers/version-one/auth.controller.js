/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all auth module api
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
const createAuthService = require("../../services/auth/create.auth.service");
const readAuthService = require("../../services/auth/read.auth.service");
const readoneAuthService = require("../../services/auth/read.auth.service");
const countAuthService = require("../../services/auth/read.auth.service");
const updateAuthService = require("../../services/auth/update.auth.service");
const deleteAuthService = require("../../services/auth/delete.auth.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateAuthService = new createAuthService();
const ReadAuthService = new readAuthService();
const ReadoneAuthService = new readoneAuthService();
const CountAuthService = new countAuthService();
const UpdateAuthService = new updateAuthService();
const DeleteAuthService = new deleteAuthService();


/**
 * Initializing the controller object
 */
const AuthController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

AuthController.post(Endpoints.ENDPOINT_AUTH, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.auth.create.v1"
    Commons.executeController(request, response, apiID, CreateAuthService.createOneAuth ) 
}); 

AuthController.post(Endpoints.ENDPOINT_AUTHS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.auth.read.v1"
    Commons.executeController(request, response, apiID, ReadAuthService.readAuths ) 
});

AuthController.get(Endpoints.ENDPOINT_ONE_AUTH, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.auth.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAuthService.readOneAuth ) 
});

AuthController.post(Endpoints.ENDPOINT_AUTHS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.auth.count.v1"
    Commons.executeController(request, response, apiID, CountAuthService.readAuthCount ) 
});

AuthController.patch(Endpoints.ENDPOINT_AUTHS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.auth.update.v1"
    Commons.executeController(request, response, apiID, UpdateAuthService.updateAuth ) 
});

AuthController.delete(Endpoints.ENDPOINT_ONE_AUTH, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.auth.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAuthService.deleteOneAuth ) 
});



module.exports = AuthController;
