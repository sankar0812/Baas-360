

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorbillitem service class
**/

/**
 * Importing all required modules here
 */

const updateVendorBillItemServiceData = require("../data/update.vendorbillitem.service.data")
const updateVendorBillItemService = require("../../../../src/services/vendor/update.vendorbillitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorBillItemService = new updateVendorBillItemService();
const UpdateVendorBillItemServiceData = new updateVendorBillItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbillitem.ts.001] | FunctionPath : [src/services/vendor/update.vendorbillitem.service.js/updateVendorBillItem()]", () => {

	test(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC001.description, async () => {

        const output = await UpdateVendorBillItemService.updateVendorBillItem(
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC001.input.databaseConnector,
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC001.input.apiID,
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC001.input.config,
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC001.output)[2])
	});

    test(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC002.description, async () => {

        const output = await UpdateVendorBillItemService.updateVendorBillItem(
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC002.input.databaseConnector,
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC002.input.apiID,
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC002.input.config,
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC002.output.message)        
	});

    test(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC003.description, async () => {

        const output = await UpdateVendorBillItemService.updateVendorBillItem(
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC003.input.databaseConnector,
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC003.input.apiID,
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC003.input.config,
            UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorBillItemServiceData.UPDATE_VENDORBILLITEM_TS001_TC003.output.message)        
	});

});
