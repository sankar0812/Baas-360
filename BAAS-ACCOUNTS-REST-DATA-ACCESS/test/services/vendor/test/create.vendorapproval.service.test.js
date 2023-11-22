/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorapproval service class
**/

/**
 * Importing all required modules here
 */

const createVendorApprovalServiceData = require("../data/create.vendorapproval.service.data")
const createVendorApprovalService = require("../../../../src/services/vendor/create.vendorapproval.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorApprovalService = new createVendorApprovalService();
const CreateVendorApprovalServiceData = new createVendorApprovalServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapproval.ts.001] | FunctionPath : [src/services/vendor/create.vendorapproval.service.js/createOneVendorApproval()]", () => {


	test(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC001.description, async () => {

        const output = await CreateVendorApprovalService.createOneVendorApproval(
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC001.input.databaseConnector,
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC001.input.apiID,
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC001.input.config,
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC001.output)[2])
	});



    test(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC002.description, async () => {

        const output = await CreateVendorApprovalService.createOneVendorApproval(
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC002.input.databaseConnector,
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC002.input.apiID,
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC002.input.config,
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC002.output.message)        
	});



    test(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC003.description, async () => {

        const output = await CreateVendorApprovalService.createOneVendorApproval(
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC003.input.databaseConnector,
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC003.input.apiID,
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC003.input.config,
            CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorApprovalServiceData.CREATE_ONE_VENDORAPPROVAL_TS001_TC003.output.message)        
	});

});