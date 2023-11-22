/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorBillItem service class
**/

/**
 * Importing all required modules here
 */

const readVendorBillItemServiceData = require("../data/read.vendorbillitem.service.data")
const readVendorBillItemService = require("../../../../src/services/vendor/read.vendorbillitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorBillItemService = new readVendorBillItemService();
const ReadVendorBillItemServiceData = new readVendorBillItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbillitem.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorBillItems()]", () => {


	test(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC001.description, async () => {

        const output = await ReadVendorBillItemService.readVendorBillItems(
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC001.input.databaseConnector,
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC001.input.apiID,
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC001.input.config,
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC001.output)[2])
	});



    test(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC002.description, async () => {

        const output = await ReadVendorBillItemService.readVendorBillItems(
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC002.input.databaseConnector,
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC002.input.apiID,
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC002.input.config,
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC002.output.message)        
	});



    test(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC003.description, async () => {

        const output = await ReadVendorBillItemService.readVendorBillItems(
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC003.input.databaseConnector,
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC003.input.apiID,
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC003.input.config,
            ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorBillItemServiceData.READ_VENDORBILLITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbillitem.ts.002] | FunctionPath : [src/services/vendor/read.vendorbillitem.service.js/readOneVendorBillItem()]", () => {


	test(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC001.description, async () => {

        const output = await ReadVendorBillItemService.readOneVendorBillItem(
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC001.input.databaseConnector,
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC001.input.apiID,
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC001.input.config,
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC001.output)[2])
	});



    test(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC002.description, async () => {

        const output = await ReadVendorBillItemService.readOneVendorBillItem(
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC002.input.databaseConnector,
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC002.input.apiID,
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC002.input.config,
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC002.output.message)        
	});



    test(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC003.description, async () => {

        const output = await ReadVendorBillItemService.readOneVendorBillItem(
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC003.input.databaseConnector,
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC003.input.apiID,
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC003.input.config,
            ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorBillItemServiceData.READ_ONE_VENDORBILLITEM_TS002_TC003.output.message)        
	});

});