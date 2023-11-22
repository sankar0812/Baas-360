

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendoraccountbalance service class
**/

/**
 * Importing all required modules here
 */

const updateVendorAccountBalanceServiceData = require("../data/update.vendoraccountbalance.service.data")
const updateVendorAccountBalanceService = require("../../../../src/services/vendor/update.vendoraccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorAccountBalanceService = new updateVendorAccountBalanceService();
const UpdateVendorAccountBalanceServiceData = new updateVendorAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccountbalance.ts.001] | FunctionPath : [src/services/vendor/update.vendoraccountbalance.service.js/updateVendorAccountBalance()]", () => {

	test(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await UpdateVendorAccountBalanceService.updateVendorAccountBalance(
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC001.input.apiID,
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC001.input.config,
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC001.output)[2])
	});

    test(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await UpdateVendorAccountBalanceService.updateVendorAccountBalance(
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC002.input.apiID,
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC002.input.config,
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC002.output.message)        
	});

    test(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await UpdateVendorAccountBalanceService.updateVendorAccountBalance(
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC003.input.apiID,
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC003.input.config,
            UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorAccountBalanceServiceData.UPDATE_VENDORACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});
