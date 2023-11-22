

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update productpackage service class
**/

/**
 * Importing all required modules here
 */

const updateProductPackageServiceData = require("../data/update.productpackage.service.data")
const updateProductPackageService = require("../../../../src/services/product/update.productpackage.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProductPackageService = new updateProductPackageService();
const UpdateProductPackageServiceData = new updateProductPackageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productpackage.ts.001] | FunctionPath : [src/services/product/update.productpackage.service.js/updateProductPackage()]", () => {

	test(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC001.description, async () => {

        const output = await UpdateProductPackageService.updateProductPackage(
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC001.input.databaseConnector,
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC001.input.apiID,
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC001.input.config,
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC001.output)[2])
	});

    test(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC002.description, async () => {

        const output = await UpdateProductPackageService.updateProductPackage(
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC002.input.databaseConnector,
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC002.input.apiID,
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC002.input.config,
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC002.output.message)        
	});

    test(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC003.description, async () => {

        const output = await UpdateProductPackageService.updateProductPackage(
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC003.input.databaseConnector,
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC003.input.apiID,
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC003.input.config,
            UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProductPackageServiceData.UPDATE_PRODUCTPACKAGE_TS001_TC003.output.message)        
	});

});
