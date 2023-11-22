/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customerstatement service class
**/

/**
 * Importing all required modules here
 */

const createCustomerStatementServiceData = require("../data/create.customerstatement.service.data")
const createCustomerStatementService = require("../../../../src/services/customer/create.customerstatement.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerStatementService = new createCustomerStatementService();
const CreateCustomerStatementServiceData = new createCustomerStatementServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerstatement.ts.001] | FunctionPath : [src/services/customer/create.customerstatement.service.js/createOneCustomerStatement()]", () => {


	test(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC001.description, async () => {

        const output = await CreateCustomerStatementService.createOneCustomerStatement(
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC001.input.databaseConnector,
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC001.input.apiID,
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC001.input.config,
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC001.output)[2])
	});



    test(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC002.description, async () => {

        const output = await CreateCustomerStatementService.createOneCustomerStatement(
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC002.input.databaseConnector,
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC002.input.apiID,
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC002.input.config,
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC002.output.message)        
	});



    test(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC003.description, async () => {

        const output = await CreateCustomerStatementService.createOneCustomerStatement(
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC003.input.databaseConnector,
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC003.input.apiID,
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC003.input.config,
            CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerStatementServiceData.CREATE_ONE_CUSTOMERSTATEMENT_TS001_TC003.output.message)        
	});

});