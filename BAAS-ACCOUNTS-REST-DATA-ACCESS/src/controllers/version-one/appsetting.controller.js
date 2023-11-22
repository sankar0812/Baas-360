/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all appsetting module api
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
const createAppSettingUomService = require("../../services/appsetting/create.appsettinguom.service");
const readAppSettingUomService = require("../../services/appsetting/read.appsettinguom.service");
const readoneAppSettingUomService = require("../../services/appsetting/read.appsettinguom.service");
const countAppSettingUomService = require("../../services/appsetting/read.appsettinguom.service");
const updateAppSettingUomService = require("../../services/appsetting/update.appsettinguom.service");
const deleteAppSettingUomService = require("../../services/appsetting/delete.appsettinguom.service");
const createAppSettingUomTypeService = require("../../services/appsetting/create.appsettinguomtype.service");
const readAppSettingUomTypeService = require("../../services/appsetting/read.appsettinguomtype.service");
const readoneAppSettingUomTypeService = require("../../services/appsetting/read.appsettinguomtype.service");
const countAppSettingUomTypeService = require("../../services/appsetting/read.appsettinguomtype.service");
const updateAppSettingUomTypeService = require("../../services/appsetting/update.appsettinguomtype.service");
const deleteAppSettingUomTypeService = require("../../services/appsetting/delete.appsettinguomtype.service");
const createAppSettingDataTypeService = require("../../services/appsetting/create.appsettingdatatype.service");
const readAppSettingDataTypeService = require("../../services/appsetting/read.appsettingdatatype.service");
const readoneAppSettingDataTypeService = require("../../services/appsetting/read.appsettingdatatype.service");
const countAppSettingDataTypeService = require("../../services/appsetting/read.appsettingdatatype.service");
const updateAppSettingDataTypeService = require("../../services/appsetting/update.appsettingdatatype.service");
const deleteAppSettingDataTypeService = require("../../services/appsetting/delete.appsettingdatatype.service");
const createAppSettingNetTermService = require("../../services/appsetting/create.appsettingnetterm.service");
const readAppSettingNetTermService = require("../../services/appsetting/read.appsettingnetterm.service");
const readoneAppSettingNetTermService = require("../../services/appsetting/read.appsettingnetterm.service");
const countAppSettingNetTermService = require("../../services/appsetting/read.appsettingnetterm.service");
const updateAppSettingNetTermService = require("../../services/appsetting/update.appsettingnetterm.service");
const deleteAppSettingNetTermService = require("../../services/appsetting/delete.appsettingnetterm.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateAppSettingUomService = new createAppSettingUomService();
const ReadAppSettingUomService = new readAppSettingUomService();
const ReadoneAppSettingUomService = new readoneAppSettingUomService();
const CountAppSettingUomService = new countAppSettingUomService();
const UpdateAppSettingUomService = new updateAppSettingUomService();
const DeleteAppSettingUomService = new deleteAppSettingUomService();
const CreateAppSettingUomTypeService = new createAppSettingUomTypeService();
const ReadAppSettingUomTypeService = new readAppSettingUomTypeService();
const ReadoneAppSettingUomTypeService = new readoneAppSettingUomTypeService();
const CountAppSettingUomTypeService = new countAppSettingUomTypeService();
const UpdateAppSettingUomTypeService = new updateAppSettingUomTypeService();
const DeleteAppSettingUomTypeService = new deleteAppSettingUomTypeService();
const CreateAppSettingDataTypeService = new createAppSettingDataTypeService();
const ReadAppSettingDataTypeService = new readAppSettingDataTypeService();
const ReadoneAppSettingDataTypeService = new readoneAppSettingDataTypeService();
const CountAppSettingDataTypeService = new countAppSettingDataTypeService();
const UpdateAppSettingDataTypeService = new updateAppSettingDataTypeService();
const DeleteAppSettingDataTypeService = new deleteAppSettingDataTypeService();
const CreateAppSettingNetTermService = new createAppSettingNetTermService();
const ReadAppSettingNetTermService = new readAppSettingNetTermService();
const ReadoneAppSettingNetTermService = new readoneAppSettingNetTermService();
const CountAppSettingNetTermService = new countAppSettingNetTermService();
const UpdateAppSettingNetTermService = new updateAppSettingNetTermService();
const DeleteAppSettingNetTermService = new deleteAppSettingNetTermService();


/**
 * Initializing the controller object
 */
const AppSettingController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_UOM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguom.create.v1"
    Commons.executeController(request, response, apiID, CreateAppSettingUomService.createOneAppSettingUom ) 
}); 

AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_UOMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguom.read.v1"
    Commons.executeController(request, response, apiID, ReadAppSettingUomService.readAppSettingUoms ) 
});

AppSettingController.get(Endpoints.ENDPOINT_ONE_APP_SETTING_UOM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguom.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAppSettingUomService.readOneAppSettingUom ) 
});

AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_UOMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguom.count.v1"
    Commons.executeController(request, response, apiID, CountAppSettingUomService.readAppSettingUomCount ) 
});

AppSettingController.patch(Endpoints.ENDPOINT_APP_SETTING_UOMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguom.update.v1"
    Commons.executeController(request, response, apiID, UpdateAppSettingUomService.updateAppSettingUom ) 
});

AppSettingController.delete(Endpoints.ENDPOINT_ONE_APP_SETTING_UOM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguom.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAppSettingUomService.deleteOneAppSettingUom ) 
});


AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_UOM_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguomtype.create.v1"
    Commons.executeController(request, response, apiID, CreateAppSettingUomTypeService.createOneAppSettingUomType ) 
}); 

AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_UOM_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguomtype.read.v1"
    Commons.executeController(request, response, apiID, ReadAppSettingUomTypeService.readAppSettingUomTypes ) 
});

AppSettingController.get(Endpoints.ENDPOINT_ONE_APP_SETTING_UOM_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguomtype.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAppSettingUomTypeService.readOneAppSettingUomType ) 
});

AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_UOM_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguomtype.count.v1"
    Commons.executeController(request, response, apiID, CountAppSettingUomTypeService.readAppSettingUomTypeCount ) 
});

AppSettingController.patch(Endpoints.ENDPOINT_APP_SETTING_UOM_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguomtype.update.v1"
    Commons.executeController(request, response, apiID, UpdateAppSettingUomTypeService.updateAppSettingUomType ) 
});

AppSettingController.delete(Endpoints.ENDPOINT_ONE_APP_SETTING_UOM_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettinguomtype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAppSettingUomTypeService.deleteOneAppSettingUomType ) 
});


AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_DATA_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingdatatype.create.v1"
    Commons.executeController(request, response, apiID, CreateAppSettingDataTypeService.createOneAppSettingDataType ) 
}); 

AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_DATA_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingdatatype.read.v1"
    Commons.executeController(request, response, apiID, ReadAppSettingDataTypeService.readAppSettingDataTypes ) 
});

AppSettingController.get(Endpoints.ENDPOINT_ONE_APP_SETTING_DATA_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingdatatype.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAppSettingDataTypeService.readOneAppSettingDataType ) 
});

AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_DATA_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingdatatype.count.v1"
    Commons.executeController(request, response, apiID, CountAppSettingDataTypeService.readAppSettingDataTypeCount ) 
});

AppSettingController.patch(Endpoints.ENDPOINT_APP_SETTING_DATA_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingdatatype.update.v1"
    Commons.executeController(request, response, apiID, UpdateAppSettingDataTypeService.updateAppSettingDataType ) 
});

AppSettingController.delete(Endpoints.ENDPOINT_ONE_APP_SETTING_DATA_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingdatatype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAppSettingDataTypeService.deleteOneAppSettingDataType ) 
});


AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_NET_TERM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingnetterm.create.v1"
    Commons.executeController(request, response, apiID, CreateAppSettingNetTermService.createOneAppSettingNetTerm ) 
}); 

AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_NET_TERMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingnetterm.read.v1"
    Commons.executeController(request, response, apiID, ReadAppSettingNetTermService.readAppSettingNetTerms ) 
});

AppSettingController.get(Endpoints.ENDPOINT_ONE_APP_SETTING_NET_TERM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingnetterm.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneAppSettingNetTermService.readOneAppSettingNetTerm ) 
});

AppSettingController.post(Endpoints.ENDPOINT_APP_SETTING_NET_TERMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingnetterm.count.v1"
    Commons.executeController(request, response, apiID, CountAppSettingNetTermService.readAppSettingNetTermCount ) 
});

AppSettingController.patch(Endpoints.ENDPOINT_APP_SETTING_NET_TERMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingnetterm.update.v1"
    Commons.executeController(request, response, apiID, UpdateAppSettingNetTermService.updateAppSettingNetTerm ) 
});

AppSettingController.delete(Endpoints.ENDPOINT_ONE_APP_SETTING_NET_TERM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.appsettingnetterm.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteAppSettingNetTermService.deleteOneAppSettingNetTerm ) 
});



module.exports = AppSettingController;
