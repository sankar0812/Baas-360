/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create proposal service class
**/

/**
 * Importing all required modules here
 */

const createProposalServiceData = require("../data/create.proposal.service.data")
const createProposalService = require("../../../../src/services/proposal/create.proposal.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProposalService = new createProposalService();
const CreateProposalServiceData = new createProposalServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposal.ts.001] | FunctionPath : [src/services/proposal/create.proposal.service.js/createOneProposal()]", () => {


	test(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC001.description, async () => {

        const output = await CreateProposalService.createOneProposal(
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC001.input.databaseConnector,
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC001.input.apiID,
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC001.input.config,
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC001.output)[2])
	});



    test(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC002.description, async () => {

        const output = await CreateProposalService.createOneProposal(
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC002.input.databaseConnector,
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC002.input.apiID,
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC002.input.config,
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC002.output.message)        
	});



    test(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC003.description, async () => {

        const output = await CreateProposalService.createOneProposal(
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC003.input.databaseConnector,
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC003.input.apiID,
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC003.input.config,
            CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProposalServiceData.CREATE_ONE_PROPOSAL_TS001_TC003.output.message)        
	});

});