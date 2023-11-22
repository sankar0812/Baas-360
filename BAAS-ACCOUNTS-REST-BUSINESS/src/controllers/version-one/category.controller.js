/**
* CreatedBy    : RaviBalan
* CreatedTime  : NOV 08 2023
* ModifiedBy   : RaviBalan 
* ModifiedTime : NOV 08 2023
* Description  : This file contains the all api endpoint to function mapping for all category module
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

const addCategoryCoreRule = require("../../rules/category/add/core.rule")
const changeCategoryCoreRule = require("../../rules/category/change/core.rule")
const addRootCategoryCoreRule = require("../../rules/category/addrootcategory/core.rule")




/* Initializing objects for all the rule classes */

const AddCategoryCoreRule = new addCategoryCoreRule();
const ChangeCategoryCoreRule  = new changeCategoryCoreRule ();
const AddRootCategoryCoreRule = new addRootCategoryCoreRule ();


/**
 * Initializing the controller object
 */
const CategoryController = express.Router();


/* Creating all the API endpoint to function mapping */

CategoryController.post(Endpoints.ENDPOINT_API_ADD_CATEGORY, async (request, response) => {
    const apiID = "accounts.api.rest.business.category.add.v1"
    Commons.executeController(request, response, apiID, AddCategoryCoreRule.coreAddCategory)
});

CategoryController.post(Endpoints.ENDPOINT_API_CHANGE_CATEGORY, async (request, response) => {
    const apiID = "accounts.api.rest.business.category.change.v1"
    Commons.executeController(request, response, apiID, ChangeCategoryCoreRule.coreChangeCategory)
});

CategoryController.post(Endpoints.ENDPOINT_API_ADD_ROOT_CATEGORY, async (request, response) => {
    const apiID = "accounts.api.rest.business.category.addrootcategory.v1"
    Commons.executeController(request, response, apiID, AddRootCategoryCoreRule.coreAddRootCategory)
});




module.exports = CategoryController;
