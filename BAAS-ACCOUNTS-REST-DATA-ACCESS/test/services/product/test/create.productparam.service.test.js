/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create productparam service class
**/

/**
 * Importing all required modules here
 */

const createProductParamServiceData = require("../data/create.productparam.service.data")
const createProductParamService = require("../../../../src/services/product/create.productparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProductParamService = new createProductParamService();
const CreateProductParamServiceData = new createProductParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productparam.ts.001] | FunctionPath : [src/services/product/create.productparam.service.js/createOneProductParam()]", () => {


	test(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC001.description, async () => {

        const output = await CreateProductParamService.createOneProductParam(
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC001.input.databaseConnector,
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC001.input.apiID,
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC001.input.config,
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC001.output)[2])
	});



    test(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC002.description, async () => {

        const output = await CreateProductParamService.createOneProductParam(
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC002.input.databaseConnector,
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC002.input.apiID,
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC002.input.config,
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC002.output.message)        
	});



    test(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC003.description, async () => {

        const output = await CreateProductParamService.createOneProductParam(
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC003.input.databaseConnector,
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC003.input.apiID,
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC003.input.config,
            CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProductParamServiceData.CREATE_ONE_PRODUCTPARAM_TS001_TC003.output.message)        
	});

});