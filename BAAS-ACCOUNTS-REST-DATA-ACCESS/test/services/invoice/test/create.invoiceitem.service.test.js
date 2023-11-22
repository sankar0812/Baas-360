/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create invoiceitem service class
**/

/**
 * Importing all required modules here
 */

const createInvoiceItemServiceData = require("../data/create.invoiceitem.service.data")
const createInvoiceItemService = require("../../../../src/services/invoice/create.invoiceitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateInvoiceItemService = new createInvoiceItemService();
const CreateInvoiceItemServiceData = new createInvoiceItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoiceitem.ts.001] | FunctionPath : [src/services/invoice/create.invoiceitem.service.js/createOneInvoiceItem()]", () => {


	test(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC001.description, async () => {

        const output = await CreateInvoiceItemService.createOneInvoiceItem(
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC001.input.databaseConnector,
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC001.input.apiID,
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC001.input.config,
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC001.output)[2])
	});



    test(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC002.description, async () => {

        const output = await CreateInvoiceItemService.createOneInvoiceItem(
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC002.input.databaseConnector,
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC002.input.apiID,
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC002.input.config,
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC002.output.message)        
	});



    test(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC003.description, async () => {

        const output = await CreateInvoiceItemService.createOneInvoiceItem(
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC003.input.databaseConnector,
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC003.input.apiID,
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC003.input.config,
            CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateInvoiceItemServiceData.CREATE_ONE_INVOICEITEM_TS001_TC003.output.message)        
	});

});