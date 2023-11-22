/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerAccountCard service class
**/

/**
 * Importing all required modules here
 */

const readCustomerAccountCardServiceData = require("../data/read.customeraccountcard.service.data")
const readCustomerAccountCardService = require("../../../../src/services/customer/read.customeraccountcard.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerAccountCardService = new readCustomerAccountCardService();
const ReadCustomerAccountCardServiceData = new readCustomerAccountCardServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountcard.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomerAccountCards()]", () => {


	test(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC001.description, async () => {

        const output = await ReadCustomerAccountCardService.readCustomerAccountCards(
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC001.input.databaseConnector,
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC001.input.apiID,
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC001.input.config,
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC001.output)[2])
	});



    test(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC002.description, async () => {

        const output = await ReadCustomerAccountCardService.readCustomerAccountCards(
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC002.input.databaseConnector,
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC002.input.apiID,
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC002.input.config,
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC002.output.message)        
	});



    test(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC003.description, async () => {

        const output = await ReadCustomerAccountCardService.readCustomerAccountCards(
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC003.input.databaseConnector,
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC003.input.apiID,
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC003.input.config,
            ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerAccountCardServiceData.READ_CUSTOMERACCOUNTCARD_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountcard.ts.002] | FunctionPath : [src/services/customer/read.customeraccountcard.service.js/readOneCustomerAccountCard()]", () => {


	test(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC001.description, async () => {

        const output = await ReadCustomerAccountCardService.readOneCustomerAccountCard(
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC001.input.databaseConnector,
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC001.input.apiID,
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC001.input.config,
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC001.output)[2])
	});



    test(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC002.description, async () => {

        const output = await ReadCustomerAccountCardService.readOneCustomerAccountCard(
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC002.input.databaseConnector,
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC002.input.apiID,
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC002.input.config,
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC002.output.message)        
	});



    test(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC003.description, async () => {

        const output = await ReadCustomerAccountCardService.readOneCustomerAccountCard(
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC003.input.databaseConnector,
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC003.input.apiID,
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC003.input.config,
            ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerAccountCardServiceData.READ_ONE_CUSTOMERACCOUNTCARD_TS002_TC003.output.message)        
	});

});