

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update costlist service class
**/

/**
 * Importing all required modules here
 */

const updateCostListServiceData = require("../data/update.costlist.service.data")
const updateCostListService = require("../../../../src/services/cost/update.costlist.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCostListService = new updateCostListService();
const UpdateCostListServiceData = new updateCostListServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlist.ts.001] | FunctionPath : [src/services/cost/update.costlist.service.js/updateCostList()]", () => {

	test(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC001.description, async () => {

        const output = await UpdateCostListService.updateCostList(
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC001.input.databaseConnector,
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC001.input.apiID,
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC001.input.config,
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC001.output)[2])
	});

    test(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC002.description, async () => {

        const output = await UpdateCostListService.updateCostList(
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC002.input.databaseConnector,
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC002.input.apiID,
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC002.input.config,
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC002.output.message)        
	});

    test(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC003.description, async () => {

        const output = await UpdateCostListService.updateCostList(
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC003.input.databaseConnector,
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC003.input.apiID,
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC003.input.config,
            UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCostListServiceData.UPDATE_COSTLIST_TS001_TC003.output.message)        
	});

});
