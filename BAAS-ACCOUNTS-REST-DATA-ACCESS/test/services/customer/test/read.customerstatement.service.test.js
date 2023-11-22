/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerStatement service class
**/

/**
 * Importing all required modules here
 */

const readCustomerStatementServiceData = require("../data/read.customerstatement.service.data")
const readCustomerStatementService = require("../../../../src/services/customer/read.customerstatement.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerStatementService = new readCustomerStatementService();
const ReadCustomerStatementServiceData = new readCustomerStatementServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerstatement.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomerStatements()]", () => {


	test(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC001.description, async () => {

        const output = await ReadCustomerStatementService.readCustomerStatements(
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC001.input.databaseConnector,
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC001.input.apiID,
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC001.input.config,
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC001.output)[2])
	});



    test(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC002.description, async () => {

        const output = await ReadCustomerStatementService.readCustomerStatements(
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC002.input.databaseConnector,
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC002.input.apiID,
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC002.input.config,
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC002.output.message)        
	});



    test(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC003.description, async () => {

        const output = await ReadCustomerStatementService.readCustomerStatements(
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC003.input.databaseConnector,
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC003.input.apiID,
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC003.input.config,
            ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerStatementServiceData.READ_CUSTOMERSTATEMENT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customerstatement.ts.002] | FunctionPath : [src/services/customer/read.customerstatement.service.js/readOneCustomerStatement()]", () => {


	test(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC001.description, async () => {

        const output = await ReadCustomerStatementService.readOneCustomerStatement(
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC001.input.databaseConnector,
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC001.input.apiID,
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC001.input.config,
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC001.output)[2])
	});



    test(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC002.description, async () => {

        const output = await ReadCustomerStatementService.readOneCustomerStatement(
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC002.input.databaseConnector,
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC002.input.apiID,
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC002.input.config,
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC002.output.message)        
	});



    test(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC003.description, async () => {

        const output = await ReadCustomerStatementService.readOneCustomerStatement(
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC003.input.databaseConnector,
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC003.input.apiID,
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC003.input.config,
            ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerStatementServiceData.READ_ONE_CUSTOMERSTATEMENT_TS002_TC003.output.message)        
	});

});