/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customerproductusage service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerProductUsageServiceData = require("../data/delete.customerproductusage.service.data")
const deleteCustomerProductUsageService = require("../../../../src/services/customer/delete.customerproductusage.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerProductUsageService = new deleteCustomerProductUsageService();
const DeleteCustomerProductUsageServiceData = new deleteCustomerProductUsageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusage.ts.001] | FunctionPath : [src/services/customer/delete.customerproductusage.service.js/deleteOneCustomerProductUsage()]", () => {


	test(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.description, async () => {

        const output = await DeleteCustomerProductUsageService.deleteOneCustomerProductUsage(
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.databaseConnector,
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.apiID,
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.config,
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[2])
	});



    test(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.description, async () => {

        const output = await DeleteCustomerProductUsageService.deleteOneCustomerProductUsage(
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.databaseConnector,
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.apiID,
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.config,
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.message)        
	});



    test(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.description, async () => {

        const output = await DeleteCustomerProductUsageService.deleteOneCustomerProductUsage(
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.databaseConnector,
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.apiID,
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.config,
            DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerProductUsageServiceData.DELETE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.output.message)        
	});

});
