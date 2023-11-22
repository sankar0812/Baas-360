

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update proposalitem service class
**/

/**
 * Importing all required modules here
 */

const updateProposalItemServiceData = require("../data/update.proposalitem.service.data")
const updateProposalItemService = require("../../../../src/services/proposal/update.proposalitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProposalItemService = new updateProposalItemService();
const UpdateProposalItemServiceData = new updateProposalItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalitem.ts.001] | FunctionPath : [src/services/proposal/update.proposalitem.service.js/updateProposalItem()]", () => {

	test(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC001.description, async () => {

        const output = await UpdateProposalItemService.updateProposalItem(
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC001.input.databaseConnector,
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC001.input.apiID,
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC001.input.config,
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC001.output)[2])
	});

    test(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC002.description, async () => {

        const output = await UpdateProposalItemService.updateProposalItem(
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC002.input.databaseConnector,
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC002.input.apiID,
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC002.input.config,
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC002.output.message)        
	});

    test(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC003.description, async () => {

        const output = await UpdateProposalItemService.updateProposalItem(
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC003.input.databaseConnector,
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC003.input.apiID,
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC003.input.config,
            UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProposalItemServiceData.UPDATE_PROPOSALITEM_TS001_TC003.output.message)        
	});

});
