

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorapproval service class
**/

/**
 * Importing all required modules here
 */

const updateVendorApprovalServiceData = require("../data/update.vendorapproval.service.data")
const updateVendorApprovalService = require("../../../../src/services/vendor/update.vendorapproval.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorApprovalService = new updateVendorApprovalService();
const UpdateVendorApprovalServiceData = new updateVendorApprovalServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapproval.ts.001] | FunctionPath : [src/services/vendor/update.vendorapproval.service.js/updateVendorApproval()]", () => {

	test(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC001.description, async () => {

        const output = await UpdateVendorApprovalService.updateVendorApproval(
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC001.input.databaseConnector,
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC001.input.apiID,
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC001.input.config,
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC001.output)[2])
	});

    test(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC002.description, async () => {

        const output = await UpdateVendorApprovalService.updateVendorApproval(
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC002.input.databaseConnector,
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC002.input.apiID,
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC002.input.config,
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC002.output.message)        
	});

    test(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC003.description, async () => {

        const output = await UpdateVendorApprovalService.updateVendorApproval(
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC003.input.databaseConnector,
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC003.input.apiID,
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC003.input.config,
            UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorApprovalServiceData.UPDATE_VENDORAPPROVAL_TS001_TC003.output.message)        
	});

});
