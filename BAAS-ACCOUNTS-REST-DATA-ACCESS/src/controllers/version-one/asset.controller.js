/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all asset module api
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
const createAssetTypeService = require("../../services/asset/create.assettype.service");
const readAssetTypeService = require("../../services/asset/read.assettype.service");
const readoneAssetTypeService = require("../../services/asset/read.assettype.service");
const countAssetTypeService = require("../../services/asset/read.assettype.service");
const updateAssetTypeService = require("../../services/asset/update.assettype.service");
const deleteAssetTypeService = require("../../services/asset/delete.assettype.service");
const createAssetProductParamService = require("../../services/asset/create.assetproductparam.service");
const readAssetProductParamService = require("../../services/asset/read.assetproductparam.service");
const readoneAssetProductParamService = require("../../services/asset/read.assetproductparam.service");
const countAssetProductParamService = require("../../services/asset/read.assetproductparam.service");
const updateAssetProductParamService = require("../../services/asset/update.assetproductparam.service");
const deleteAssetProductParamService = require("../../services/asset/delete.assetproductparam.service");
const createAssetDepreciationService = require("../../services/asset/create.assetdepreciation.service");
const readAssetDepreciationService = require("../../services/asset/read.assetdepreciation.service");
const readoneAssetDepreciationService = require("../../services/asset/read.assetdepreciation.service");
const countAssetDepreciationService = require("../../services/asset/read.assetdepreciation.service");
const updateAssetDepreciationService = require("../../services/asset/update.assetdepreciation.service");
const deleteAssetDepreciationService = require("../../services/asset/delete.assetdepreciation.service");
const createAssetUsageTypeService = require("../../services/asset/create.assetusagetype.service");
const readAssetUsageTypeService = require("../../services/asset/read.assetusagetype.service");
const readoneAssetUsageTypeService = require("../../services/asset/read.assetusagetype.service");
const countAssetUsageTypeService = require("../../services/asset/read.assetusagetype.service");
const updateAssetUsageTypeService = require("../../services/asset/update.assetusagetype.service");
const deleteAssetUsageTypeService = require("../../services/asset/delete.assetusagetype.service");
const createAssetUsageService = require("../../services/asset/create.assetusage.service");
const readAssetUsageService = require("../../services/asset/read.assetusage.service");
const readoneAssetUsageService = require("../../services/asset/read.assetusage.service");
const countAssetUsageService = require("../../services/asset/read.assetusage.service");
const updateAssetUsageService = require("../../services/asset/update.assetusage.service");
const deleteAssetUsageService = require("../../services/asset/delete.assetusage.service");
const createAssetCategoryService = require("../../services/asset/create.assetcategory.service");
const readAssetCategoryService = require("../../services/asset/read.assetcategory.service");
const readoneAssetCategoryService = require("../../services/asset/read.assetcategory.service");
const countAssetCategoryService = require("../../services/asset/read.assetcategory.service");
const updateAssetCategoryService = require("../../services/asset/update.assetcategory.service");
const deleteAssetCategoryService = require("../../services/asset/delete.assetcategory.service");
const createAssetClassService = require("../../services/asset/create.assetclass.service");
const readAssetClassService = require("../../services/asset/read.assetclass.service");
const readoneAssetClassService = require("../../services/asset/read.assetclass.service");
const countAssetClassService = require("../../services/asset/read.assetclass.service");
const updateAssetClassService = require("../../services/asset/update.assetclass.service");
const deleteAssetClassService = require("../../services/asset/delete.assetclass.service");
const createAssetService = require("../../services/asset/create.asset.service");
const readAssetService = require("../../services/asset/read.asset.service");
const readoneAssetService = require("../../services/asset/read.asset.service");
const countAssetService = require("../../services/asset/read.asset.service");
const updateAssetService = require("../../services/asset/update.asset.service");
const deleteAssetService = require("../../services/asset/delete.asset.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateAssetTypeService = new createAssetTypeService();
const ReadAssetTypeService = new readAssetTypeService();
const ReadoneAssetTypeService = new readoneAssetTypeService();
const CountAssetTypeService = new countAssetTypeService();
const UpdateAssetTypeService = new updateAssetTypeService();
const DeleteAssetTypeService = new deleteAssetTypeService();
const CreateAssetProductParamService = new createAssetProductParamService();
const ReadAssetProductParamService = new readAssetProductParamService();
const ReadoneAssetProductParamService = new readoneAssetProductParamService();
const CountAssetProductParamService = new countAssetProductParamService();
const UpdateAssetProductParamService = new updateAssetProductParamService();
const DeleteAssetProductParamService = new deleteAssetProductParamService();
const CreateAssetDepreciationService = new createAssetDepreciationService();
const ReadAssetDepreciationService = new readAssetDepreciationService();
const ReadoneAssetDepreciationService = new readoneAssetDepreciationService();
const CountAssetDepreciationService = new countAssetDepreciationService();
const UpdateAssetDepreciationService = new updateAssetDepreciationService();
const DeleteAssetDepreciationService = new deleteAssetDepreciationService();
const CreateAssetUsageTypeService = new createAssetUsageTypeService();
const ReadAssetUsageTypeService = new readAssetUsageTypeService();
const ReadoneAssetUsageTypeService = new readoneAssetUsageTypeService();
const CountAssetUsageTypeService = new countAssetUsageTypeService();
const UpdateAssetUsageTypeService = new updateAssetUsageTypeService();
const DeleteAssetUsageTypeService = new deleteAssetUsageTypeService();
const CreateAssetUsageService = new createAssetUsageService();
const ReadAssetUsageService = new readAssetUsageService();
const ReadoneAssetUsageService = new readoneAssetUsageService();
const CountAssetUsageService = new countAssetUsageService();
const UpdateAssetUsageService = new updateAssetUsageService();
const DeleteAssetUsageService = new deleteAssetUsageService();
const CreateAssetCategoryService = new createAssetCategoryService();
const ReadAssetCategoryService = new readAssetCategoryService();
const ReadoneAssetCategoryService = new readoneAssetCategoryService();
const CountAssetCategoryService = new countAssetCategoryService();
const UpdateAssetCategoryService = new updateAssetCategoryService();
const DeleteAssetCategoryService = new deleteAssetCategoryService();
const CreateAssetClassService = new createAssetClassService();
const ReadAssetClassService = new readAssetClassService();
const ReadoneAssetClassService = new readoneAssetClassService();
const CountAssetClassService = new countAssetClassService();
const UpdateAssetClassService = new updateAssetClassService();
const DeleteAssetClassService = new deleteAssetClassService();
const CreateAssetService = new createAssetService();
const ReadAssetService = new readAssetService();
const ReadoneAssetService = new readoneAssetService();
const CountAssetService = new countAssetService();
const UpdateAssetService = new updateAssetService();
const DeleteAssetService = new deleteAssetService();


/**
 * Initializing the controller object
 */
const AssetController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

AssetController.post(Endpoints.ENDPOINT_ASSET_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assettype.create.v1"
    Commons.executeController(request, response, apiID, CreateAssetTypeService.createOneAssetType ) 
}); 

AssetController.post(Endpoints.ENDPOINT_ASSET_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assettype.read.v1"
    Commons.executeController(request, response, apiID, ReadAssetTypeService.readAssetTypes ) 
});

AssetController.get(Endpoints.ENDPOINT_ONE_ASSET_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assettype.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAssetTypeService.readOneAssetType ) 
});

AssetController.post(Endpoints.ENDPOINT_ASSET_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assettype.count.v1"
    Commons.executeController(request, response, apiID, CountAssetTypeService.readAssetTypeCount ) 
});

AssetController.patch(Endpoints.ENDPOINT_ASSET_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assettype.update.v1"
    Commons.executeController(request, response, apiID, UpdateAssetTypeService.updateAssetType ) 
});

AssetController.delete(Endpoints.ENDPOINT_ONE_ASSET_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assettype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAssetTypeService.deleteOneAssetType ) 
});


AssetController.post(Endpoints.ENDPOINT_ASSET_PRODUCT_PARAM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetproductparam.create.v1"
    Commons.executeController(request, response, apiID, CreateAssetProductParamService.createOneAssetProductParam ) 
}); 

AssetController.post(Endpoints.ENDPOINT_ASSET_PRODUCT_PARAMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetproductparam.read.v1"
    Commons.executeController(request, response, apiID, ReadAssetProductParamService.readAssetProductParams ) 
});

AssetController.get(Endpoints.ENDPOINT_ONE_ASSET_PRODUCT_PARAM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetproductparam.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAssetProductParamService.readOneAssetProductParam ) 
});

AssetController.post(Endpoints.ENDPOINT_ASSET_PRODUCT_PARAMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetproductparam.count.v1"
    Commons.executeController(request, response, apiID, CountAssetProductParamService.readAssetProductParamCount ) 
});

AssetController.patch(Endpoints.ENDPOINT_ASSET_PRODUCT_PARAMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetproductparam.update.v1"
    Commons.executeController(request, response, apiID, UpdateAssetProductParamService.updateAssetProductParam ) 
});

AssetController.delete(Endpoints.ENDPOINT_ONE_ASSET_PRODUCT_PARAM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetproductparam.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAssetProductParamService.deleteOneAssetProductParam ) 
});


AssetController.post(Endpoints.ENDPOINT_ASSET_DEPRECIATION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetdepreciation.create.v1"
    Commons.executeController(request, response, apiID, CreateAssetDepreciationService.createOneAssetDepreciation ) 
}); 

AssetController.post(Endpoints.ENDPOINT_ASSET_DEPRECIATIONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetdepreciation.read.v1"
    Commons.executeController(request, response, apiID, ReadAssetDepreciationService.readAssetDepreciations ) 
});

AssetController.get(Endpoints.ENDPOINT_ONE_ASSET_DEPRECIATION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetdepreciation.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAssetDepreciationService.readOneAssetDepreciation ) 
});

AssetController.post(Endpoints.ENDPOINT_ASSET_DEPRECIATIONS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetdepreciation.count.v1"
    Commons.executeController(request, response, apiID, CountAssetDepreciationService.readAssetDepreciationCount ) 
});

AssetController.patch(Endpoints.ENDPOINT_ASSET_DEPRECIATIONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetdepreciation.update.v1"
    Commons.executeController(request, response, apiID, UpdateAssetDepreciationService.updateAssetDepreciation ) 
});

AssetController.delete(Endpoints.ENDPOINT_ONE_ASSET_DEPRECIATION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetdepreciation.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAssetDepreciationService.deleteOneAssetDepreciation ) 
});


AssetController.post(Endpoints.ENDPOINT_ASSET_USAGE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusagetype.create.v1"
    Commons.executeController(request, response, apiID, CreateAssetUsageTypeService.createOneAssetUsageType ) 
}); 

AssetController.post(Endpoints.ENDPOINT_ASSET_USAGE_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusagetype.read.v1"
    Commons.executeController(request, response, apiID, ReadAssetUsageTypeService.readAssetUsageTypes ) 
});

AssetController.get(Endpoints.ENDPOINT_ONE_ASSET_USAGE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusagetype.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAssetUsageTypeService.readOneAssetUsageType ) 
});

AssetController.post(Endpoints.ENDPOINT_ASSET_USAGE_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusagetype.count.v1"
    Commons.executeController(request, response, apiID, CountAssetUsageTypeService.readAssetUsageTypeCount ) 
});

AssetController.patch(Endpoints.ENDPOINT_ASSET_USAGE_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusagetype.update.v1"
    Commons.executeController(request, response, apiID, UpdateAssetUsageTypeService.updateAssetUsageType ) 
});

AssetController.delete(Endpoints.ENDPOINT_ONE_ASSET_USAGE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusagetype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAssetUsageTypeService.deleteOneAssetUsageType ) 
});


AssetController.post(Endpoints.ENDPOINT_ASSET_USAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusage.create.v1"
    Commons.executeController(request, response, apiID, CreateAssetUsageService.createOneAssetUsage ) 
}); 

AssetController.post(Endpoints.ENDPOINT_ASSET_USAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusage.read.v1"
    Commons.executeController(request, response, apiID, ReadAssetUsageService.readAssetUsages ) 
});

AssetController.get(Endpoints.ENDPOINT_ONE_ASSET_USAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusage.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAssetUsageService.readOneAssetUsage ) 
});

AssetController.post(Endpoints.ENDPOINT_ASSET_USAGES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusage.count.v1"
    Commons.executeController(request, response, apiID, CountAssetUsageService.readAssetUsageCount ) 
});

AssetController.patch(Endpoints.ENDPOINT_ASSET_USAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusage.update.v1"
    Commons.executeController(request, response, apiID, UpdateAssetUsageService.updateAssetUsage ) 
});

AssetController.delete(Endpoints.ENDPOINT_ONE_ASSET_USAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetusage.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAssetUsageService.deleteOneAssetUsage ) 
});


AssetController.post(Endpoints.ENDPOINT_ASSET_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetcategory.create.v1"
    Commons.executeController(request, response, apiID, CreateAssetCategoryService.createOneAssetCategory ) 
}); 

AssetController.post(Endpoints.ENDPOINT_ASSET_CATEGORYS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetcategory.read.v1"
    Commons.executeController(request, response, apiID, ReadAssetCategoryService.readAssetCategorys ) 
});

AssetController.get(Endpoints.ENDPOINT_ONE_ASSET_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetcategory.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAssetCategoryService.readOneAssetCategory ) 
});

AssetController.post(Endpoints.ENDPOINT_ASSET_CATEGORYS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetcategory.count.v1"
    Commons.executeController(request, response, apiID, CountAssetCategoryService.readAssetCategoryCount ) 
});

AssetController.patch(Endpoints.ENDPOINT_ASSET_CATEGORYS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetcategory.update.v1"
    Commons.executeController(request, response, apiID, UpdateAssetCategoryService.updateAssetCategory ) 
});

AssetController.delete(Endpoints.ENDPOINT_ONE_ASSET_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetcategory.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAssetCategoryService.deleteOneAssetCategory ) 
});


AssetController.post(Endpoints.ENDPOINT_ASSET_CLASS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetclass.create.v1"
    Commons.executeController(request, response, apiID, CreateAssetClassService.createOneAssetClass ) 
}); 

AssetController.post(Endpoints.ENDPOINT_ASSET_CLASSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetclass.read.v1"
    Commons.executeController(request, response, apiID, ReadAssetClassService.readAssetClasses ) 
});

AssetController.get(Endpoints.ENDPOINT_ONE_ASSET_CLASS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetclass.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAssetClassService.readOneAssetClass ) 
});

AssetController.post(Endpoints.ENDPOINT_ASSET_CLASSES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetclass.count.v1"
    Commons.executeController(request, response, apiID, CountAssetClassService.readAssetClassCount ) 
});

AssetController.patch(Endpoints.ENDPOINT_ASSET_CLASSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetclass.update.v1"
    Commons.executeController(request, response, apiID, UpdateAssetClassService.updateAssetClass ) 
});

AssetController.delete(Endpoints.ENDPOINT_ONE_ASSET_CLASS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.assetclass.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAssetClassService.deleteOneAssetClass ) 
});


AssetController.post(Endpoints.ENDPOINT_ASSET, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.asset.create.v1"
    Commons.executeController(request, response, apiID, CreateAssetService.createOneAsset ) 
}); 

AssetController.post(Endpoints.ENDPOINT_ASSETS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.asset.read.v1"
    Commons.executeController(request, response, apiID, ReadAssetService.readAssets ) 
});

AssetController.get(Endpoints.ENDPOINT_ONE_ASSET, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.asset.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAssetService.readOneAsset ) 
});

AssetController.post(Endpoints.ENDPOINT_ASSETS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.asset.count.v1"
    Commons.executeController(request, response, apiID, CountAssetService.readAssetCount ) 
});

AssetController.patch(Endpoints.ENDPOINT_ASSETS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.asset.update.v1"
    Commons.executeController(request, response, apiID, UpdateAssetService.updateAsset ) 
});

AssetController.delete(Endpoints.ENDPOINT_ONE_ASSET, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.asset.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAssetService.deleteOneAsset ) 
});



module.exports = AssetController;
