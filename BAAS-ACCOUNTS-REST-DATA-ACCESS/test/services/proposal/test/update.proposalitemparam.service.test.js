

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update proposalitemparam service class
**/

/**
 * Importing all required modules here
 */

const updateProposalItemParamServiceData = require("../data/update.proposalitemparam.service.data")
const updateProposalItemParamService = require("../../../../src/services/proposal/update.proposalitemparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProposalItemParamService = new updateProposalItemParamService();
const UpdateProposalItemParamServiceData = new updateProposalItemParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalitemparam.ts.001] | FunctionPath : [src/services/proposal/update.proposalitemparam.service.js/updateProposalItemParam()]", () => {

	test(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC001.description, async () => {

        const output = await UpdateProposalItemParamService.updateProposalItemParam(
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC001.input.databaseConnector,
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC001.input.apiID,
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC001.input.config,
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC001.output)[2])
	});

    test(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC002.description, async () => {

        const output = await UpdateProposalItemParamService.updateProposalItemParam(
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC002.input.databaseConnector,
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC002.input.apiID,
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC002.input.config,
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC002.output.message)        
	});

    test(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC003.description, async () => {

        const output = await UpdateProposalItemParamService.updateProposalItemParam(
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC003.input.databaseConnector,
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC003.input.apiID,
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC003.input.config,
            UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProposalItemParamServiceData.UPDATE_PROPOSALITEMPARAM_TS001_TC003.output.message)        
	});

});
