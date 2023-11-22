/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create productpackage service class
**/

/**
 * Importing all required modules here
 */

const createProductPackageServiceData = require("../data/create.productpackage.service.data")
const createProductPackageService = require("../../../../src/services/product/create.productpackage.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProductPackageService = new createProductPackageService();
const CreateProductPackageServiceData = new createProductPackageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productpackage.ts.001] | FunctionPath : [src/services/product/create.productpackage.service.js/createOneProductPackage()]", () => {


	test(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC001.description, async () => {

        const output = await CreateProductPackageService.createOneProductPackage(
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC001.input.databaseConnector,
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC001.input.apiID,
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC001.input.config,
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC001.output)[2])
	});



    test(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC002.description, async () => {

        const output = await CreateProductPackageService.createOneProductPackage(
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC002.input.databaseConnector,
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC002.input.apiID,
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC002.input.config,
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC002.output.message)        
	});



    test(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC003.description, async () => {

        const output = await CreateProductPackageService.createOneProductPackage(
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC003.input.databaseConnector,
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC003.input.apiID,
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC003.input.config,
            CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProductPackageServiceData.CREATE_ONE_PRODUCTPACKAGE_TS001_TC003.output.message)        
	});

});