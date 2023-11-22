/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorAccount service class
**/

/**
 * Importing all required modules here
 */

const readVendorAccountServiceData = require("../data/read.vendoraccount.service.data")
const readVendorAccountService = require("../../../../src/services/vendor/read.vendoraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorAccountService = new readVendorAccountService();
const ReadVendorAccountServiceData = new readVendorAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccount.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorAccounts()]", () => {


	test(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC001.description, async () => {

        const output = await ReadVendorAccountService.readVendorAccounts(
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC001.input.databaseConnector,
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC001.input.apiID,
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC001.input.config,
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC001.output)[2])
	});



    test(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC002.description, async () => {

        const output = await ReadVendorAccountService.readVendorAccounts(
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC002.input.databaseConnector,
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC002.input.apiID,
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC002.input.config,
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC002.output.message)        
	});



    test(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC003.description, async () => {

        const output = await ReadVendorAccountService.readVendorAccounts(
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC003.input.databaseConnector,
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC003.input.apiID,
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC003.input.config,
            ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorAccountServiceData.READ_VENDORACCOUNT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccount.ts.002] | FunctionPath : [src/services/vendor/read.vendoraccount.service.js/readOneVendorAccount()]", () => {


	test(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC001.description, async () => {

        const output = await ReadVendorAccountService.readOneVendorAccount(
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC001.input.databaseConnector,
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC001.input.apiID,
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC001.input.config,
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC001.output)[2])
	});



    test(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC002.description, async () => {

        const output = await ReadVendorAccountService.readOneVendorAccount(
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC002.input.databaseConnector,
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC002.input.apiID,
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC002.input.config,
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC002.output.message)        
	});



    test(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC003.description, async () => {

        const output = await ReadVendorAccountService.readOneVendorAccount(
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC003.input.databaseConnector,
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC003.input.apiID,
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC003.input.config,
            ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorAccountServiceData.READ_ONE_VENDORACCOUNT_TS002_TC003.output.message)        
	});

});