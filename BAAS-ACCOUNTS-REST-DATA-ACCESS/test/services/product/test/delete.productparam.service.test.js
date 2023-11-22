/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete productparam service class
**/

/**
 * Importing all required modules here
 */

const deleteProductParamServiceData = require("../data/delete.productparam.service.data")
const deleteProductParamService = require("../../../../src/services/product/delete.productparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProductParamService = new deleteProductParamService();
const DeleteProductParamServiceData = new deleteProductParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productparam.ts.001] | FunctionPath : [src/services/product/delete.productparam.service.js/deleteOneProductParam()]", () => {


	test(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC001.description, async () => {

        const output = await DeleteProductParamService.deleteOneProductParam(
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC001.input.databaseConnector,
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC001.input.apiID,
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC001.input.config,
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC001.output)[2])
	});



    test(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC002.description, async () => {

        const output = await DeleteProductParamService.deleteOneProductParam(
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC002.input.databaseConnector,
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC002.input.apiID,
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC002.input.config,
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC002.output.message)        
	});



    test(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC003.description, async () => {

        const output = await DeleteProductParamService.deleteOneProductParam(
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC003.input.databaseConnector,
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC003.input.apiID,
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC003.input.config,
            DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProductParamServiceData.DELETE_ONE_PRODUCTPARAM_TS001_TC003.output.message)        
	});

});
