/**
* CreatedBy    : RaviBalan
* CreatedTime  : NOV 09 2023
* ModifiedBy   : RaviBalan 
* ModifiedTime : NOV 09 2023
* Description  : This file contains the all api endpoint to function mapping for all category module
**/

/**
 *  Importing all the required modules
 */
const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints")

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Endpoints = new endpoints();


/* Importing all the rule classes */

const addProductCategoryCoreRule = require("../../rules/product/addcategory/core.rule")
const removeProductCoreRule = require("../../rules/product/removeproduct/core.rule")
const addPackageCoreRule = require("../../rules/product/addpackage/core.rule")
const addCoreRule = require("../../rules/product/add/core.rule")
const addBulkDiscountCoreRule = require("../../rules/product/addbulkdiscount/core.rule")
const updateRule = require("../../rules/product/changeproduct/core.rule")
const changePackageCoreRule = require("../../rules/product/changepackage/core.rule")
const enableProductCoreRule = require ("../../rules/product/enable/core.rule")
const disableProductCoreRule = require ("../../rules/product/disable/core.rule")
const removePackageCoreRule = require("../../rules/product/removepackage/core.rule")
const changeParentProductCoreRule = require("../../rules/product/changeparentproduct/core.rule")
const removeCategoryCoreRule = require("../../rules/product/removecategory/core.rule")
const enableSaleCoreRule = require("../../rules/product/enablesale/core.rule")
const disableSaleCoreRule = require("../../rules/product/disablesale/core.rule")
const enablePurchaseCoreRule = require("../../rules/product/enablepurchase/core.rule")
const disablePurchaseCoreRule = require("../../rules/product/disablepurchase/core.rule")
const removeBulkDiscountCoreRule = require("../../rules/product/removebulkdiscount/core.rule")
const filterCoreRule = require("../../rules/product/filter/core.rule")





/* Initializing objects for all the rule classes */

const AddProductCategoryCoreRule = new addProductCategoryCoreRule();
const RemoveProductCoreRule = new removeProductCoreRule();
const AddPackageCoreRule = new addPackageCoreRule();
const AddCoreRule = new addCoreRule();
const AddBulkDiscountCoreRule = new addBulkDiscountCoreRule();
const UpdateRule = new updateRule();
const ChangePackageCoreRule = new changePackageCoreRule();
const EnableProductCoreRule = new enableProductCoreRule ();
const DisableProductCoreRule = new disableProductCoreRule ();
const RemovePackageCoreRule = new removePackageCoreRule();
const ChangeParentProductCoreRule = new changeParentProductCoreRule();
const RemoveCategoryCoreRule = new removeCategoryCoreRule();
const EnableSaleCoreRule = new enableSaleCoreRule();
const DisableSaleCoreRule = new disableSaleCoreRule();
const EnablePurchaseCoreRule = new enablePurchaseCoreRule();
const DisablePurchaseCoreRule = new disablePurchaseCoreRule();
const RemoveBulkDiscountCoreRule = new removeBulkDiscountCoreRule();
const FilterCoreRule = new filterCoreRule ();
/**
 * Initializing the controller object
 */
const ProductController = express.Router();


/* Creating all the API endpoint to function mapping */

ProductController.post(Endpoints.ENDPOINT_API_ADD_PRODUCT_CATEGORY, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.addproduct.v1"
    Commons.executeController(request, response, apiID, AddProductCategoryCoreRule.coreAddProduct)
});

ProductController.post(Endpoints.ENDPOINT_API_REMOVE_PRODUCT, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.removeproduct.v1"
    Commons.executeController(request, response, apiID, RemoveProductCoreRule.coreRemoveProduct)
});

ProductController.post(Endpoints.ENDPOINT_API_ADD_PRODUCT, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.add.v1"
    Commons.executeController(request, response, apiID, AddCoreRule.addCore)
});

ProductController.post(Endpoints.ENDPOINT_API_ADD_PACKAGE, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.addpackage.v1"
    Commons.executeController(request, response, apiID, AddPackageCoreRule.addPackageCore)
});

ProductController.post(Endpoints.ENDPOINT_API_ADD_BULK_DISCOUNT, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.addblukdiscount.v1"
    Commons.executeController(request, response, apiID, AddBulkDiscountCoreRule.addBulkDiscountCore)
});

ProductController.post(Endpoints.ENDPOINT_API_UPDATE_PRODUCT, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.update.v1"
    Commons.executeController(request, response, apiID, UpdateRule.updateCore)
});

ProductController.post(Endpoints.ENDPOINT_API_CHANGE_PRODUCT_PACKAGE, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.changepackage.v1"
    Commons.executeController(request, response, apiID, ChangePackageCoreRule.changePackageCore)
});

ProductController.post(Endpoints.ENDPOINT_API_PRODUCT_ENABLE_AVAILABLITY, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.enableavailability.v1"
    Commons.executeController(request, response, apiID, EnableProductCoreRule.checkEnableCoreRule)
});

ProductController.post(Endpoints.ENDPOINT_API_PRODUCT_DISABLE_AVAILABLITY, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.disableavailability.v1"
    Commons.executeController(request, response, apiID, DisableProductCoreRule.checkDisableCoreRule)
});    
ProductController.post(Endpoints.ENDPOINT_API_REMOVE_PRODUCT_PACKAGE, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.removepackage.v1"
    Commons.executeController(request, response, apiID, RemovePackageCoreRule.removePackageCore)
});

ProductController.post(Endpoints.ENDPOINT_API_CHANGE_PARENT_PRODUCT, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.changeparentproduct.v1"
    Commons.executeController(request, response, apiID, ChangeParentProductCoreRule.changeParentProductRule)
});

ProductController.post(Endpoints.ENDPOINT_API_REMOVE_PRODUCT_CATEGORY, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.removecategory.v1"
    Commons.executeController(request, response, apiID, RemoveCategoryCoreRule.removeCategoryCore)
});

ProductController.post(Endpoints.ENDPOINT_API_PRODUCT_ENABLE_SALE, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.enablesale.v1"
    Commons.executeController(request, response, apiID, EnableSaleCoreRule.enableSaleRule)
});

ProductController.post(Endpoints.ENDPOINT_API_PRODUCT_DISABLE_SALE, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.disablesale.v1"
    Commons.executeController(request, response, apiID, DisableSaleCoreRule.disableSaleRule)
});

ProductController.post(Endpoints.ENDPOINT_API_PRODUCT_ENABLE_PURCHASE, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.enablepurchase.v1"
    Commons.executeController(request, response, apiID, EnablePurchaseCoreRule.enablePurchaseRule)
});

ProductController.post(Endpoints.ENDPOINT_API_PRODUCT_DISABLE_PURCHASE, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.disablepurchase.v1"
    Commons.executeController(request, response, apiID, DisablePurchaseCoreRule.disablePurchaseRule)
});

ProductController.patch(Endpoints.ENDPOINT_API_REMOVE_PRODUCT_BULK_DISCOUNT, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.removebulkdiscount.v1"
    Commons.executeController(request, response, apiID, RemoveBulkDiscountCoreRule.removeBulkDiscountCore)
});

ProductController.post(Endpoints.ENDPOINT_API_FILTER_PRODUCT, async (request, response) => {
    const apiID = "accounts.api.rest.business.product.filter.v1"
    Commons.executeController(request, response, apiID, FilterCoreRule.filterProductCoreRule)
});

module.exports = ProductController;
