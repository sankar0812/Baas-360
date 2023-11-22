/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProposalItemParam service class
**/

/**
 * Importing all required modules here
 */

const readProposalItemParamServiceData = require("../data/read.proposalitemparam.service.data")
const readProposalItemParamService = require("../../../../src/services/proposal/read.proposalitemparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProposalItemParamService = new readProposalItemParamService();
const ReadProposalItemParamServiceData = new readProposalItemParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalitemparam.ts.001] | FunctionPath : [src/services/proposal/read.contianer.service.js/readProposalItemParams()]", () => {


	test(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC001.description, async () => {

        const output = await ReadProposalItemParamService.readProposalItemParams(
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC001.input.databaseConnector,
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC001.input.apiID,
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC001.input.config,
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC001.output)[2])
	});



    test(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC002.description, async () => {

        const output = await ReadProposalItemParamService.readProposalItemParams(
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC002.input.databaseConnector,
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC002.input.apiID,
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC002.input.config,
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC002.output.message)        
	});



    test(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC003.description, async () => {

        const output = await ReadProposalItemParamService.readProposalItemParams(
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC003.input.databaseConnector,
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC003.input.apiID,
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC003.input.config,
            ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProposalItemParamServiceData.READ_PROPOSALITEMPARAM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.proposalitemparam.ts.002] | FunctionPath : [src/services/proposal/read.proposalitemparam.service.js/readOneProposalItemParam()]", () => {


	test(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC001.description, async () => {

        const output = await ReadProposalItemParamService.readOneProposalItemParam(
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC001.input.databaseConnector,
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC001.input.apiID,
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC001.input.config,
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC001.output)[2])
	});



    test(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC002.description, async () => {

        const output = await ReadProposalItemParamService.readOneProposalItemParam(
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC002.input.databaseConnector,
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC002.input.apiID,
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC002.input.config,
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC002.output.message)        
	});



    test(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC003.description, async () => {

        const output = await ReadProposalItemParamService.readOneProposalItemParam(
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC003.input.databaseConnector,
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC003.input.apiID,
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC003.input.config,
            ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProposalItemParamServiceData.READ_ONE_PROPOSALITEMPARAM_TS002_TC003.output.message)        
	});

});