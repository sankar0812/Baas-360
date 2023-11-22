

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendoraccount service class
**/

/**
 * Importing all required modules here
 */

const updateVendorAccountServiceData = require("../data/update.vendoraccount.service.data")
const updateVendorAccountService = require("../../../../src/services/vendor/update.vendoraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorAccountService = new updateVendorAccountService();
const UpdateVendorAccountServiceData = new updateVendorAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccount.ts.001] | FunctionPath : [src/services/vendor/update.vendoraccount.service.js/updateVendorAccount()]", () => {

	test(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC001.description, async () => {

        const output = await UpdateVendorAccountService.updateVendorAccount(
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC001.input.databaseConnector,
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC001.input.apiID,
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC001.input.config,
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC001.output)[2])
	});

    test(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC002.description, async () => {

        const output = await UpdateVendorAccountService.updateVendorAccount(
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC002.input.databaseConnector,
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC002.input.apiID,
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC002.input.config,
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC002.output.message)        
	});

    test(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC003.description, async () => {

        const output = await UpdateVendorAccountService.updateVendorAccount(
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC003.input.databaseConnector,
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC003.input.apiID,
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC003.input.config,
            UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorAccountServiceData.UPDATE_VENDORACCOUNT_TS001_TC003.output.message)        
	});

});
