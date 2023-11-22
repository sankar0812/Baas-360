/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete costlistitem service class
**/

/**
 * Importing all required modules here
 */

const deleteCostListItemServiceData = require("../data/delete.costlistitem.service.data")
const deleteCostListItemService = require("../../../../src/services/cost/delete.costlistitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCostListItemService = new deleteCostListItemService();
const DeleteCostListItemServiceData = new deleteCostListItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitem.ts.001] | FunctionPath : [src/services/cost/delete.costlistitem.service.js/deleteOneCostListItem()]", () => {


	test(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC001.description, async () => {

        const output = await DeleteCostListItemService.deleteOneCostListItem(
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC001.input.databaseConnector,
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC001.input.apiID,
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC001.input.config,
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC001.output)[2])
	});



    test(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC002.description, async () => {

        const output = await DeleteCostListItemService.deleteOneCostListItem(
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC002.input.databaseConnector,
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC002.input.apiID,
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC002.input.config,
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC002.output.message)        
	});



    test(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC003.description, async () => {

        const output = await DeleteCostListItemService.deleteOneCostListItem(
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC003.input.databaseConnector,
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC003.input.apiID,
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC003.input.config,
            DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCostListItemServiceData.DELETE_ONE_COSTLISTITEM_TS001_TC003.output.message)        
	});

});
