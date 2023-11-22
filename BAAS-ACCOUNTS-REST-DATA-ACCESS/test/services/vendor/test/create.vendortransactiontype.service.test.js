/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendortransactiontype service class
**/

/**
 * Importing all required modules here
 */

const createVendorTransactionTypeServiceData = require("../data/create.vendortransactiontype.service.data")
const createVendorTransactionTypeService = require("../../../../src/services/vendor/create.vendortransactiontype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorTransactionTypeService = new createVendorTransactionTypeService();
const CreateVendorTransactionTypeServiceData = new createVendorTransactionTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendortransactiontype.ts.001] | FunctionPath : [src/services/vendor/create.vendortransactiontype.service.js/createOneVendorTransactionType()]", () => {


	test(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.description, async () => {

        const output = await CreateVendorTransactionTypeService.createOneVendorTransactionType(
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.input.databaseConnector,
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.input.apiID,
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.input.config,
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.output)[2])
	});



    test(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.description, async () => {

        const output = await CreateVendorTransactionTypeService.createOneVendorTransactionType(
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.input.databaseConnector,
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.input.apiID,
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.input.config,
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.output.message)        
	});



    test(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.description, async () => {

        const output = await CreateVendorTransactionTypeService.createOneVendorTransactionType(
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.input.databaseConnector,
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.input.apiID,
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.input.config,
            CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorTransactionTypeServiceData.CREATE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.output.message)        
	});

});