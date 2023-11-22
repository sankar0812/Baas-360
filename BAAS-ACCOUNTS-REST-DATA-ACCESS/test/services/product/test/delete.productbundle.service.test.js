/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete productbundle service class
**/

/**
 * Importing all required modules here
 */

const deleteProductBundleServiceData = require("../data/delete.productbundle.service.data")
const deleteProductBundleService = require("../../../../src/services/product/delete.productbundle.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProductBundleService = new deleteProductBundleService();
const DeleteProductBundleServiceData = new deleteProductBundleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productbundle.ts.001] | FunctionPath : [src/services/product/delete.productbundle.service.js/deleteOneProductBundle()]", () => {


	test(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC001.description, async () => {

        const output = await DeleteProductBundleService.deleteOneProductBundle(
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC001.input.databaseConnector,
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC001.input.apiID,
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC001.input.config,
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC001.output)[2])
	});



    test(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC002.description, async () => {

        const output = await DeleteProductBundleService.deleteOneProductBundle(
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC002.input.databaseConnector,
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC002.input.apiID,
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC002.input.config,
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC002.output.message)        
	});



    test(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC003.description, async () => {

        const output = await DeleteProductBundleService.deleteOneProductBundle(
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC003.input.databaseConnector,
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC003.input.apiID,
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC003.input.config,
            DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProductBundleServiceData.DELETE_ONE_PRODUCTBUNDLE_TS001_TC003.output.message)        
	});

});
