/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create productbundle service class
**/

/**
 * Importing all required modules here
 */

const createProductBundleServiceData = require("../data/create.productbundle.service.data")
const createProductBundleService = require("../../../../src/services/product/create.productbundle.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProductBundleService = new createProductBundleService();
const CreateProductBundleServiceData = new createProductBundleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productbundle.ts.001] | FunctionPath : [src/services/product/create.productbundle.service.js/createOneProductBundle()]", () => {


	test(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC001.description, async () => {

        const output = await CreateProductBundleService.createOneProductBundle(
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC001.input.databaseConnector,
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC001.input.apiID,
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC001.input.config,
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC001.output)[2])
	});



    test(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC002.description, async () => {

        const output = await CreateProductBundleService.createOneProductBundle(
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC002.input.databaseConnector,
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC002.input.apiID,
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC002.input.config,
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC002.output.message)        
	});



    test(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC003.description, async () => {

        const output = await CreateProductBundleService.createOneProductBundle(
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC003.input.databaseConnector,
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC003.input.apiID,
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC003.input.config,
            CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProductBundleServiceData.CREATE_ONE_PRODUCTBUNDLE_TS001_TC003.output.message)        
	});

});