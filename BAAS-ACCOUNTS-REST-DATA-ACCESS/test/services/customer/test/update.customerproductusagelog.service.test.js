

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customerproductusagelog service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerProductUsageLogServiceData = require("../data/update.customerproductusagelog.service.data")
const updateCustomerProductUsageLogService = require("../../../../src/services/customer/update.customerproductusagelog.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerProductUsageLogService = new updateCustomerProductUsageLogService();
const UpdateCustomerProductUsageLogServiceData = new updateCustomerProductUsageLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusagelog.ts.001] | FunctionPath : [src/services/customer/update.customerproductusagelog.service.js/updateCustomerProductUsageLog()]", () => {

	test(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.description, async () => {

        const output = await UpdateCustomerProductUsageLogService.updateCustomerProductUsageLog(
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.databaseConnector,
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.apiID,
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.config,
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[2])
	});

    test(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.description, async () => {

        const output = await UpdateCustomerProductUsageLogService.updateCustomerProductUsageLog(
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.databaseConnector,
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.apiID,
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.config,
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.message)        
	});

    test(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.description, async () => {

        const output = await UpdateCustomerProductUsageLogService.updateCustomerProductUsageLog(
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.databaseConnector,
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.apiID,
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.config,
            UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerProductUsageLogServiceData.UPDATE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.output.message)        
	});

});
