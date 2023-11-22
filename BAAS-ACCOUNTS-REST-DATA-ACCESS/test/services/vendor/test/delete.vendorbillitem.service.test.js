/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorbillitem service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorBillItemServiceData = require("../data/delete.vendorbillitem.service.data")
const deleteVendorBillItemService = require("../../../../src/services/vendor/delete.vendorbillitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorBillItemService = new deleteVendorBillItemService();
const DeleteVendorBillItemServiceData = new deleteVendorBillItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbillitem.ts.001] | FunctionPath : [src/services/vendor/delete.vendorbillitem.service.js/deleteOneVendorBillItem()]", () => {


	test(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC001.description, async () => {

        const output = await DeleteVendorBillItemService.deleteOneVendorBillItem(
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC001.input.databaseConnector,
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC001.input.apiID,
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC001.input.config,
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC001.output)[2])
	});



    test(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC002.description, async () => {

        const output = await DeleteVendorBillItemService.deleteOneVendorBillItem(
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC002.input.databaseConnector,
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC002.input.apiID,
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC002.input.config,
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC002.output.message)        
	});



    test(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC003.description, async () => {

        const output = await DeleteVendorBillItemService.deleteOneVendorBillItem(
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC003.input.databaseConnector,
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC003.input.apiID,
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC003.input.config,
            DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorBillItemServiceData.DELETE_ONE_VENDORBILLITEM_TS001_TC003.output.message)        
	});

});
