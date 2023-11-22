/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all brand module api
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
const createBrandService = require("../../services/brand/create.brand.service");
const readBrandService = require("../../services/brand/read.brand.service");
const readoneBrandService = require("../../services/brand/read.brand.service");
const countBrandService = require("../../services/brand/read.brand.service");
const updateBrandService = require("../../services/brand/update.brand.service");
const deleteBrandService = require("../../services/brand/delete.brand.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateBrandService = new createBrandService();
const ReadBrandService = new readBrandService();
const ReadoneBrandService = new readoneBrandService();
const CountBrandService = new countBrandService();
const UpdateBrandService = new updateBrandService();
const DeleteBrandService = new deleteBrandService();


/**
 * Initializing the controller object
 */
const BrandController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

BrandController.post(Endpoints.ENDPOINT_BRAND, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.brand.create.v1"
    Commons.executeController(request, response, apiID, CreateBrandService.createOneBrand ) 
}); 

BrandController.post(Endpoints.ENDPOINT_BRANDS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.brand.read.v1"
    Commons.executeController(request, response, apiID, ReadBrandService.readBrands ) 
});

BrandController.get(Endpoints.ENDPOINT_ONE_BRAND, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.brand.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneBrandService.readOneBrand ) 
});

BrandController.post(Endpoints.ENDPOINT_BRANDS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.brand.count.v1"
    Commons.executeController(request, response, apiID, CountBrandService.readBrandCount ) 
});

BrandController.patch(Endpoints.ENDPOINT_BRANDS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.brand.update.v1"
    Commons.executeController(request, response, apiID, UpdateBrandService.updateBrand ) 
});

BrandController.delete(Endpoints.ENDPOINT_ONE_BRAND, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.brand.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteBrandService.deleteOneBrand ) 
});



module.exports = BrandController;
