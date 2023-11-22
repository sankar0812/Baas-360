/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete assetproductparam service class
**/

/**
 * Importing all required modules here
 */

const deleteAssetProductParamServiceData = require("../data/delete.assetproductparam.service.data")
const deleteAssetProductParamService = require("../../../../src/services/asset/delete.assetproductparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAssetProductParamService = new deleteAssetProductParamService();
const DeleteAssetProductParamServiceData = new deleteAssetProductParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetproductparam.ts.001] | FunctionPath : [src/services/asset/delete.assetproductparam.service.js/deleteOneAssetProductParam()]", () => {


	test(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC001.description, async () => {

        const output = await DeleteAssetProductParamService.deleteOneAssetProductParam(
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC001.input.databaseConnector,
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC001.input.apiID,
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC001.input.config,
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC001.output)[2])
	});



    test(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC002.description, async () => {

        const output = await DeleteAssetProductParamService.deleteOneAssetProductParam(
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC002.input.databaseConnector,
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC002.input.apiID,
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC002.input.config,
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC002.output.message)        
	});



    test(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC003.description, async () => {

        const output = await DeleteAssetProductParamService.deleteOneAssetProductParam(
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC003.input.databaseConnector,
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC003.input.apiID,
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC003.input.config,
            DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAssetProductParamServiceData.DELETE_ONE_ASSETPRODUCTPARAM_TS001_TC003.output.message)        
	});

});
