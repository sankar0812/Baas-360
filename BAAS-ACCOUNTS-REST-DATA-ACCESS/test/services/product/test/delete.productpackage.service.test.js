/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete productpackage service class
**/

/**
 * Importing all required modules here
 */

const deleteProductPackageServiceData = require("../data/delete.productpackage.service.data")
const deleteProductPackageService = require("../../../../src/services/product/delete.productpackage.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProductPackageService = new deleteProductPackageService();
const DeleteProductPackageServiceData = new deleteProductPackageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productpackage.ts.001] | FunctionPath : [src/services/product/delete.productpackage.service.js/deleteOneProductPackage()]", () => {


	test(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC001.description, async () => {

        const output = await DeleteProductPackageService.deleteOneProductPackage(
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC001.input.databaseConnector,
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC001.input.apiID,
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC001.input.config,
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC001.output)[2])
	});



    test(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC002.description, async () => {

        const output = await DeleteProductPackageService.deleteOneProductPackage(
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC002.input.databaseConnector,
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC002.input.apiID,
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC002.input.config,
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC002.output.message)        
	});



    test(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC003.description, async () => {

        const output = await DeleteProductPackageService.deleteOneProductPackage(
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC003.input.databaseConnector,
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC003.input.apiID,
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC003.input.config,
            DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProductPackageServiceData.DELETE_ONE_PRODUCTPACKAGE_TS001_TC003.output.message)        
	});

});
