

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update quoteitem service class
**/

/**
 * Importing all required modules here
 */

const updateQuoteItemServiceData = require("../data/update.quoteitem.service.data")
const updateQuoteItemService = require("../../../../src/services/quote/update.quoteitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateQuoteItemService = new updateQuoteItemService();
const UpdateQuoteItemServiceData = new updateQuoteItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.quoteitem.ts.001] | FunctionPath : [src/services/quote/update.quoteitem.service.js/updateQuoteItem()]", () => {

	test(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC001.description, async () => {

        const output = await UpdateQuoteItemService.updateQuoteItem(
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC001.input.databaseConnector,
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC001.input.apiID,
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC001.input.config,
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC001.output)[2])
	});

    test(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC002.description, async () => {

        const output = await UpdateQuoteItemService.updateQuoteItem(
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC002.input.databaseConnector,
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC002.input.apiID,
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC002.input.config,
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC002.output.message)        
	});

    test(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC003.description, async () => {

        const output = await UpdateQuoteItemService.updateQuoteItem(
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC003.input.databaseConnector,
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC003.input.apiID,
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC003.input.config,
            UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateQuoteItemServiceData.UPDATE_QUOTEITEM_TS001_TC003.output.message)        
	});

});
