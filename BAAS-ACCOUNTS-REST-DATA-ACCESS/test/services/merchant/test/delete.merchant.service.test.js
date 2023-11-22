/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete merchant service class
**/

/**
 * Importing all required modules here
 */

const deleteMerchantServiceData = require("../data/delete.merchant.service.data")
const deleteMerchantService = require("../../../../src/services/merchant/delete.merchant.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteMerchantService = new deleteMerchantService();
const DeleteMerchantServiceData = new deleteMerchantServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.merchant.ts.001] | FunctionPath : [src/services/merchant/delete.merchant.service.js/deleteOneMerchant()]", () => {


	test(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC001.description, async () => {

        const output = await DeleteMerchantService.deleteOneMerchant(
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC001.input.databaseConnector,
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC001.input.apiID,
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC001.input.config,
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC001.output)[2])
	});



    test(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC002.description, async () => {

        const output = await DeleteMerchantService.deleteOneMerchant(
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC002.input.databaseConnector,
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC002.input.apiID,
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC002.input.config,
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC002.output.message)        
	});



    test(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC003.description, async () => {

        const output = await DeleteMerchantService.deleteOneMerchant(
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC003.input.databaseConnector,
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC003.input.apiID,
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC003.input.config,
            DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteMerchantServiceData.DELETE_ONE_MERCHANT_TS001_TC003.output.message)        
	});

});
