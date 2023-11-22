

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customerproductusage service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerProductUsageServiceData = require("../data/update.customerproductusage.service.data")
const updateCustomerProductUsageService = require("../../../../src/services/customer/update.customerproductusage.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerProductUsageService = new updateCustomerProductUsageService();
const UpdateCustomerProductUsageServiceData = new updateCustomerProductUsageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusage.ts.001] | FunctionPath : [src/services/customer/update.customerproductusage.service.js/updateCustomerProductUsage()]", () => {

	test(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC001.description, async () => {

        const output = await UpdateCustomerProductUsageService.updateCustomerProductUsage(
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.databaseConnector,
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.apiID,
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.config,
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[2])
	});

    test(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC002.description, async () => {

        const output = await UpdateCustomerProductUsageService.updateCustomerProductUsage(
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.databaseConnector,
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.apiID,
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.config,
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.message)        
	});

    test(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC003.description, async () => {

        const output = await UpdateCustomerProductUsageService.updateCustomerProductUsage(
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.databaseConnector,
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.apiID,
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.config,
            UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerProductUsageServiceData.UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC003.output.message)        
	});

});
