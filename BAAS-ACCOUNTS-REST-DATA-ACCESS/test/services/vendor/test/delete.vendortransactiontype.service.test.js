/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendortransactiontype service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorTransactionTypeServiceData = require("../data/delete.vendortransactiontype.service.data")
const deleteVendorTransactionTypeService = require("../../../../src/services/vendor/delete.vendortransactiontype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorTransactionTypeService = new deleteVendorTransactionTypeService();
const DeleteVendorTransactionTypeServiceData = new deleteVendorTransactionTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendortransactiontype.ts.001] | FunctionPath : [src/services/vendor/delete.vendortransactiontype.service.js/deleteOneVendorTransactionType()]", () => {


	test(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.description, async () => {

        const output = await DeleteVendorTransactionTypeService.deleteOneVendorTransactionType(
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.input.databaseConnector,
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.input.apiID,
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.input.config,
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC001.output)[2])
	});



    test(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.description, async () => {

        const output = await DeleteVendorTransactionTypeService.deleteOneVendorTransactionType(
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.input.databaseConnector,
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.input.apiID,
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.input.config,
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC002.output.message)        
	});



    test(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.description, async () => {

        const output = await DeleteVendorTransactionTypeService.deleteOneVendorTransactionType(
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.input.databaseConnector,
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.input.apiID,
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.input.config,
            DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorTransactionTypeServiceData.DELETE_ONE_VENDORTRANSACTIONTYPE_TS001_TC003.output.message)        
	});

});
