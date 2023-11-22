

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update productbundle service class
**/

/**
 * Importing all required modules here
 */

const updateProductBundleServiceData = require("../data/update.productbundle.service.data")
const updateProductBundleService = require("../../../../src/services/product/update.productbundle.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProductBundleService = new updateProductBundleService();
const UpdateProductBundleServiceData = new updateProductBundleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productbundle.ts.001] | FunctionPath : [src/services/product/update.productbundle.service.js/updateProductBundle()]", () => {

	test(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC001.description, async () => {

        const output = await UpdateProductBundleService.updateProductBundle(
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC001.input.databaseConnector,
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC001.input.apiID,
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC001.input.config,
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC001.output)[2])
	});

    test(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC002.description, async () => {

        const output = await UpdateProductBundleService.updateProductBundle(
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC002.input.databaseConnector,
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC002.input.apiID,
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC002.input.config,
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC002.output.message)        
	});

    test(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC003.description, async () => {

        const output = await UpdateProductBundleService.updateProductBundle(
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC003.input.databaseConnector,
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC003.input.apiID,
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC003.input.config,
            UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProductBundleServiceData.UPDATE_PRODUCTBUNDLE_TS001_TC003.output.message)        
	});

});
