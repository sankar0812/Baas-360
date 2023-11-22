/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customerproductusagelog service class
**/

/**
 * Importing all required modules here
 */

const createCustomerProductUsageLogServiceData = require("../data/create.customerproductusagelog.service.data")
const createCustomerProductUsageLogService = require("../../../../src/services/customer/create.customerproductusagelog.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerProductUsageLogService = new createCustomerProductUsageLogService();
const CreateCustomerProductUsageLogServiceData = new createCustomerProductUsageLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusagelog.ts.001] | FunctionPath : [src/services/customer/create.customerproductusagelog.service.js/createOneCustomerProductUsageLog()]", () => {


	test(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.description, async () => {

        const output = await CreateCustomerProductUsageLogService.createOneCustomerProductUsageLog(
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.databaseConnector,
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.apiID,
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.config,
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[2])
	});



    test(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.description, async () => {

        const output = await CreateCustomerProductUsageLogService.createOneCustomerProductUsageLog(
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.databaseConnector,
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.apiID,
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.config,
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.message)        
	});



    test(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.description, async () => {

        const output = await CreateCustomerProductUsageLogService.createOneCustomerProductUsageLog(
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.databaseConnector,
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.apiID,
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.config,
            CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerProductUsageLogServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.output.message)        
	});

});