

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorstatement service class
**/

/**
 * Importing all required modules here
 */

const updateVendorStatementServiceData = require("../data/update.vendorstatement.service.data")
const updateVendorStatementService = require("../../../../src/services/vendor/update.vendorstatement.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorStatementService = new updateVendorStatementService();
const UpdateVendorStatementServiceData = new updateVendorStatementServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorstatement.ts.001] | FunctionPath : [src/services/vendor/update.vendorstatement.service.js/updateVendorStatement()]", () => {

	test(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC001.description, async () => {

        const output = await UpdateVendorStatementService.updateVendorStatement(
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC001.input.databaseConnector,
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC001.input.apiID,
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC001.input.config,
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC001.output)[2])
	});

    test(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC002.description, async () => {

        const output = await UpdateVendorStatementService.updateVendorStatement(
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC002.input.databaseConnector,
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC002.input.apiID,
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC002.input.config,
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC002.output.message)        
	});

    test(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC003.description, async () => {

        const output = await UpdateVendorStatementService.updateVendorStatement(
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC003.input.databaseConnector,
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC003.input.apiID,
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC003.input.config,
            UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorStatementServiceData.UPDATE_VENDORSTATEMENT_TS001_TC003.output.message)        
	});

});
