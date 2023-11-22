

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update costlistitem service class
**/

/**
 * Importing all required modules here
 */

const updateCostListItemServiceData = require("../data/update.costlistitem.service.data")
const updateCostListItemService = require("../../../../src/services/cost/update.costlistitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCostListItemService = new updateCostListItemService();
const UpdateCostListItemServiceData = new updateCostListItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitem.ts.001] | FunctionPath : [src/services/cost/update.costlistitem.service.js/updateCostListItem()]", () => {

	test(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC001.description, async () => {

        const output = await UpdateCostListItemService.updateCostListItem(
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC001.input.databaseConnector,
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC001.input.apiID,
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC001.input.config,
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC001.output)[2])
	});

    test(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC002.description, async () => {

        const output = await UpdateCostListItemService.updateCostListItem(
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC002.input.databaseConnector,
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC002.input.apiID,
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC002.input.config,
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC002.output.message)        
	});

    test(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC003.description, async () => {

        const output = await UpdateCostListItemService.updateCostListItem(
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC003.input.databaseConnector,
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC003.input.apiID,
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC003.input.config,
            UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCostListItemServiceData.UPDATE_COSTLISTITEM_TS001_TC003.output.message)        
	});

});
