/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete proposalitem service class
**/

/**
 * Importing all required modules here
 */

const deleteProposalItemServiceData = require("../data/delete.proposalitem.service.data")
const deleteProposalItemService = require("../../../../src/services/proposal/delete.proposalitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProposalItemService = new deleteProposalItemService();
const DeleteProposalItemServiceData = new deleteProposalItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalitem.ts.001] | FunctionPath : [src/services/proposal/delete.proposalitem.service.js/deleteOneProposalItem()]", () => {


	test(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC001.description, async () => {

        const output = await DeleteProposalItemService.deleteOneProposalItem(
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC001.input.databaseConnector,
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC001.input.apiID,
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC001.input.config,
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC001.output)[2])
	});



    test(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC002.description, async () => {

        const output = await DeleteProposalItemService.deleteOneProposalItem(
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC002.input.databaseConnector,
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC002.input.apiID,
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC002.input.config,
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC002.output.message)        
	});



    test(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC003.description, async () => {

        const output = await DeleteProposalItemService.deleteOneProposalItem(
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC003.input.databaseConnector,
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC003.input.apiID,
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC003.input.config,
            DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProposalItemServiceData.DELETE_ONE_PROPOSALITEM_TS001_TC003.output.message)        
	});

});
