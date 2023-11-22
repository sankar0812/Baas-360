/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create quoteitem service class
**/

/**
 * Importing all required modules here
 */

const createQuoteItemServiceData = require("../data/create.quoteitem.service.data")
const createQuoteItemService = require("../../../../src/services/quote/create.quoteitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateQuoteItemService = new createQuoteItemService();
const CreateQuoteItemServiceData = new createQuoteItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.quoteitem.ts.001] | FunctionPath : [src/services/quote/create.quoteitem.service.js/createOneQuoteItem()]", () => {


	test(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC001.description, async () => {

        const output = await CreateQuoteItemService.createOneQuoteItem(
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC001.input.databaseConnector,
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC001.input.apiID,
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC001.input.config,
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC001.output)[2])
	});



    test(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC002.description, async () => {

        const output = await CreateQuoteItemService.createOneQuoteItem(
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC002.input.databaseConnector,
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC002.input.apiID,
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC002.input.config,
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC002.output.message)        
	});



    test(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC003.description, async () => {

        const output = await CreateQuoteItemService.createOneQuoteItem(
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC003.input.databaseConnector,
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC003.input.apiID,
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC003.input.config,
            CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateQuoteItemServiceData.CREATE_ONE_QUOTEITEM_TS001_TC003.output.message)        
	});

});