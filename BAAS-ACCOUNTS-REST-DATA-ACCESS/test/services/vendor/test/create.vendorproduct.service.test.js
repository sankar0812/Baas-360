/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorproduct service class
**/

/**
 * Importing all required modules here
 */

const createVendorProductServiceData = require("../data/create.vendorproduct.service.data")
const createVendorProductService = require("../../../../src/services/vendor/create.vendorproduct.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorProductService = new createVendorProductService();
const CreateVendorProductServiceData = new createVendorProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorproduct.ts.001] | FunctionPath : [src/services/vendor/create.vendorproduct.service.js/createOneVendorProduct()]", () => {


	test(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC001.description, async () => {

        const output = await CreateVendorProductService.createOneVendorProduct(
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC001.input.databaseConnector,
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC001.input.apiID,
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC001.input.config,
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC001.output)[2])
	});



    test(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC002.description, async () => {

        const output = await CreateVendorProductService.createOneVendorProduct(
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC002.input.databaseConnector,
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC002.input.apiID,
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC002.input.config,
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC002.output.message)        
	});



    test(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC003.description, async () => {

        const output = await CreateVendorProductService.createOneVendorProduct(
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC003.input.databaseConnector,
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC003.input.apiID,
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC003.input.config,
            CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorProductServiceData.CREATE_ONE_VENDORPRODUCT_TS001_TC003.output.message)        
	});

});