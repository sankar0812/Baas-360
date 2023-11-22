/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create invoicestatus service class
**/

/**
 * Importing all required modules here
 */

const createInvoiceStatusServiceData = require("../data/create.invoicestatus.service.data")
const createInvoiceStatusService = require("../../../../src/services/invoice/create.invoicestatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateInvoiceStatusService = new createInvoiceStatusService();
const CreateInvoiceStatusServiceData = new createInvoiceStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoicestatus.ts.001] | FunctionPath : [src/services/invoice/create.invoicestatus.service.js/createOneInvoiceStatus()]", () => {


	test(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC001.description, async () => {

        const output = await CreateInvoiceStatusService.createOneInvoiceStatus(
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC001.input.databaseConnector,
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC001.input.apiID,
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC001.input.config,
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC001.output)[2])
	});



    test(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC002.description, async () => {

        const output = await CreateInvoiceStatusService.createOneInvoiceStatus(
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC002.input.databaseConnector,
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC002.input.apiID,
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC002.input.config,
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC002.output.message)        
	});



    test(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC003.description, async () => {

        const output = await CreateInvoiceStatusService.createOneInvoiceStatus(
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC003.input.databaseConnector,
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC003.input.apiID,
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC003.input.config,
            CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(CreateInvoiceStatusServiceData.CREATE_ONE_INVOICESTATUS_TS001_TC003.output.message)        
	});

});