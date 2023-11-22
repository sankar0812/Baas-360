/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all cost module api
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
const createCostListItemBulkDiscountService = require("../../services/cost/create.costlistitembulkdiscount.service");
const readCostListItemBulkDiscountService = require("../../services/cost/read.costlistitembulkdiscount.service");
const readoneCostListItemBulkDiscountService = require("../../services/cost/read.costlistitembulkdiscount.service");
const countCostListItemBulkDiscountService = require("../../services/cost/read.costlistitembulkdiscount.service");
const updateCostListItemBulkDiscountService = require("../../services/cost/update.costlistitembulkdiscount.service");
const deleteCostListItemBulkDiscountService = require("../../services/cost/delete.costlistitembulkdiscount.service");
const createCostListItemService = require("../../services/cost/create.costlistitem.service");
const readCostListItemService = require("../../services/cost/read.costlistitem.service");
const readoneCostListItemService = require("../../services/cost/read.costlistitem.service");
const countCostListItemService = require("../../services/cost/read.costlistitem.service");
const updateCostListItemService = require("../../services/cost/update.costlistitem.service");
const deleteCostListItemService = require("../../services/cost/delete.costlistitem.service");
const createCostListService = require("../../services/cost/create.costlist.service");
const readCostListService = require("../../services/cost/read.costlist.service");
const readoneCostListService = require("../../services/cost/read.costlist.service");
const countCostListService = require("../../services/cost/read.costlist.service");
const updateCostListService = require("../../services/cost/update.costlist.service");
const deleteCostListService = require("../../services/cost/delete.costlist.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateCostListItemBulkDiscountService = new createCostListItemBulkDiscountService();
const ReadCostListItemBulkDiscountService = new readCostListItemBulkDiscountService();
const ReadoneCostListItemBulkDiscountService = new readoneCostListItemBulkDiscountService();
const CountCostListItemBulkDiscountService = new countCostListItemBulkDiscountService();
const UpdateCostListItemBulkDiscountService = new updateCostListItemBulkDiscountService();
const DeleteCostListItemBulkDiscountService = new deleteCostListItemBulkDiscountService();
const CreateCostListItemService = new createCostListItemService();
const ReadCostListItemService = new readCostListItemService();
const ReadoneCostListItemService = new readoneCostListItemService();
const CountCostListItemService = new countCostListItemService();
const UpdateCostListItemService = new updateCostListItemService();
const DeleteCostListItemService = new deleteCostListItemService();
const CreateCostListService = new createCostListService();
const ReadCostListService = new readCostListService();
const ReadoneCostListService = new readoneCostListService();
const CountCostListService = new countCostListService();
const UpdateCostListService = new updateCostListService();
const DeleteCostListService = new deleteCostListService();


/**
 * Initializing the controller object
 */
const CostController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

CostController.post(Endpoints.ENDPOINT_COST_LIST_ITEM_BULK_DISCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitembulkdiscount.create.v1"
    Commons.executeController(request, response, apiID, CreateCostListItemBulkDiscountService.createOneCostListItemBulkDiscount ) 
}); 

CostController.post(Endpoints.ENDPOINT_COST_LIST_ITEM_BULK_DISCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitembulkdiscount.read.v1"
    Commons.executeController(request, response, apiID, ReadCostListItemBulkDiscountService.readCostListItemBulkDiscounts ) 
});

CostController.get(Endpoints.ENDPOINT_ONE_COST_LIST_ITEM_BULK_DISCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitembulkdiscount.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCostListItemBulkDiscountService.readOneCostListItemBulkDiscount ) 
});

CostController.post(Endpoints.ENDPOINT_COST_LIST_ITEM_BULK_DISCOUNTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitembulkdiscount.count.v1"
    Commons.executeController(request, response, apiID, CountCostListItemBulkDiscountService.readCostListItemBulkDiscountCount ) 
});

CostController.patch(Endpoints.ENDPOINT_COST_LIST_ITEM_BULK_DISCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitembulkdiscount.update.v1"
    Commons.executeController(request, response, apiID, UpdateCostListItemBulkDiscountService.updateCostListItemBulkDiscount ) 
});

CostController.delete(Endpoints.ENDPOINT_ONE_COST_LIST_ITEM_BULK_DISCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitembulkdiscount.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCostListItemBulkDiscountService.deleteOneCostListItemBulkDiscount ) 
});


CostController.post(Endpoints.ENDPOINT_COST_LIST_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitem.create.v1"
    Commons.executeController(request, response, apiID, CreateCostListItemService.createOneCostListItem ) 
}); 

CostController.post(Endpoints.ENDPOINT_COST_LIST_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitem.read.v1"
    Commons.executeController(request, response, apiID, ReadCostListItemService.readCostListItems ) 
});

CostController.get(Endpoints.ENDPOINT_ONE_COST_LIST_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCostListItemService.readOneCostListItem ) 
});

CostController.post(Endpoints.ENDPOINT_COST_LIST_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitem.count.v1"
    Commons.executeController(request, response, apiID, CountCostListItemService.readCostListItemCount ) 
});

CostController.patch(Endpoints.ENDPOINT_COST_LIST_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitem.update.v1"
    Commons.executeController(request, response, apiID, UpdateCostListItemService.updateCostListItem ) 
});

CostController.delete(Endpoints.ENDPOINT_ONE_COST_LIST_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlistitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCostListItemService.deleteOneCostListItem ) 
});


CostController.post(Endpoints.ENDPOINT_COST_LIST, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlist.create.v1"
    Commons.executeController(request, response, apiID, CreateCostListService.createOneCostList ) 
}); 

CostController.post(Endpoints.ENDPOINT_COST_LISTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlist.read.v1"
    Commons.executeController(request, response, apiID, ReadCostListService.readCostLists ) 
});

CostController.get(Endpoints.ENDPOINT_ONE_COST_LIST, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlist.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCostListService.readOneCostList ) 
});

CostController.post(Endpoints.ENDPOINT_COST_LISTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlist.count.v1"
    Commons.executeController(request, response, apiID, CountCostListService.readCostListCount ) 
});

CostController.patch(Endpoints.ENDPOINT_COST_LISTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlist.update.v1"
    Commons.executeController(request, response, apiID, UpdateCostListService.updateCostList ) 
});

CostController.delete(Endpoints.ENDPOINT_ONE_COST_LIST, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.costlist.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCostListService.deleteOneCostList ) 
});



module.exports = CostController;
