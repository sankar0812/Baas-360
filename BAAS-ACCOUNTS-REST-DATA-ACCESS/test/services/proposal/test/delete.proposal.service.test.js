/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete proposal service class
**/

/**
 * Importing all required modules here
 */

const deleteProposalServiceData = require("../data/delete.proposal.service.data")
const deleteProposalService = require("../../../../src/services/proposal/delete.proposal.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProposalService = new deleteProposalService();
const DeleteProposalServiceData = new deleteProposalServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposal.ts.001] | FunctionPath : [src/services/proposal/delete.proposal.service.js/deleteOneProposal()]", () => {


	test(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC001.description, async () => {

        const output = await DeleteProposalService.deleteOneProposal(
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC001.input.databaseConnector,
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC001.input.apiID,
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC001.input.config,
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC001.output)[2])
	});



    test(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC002.description, async () => {

        const output = await DeleteProposalService.deleteOneProposal(
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC002.input.databaseConnector,
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC002.input.apiID,
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC002.input.config,
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC002.output.message)        
	});



    test(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC003.description, async () => {

        const output = await DeleteProposalService.deleteOneProposal(
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC003.input.databaseConnector,
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC003.input.apiID,
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC003.input.config,
            DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProposalServiceData.DELETE_ONE_PROPOSAL_TS001_TC003.output.message)        
	});

});
