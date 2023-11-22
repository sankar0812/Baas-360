/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorexpense service class
**/

/**
 * Importing all required modules here
 */

const createVendorExpenseServiceData = require("../data/create.vendorexpense.service.data")
const createVendorExpenseService = require("../../../../src/services/vendor/create.vendorexpense.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorExpenseService = new createVendorExpenseService();
const CreateVendorExpenseServiceData = new createVendorExpenseServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorexpense.ts.001] | FunctionPath : [src/services/vendor/create.vendorexpense.service.js/createOneVendorExpense()]", () => {


	test(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC001.description, async () => {

        const output = await CreateVendorExpenseService.createOneVendorExpense(
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC001.input.databaseConnector,
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC001.input.apiID,
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC001.input.config,
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC001.output)[2])
	});



    test(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC002.description, async () => {

        const output = await CreateVendorExpenseService.createOneVendorExpense(
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC002.input.databaseConnector,
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC002.input.apiID,
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC002.input.config,
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC002.output.message)        
	});



    test(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC003.description, async () => {

        const output = await CreateVendorExpenseService.createOneVendorExpense(
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC003.input.databaseConnector,
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC003.input.apiID,
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC003.input.config,
            CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorExpenseServiceData.CREATE_ONE_VENDOREXPENSE_TS001_TC003.output.message)        
	});

});