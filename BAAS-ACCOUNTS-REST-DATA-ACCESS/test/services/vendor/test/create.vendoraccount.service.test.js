/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendoraccount service class
**/

/**
 * Importing all required modules here
 */

const createVendorAccountServiceData = require("../data/create.vendoraccount.service.data")
const createVendorAccountService = require("../../../../src/services/vendor/create.vendoraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorAccountService = new createVendorAccountService();
const CreateVendorAccountServiceData = new createVendorAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccount.ts.001] | FunctionPath : [src/services/vendor/create.vendoraccount.service.js/createOneVendorAccount()]", () => {


	test(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC001.description, async () => {

        const output = await CreateVendorAccountService.createOneVendorAccount(
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC001.input.databaseConnector,
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC001.input.apiID,
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC001.input.config,
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC001.output)[2])
	});



    test(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC002.description, async () => {

        const output = await CreateVendorAccountService.createOneVendorAccount(
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC002.input.databaseConnector,
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC002.input.apiID,
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC002.input.config,
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC002.output.message)        
	});



    test(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC003.description, async () => {

        const output = await CreateVendorAccountService.createOneVendorAccount(
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC003.input.databaseConnector,
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC003.input.apiID,
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC003.input.config,
            CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorAccountServiceData.CREATE_ONE_VENDORACCOUNT_TS001_TC003.output.message)        
	});

});