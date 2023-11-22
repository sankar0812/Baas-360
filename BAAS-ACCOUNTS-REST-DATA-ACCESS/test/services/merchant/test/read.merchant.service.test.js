/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Merchant service class
**/

/**
 * Importing all required modules here
 */

const readMerchantServiceData = require("../data/read.merchant.service.data")
const readMerchantService = require("../../../../src/services/merchant/read.merchant.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadMerchantService = new readMerchantService();
const ReadMerchantServiceData = new readMerchantServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.merchant.ts.001] | FunctionPath : [src/services/merchant/read.contianer.service.js/readMerchants()]", () => {


	test(ReadMerchantServiceData.READ_MERCHANT_TS001_TC001.description, async () => {

        const output = await ReadMerchantService.readMerchants(
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC001.input.databaseConnector,
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC001.input.apiID,
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC001.input.config,
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadMerchantServiceData.READ_MERCHANT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadMerchantServiceData.READ_MERCHANT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadMerchantServiceData.READ_MERCHANT_TS001_TC001.output)[2])
	});



    test(ReadMerchantServiceData.READ_MERCHANT_TS001_TC002.description, async () => {

        const output = await ReadMerchantService.readMerchants(
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC002.input.databaseConnector,
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC002.input.apiID,
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC002.input.config,
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadMerchantServiceData.READ_MERCHANT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadMerchantServiceData.READ_MERCHANT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadMerchantServiceData.READ_MERCHANT_TS001_TC002.output.message)        
	});



    test(ReadMerchantServiceData.READ_MERCHANT_TS001_TC003.description, async () => {

        const output = await ReadMerchantService.readMerchants(
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC003.input.databaseConnector,
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC003.input.apiID,
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC003.input.config,
            ReadMerchantServiceData.READ_MERCHANT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadMerchantServiceData.READ_MERCHANT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadMerchantServiceData.READ_MERCHANT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.merchant.ts.002] | FunctionPath : [src/services/merchant/read.merchant.service.js/readOneMerchant()]", () => {


	test(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC001.description, async () => {

        const output = await ReadMerchantService.readOneMerchant(
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC001.input.databaseConnector,
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC001.input.apiID,
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC001.input.config,
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC001.output)[2])
	});



    test(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC002.description, async () => {

        const output = await ReadMerchantService.readOneMerchant(
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC002.input.databaseConnector,
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC002.input.apiID,
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC002.input.config,
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC002.output.message)        
	});



    test(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC003.description, async () => {

        const output = await ReadMerchantService.readOneMerchant(
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC003.input.databaseConnector,
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC003.input.apiID,
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC003.input.config,
            ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadMerchantServiceData.READ_ONE_MERCHANT_TS002_TC003.output.message)        
	});

});