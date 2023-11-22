/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create proposalitemparam service class
**/

/**
 * Importing all required modules here
 */

const createProposalItemParamServiceData = require("../data/create.proposalitemparam.service.data")
const createProposalItemParamService = require("../../../../src/services/proposal/create.proposalitemparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProposalItemParamService = new createProposalItemParamService();
const CreateProposalItemParamServiceData = new createProposalItemParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalitemparam.ts.001] | FunctionPath : [src/services/proposal/create.proposalitemparam.service.js/createOneProposalItemParam()]", () => {


	test(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC001.description, async () => {

        const output = await CreateProposalItemParamService.createOneProposalItemParam(
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC001.input.databaseConnector,
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC001.input.apiID,
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC001.input.config,
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC001.output)[2])
	});



    test(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC002.description, async () => {

        const output = await CreateProposalItemParamService.createOneProposalItemParam(
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC002.input.databaseConnector,
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC002.input.apiID,
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC002.input.config,
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC002.output.message)        
	});



    test(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC003.description, async () => {

        const output = await CreateProposalItemParamService.createOneProposalItemParam(
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC003.input.databaseConnector,
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC003.input.apiID,
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC003.input.config,
            CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProposalItemParamServiceData.CREATE_ONE_PROPOSALITEMPARAM_TS001_TC003.output.message)        
	});

});