/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorAccountBalance service class
**/

/**
 * Importing all required modules here
 */

const readVendorAccountBalanceServiceData = require("../data/read.vendoraccountbalance.service.data")
const readVendorAccountBalanceService = require("../../../../src/services/vendor/read.vendoraccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorAccountBalanceService = new readVendorAccountBalanceService();
const ReadVendorAccountBalanceServiceData = new readVendorAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccountbalance.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorAccountBalances()]", () => {


	test(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await ReadVendorAccountBalanceService.readVendorAccountBalances(
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC001.input.apiID,
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC001.input.config,
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC001.output)[2])
	});



    test(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await ReadVendorAccountBalanceService.readVendorAccountBalances(
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC002.input.apiID,
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC002.input.config,
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC002.output.message)        
	});



    test(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await ReadVendorAccountBalanceService.readVendorAccountBalances(
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC003.input.apiID,
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC003.input.config,
            ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorAccountBalanceServiceData.READ_VENDORACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccountbalance.ts.002] | FunctionPath : [src/services/vendor/read.vendoraccountbalance.service.js/readOneVendorAccountBalance()]", () => {


	test(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC001.description, async () => {

        const output = await ReadVendorAccountBalanceService.readOneVendorAccountBalance(
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC001.input.databaseConnector,
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC001.input.apiID,
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC001.input.config,
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC001.output)[2])
	});



    test(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC002.description, async () => {

        const output = await ReadVendorAccountBalanceService.readOneVendorAccountBalance(
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC002.input.databaseConnector,
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC002.input.apiID,
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC002.input.config,
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC002.output.message)        
	});



    test(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC003.description, async () => {

        const output = await ReadVendorAccountBalanceService.readOneVendorAccountBalance(
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC003.input.databaseConnector,
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC003.input.apiID,
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC003.input.config,
            ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorAccountBalanceServiceData.READ_ONE_VENDORACCOUNTBALANCE_TS002_TC003.output.message)        
	});

});