/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorapproval service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorApprovalServiceData = require("../data/delete.vendorapproval.service.data")
const deleteVendorApprovalService = require("../../../../src/services/vendor/delete.vendorapproval.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorApprovalService = new deleteVendorApprovalService();
const DeleteVendorApprovalServiceData = new deleteVendorApprovalServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapproval.ts.001] | FunctionPath : [src/services/vendor/delete.vendorapproval.service.js/deleteOneVendorApproval()]", () => {


	test(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC001.description, async () => {

        const output = await DeleteVendorApprovalService.deleteOneVendorApproval(
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC001.input.databaseConnector,
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC001.input.apiID,
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC001.input.config,
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC001.output)[2])
	});



    test(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC002.description, async () => {

        const output = await DeleteVendorApprovalService.deleteOneVendorApproval(
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC002.input.databaseConnector,
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC002.input.apiID,
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC002.input.config,
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC002.output.message)        
	});



    test(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC003.description, async () => {

        const output = await DeleteVendorApprovalService.deleteOneVendorApproval(
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC003.input.databaseConnector,
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC003.input.apiID,
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC003.input.config,
            DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorApprovalServiceData.DELETE_ONE_VENDORAPPROVAL_TS001_TC003.output.message)        
	});

});
