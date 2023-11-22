/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorproduct service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorProductServiceData = require("../data/delete.vendorproduct.service.data")
const deleteVendorProductService = require("../../../../src/services/vendor/delete.vendorproduct.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorProductService = new deleteVendorProductService();
const DeleteVendorProductServiceData = new deleteVendorProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorproduct.ts.001] | FunctionPath : [src/services/vendor/delete.vendorproduct.service.js/deleteOneVendorProduct()]", () => {


	test(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC001.description, async () => {

        const output = await DeleteVendorProductService.deleteOneVendorProduct(
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC001.input.databaseConnector,
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC001.input.apiID,
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC001.input.config,
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC001.output)[2])
	});



    test(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC002.description, async () => {

        const output = await DeleteVendorProductService.deleteOneVendorProduct(
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC002.input.databaseConnector,
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC002.input.apiID,
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC002.input.config,
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC002.output.message)        
	});



    test(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC003.description, async () => {

        const output = await DeleteVendorProductService.deleteOneVendorProduct(
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC003.input.databaseConnector,
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC003.input.apiID,
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC003.input.config,
            DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorProductServiceData.DELETE_ONE_VENDORPRODUCT_TS001_TC003.output.message)        
	});

});
