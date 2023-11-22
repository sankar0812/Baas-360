/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Customer service class
**/

/**
 * Importing all required modules here
 */

const readCustomerServiceData = require("../data/read.customer.service.data")
const readCustomerService = require("../../../../src/services/customer/read.customer.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerService = new readCustomerService();
const ReadCustomerServiceData = new readCustomerServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customer.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomers()]", () => {


	test(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC001.description, async () => {

        const output = await ReadCustomerService.readCustomers(
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC001.input.databaseConnector,
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC001.input.apiID,
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC001.input.config,
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC001.output)[2])
	});



    test(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC002.description, async () => {

        const output = await ReadCustomerService.readCustomers(
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC002.input.databaseConnector,
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC002.input.apiID,
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC002.input.config,
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC002.output.message)        
	});



    test(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC003.description, async () => {

        const output = await ReadCustomerService.readCustomers(
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC003.input.databaseConnector,
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC003.input.apiID,
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC003.input.config,
            ReadCustomerServiceData.READ_CUSTOMER_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerServiceData.READ_CUSTOMER_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customer.ts.002] | FunctionPath : [src/services/customer/read.customer.service.js/readOneCustomer()]", () => {


	test(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC001.description, async () => {

        const output = await ReadCustomerService.readOneCustomer(
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC001.input.databaseConnector,
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC001.input.apiID,
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC001.input.config,
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC001.output)[2])
	});



    test(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC002.description, async () => {

        const output = await ReadCustomerService.readOneCustomer(
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC002.input.databaseConnector,
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC002.input.apiID,
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC002.input.config,
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC002.output.message)        
	});



    test(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC003.description, async () => {

        const output = await ReadCustomerService.readOneCustomer(
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC003.input.databaseConnector,
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC003.input.apiID,
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC003.input.config,
            ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerServiceData.READ_ONE_CUSTOMER_TS002_TC003.output.message)        
	});

});