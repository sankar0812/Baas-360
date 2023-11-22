/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProposalItem service class
**/

/**
 * Importing all required modules here
 */

const readProposalItemServiceData = require("../data/read.proposalitem.service.data")
const readProposalItemService = require("../../../../src/services/proposal/read.proposalitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProposalItemService = new readProposalItemService();
const ReadProposalItemServiceData = new readProposalItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalitem.ts.001] | FunctionPath : [src/services/proposal/read.contianer.service.js/readProposalItems()]", () => {


	test(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC001.description, async () => {

        const output = await ReadProposalItemService.readProposalItems(
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC001.input.databaseConnector,
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC001.input.apiID,
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC001.input.config,
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC001.output)[2])
	});



    test(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC002.description, async () => {

        const output = await ReadProposalItemService.readProposalItems(
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC002.input.databaseConnector,
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC002.input.apiID,
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC002.input.config,
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC002.output.message)        
	});



    test(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC003.description, async () => {

        const output = await ReadProposalItemService.readProposalItems(
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC003.input.databaseConnector,
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC003.input.apiID,
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC003.input.config,
            ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProposalItemServiceData.READ_PROPOSALITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.proposalitem.ts.002] | FunctionPath : [src/services/proposal/read.proposalitem.service.js/readOneProposalItem()]", () => {


	test(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC001.description, async () => {

        const output = await ReadProposalItemService.readOneProposalItem(
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC001.input.databaseConnector,
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC001.input.apiID,
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC001.input.config,
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC001.output)[2])
	});



    test(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC002.description, async () => {

        const output = await ReadProposalItemService.readOneProposalItem(
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC002.input.databaseConnector,
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC002.input.apiID,
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC002.input.config,
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC002.output.message)        
	});



    test(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC003.description, async () => {

        const output = await ReadProposalItemService.readOneProposalItem(
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC003.input.databaseConnector,
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC003.input.apiID,
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC003.input.config,
            ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProposalItemServiceData.READ_ONE_PROPOSALITEM_TS002_TC003.output.message)        
	});

});