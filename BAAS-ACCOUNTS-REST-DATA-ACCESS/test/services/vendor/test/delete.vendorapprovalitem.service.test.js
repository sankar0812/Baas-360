/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorapprovalitem service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorApprovalItemServiceData = require("../data/delete.vendorapprovalitem.service.data")
const deleteVendorApprovalItemService = require("../../../../src/services/vendor/delete.vendorapprovalitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorApprovalItemService = new deleteVendorApprovalItemService();
const DeleteVendorApprovalItemServiceData = new deleteVendorApprovalItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001] | FunctionPath : [src/services/vendor/delete.vendorapprovalitem.service.js/deleteOneVendorApprovalItem()]", () => {


	test(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC001.description, async () => {

        const output = await DeleteVendorApprovalItemService.deleteOneVendorApprovalItem(
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC001.input.databaseConnector,
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC001.input.apiID,
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC001.input.config,
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC001.output)[2])
	});



    test(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC002.description, async () => {

        const output = await DeleteVendorApprovalItemService.deleteOneVendorApprovalItem(
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC002.input.databaseConnector,
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC002.input.apiID,
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC002.input.config,
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC002.output.message)        
	});



    test(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC003.description, async () => {

        const output = await DeleteVendorApprovalItemService.deleteOneVendorApprovalItem(
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC003.input.databaseConnector,
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC003.input.apiID,
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC003.input.config,
            DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorApprovalItemServiceData.DELETE_ONE_VENDORAPPROVALITEM_TS001_TC003.output.message)        
	});

});
