/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create costlist service class
**/

/**
 * Importing all required modules here
 */

const createCostListServiceData = require("../data/create.costlist.service.data")
const createCostListService = require("../../../../src/services/cost/create.costlist.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCostListService = new createCostListService();
const CreateCostListServiceData = new createCostListServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlist.ts.001] | FunctionPath : [src/services/cost/create.costlist.service.js/createOneCostList()]", () => {


	test(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC001.description, async () => {

        const output = await CreateCostListService.createOneCostList(
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC001.input.databaseConnector,
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC001.input.apiID,
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC001.input.config,
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC001.output)[2])
	});



    test(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC002.description, async () => {

        const output = await CreateCostListService.createOneCostList(
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC002.input.databaseConnector,
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC002.input.apiID,
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC002.input.config,
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC002.output.message)        
	});



    test(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC003.description, async () => {

        const output = await CreateCostListService.createOneCostList(
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC003.input.databaseConnector,
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC003.input.apiID,
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC003.input.config,
            CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCostListServiceData.CREATE_ONE_COSTLIST_TS001_TC003.output.message)        
	});

});