

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update merchant service class
**/

/**
 * Importing all required modules here
 */

const updateMerchantServiceData = require("../data/update.merchant.service.data")
const updateMerchantService = require("../../../../src/services/merchant/update.merchant.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateMerchantService = new updateMerchantService();
const UpdateMerchantServiceData = new updateMerchantServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.merchant.ts.001] | FunctionPath : [src/services/merchant/update.merchant.service.js/updateMerchant()]", () => {

	test(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC001.description, async () => {

        const output = await UpdateMerchantService.updateMerchant(
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC001.input.databaseConnector,
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC001.input.apiID,
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC001.input.config,
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC001.output)[2])
	});

    test(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC002.description, async () => {

        const output = await UpdateMerchantService.updateMerchant(
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC002.input.databaseConnector,
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC002.input.apiID,
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC002.input.config,
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC002.output.message)        
	});

    test(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC003.description, async () => {

        const output = await UpdateMerchantService.updateMerchant(
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC003.input.databaseConnector,
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC003.input.apiID,
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC003.input.config,
            UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateMerchantServiceData.UPDATE_MERCHANT_TS001_TC003.output.message)        
	});

});
