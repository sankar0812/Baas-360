/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete costlist service class
**/

/**
 * Importing all required modules here
 */

const deleteCostListServiceData = require("../data/delete.costlist.service.data")
const deleteCostListService = require("../../../../src/services/cost/delete.costlist.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCostListService = new deleteCostListService();
const DeleteCostListServiceData = new deleteCostListServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlist.ts.001] | FunctionPath : [src/services/cost/delete.costlist.service.js/deleteOneCostList()]", () => {


	test(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC001.description, async () => {

        const output = await DeleteCostListService.deleteOneCostList(
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC001.input.databaseConnector,
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC001.input.apiID,
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC001.input.config,
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC001.output)[2])
	});



    test(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC002.description, async () => {

        const output = await DeleteCostListService.deleteOneCostList(
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC002.input.databaseConnector,
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC002.input.apiID,
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC002.input.config,
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC002.output.message)        
	});



    test(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC003.description, async () => {

        const output = await DeleteCostListService.deleteOneCostList(
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC003.input.databaseConnector,
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC003.input.apiID,
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC003.input.config,
            DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCostListServiceData.DELETE_ONE_COSTLIST_TS001_TC003.output.message)        
	});

});
