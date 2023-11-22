/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create costlistitem service class
**/

/**
 * Importing all required modules here
 */

const createCostListItemServiceData = require("../data/create.costlistitem.service.data")
const createCostListItemService = require("../../../../src/services/cost/create.costlistitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCostListItemService = new createCostListItemService();
const CreateCostListItemServiceData = new createCostListItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitem.ts.001] | FunctionPath : [src/services/cost/create.costlistitem.service.js/createOneCostListItem()]", () => {


	test(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC001.description, async () => {

        const output = await CreateCostListItemService.createOneCostListItem(
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC001.input.databaseConnector,
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC001.input.apiID,
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC001.input.config,
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC001.output)[2])
	});



    test(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC002.description, async () => {

        const output = await CreateCostListItemService.createOneCostListItem(
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC002.input.databaseConnector,
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC002.input.apiID,
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC002.input.config,
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC002.output.message)        
	});



    test(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC003.description, async () => {

        const output = await CreateCostListItemService.createOneCostListItem(
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC003.input.databaseConnector,
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC003.input.apiID,
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC003.input.config,
            CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCostListItemServiceData.CREATE_ONE_COSTLISTITEM_TS001_TC003.output.message)        
	});

});