/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CostListItem service class
**/

/**
 * Importing all required modules here
 */

const readCostListItemServiceData = require("../data/read.costlistitem.service.data")
const readCostListItemService = require("../../../../src/services/cost/read.costlistitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCostListItemService = new readCostListItemService();
const ReadCostListItemServiceData = new readCostListItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitem.ts.001] | FunctionPath : [src/services/cost/read.contianer.service.js/readCostListItems()]", () => {


	test(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC001.description, async () => {

        const output = await ReadCostListItemService.readCostListItems(
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC001.input.databaseConnector,
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC001.input.apiID,
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC001.input.config,
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC001.output)[2])
	});



    test(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC002.description, async () => {

        const output = await ReadCostListItemService.readCostListItems(
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC002.input.databaseConnector,
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC002.input.apiID,
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC002.input.config,
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC002.output.message)        
	});



    test(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC003.description, async () => {

        const output = await ReadCostListItemService.readCostListItems(
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC003.input.databaseConnector,
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC003.input.apiID,
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC003.input.config,
            ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCostListItemServiceData.READ_COSTLISTITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitem.ts.002] | FunctionPath : [src/services/cost/read.costlistitem.service.js/readOneCostListItem()]", () => {


	test(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC001.description, async () => {

        const output = await ReadCostListItemService.readOneCostListItem(
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC001.input.databaseConnector,
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC001.input.apiID,
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC001.input.config,
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC001.output)[2])
	});



    test(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC002.description, async () => {

        const output = await ReadCostListItemService.readOneCostListItem(
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC002.input.databaseConnector,
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC002.input.apiID,
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC002.input.config,
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC002.output.message)        
	});



    test(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC003.description, async () => {

        const output = await ReadCostListItemService.readOneCostListItem(
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC003.input.databaseConnector,
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC003.input.apiID,
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC003.input.config,
            ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCostListItemServiceData.READ_ONE_COSTLISTITEM_TS002_TC003.output.message)        
	});

});