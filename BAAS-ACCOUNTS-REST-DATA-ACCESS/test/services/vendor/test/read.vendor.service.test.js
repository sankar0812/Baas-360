/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Vendor service class
**/

/**
 * Importing all required modules here
 */

const readVendorServiceData = require("../data/read.vendor.service.data")
const readVendorService = require("../../../../src/services/vendor/read.vendor.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorService = new readVendorService();
const ReadVendorServiceData = new readVendorServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendor.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendors()]", () => {


	test(ReadVendorServiceData.READ_VENDOR_TS001_TC001.description, async () => {

        const output = await ReadVendorService.readVendors(
            ReadVendorServiceData.READ_VENDOR_TS001_TC001.input.databaseConnector,
            ReadVendorServiceData.READ_VENDOR_TS001_TC001.input.apiID,
            ReadVendorServiceData.READ_VENDOR_TS001_TC001.input.config,
            ReadVendorServiceData.READ_VENDOR_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorServiceData.READ_VENDOR_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorServiceData.READ_VENDOR_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorServiceData.READ_VENDOR_TS001_TC001.output)[2])
	});



    test(ReadVendorServiceData.READ_VENDOR_TS001_TC002.description, async () => {

        const output = await ReadVendorService.readVendors(
            ReadVendorServiceData.READ_VENDOR_TS001_TC002.input.databaseConnector,
            ReadVendorServiceData.READ_VENDOR_TS001_TC002.input.apiID,
            ReadVendorServiceData.READ_VENDOR_TS001_TC002.input.config,
            ReadVendorServiceData.READ_VENDOR_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorServiceData.READ_VENDOR_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorServiceData.READ_VENDOR_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorServiceData.READ_VENDOR_TS001_TC002.output.message)        
	});



    test(ReadVendorServiceData.READ_VENDOR_TS001_TC003.description, async () => {

        const output = await ReadVendorService.readVendors(
            ReadVendorServiceData.READ_VENDOR_TS001_TC003.input.databaseConnector,
            ReadVendorServiceData.READ_VENDOR_TS001_TC003.input.apiID,
            ReadVendorServiceData.READ_VENDOR_TS001_TC003.input.config,
            ReadVendorServiceData.READ_VENDOR_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorServiceData.READ_VENDOR_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorServiceData.READ_VENDOR_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendor.ts.002] | FunctionPath : [src/services/vendor/read.vendor.service.js/readOneVendor()]", () => {


	test(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC001.description, async () => {

        const output = await ReadVendorService.readOneVendor(
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC001.input.databaseConnector,
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC001.input.apiID,
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC001.input.config,
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC001.output)[2])
	});



    test(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC002.description, async () => {

        const output = await ReadVendorService.readOneVendor(
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC002.input.databaseConnector,
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC002.input.apiID,
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC002.input.config,
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC002.output.message)        
	});



    test(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC003.description, async () => {

        const output = await ReadVendorService.readOneVendor(
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC003.input.databaseConnector,
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC003.input.apiID,
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC003.input.config,
            ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorServiceData.READ_ONE_VENDOR_TS002_TC003.output.message)        
	});

});