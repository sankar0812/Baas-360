/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendor service class
**/

/**
 * Importing all required modules here
 */

const createVendorServiceData = require("../data/create.vendor.service.data")
const createVendorService = require("../../../../src/services/vendor/create.vendor.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorService = new createVendorService();
const CreateVendorServiceData = new createVendorServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendor.ts.001] | FunctionPath : [src/services/vendor/create.vendor.service.js/createOneVendor()]", () => {


	test(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC001.description, async () => {

        const output = await CreateVendorService.createOneVendor(
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC001.input.databaseConnector,
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC001.input.apiID,
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC001.input.config,
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC001.output)[2])
	});



    test(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC002.description, async () => {

        const output = await CreateVendorService.createOneVendor(
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC002.input.databaseConnector,
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC002.input.apiID,
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC002.input.config,
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC002.output.message)        
	});



    test(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC003.description, async () => {

        const output = await CreateVendorService.createOneVendor(
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC003.input.databaseConnector,
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC003.input.apiID,
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC003.input.config,
            CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorServiceData.CREATE_ONE_VENDOR_TS001_TC003.output.message)        
	});

});