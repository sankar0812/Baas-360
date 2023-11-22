/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorTransactionType service class
**/

/**
 * Importing all required modules here
 */

const readVendorTransactionTypeServiceData = require("../data/read.vendortransactiontype.service.data")
const readVendorTransactionTypeService = require("../../../../src/services/vendor/read.vendortransactiontype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorTransactionTypeService = new readVendorTransactionTypeService();
const ReadVendorTransactionTypeServiceData = new readVendorTransactionTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendortransactiontype.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorTransactionTypes()]", () => {


	test(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC001.description, async () => {

        const output = await ReadVendorTransactionTypeService.readVendorTransactionTypes(
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC001.input.databaseConnector,
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC001.input.apiID,
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC001.input.config,
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC001.output)[2])
	});



    test(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC002.description, async () => {

        const output = await ReadVendorTransactionTypeService.readVendorTransactionTypes(
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC002.input.databaseConnector,
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC002.input.apiID,
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC002.input.config,
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC002.output.message)        
	});



    test(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC003.description, async () => {

        const output = await ReadVendorTransactionTypeService.readVendorTransactionTypes(
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC003.input.databaseConnector,
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC003.input.apiID,
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC003.input.config,
            ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorTransactionTypeServiceData.READ_VENDORTRANSACTIONTYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendortransactiontype.ts.002] | FunctionPath : [src/services/vendor/read.vendortransactiontype.service.js/readOneVendorTransactionType()]", () => {


	test(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC001.description, async () => {

        const output = await ReadVendorTransactionTypeService.readOneVendorTransactionType(
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC001.input.databaseConnector,
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC001.input.apiID,
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC001.input.config,
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC001.output)[2])
	});



    test(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC002.description, async () => {

        const output = await ReadVendorTransactionTypeService.readOneVendorTransactionType(
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC002.input.databaseConnector,
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC002.input.apiID,
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC002.input.config,
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC002.output.message)        
	});



    test(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC003.description, async () => {

        const output = await ReadVendorTransactionTypeService.readOneVendorTransactionType(
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC003.input.databaseConnector,
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC003.input.apiID,
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC003.input.config,
            ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorTransactionTypeServiceData.READ_ONE_VENDORTRANSACTIONTYPE_TS002_TC003.output.message)        
	});

});