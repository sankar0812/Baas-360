/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorstatement service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorStatementServiceData = require("../data/delete.vendorstatement.service.data")
const deleteVendorStatementService = require("../../../../src/services/vendor/delete.vendorstatement.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorStatementService = new deleteVendorStatementService();
const DeleteVendorStatementServiceData = new deleteVendorStatementServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorstatement.ts.001] | FunctionPath : [src/services/vendor/delete.vendorstatement.service.js/deleteOneVendorStatement()]", () => {


	test(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC001.description, async () => {

        const output = await DeleteVendorStatementService.deleteOneVendorStatement(
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC001.input.databaseConnector,
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC001.input.apiID,
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC001.input.config,
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC001.output)[2])
	});



    test(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC002.description, async () => {

        const output = await DeleteVendorStatementService.deleteOneVendorStatement(
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC002.input.databaseConnector,
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC002.input.apiID,
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC002.input.config,
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC002.output.message)        
	});



    test(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC003.description, async () => {

        const output = await DeleteVendorStatementService.deleteOneVendorStatement(
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC003.input.databaseConnector,
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC003.input.apiID,
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC003.input.config,
            DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorStatementServiceData.DELETE_ONE_VENDORSTATEMENT_TS001_TC003.output.message)        
	});

});
