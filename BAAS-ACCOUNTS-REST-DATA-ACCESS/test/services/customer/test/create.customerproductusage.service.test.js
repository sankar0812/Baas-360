/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customerproductusage service class
**/

/**
 * Importing all required modules here
 */

const createCustomerProductUsageServiceData = require("../data/create.customerproductusage.service.data")
const createCustomerProductUsageService = require("../../../../src/services/customer/create.customerproductusage.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerProductUsageService = new createCustomerProductUsageService();
const CreateCustomerProductUsageServiceData = new createCustomerProductUsageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusage.ts.001] | FunctionPath : [src/services/customer/create.customerproductusage.service.js/createOneCustomerProductUsage()]", () => {


	test(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.description, async () => {

        const output = await CreateCustomerProductUsageService.createOneCustomerProductUsage(
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.databaseConnector,
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.apiID,
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.config,
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[2])
	});



    test(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.description, async () => {

        const output = await CreateCustomerProductUsageService.createOneCustomerProductUsage(
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.databaseConnector,
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.apiID,
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.config,
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.message)        
	});



    test(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.description, async () => {

        const output = await CreateCustomerProductUsageService.createOneCustomerProductUsage(
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.databaseConnector,
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.apiID,
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.config,
            CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerProductUsageServiceData.CREATE_ONE_CUSTOMERPRODUCTUSAGE_TS001_TC003.output.message)        
	});

});