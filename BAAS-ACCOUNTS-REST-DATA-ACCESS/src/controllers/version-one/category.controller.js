/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all category module api
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
const createCategoryService = require("../../services/category/create.category.service");
const readCategoryService = require("../../services/category/read.category.service");
const readoneCategoryService = require("../../services/category/read.category.service");
const countCategoryService = require("../../services/category/read.category.service");
const updateCategoryService = require("../../services/category/update.category.service");
const deleteCategoryService = require("../../services/category/delete.category.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateCategoryService = new createCategoryService();
const ReadCategoryService = new readCategoryService();
const ReadoneCategoryService = new readoneCategoryService();
const CountCategoryService = new countCategoryService();
const UpdateCategoryService = new updateCategoryService();
const DeleteCategoryService = new deleteCategoryService();


/**
 * Initializing the controller object
 */
const CategoryController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

CategoryController.post(Endpoints.ENDPOINT_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.category.create.v1"
    Commons.executeController(request, response, apiID, CreateCategoryService.createOneCategory ) 
}); 

CategoryController.post(Endpoints.ENDPOINT_CATEGORYS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.category.read.v1"
    Commons.executeController(request, response, apiID, ReadCategoryService.readCategorys ) 
});

CategoryController.get(Endpoints.ENDPOINT_ONE_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.category.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCategoryService.readOneCategory ) 
});

CategoryController.post(Endpoints.ENDPOINT_CATEGORYS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.category.count.v1"
    Commons.executeController(request, response, apiID, CountCategoryService.readCategoryCount ) 
});

CategoryController.patch(Endpoints.ENDPOINT_CATEGORYS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.category.update.v1"
    Commons.executeController(request, response, apiID, UpdateCategoryService.updateCategory ) 
});

CategoryController.delete(Endpoints.ENDPOINT_ONE_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.category.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCategoryService.deleteOneCategory ) 
});



module.exports = CategoryController;
