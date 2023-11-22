

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update proposal service class
**/

/**
 * Importing all required modules here
 */

const updateProposalServiceData = require("../data/update.proposal.service.data")
const updateProposalService = require("../../../../src/services/proposal/update.proposal.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProposalService = new updateProposalService();
const UpdateProposalServiceData = new updateProposalServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposal.ts.001] | FunctionPath : [src/services/proposal/update.proposal.service.js/updateProposal()]", () => {

	test(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC001.description, async () => {

        const output = await UpdateProposalService.updateProposal(
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC001.input.databaseConnector,
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC001.input.apiID,
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC001.input.config,
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC001.output)[2])
	});

    test(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC002.description, async () => {

        const output = await UpdateProposalService.updateProposal(
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC002.input.databaseConnector,
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC002.input.apiID,
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC002.input.config,
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC002.output.message)        
	});

    test(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC003.description, async () => {

        const output = await UpdateProposalService.updateProposal(
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC003.input.databaseConnector,
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC003.input.apiID,
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC003.input.config,
            UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProposalServiceData.UPDATE_PROPOSAL_TS001_TC003.output.message)        
	});

});
