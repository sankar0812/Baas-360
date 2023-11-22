/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerProductUsageLog service class
**/

/**
 * Importing all required modules here
 */

const readCustomerProductUsageLogServiceData = require("../data/read.customerproductusagelog.service.data")
const readCustomerProductUsageLogService = require("../../../../src/services/customer/read.customerproductusagelog.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerProductUsageLogService = new readCustomerProductUsageLogService();
const ReadCustomerProductUsageLogServiceData = new readCustomerProductUsageLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusagelog.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomerProductUsageLogs()]", () => {


	test(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.description, async () => {

        const output = await ReadCustomerProductUsageLogService.readCustomerProductUsageLogs(
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.databaseConnector,
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.apiID,
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.config,
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC001.output)[2])
	});



    test(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.description, async () => {

        const output = await ReadCustomerProductUsageLogService.readCustomerProductUsageLogs(
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.databaseConnector,
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.apiID,
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.config,
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC002.output.message)        
	});



    test(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.description, async () => {

        const output = await ReadCustomerProductUsageLogService.readCustomerProductUsageLogs(
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.databaseConnector,
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.apiID,
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.config,
            ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerProductUsageLogServiceData.READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customerproductusagelog.ts.002] | FunctionPath : [src/services/customer/read.customerproductusagelog.service.js/readOneCustomerProductUsageLog()]", () => {


	test(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC001.description, async () => {

        const output = await ReadCustomerProductUsageLogService.readOneCustomerProductUsageLog(
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC001.input.databaseConnector,
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC001.input.apiID,
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC001.input.config,
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC001.output)[2])
	});



    test(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC002.description, async () => {

        const output = await ReadCustomerProductUsageLogService.readOneCustomerProductUsageLog(
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC002.input.databaseConnector,
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC002.input.apiID,
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC002.input.config,
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC002.output.message)        
	});



    test(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC003.description, async () => {

        const output = await ReadCustomerProductUsageLogService.readOneCustomerProductUsageLog(
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC003.input.databaseConnector,
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC003.input.apiID,
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC003.input.config,
            ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerProductUsageLogServiceData.READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC003.output.message)        
	});

});