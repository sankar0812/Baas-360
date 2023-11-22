/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorApprovalItem service class
**/

/**
 * Importing all required modules here
 */

const readVendorApprovalItemServiceData = require("../data/read.vendorapprovalitem.service.data")
const readVendorApprovalItemService = require("../../../../src/services/vendor/read.vendorapprovalitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorApprovalItemService = new readVendorApprovalItemService();
const ReadVendorApprovalItemServiceData = new readVendorApprovalItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorApprovalItems()]", () => {


	test(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC001.description, async () => {

        const output = await ReadVendorApprovalItemService.readVendorApprovalItems(
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC001.input.databaseConnector,
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC001.input.apiID,
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC001.input.config,
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC001.output)[2])
	});



    test(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC002.description, async () => {

        const output = await ReadVendorApprovalItemService.readVendorApprovalItems(
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC002.input.databaseConnector,
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC002.input.apiID,
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC002.input.config,
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC002.output.message)        
	});



    test(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC003.description, async () => {

        const output = await ReadVendorApprovalItemService.readVendorApprovalItems(
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC003.input.databaseConnector,
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC003.input.apiID,
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC003.input.config,
            ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorApprovalItemServiceData.READ_VENDORAPPROVALITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapprovalitem.ts.002] | FunctionPath : [src/services/vendor/read.vendorapprovalitem.service.js/readOneVendorApprovalItem()]", () => {


	test(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC001.description, async () => {

        const output = await ReadVendorApprovalItemService.readOneVendorApprovalItem(
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC001.input.databaseConnector,
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC001.input.apiID,
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC001.input.config,
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC001.output)[2])
	});



    test(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC002.description, async () => {

        const output = await ReadVendorApprovalItemService.readOneVendorApprovalItem(
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC002.input.databaseConnector,
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC002.input.apiID,
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC002.input.config,
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC002.output.message)        
	});



    test(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC003.description, async () => {

        const output = await ReadVendorApprovalItemService.readOneVendorApprovalItem(
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC003.input.databaseConnector,
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC003.input.apiID,
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC003.input.config,
            ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorApprovalItemServiceData.READ_ONE_VENDORAPPROVALITEM_TS002_TC003.output.message)        
	});

});