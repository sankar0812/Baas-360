/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete quoteitem service class
**/

/**
 * Importing all required modules here
 */

const deleteQuoteItemServiceData = require("../data/delete.quoteitem.service.data")
const deleteQuoteItemService = require("../../../../src/services/quote/delete.quoteitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteQuoteItemService = new deleteQuoteItemService();
const DeleteQuoteItemServiceData = new deleteQuoteItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.quoteitem.ts.001] | FunctionPath : [src/services/quote/delete.quoteitem.service.js/deleteOneQuoteItem()]", () => {


	test(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC001.description, async () => {

        const output = await DeleteQuoteItemService.deleteOneQuoteItem(
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC001.input.databaseConnector,
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC001.input.apiID,
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC001.input.config,
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC001.output)[2])
	});



    test(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC002.description, async () => {

        const output = await DeleteQuoteItemService.deleteOneQuoteItem(
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC002.input.databaseConnector,
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC002.input.apiID,
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC002.input.config,
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC002.output.message)        
	});



    test(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC003.description, async () => {

        const output = await DeleteQuoteItemService.deleteOneQuoteItem(
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC003.input.databaseConnector,
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC003.input.apiID,
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC003.input.config,
            DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteQuoteItemServiceData.DELETE_ONE_QUOTEITEM_TS001_TC003.output.message)        
	});

});
