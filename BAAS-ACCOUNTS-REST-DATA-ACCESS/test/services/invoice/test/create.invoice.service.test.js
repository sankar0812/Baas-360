/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create invoice service class
**/

/**
 * Importing all required modules here
 */

const createInvoiceServiceData = require("../data/create.invoice.service.data")
const createInvoiceService = require("../../../../src/services/invoice/create.invoice.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateInvoiceService = new createInvoiceService();
const CreateInvoiceServiceData = new createInvoiceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoice.ts.001] | FunctionPath : [src/services/invoice/create.invoice.service.js/createOneInvoice()]", () => {


	test(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC001.description, async () => {

        const output = await CreateInvoiceService.createOneInvoice(
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC001.input.databaseConnector,
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC001.input.apiID,
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC001.input.config,
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC001.output)[2])
	});



    test(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC002.description, async () => {

        const output = await CreateInvoiceService.createOneInvoice(
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC002.input.databaseConnector,
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC002.input.apiID,
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC002.input.config,
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC002.output.message)        
	});



    test(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC003.description, async () => {

        const output = await CreateInvoiceService.createOneInvoice(
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC003.input.databaseConnector,
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC003.input.apiID,
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC003.input.config,
            CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateInvoiceServiceData.CREATE_ONE_INVOICE_TS001_TC003.output.message)        
	});

});