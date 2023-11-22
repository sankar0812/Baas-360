/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all pricelist module api
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
const createPriceListStatusService = require("../../services/pricelist/create.priceliststatus.service");
const readPriceListStatusService = require("../../services/pricelist/read.priceliststatus.service");
const readonePriceListStatusService = require("../../services/pricelist/read.priceliststatus.service");
const countPriceListStatusService = require("../../services/pricelist/read.priceliststatus.service");
const updatePriceListStatusService = require("../../services/pricelist/update.priceliststatus.service");
const deletePriceListStatusService = require("../../services/pricelist/delete.priceliststatus.service");
const createPriceListStoreService = require("../../services/pricelist/create.priceliststore.service");
const readPriceListStoreService = require("../../services/pricelist/read.priceliststore.service");
const readonePriceListStoreService = require("../../services/pricelist/read.priceliststore.service");
const countPriceListStoreService = require("../../services/pricelist/read.priceliststore.service");
const updatePriceListStoreService = require("../../services/pricelist/update.priceliststore.service");
const deletePriceListStoreService = require("../../services/pricelist/delete.priceliststore.service");
const createPriceListCustomerAccountService = require("../../services/pricelist/create.pricelistcustomeraccount.service");
const readPriceListCustomerAccountService = require("../../services/pricelist/read.pricelistcustomeraccount.service");
const readonePriceListCustomerAccountService = require("../../services/pricelist/read.pricelistcustomeraccount.service");
const countPriceListCustomerAccountService = require("../../services/pricelist/read.pricelistcustomeraccount.service");
const updatePriceListCustomerAccountService = require("../../services/pricelist/update.pricelistcustomeraccount.service");
const deletePriceListCustomerAccountService = require("../../services/pricelist/delete.pricelistcustomeraccount.service");
const createPriceListItemBulkDiscountService = require("../../services/pricelist/create.pricelistitembulkdiscount.service");
const readPriceListItemBulkDiscountService = require("../../services/pricelist/read.pricelistitembulkdiscount.service");
const readonePriceListItemBulkDiscountService = require("../../services/pricelist/read.pricelistitembulkdiscount.service");
const countPriceListItemBulkDiscountService = require("../../services/pricelist/read.pricelistitembulkdiscount.service");
const updatePriceListItemBulkDiscountService = require("../../services/pricelist/update.pricelistitembulkdiscount.service");
const deletePriceListItemBulkDiscountService = require("../../services/pricelist/delete.pricelistitembulkdiscount.service");
const createPriceListItemService = require("../../services/pricelist/create.pricelistitem.service");
const readPriceListItemService = require("../../services/pricelist/read.pricelistitem.service");
const readonePriceListItemService = require("../../services/pricelist/read.pricelistitem.service");
const countPriceListItemService = require("../../services/pricelist/read.pricelistitem.service");
const updatePriceListItemService = require("../../services/pricelist/update.pricelistitem.service");
const deletePriceListItemService = require("../../services/pricelist/delete.pricelistitem.service");
const createPriceListService = require("../../services/pricelist/create.pricelist.service");
const readPriceListService = require("../../services/pricelist/read.pricelist.service");
const readonePriceListService = require("../../services/pricelist/read.pricelist.service");
const countPriceListService = require("../../services/pricelist/read.pricelist.service");
const updatePriceListService = require("../../services/pricelist/update.pricelist.service");
const deletePriceListService = require("../../services/pricelist/delete.pricelist.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreatePriceListStatusService = new createPriceListStatusService();
const ReadPriceListStatusService = new readPriceListStatusService();
const ReadonePriceListStatusService = new readonePriceListStatusService();
const CountPriceListStatusService = new countPriceListStatusService();
const UpdatePriceListStatusService = new updatePriceListStatusService();
const DeletePriceListStatusService = new deletePriceListStatusService();
const CreatePriceListStoreService = new createPriceListStoreService();
const ReadPriceListStoreService = new readPriceListStoreService();
const ReadonePriceListStoreService = new readonePriceListStoreService();
const CountPriceListStoreService = new countPriceListStoreService();
const UpdatePriceListStoreService = new updatePriceListStoreService();
const DeletePriceListStoreService = new deletePriceListStoreService();
const CreatePriceListCustomerAccountService = new createPriceListCustomerAccountService();
const ReadPriceListCustomerAccountService = new readPriceListCustomerAccountService();
const ReadonePriceListCustomerAccountService = new readonePriceListCustomerAccountService();
const CountPriceListCustomerAccountService = new countPriceListCustomerAccountService();
const UpdatePriceListCustomerAccountService = new updatePriceListCustomerAccountService();
const DeletePriceListCustomerAccountService = new deletePriceListCustomerAccountService();
const CreatePriceListItemBulkDiscountService = new createPriceListItemBulkDiscountService();
const ReadPriceListItemBulkDiscountService = new readPriceListItemBulkDiscountService();
const ReadonePriceListItemBulkDiscountService = new readonePriceListItemBulkDiscountService();
const CountPriceListItemBulkDiscountService = new countPriceListItemBulkDiscountService();
const UpdatePriceListItemBulkDiscountService = new updatePriceListItemBulkDiscountService();
const DeletePriceListItemBulkDiscountService = new deletePriceListItemBulkDiscountService();
const CreatePriceListItemService = new createPriceListItemService();
const ReadPriceListItemService = new readPriceListItemService();
const ReadonePriceListItemService = new readonePriceListItemService();
const CountPriceListItemService = new countPriceListItemService();
const UpdatePriceListItemService = new updatePriceListItemService();
const DeletePriceListItemService = new deletePriceListItemService();
const CreatePriceListService = new createPriceListService();
const ReadPriceListService = new readPriceListService();
const ReadonePriceListService = new readonePriceListService();
const CountPriceListService = new countPriceListService();
const UpdatePriceListService = new updatePriceListService();
const DeletePriceListService = new deletePriceListService();


/**
 * Initializing the controller object
 */
const PriceListController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststatus.create.v1"
    Commons.executeController(request, response, apiID, CreatePriceListStatusService.createOnePriceListStatus ) 
}); 

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_STATUSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststatus.read.v1"
    Commons.executeController(request, response, apiID, ReadPriceListStatusService.readPriceListStatuses ) 
});

PriceListController.get(Endpoints.ENDPOINT_ONE_PRICE_LIST_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststatus.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePriceListStatusService.readOnePriceListStatus ) 
});

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_STATUSES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststatus.count.v1"
    Commons.executeController(request, response, apiID, CountPriceListStatusService.readPriceListStatusCount ) 
});

PriceListController.patch(Endpoints.ENDPOINT_PRICE_LIST_STATUSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststatus.update.v1"
    Commons.executeController(request, response, apiID, UpdatePriceListStatusService.updatePriceListStatus ) 
});

PriceListController.delete(Endpoints.ENDPOINT_ONE_PRICE_LIST_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststatus.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePriceListStatusService.deleteOnePriceListStatus ) 
});


PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_STORE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststore.create.v1"
    Commons.executeController(request, response, apiID, CreatePriceListStoreService.createOnePriceListStore ) 
}); 

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_STORES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststore.read.v1"
    Commons.executeController(request, response, apiID, ReadPriceListStoreService.readPriceListStores ) 
});

PriceListController.get(Endpoints.ENDPOINT_ONE_PRICE_LIST_STORE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststore.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePriceListStoreService.readOnePriceListStore ) 
});

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_STORES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststore.count.v1"
    Commons.executeController(request, response, apiID, CountPriceListStoreService.readPriceListStoreCount ) 
});

PriceListController.patch(Endpoints.ENDPOINT_PRICE_LIST_STORES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststore.update.v1"
    Commons.executeController(request, response, apiID, UpdatePriceListStoreService.updatePriceListStore ) 
});

PriceListController.delete(Endpoints.ENDPOINT_ONE_PRICE_LIST_STORE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.priceliststore.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePriceListStoreService.deleteOnePriceListStore ) 
});


PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_CUSTOMER_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistcustomeraccount.create.v1"
    Commons.executeController(request, response, apiID, CreatePriceListCustomerAccountService.createOnePriceListCustomerAccount ) 
}); 

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_CUSTOMER_ACCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistcustomeraccount.read.v1"
    Commons.executeController(request, response, apiID, ReadPriceListCustomerAccountService.readPriceListCustomerAccounts ) 
});

PriceListController.get(Endpoints.ENDPOINT_ONE_PRICE_LIST_CUSTOMER_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistcustomeraccount.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePriceListCustomerAccountService.readOnePriceListCustomerAccount ) 
});

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_CUSTOMER_ACCOUNTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistcustomeraccount.count.v1"
    Commons.executeController(request, response, apiID, CountPriceListCustomerAccountService.readPriceListCustomerAccountCount ) 
});

PriceListController.patch(Endpoints.ENDPOINT_PRICE_LIST_CUSTOMER_ACCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistcustomeraccount.update.v1"
    Commons.executeController(request, response, apiID, UpdatePriceListCustomerAccountService.updatePriceListCustomerAccount ) 
});

PriceListController.delete(Endpoints.ENDPOINT_ONE_PRICE_LIST_CUSTOMER_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistcustomeraccount.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePriceListCustomerAccountService.deleteOnePriceListCustomerAccount ) 
});


PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_ITEM_BULK_DISCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitembulkdiscount.create.v1"
    Commons.executeController(request, response, apiID, CreatePriceListItemBulkDiscountService.createOnePriceListItemBulkDiscount ) 
}); 

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_ITEM_BULK_DISCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitembulkdiscount.read.v1"
    Commons.executeController(request, response, apiID, ReadPriceListItemBulkDiscountService.readPriceListItemBulkDiscounts ) 
});

PriceListController.get(Endpoints.ENDPOINT_ONE_PRICE_LIST_ITEM_BULK_DISCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitembulkdiscount.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePriceListItemBulkDiscountService.readOnePriceListItemBulkDiscount ) 
});

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_ITEM_BULK_DISCOUNTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitembulkdiscount.count.v1"
    Commons.executeController(request, response, apiID, CountPriceListItemBulkDiscountService.readPriceListItemBulkDiscountCount ) 
});

PriceListController.patch(Endpoints.ENDPOINT_PRICE_LIST_ITEM_BULK_DISCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitembulkdiscount.update.v1"
    Commons.executeController(request, response, apiID, UpdatePriceListItemBulkDiscountService.updatePriceListItemBulkDiscount ) 
});

PriceListController.delete(Endpoints.ENDPOINT_ONE_PRICE_LIST_ITEM_BULK_DISCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitembulkdiscount.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePriceListItemBulkDiscountService.deleteOnePriceListItemBulkDiscount ) 
});


PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitem.create.v1"
    Commons.executeController(request, response, apiID, CreatePriceListItemService.createOnePriceListItem ) 
}); 

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitem.read.v1"
    Commons.executeController(request, response, apiID, ReadPriceListItemService.readPriceListItems ) 
});

PriceListController.get(Endpoints.ENDPOINT_ONE_PRICE_LIST_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePriceListItemService.readOnePriceListItem ) 
});

PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitem.count.v1"
    Commons.executeController(request, response, apiID, CountPriceListItemService.readPriceListItemCount ) 
});

PriceListController.patch(Endpoints.ENDPOINT_PRICE_LIST_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitem.update.v1"
    Commons.executeController(request, response, apiID, UpdatePriceListItemService.updatePriceListItem ) 
});

PriceListController.delete(Endpoints.ENDPOINT_ONE_PRICE_LIST_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelistitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePriceListItemService.deleteOnePriceListItem ) 
});


PriceListController.post(Endpoints.ENDPOINT_PRICE_LIST, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelist.create.v1"
    Commons.executeController(request, response, apiID, CreatePriceListService.createOnePriceList ) 
}); 

PriceListController.post(Endpoints.ENDPOINT_PRICE_LISTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelist.read.v1"
    Commons.executeController(request, response, apiID, ReadPriceListService.readPriceLists ) 
});

PriceListController.get(Endpoints.ENDPOINT_ONE_PRICE_LIST, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelist.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePriceListService.readOnePriceList ) 
});

PriceListController.post(Endpoints.ENDPOINT_PRICE_LISTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelist.count.v1"
    Commons.executeController(request, response, apiID, CountPriceListService.readPriceListCount ) 
});

PriceListController.patch(Endpoints.ENDPOINT_PRICE_LISTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelist.update.v1"
    Commons.executeController(request, response, apiID, UpdatePriceListService.updatePriceList ) 
});

PriceListController.delete(Endpoints.ENDPOINT_ONE_PRICE_LIST, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.pricelist.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePriceListService.deleteOnePriceList ) 
});



module.exports = PriceListController;
