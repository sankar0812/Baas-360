/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create proposalitem service class
**/

/**
 * Importing all required modules here
 */

const createProposalItemServiceData = require("../data/create.proposalitem.service.data")
const createProposalItemService = require("../../../../src/services/proposal/create.proposalitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProposalItemService = new createProposalItemService();
const CreateProposalItemServiceData = new createProposalItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalitem.ts.001] | FunctionPath : [src/services/proposal/create.proposalitem.service.js/createOneProposalItem()]", () => {


	test(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC001.description, async () => {

        const output = await CreateProposalItemService.createOneProposalItem(
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC001.input.databaseConnector,
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC001.input.apiID,
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC001.input.config,
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC001.output)[2])
	});



    test(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC002.description, async () => {

        const output = await CreateProposalItemService.createOneProposalItem(
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC002.input.databaseConnector,
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC002.input.apiID,
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC002.input.config,
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC002.output.message)        
	});



    test(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC003.description, async () => {

        const output = await CreateProposalItemService.createOneProposalItem(
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC003.input.databaseConnector,
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC003.input.apiID,
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC003.input.config,
            CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProposalItemServiceData.CREATE_ONE_PROPOSALITEM_TS001_TC003.output.message)        
	});

});