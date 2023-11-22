

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update proposalvendorproduct service class
**/

/**
 * Importing all required modules here
 */

const updateProposalVendorProductServiceData = require("../data/update.proposalvendorproduct.service.data")
const updateProposalVendorProductService = require("../../../../src/services/proposal/update.proposalvendorproduct.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProposalVendorProductService = new updateProposalVendorProductService();
const UpdateProposalVendorProductServiceData = new updateProposalVendorProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001] | FunctionPath : [src/services/proposal/update.proposalvendorproduct.service.js/updateProposalVendorProduct()]", () => {

	test(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC001.description, async () => {

        const output = await UpdateProposalVendorProductService.updateProposalVendorProduct(
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC001.input.databaseConnector,
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC001.input.apiID,
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC001.input.config,
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC001.output)[2])
	});

    test(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC002.description, async () => {

        const output = await UpdateProposalVendorProductService.updateProposalVendorProduct(
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC002.input.databaseConnector,
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC002.input.apiID,
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC002.input.config,
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC002.output.message)        
	});

    test(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC003.description, async () => {

        const output = await UpdateProposalVendorProductService.updateProposalVendorProduct(
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC003.input.databaseConnector,
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC003.input.apiID,
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC003.input.config,
            UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProposalVendorProductServiceData.UPDATE_PROPOSALVENDORPRODUCT_TS001_TC003.output.message)        
	});

});
