/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CostList service class
**/

/**
 * Importing all required modules here
 */

const readCostListServiceData = require("../data/read.costlist.service.data")
const readCostListService = require("../../../../src/services/cost/read.costlist.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCostListService = new readCostListService();
const ReadCostListServiceData = new readCostListServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlist.ts.001] | FunctionPath : [src/services/cost/read.contianer.service.js/readCostLists()]", () => {


	test(ReadCostListServiceData.READ_COSTLIST_TS001_TC001.description, async () => {

        const output = await ReadCostListService.readCostLists(
            ReadCostListServiceData.READ_COSTLIST_TS001_TC001.input.databaseConnector,
            ReadCostListServiceData.READ_COSTLIST_TS001_TC001.input.apiID,
            ReadCostListServiceData.READ_COSTLIST_TS001_TC001.input.config,
            ReadCostListServiceData.READ_COSTLIST_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCostListServiceData.READ_COSTLIST_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCostListServiceData.READ_COSTLIST_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCostListServiceData.READ_COSTLIST_TS001_TC001.output)[2])
	});



    test(ReadCostListServiceData.READ_COSTLIST_TS001_TC002.description, async () => {

        const output = await ReadCostListService.readCostLists(
            ReadCostListServiceData.READ_COSTLIST_TS001_TC002.input.databaseConnector,
            ReadCostListServiceData.READ_COSTLIST_TS001_TC002.input.apiID,
            ReadCostListServiceData.READ_COSTLIST_TS001_TC002.input.config,
            ReadCostListServiceData.READ_COSTLIST_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCostListServiceData.READ_COSTLIST_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCostListServiceData.READ_COSTLIST_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCostListServiceData.READ_COSTLIST_TS001_TC002.output.message)        
	});



    test(ReadCostListServiceData.READ_COSTLIST_TS001_TC003.description, async () => {

        const output = await ReadCostListService.readCostLists(
            ReadCostListServiceData.READ_COSTLIST_TS001_TC003.input.databaseConnector,
            ReadCostListServiceData.READ_COSTLIST_TS001_TC003.input.apiID,
            ReadCostListServiceData.READ_COSTLIST_TS001_TC003.input.config,
            ReadCostListServiceData.READ_COSTLIST_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCostListServiceData.READ_COSTLIST_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCostListServiceData.READ_COSTLIST_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.costlist.ts.002] | FunctionPath : [src/services/cost/read.costlist.service.js/readOneCostList()]", () => {


	test(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC001.description, async () => {

        const output = await ReadCostListService.readOneCostList(
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC001.input.databaseConnector,
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC001.input.apiID,
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC001.input.config,
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC001.output)[2])
	});



    test(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC002.description, async () => {

        const output = await ReadCostListService.readOneCostList(
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC002.input.databaseConnector,
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC002.input.apiID,
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC002.input.config,
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC002.output.message)        
	});



    test(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC003.description, async () => {

        const output = await ReadCostListService.readOneCostList(
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC003.input.databaseConnector,
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC003.input.apiID,
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC003.input.config,
            ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCostListServiceData.READ_ONE_COSTLIST_TS002_TC003.output.message)        
	});

});