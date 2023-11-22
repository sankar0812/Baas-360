/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete proposalvendorproduct service class
**/

/**
 * Importing all required modules here
 */

const deleteProposalVendorProductServiceData = require("../data/delete.proposalvendorproduct.service.data")
const deleteProposalVendorProductService = require("../../../../src/services/proposal/delete.proposalvendorproduct.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProposalVendorProductService = new deleteProposalVendorProductService();
const DeleteProposalVendorProductServiceData = new deleteProposalVendorProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001] | FunctionPath : [src/services/proposal/delete.proposalvendorproduct.service.js/deleteOneProposalVendorProduct()]", () => {


	test(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.description, async () => {

        const output = await DeleteProposalVendorProductService.deleteOneProposalVendorProduct(
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.input.databaseConnector,
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.input.apiID,
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.input.config,
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001.output)[2])
	});



    test(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.description, async () => {

        const output = await DeleteProposalVendorProductService.deleteOneProposalVendorProduct(
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.input.databaseConnector,
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.input.apiID,
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.input.config,
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002.output.message)        
	});



    test(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.description, async () => {

        const output = await DeleteProposalVendorProductService.deleteOneProposalVendorProduct(
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.input.databaseConnector,
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.input.apiID,
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.input.config,
            DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProposalVendorProductServiceData.DELETE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003.output.message)        
	});

});
