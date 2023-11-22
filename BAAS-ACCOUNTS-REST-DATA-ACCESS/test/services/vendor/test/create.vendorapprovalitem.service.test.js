/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorapprovalitem service class
**/

/**
 * Importing all required modules here
 */

const createVendorApprovalItemServiceData = require("../data/create.vendorapprovalitem.service.data")
const createVendorApprovalItemService = require("../../../../src/services/vendor/create.vendorapprovalitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorApprovalItemService = new createVendorApprovalItemService();
const CreateVendorApprovalItemServiceData = new createVendorApprovalItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001] | FunctionPath : [src/services/vendor/create.vendorapprovalitem.service.js/createOneVendorApprovalItem()]", () => {


	test(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC001.description, async () => {

        const output = await CreateVendorApprovalItemService.createOneVendorApprovalItem(
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC001.input.databaseConnector,
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC001.input.apiID,
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC001.input.config,
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC001.output)[2])
	});



    test(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC002.description, async () => {

        const output = await CreateVendorApprovalItemService.createOneVendorApprovalItem(
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC002.input.databaseConnector,
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC002.input.apiID,
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC002.input.config,
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC002.output.message)        
	});



    test(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC003.description, async () => {

        const output = await CreateVendorApprovalItemService.createOneVendorApprovalItem(
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC003.input.databaseConnector,
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC003.input.apiID,
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC003.input.config,
            CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorApprovalItemServiceData.CREATE_ONE_VENDORAPPROVALITEM_TS001_TC003.output.message)        
	});

});