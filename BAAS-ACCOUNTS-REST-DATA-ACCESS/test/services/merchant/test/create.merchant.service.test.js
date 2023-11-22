/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create merchant service class
**/

/**
 * Importing all required modules here
 */

const createMerchantServiceData = require("../data/create.merchant.service.data")
const createMerchantService = require("../../../../src/services/merchant/create.merchant.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateMerchantService = new createMerchantService();
const CreateMerchantServiceData = new createMerchantServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.merchant.ts.001] | FunctionPath : [src/services/merchant/create.merchant.service.js/createOneMerchant()]", () => {


	test(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC001.description, async () => {

        const output = await CreateMerchantService.createOneMerchant(
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC001.input.databaseConnector,
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC001.input.apiID,
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC001.input.config,
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC001.output)[2])
	});



    test(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC002.description, async () => {

        const output = await CreateMerchantService.createOneMerchant(
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC002.input.databaseConnector,
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC002.input.apiID,
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC002.input.config,
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC002.output.message)        
	});



    test(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC003.description, async () => {

        const output = await CreateMerchantService.createOneMerchant(
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC003.input.databaseConnector,
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC003.input.apiID,
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC003.input.config,
            CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateMerchantServiceData.CREATE_ONE_MERCHANT_TS001_TC003.output.message)        
	});

});