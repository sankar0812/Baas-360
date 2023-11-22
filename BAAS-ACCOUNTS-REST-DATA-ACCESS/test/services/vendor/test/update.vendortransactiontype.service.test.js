

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendortransactiontype service class
**/

/**
 * Importing all required modules here
 */

const updateVendorTransactionTypeServiceData = require("../data/update.vendortransactiontype.service.data")
const updateVendorTransactionTypeService = require("../../../../src/services/vendor/update.vendortransactiontype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorTransactionTypeService = new updateVendorTransactionTypeService();
const UpdateVendorTransactionTypeServiceData = new updateVendorTransactionTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendortransactiontype.ts.001] | FunctionPath : [src/services/vendor/update.vendortransactiontype.service.js/updateVendorTransactionType()]", () => {

	test(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC001.description, async () => {

        const output = await UpdateVendorTransactionTypeService.updateVendorTransactionType(
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC001.input.databaseConnector,
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC001.input.apiID,
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC001.input.config,
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC001.output)[2])
	});

    test(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC002.description, async () => {

        const output = await UpdateVendorTransactionTypeService.updateVendorTransactionType(
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC002.input.databaseConnector,
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC002.input.apiID,
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC002.input.config,
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC002.output.message)        
	});

    test(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC003.description, async () => {

        const output = await UpdateVendorTransactionTypeService.updateVendorTransactionType(
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC003.input.databaseConnector,
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC003.input.apiID,
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC003.input.config,
            UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorTransactionTypeServiceData.UPDATE_VENDORTRANSACTIONTYPE_TS001_TC003.output.message)        
	});

});
