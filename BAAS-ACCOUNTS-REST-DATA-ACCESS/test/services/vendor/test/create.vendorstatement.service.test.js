/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorstatement service class
**/

/**
 * Importing all required modules here
 */

const createVendorStatementServiceData = require("../data/create.vendorstatement.service.data")
const createVendorStatementService = require("../../../../src/services/vendor/create.vendorstatement.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorStatementService = new createVendorStatementService();
const CreateVendorStatementServiceData = new createVendorStatementServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorstatement.ts.001] | FunctionPath : [src/services/vendor/create.vendorstatement.service.js/createOneVendorStatement()]", () => {


	test(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC001.description, async () => {

        const output = await CreateVendorStatementService.createOneVendorStatement(
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC001.input.databaseConnector,
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC001.input.apiID,
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC001.input.config,
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC001.output)[2])
	});



    test(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC002.description, async () => {

        const output = await CreateVendorStatementService.createOneVendorStatement(
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC002.input.databaseConnector,
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC002.input.apiID,
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC002.input.config,
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC002.output.message)        
	});



    test(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC003.description, async () => {

        const output = await CreateVendorStatementService.createOneVendorStatement(
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC003.input.databaseConnector,
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC003.input.apiID,
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC003.input.config,
            CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorStatementServiceData.CREATE_ONE_VENDORSTATEMENT_TS001_TC003.output.message)        
	});

});