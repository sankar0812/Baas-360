/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorbillitem service class
**/

/**
 * Importing all required modules here
 */

const createVendorBillItemServiceData = require("../data/create.vendorbillitem.service.data")
const createVendorBillItemService = require("../../../../src/services/vendor/create.vendorbillitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorBillItemService = new createVendorBillItemService();
const CreateVendorBillItemServiceData = new createVendorBillItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbillitem.ts.001] | FunctionPath : [src/services/vendor/create.vendorbillitem.service.js/createOneVendorBillItem()]", () => {


	test(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC001.description, async () => {

        const output = await CreateVendorBillItemService.createOneVendorBillItem(
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC001.input.databaseConnector,
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC001.input.apiID,
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC001.input.config,
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC001.output)[2])
	});



    test(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC002.description, async () => {

        const output = await CreateVendorBillItemService.createOneVendorBillItem(
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC002.input.databaseConnector,
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC002.input.apiID,
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC002.input.config,
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC002.output.message)        
	});



    test(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC003.description, async () => {

        const output = await CreateVendorBillItemService.createOneVendorBillItem(
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC003.input.databaseConnector,
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC003.input.apiID,
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC003.input.config,
            CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorBillItemServiceData.CREATE_ONE_VENDORBILLITEM_TS001_TC003.output.message)        
	});

});