/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendoraccount service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorAccountServiceData = require("../data/delete.vendoraccount.service.data")
const deleteVendorAccountService = require("../../../../src/services/vendor/delete.vendoraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorAccountService = new deleteVendorAccountService();
const DeleteVendorAccountServiceData = new deleteVendorAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccount.ts.001] | FunctionPath : [src/services/vendor/delete.vendoraccount.service.js/deleteOneVendorAccount()]", () => {


	test(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC001.description, async () => {

        const output = await DeleteVendorAccountService.deleteOneVendorAccount(
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC001.input.databaseConnector,
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC001.input.apiID,
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC001.input.config,
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC001.output)[2])
	});



    test(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC002.description, async () => {

        const output = await DeleteVendorAccountService.deleteOneVendorAccount(
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC002.input.databaseConnector,
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC002.input.apiID,
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC002.input.config,
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC002.output.message)        
	});



    test(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC003.description, async () => {

        const output = await DeleteVendorAccountService.deleteOneVendorAccount(
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC003.input.databaseConnector,
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC003.input.apiID,
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC003.input.config,
            DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorAccountServiceData.DELETE_ONE_VENDORACCOUNT_TS001_TC003.output.message)        
	});

});
