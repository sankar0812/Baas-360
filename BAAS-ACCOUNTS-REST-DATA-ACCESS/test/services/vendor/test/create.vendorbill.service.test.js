/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorbill service class
**/

/**
 * Importing all required modules here
 */

const createVendorBillServiceData = require("../data/create.vendorbill.service.data")
const createVendorBillService = require("../../../../src/services/vendor/create.vendorbill.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorBillService = new createVendorBillService();
const CreateVendorBillServiceData = new createVendorBillServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbill.ts.001] | FunctionPath : [src/services/vendor/create.vendorbill.service.js/createOneVendorBill()]", () => {


	test(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC001.description, async () => {

        const output = await CreateVendorBillService.createOneVendorBill(
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC001.input.databaseConnector,
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC001.input.apiID,
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC001.input.config,
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC001.output)[2])
	});



    test(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC002.description, async () => {

        const output = await CreateVendorBillService.createOneVendorBill(
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC002.input.databaseConnector,
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC002.input.apiID,
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC002.input.config,
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC002.output.message)        
	});



    test(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC003.description, async () => {

        const output = await CreateVendorBillService.createOneVendorBill(
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC003.input.databaseConnector,
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC003.input.apiID,
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC003.input.config,
            CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorBillServiceData.CREATE_ONE_VENDORBILL_TS001_TC003.output.message)        
	});

});