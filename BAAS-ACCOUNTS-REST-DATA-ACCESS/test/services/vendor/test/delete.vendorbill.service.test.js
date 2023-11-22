/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorbill service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorBillServiceData = require("../data/delete.vendorbill.service.data")
const deleteVendorBillService = require("../../../../src/services/vendor/delete.vendorbill.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorBillService = new deleteVendorBillService();
const DeleteVendorBillServiceData = new deleteVendorBillServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbill.ts.001] | FunctionPath : [src/services/vendor/delete.vendorbill.service.js/deleteOneVendorBill()]", () => {


	test(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC001.description, async () => {

        const output = await DeleteVendorBillService.deleteOneVendorBill(
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC001.input.databaseConnector,
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC001.input.apiID,
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC001.input.config,
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC001.output)[2])
	});



    test(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC002.description, async () => {

        const output = await DeleteVendorBillService.deleteOneVendorBill(
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC002.input.databaseConnector,
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC002.input.apiID,
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC002.input.config,
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC002.output.message)        
	});



    test(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC003.description, async () => {

        const output = await DeleteVendorBillService.deleteOneVendorBill(
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC003.input.databaseConnector,
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC003.input.apiID,
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC003.input.config,
            DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorBillServiceData.DELETE_ONE_VENDORBILL_TS001_TC003.output.message)        
	});

});
