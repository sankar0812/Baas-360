/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorStatement service class
**/

/**
 * Importing all required modules here
 */

const readVendorStatementServiceData = require("../data/read.vendorstatement.service.data")
const readVendorStatementService = require("../../../../src/services/vendor/read.vendorstatement.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorStatementService = new readVendorStatementService();
const ReadVendorStatementServiceData = new readVendorStatementServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorstatement.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorStatements()]", () => {


	test(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC001.description, async () => {

        const output = await ReadVendorStatementService.readVendorStatements(
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC001.input.databaseConnector,
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC001.input.apiID,
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC001.input.config,
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC001.output)[2])
	});



    test(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC002.description, async () => {

        const output = await ReadVendorStatementService.readVendorStatements(
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC002.input.databaseConnector,
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC002.input.apiID,
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC002.input.config,
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC002.output.message)        
	});



    test(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC003.description, async () => {

        const output = await ReadVendorStatementService.readVendorStatements(
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC003.input.databaseConnector,
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC003.input.apiID,
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC003.input.config,
            ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorStatementServiceData.READ_VENDORSTATEMENT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorstatement.ts.002] | FunctionPath : [src/services/vendor/read.vendorstatement.service.js/readOneVendorStatement()]", () => {


	test(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC001.description, async () => {

        const output = await ReadVendorStatementService.readOneVendorStatement(
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC001.input.databaseConnector,
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC001.input.apiID,
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC001.input.config,
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC001.output)[2])
	});



    test(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC002.description, async () => {

        const output = await ReadVendorStatementService.readOneVendorStatement(
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC002.input.databaseConnector,
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC002.input.apiID,
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC002.input.config,
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC002.output.message)        
	});



    test(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC003.description, async () => {

        const output = await ReadVendorStatementService.readOneVendorStatement(
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC003.input.databaseConnector,
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC003.input.apiID,
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC003.input.config,
            ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorStatementServiceData.READ_ONE_VENDORSTATEMENT_TS002_TC003.output.message)        
	});

});