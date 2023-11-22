/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Proposal service class
**/

/**
 * Importing all required modules here
 */

const readProposalServiceData = require("../data/read.proposal.service.data")
const readProposalService = require("../../../../src/services/proposal/read.proposal.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProposalService = new readProposalService();
const ReadProposalServiceData = new readProposalServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposal.ts.001] | FunctionPath : [src/services/proposal/read.contianer.service.js/readProposals()]", () => {


	test(ReadProposalServiceData.READ_PROPOSAL_TS001_TC001.description, async () => {

        const output = await ReadProposalService.readProposals(
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC001.input.databaseConnector,
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC001.input.apiID,
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC001.input.config,
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProposalServiceData.READ_PROPOSAL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProposalServiceData.READ_PROPOSAL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProposalServiceData.READ_PROPOSAL_TS001_TC001.output)[2])
	});



    test(ReadProposalServiceData.READ_PROPOSAL_TS001_TC002.description, async () => {

        const output = await ReadProposalService.readProposals(
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC002.input.databaseConnector,
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC002.input.apiID,
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC002.input.config,
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProposalServiceData.READ_PROPOSAL_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProposalServiceData.READ_PROPOSAL_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProposalServiceData.READ_PROPOSAL_TS001_TC002.output.message)        
	});



    test(ReadProposalServiceData.READ_PROPOSAL_TS001_TC003.description, async () => {

        const output = await ReadProposalService.readProposals(
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC003.input.databaseConnector,
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC003.input.apiID,
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC003.input.config,
            ReadProposalServiceData.READ_PROPOSAL_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProposalServiceData.READ_PROPOSAL_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProposalServiceData.READ_PROPOSAL_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.proposal.ts.002] | FunctionPath : [src/services/proposal/read.proposal.service.js/readOneProposal()]", () => {


	test(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC001.description, async () => {

        const output = await ReadProposalService.readOneProposal(
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC001.input.databaseConnector,
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC001.input.apiID,
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC001.input.config,
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC001.output)[2])
	});



    test(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC002.description, async () => {

        const output = await ReadProposalService.readOneProposal(
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC002.input.databaseConnector,
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC002.input.apiID,
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC002.input.config,
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC002.output.message)        
	});



    test(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC003.description, async () => {

        const output = await ReadProposalService.readOneProposal(
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC003.input.databaseConnector,
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC003.input.apiID,
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC003.input.config,
            ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProposalServiceData.READ_ONE_PROPOSAL_TS002_TC003.output.message)        
	});

});