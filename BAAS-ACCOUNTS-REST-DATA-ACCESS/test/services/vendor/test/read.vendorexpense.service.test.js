/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorExpense service class
**/

/**
 * Importing all required modules here
 */

const readVendorExpenseServiceData = require("../data/read.vendorexpense.service.data")
const readVendorExpenseService = require("../../../../src/services/vendor/read.vendorexpense.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorExpenseService = new readVendorExpenseService();
const ReadVendorExpenseServiceData = new readVendorExpenseServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorexpense.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorExpenses()]", () => {


	test(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC001.description, async () => {

        const output = await ReadVendorExpenseService.readVendorExpenses(
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC001.input.databaseConnector,
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC001.input.apiID,
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC001.input.config,
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC001.output)[2])
	});



    test(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC002.description, async () => {

        const output = await ReadVendorExpenseService.readVendorExpenses(
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC002.input.databaseConnector,
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC002.input.apiID,
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC002.input.config,
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC002.output.message)        
	});



    test(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC003.description, async () => {

        const output = await ReadVendorExpenseService.readVendorExpenses(
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC003.input.databaseConnector,
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC003.input.apiID,
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC003.input.config,
            ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorExpenseServiceData.READ_VENDOREXPENSE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorexpense.ts.002] | FunctionPath : [src/services/vendor/read.vendorexpense.service.js/readOneVendorExpense()]", () => {


	test(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC001.description, async () => {

        const output = await ReadVendorExpenseService.readOneVendorExpense(
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC001.input.databaseConnector,
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC001.input.apiID,
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC001.input.config,
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC001.output)[2])
	});



    test(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC002.description, async () => {

        const output = await ReadVendorExpenseService.readOneVendorExpense(
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC002.input.databaseConnector,
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC002.input.apiID,
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC002.input.config,
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC002.output.message)        
	});



    test(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC003.description, async () => {

        const output = await ReadVendorExpenseService.readOneVendorExpense(
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC003.input.databaseConnector,
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC003.input.apiID,
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC003.input.config,
            ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorExpenseServiceData.READ_ONE_VENDOREXPENSE_TS002_TC003.output.message)        
	});

});