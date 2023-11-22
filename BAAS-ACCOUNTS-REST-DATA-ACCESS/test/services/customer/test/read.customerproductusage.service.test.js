/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerProductUsage service class
**/

/**
 * Importing all required modules here
 */

const readCustomerProductUsageServiceData = require("../data/read.customerproductusage.service.data")
const readCustomerProductUsageService = require("../../../../src/services/customer/read.customerproductusage.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerProductUsageService = new readCustomerProductUsageService();
const ReadCustomerProductUsageServiceData = new readCustomerProductUsageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusage.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomerProductUsages()]", () => {


	test(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC001.description, async () => {

        const output = await ReadCustomerProductUsageService.readCustomerProductUsages(
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.databaseConnector,
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.apiID,
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.config,
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC001.output)[2])
	});



    test(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC002.description, async () => {

        const output = await ReadCustomerProductUsageService.readCustomerProductUsages(
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.databaseConnector,
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.apiID,
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.config,
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC002.output.message)        
	});



    test(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC003.description, async () => {

        const output = await ReadCustomerProductUsageService.readCustomerProductUsages(
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.databaseConnector,
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.apiID,
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.config,
            ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerProductUsageServiceData.READ_CUSTOMERPRODUCTUSAGE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusage.ts.002] | FunctionPath : [src/services/customer/read.customerproductusage.service.js/readOneCustomerProductUsage()]", () => {


	test(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC001.description, async () => {

        const output = await ReadCustomerProductUsageService.readOneCustomerProductUsage(
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC001.input.databaseConnector,
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC001.input.apiID,
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC001.input.config,
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC001.output)[2])
	});



    test(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC002.description, async () => {

        const output = await ReadCustomerProductUsageService.readOneCustomerProductUsage(
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC002.input.databaseConnector,
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC002.input.apiID,
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC002.input.config,
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC002.output.message)        
	});



    test(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC003.description, async () => {

        const output = await ReadCustomerProductUsageService.readOneCustomerProductUsage(
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC003.input.databaseConnector,
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC003.input.apiID,
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC003.input.config,
            ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerProductUsageServiceData.READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC003.output.message)        
	});

});