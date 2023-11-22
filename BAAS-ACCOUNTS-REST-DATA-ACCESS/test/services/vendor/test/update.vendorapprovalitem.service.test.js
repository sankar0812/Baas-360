

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorapprovalitem service class
**/

/**
 * Importing all required modules here
 */

const updateVendorApprovalItemServiceData = require("../data/update.vendorapprovalitem.service.data")
const updateVendorApprovalItemService = require("../../../../src/services/vendor/update.vendorapprovalitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorApprovalItemService = new updateVendorApprovalItemService();
const UpdateVendorApprovalItemServiceData = new updateVendorApprovalItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001] | FunctionPath : [src/services/vendor/update.vendorapprovalitem.service.js/updateVendorApprovalItem()]", () => {

	test(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC001.description, async () => {

        const output = await UpdateVendorApprovalItemService.updateVendorApprovalItem(
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC001.input.databaseConnector,
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC001.input.apiID,
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC001.input.config,
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC001.output)[2])
	});

    test(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC002.description, async () => {

        const output = await UpdateVendorApprovalItemService.updateVendorApprovalItem(
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC002.input.databaseConnector,
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC002.input.apiID,
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC002.input.config,
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC002.output.message)        
	});

    test(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC003.description, async () => {

        const output = await UpdateVendorApprovalItemService.updateVendorApprovalItem(
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC003.input.databaseConnector,
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC003.input.apiID,
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC003.input.config,
            UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorApprovalItemServiceData.UPDATE_VENDORAPPROVALITEM_TS001_TC003.output.message)        
	});

});
