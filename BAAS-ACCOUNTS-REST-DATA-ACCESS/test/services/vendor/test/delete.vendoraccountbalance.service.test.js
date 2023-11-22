/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendoraccountbalance service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorAccountBalanceServiceData = require("../data/delete.vendoraccountbalance.service.data")
const deleteVendorAccountBalanceService = require("../../../../src/services/vendor/delete.vendoraccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorAccountBalanceService = new deleteVendorAccountBalanceService();
const DeleteVendorAccountBalanceServiceData = new deleteVendorAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccountbalance.ts.001] | FunctionPath : [src/services/vendor/delete.vendoraccountbalance.service.js/deleteOneVendorAccountBalance()]", () => {


	test(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await DeleteVendorAccountBalanceService.deleteOneVendorAccountBalance(
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.input.apiID,
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.input.config,
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.output)[2])
	});



    test(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await DeleteVendorAccountBalanceService.deleteOneVendorAccountBalance(
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.input.apiID,
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.input.config,
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.output.message)        
	});



    test(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await DeleteVendorAccountBalanceService.deleteOneVendorAccountBalance(
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.input.apiID,
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.input.config,
            DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorAccountBalanceServiceData.DELETE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});
