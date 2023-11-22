/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create proposalvendorproduct service class
**/

/**
 * Importing all required modules here
 */

const createProposalVendorProductServiceData = require("../data/create.proposalvendorproduct.service.data")
const createProposalVendorProductService = require("../../../../src/services/proposal/create.proposalvendorproduct.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProposalVendorProductService = new createProposalVendorProductService();
const CreateProposalVendorProductServiceData = new createProposalVendorProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001] | FunctionPath : [src/services/proposal/create.proposalvendorproduct.service.js/createOneProposalVendorProduct()]", () => {


	test(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.description, async () => {

        const output = await CreateProposalVendorProductService.createOneProposalVendorProduct(
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.input.databaseConnector,
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.input.apiID,
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.input.config,
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.output)[2])
	});



    test(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.description, async () => {

        const output = await CreateProposalVendorProductService.createOneProposalVendorProduct(
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.input.databaseConnector,
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.input.apiID,
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.input.config,
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.output.message)        
	});



    test(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.description, async () => {

        const output = await CreateProposalVendorProductService.createOneProposalVendorProduct(
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.input.databaseConnector,
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.input.apiID,
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.input.config,
            CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProposalVendorProductServiceData.CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.output.message)        
	});

});