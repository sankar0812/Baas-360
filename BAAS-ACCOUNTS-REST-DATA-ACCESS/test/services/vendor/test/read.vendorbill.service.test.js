/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorBill service class
**/

/**
 * Importing all required modules here
 */

const readVendorBillServiceData = require("../data/read.vendorbill.service.data")
const readVendorBillService = require("../../../../src/services/vendor/read.vendorbill.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorBillService = new readVendorBillService();
const ReadVendorBillServiceData = new readVendorBillServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbill.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorBills()]", () => {


	test(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC001.description, async () => {

        const output = await ReadVendorBillService.readVendorBills(
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC001.input.databaseConnector,
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC001.input.apiID,
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC001.input.config,
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC001.output)[2])
	});



    test(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC002.description, async () => {

        const output = await ReadVendorBillService.readVendorBills(
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC002.input.databaseConnector,
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC002.input.apiID,
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC002.input.config,
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC002.output.message)        
	});



    test(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC003.description, async () => {

        const output = await ReadVendorBillService.readVendorBills(
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC003.input.databaseConnector,
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC003.input.apiID,
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC003.input.config,
            ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorBillServiceData.READ_VENDORBILL_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbill.ts.002] | FunctionPath : [src/services/vendor/read.vendorbill.service.js/readOneVendorBill()]", () => {


	test(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC001.description, async () => {

        const output = await ReadVendorBillService.readOneVendorBill(
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC001.input.databaseConnector,
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC001.input.apiID,
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC001.input.config,
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC001.output)[2])
	});



    test(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC002.description, async () => {

        const output = await ReadVendorBillService.readOneVendorBill(
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC002.input.databaseConnector,
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC002.input.apiID,
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC002.input.config,
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC002.output.message)        
	});



    test(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC003.description, async () => {

        const output = await ReadVendorBillService.readOneVendorBill(
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC003.input.databaseConnector,
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC003.input.apiID,
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC003.input.config,
            ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorBillServiceData.READ_ONE_VENDORBILL_TS002_TC003.output.message)        
	});

});