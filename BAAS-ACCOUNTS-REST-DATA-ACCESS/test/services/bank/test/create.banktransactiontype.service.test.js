/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create banktransactiontype service class
**/

/**
 * Importing all required modules here
 */

const createBankTransactionTypeServiceData = require("../data/create.banktransactiontype.service.data")
const createBankTransactionTypeService = require("../../../../src/services/bank/create.banktransactiontype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateBankTransactionTypeService = new createBankTransactionTypeService();
const CreateBankTransactionTypeServiceData = new createBankTransactionTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.banktransactiontype.ts.001] | FunctionPath : [src/services/bank/create.banktransactiontype.service.js/createOneBankTransactionType()]", () => {


	test(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.description, async () => {

        const output = await CreateBankTransactionTypeService.createOneBankTransactionType(
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.input.databaseConnector,
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.input.apiID,
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.input.config,
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.output)[2])
	});



    test(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.description, async () => {

        const output = await CreateBankTransactionTypeService.createOneBankTransactionType(
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.input.databaseConnector,
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.input.apiID,
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.input.config,
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.output.message)        
	});



    test(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.description, async () => {

        const output = await CreateBankTransactionTypeService.createOneBankTransactionType(
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.input.databaseConnector,
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.input.apiID,
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.input.config,
            CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateBankTransactionTypeServiceData.CREATE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.output.message)        
	});

});