/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customerproductusagelog service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerProductUsageLogServiceData = require("../data/delete.customerproductusagelog.service.data")
const deleteCustomerProductUsageLogService = require("../../../../src/services/customer/delete.customerproductusagelog.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerProductUsageLogService = new deleteCustomerProductUsageLogService();
const DeleteCustomerProductUsageLogServiceData = new deleteCustomerProductUsageLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusagelog.ts.001] | FunctionPath : [src/services/customer/delete.customerproductusagelog.service.js/deleteOneCustomerProductUsageLog()]", () => {


	test(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.description, async () => {

        const output = await DeleteCustomerProductUsageLogService.deleteOneCustomerProductUsageLog(
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.databaseConnector,
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.apiID,
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.config,
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[2])
	});



    test(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.description, async () => {

        const output = await DeleteCustomerProductUsageLogService.deleteOneCustomerProductUsageLog(
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.databaseConnector,
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.apiID,
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.config,
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.message)        
	});



    test(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.description, async () => {

        const output = await DeleteCustomerProductUsageLogService.deleteOneCustomerProductUsageLog(
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.databaseConnector,
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.apiID,
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.config,
            DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerProductUsageLogServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.output.message)        
	});

});
