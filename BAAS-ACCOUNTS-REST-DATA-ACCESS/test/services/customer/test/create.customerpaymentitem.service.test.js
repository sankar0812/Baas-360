/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customerpaymentitem service class
**/

/**
 * Importing all required modules here
 */

const createCustomerPaymentItemServiceData = require("../data/create.customerpaymentitem.service.data")
const createCustomerPaymentItemService = require("../../../../src/services/customer/create.customerpaymentitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerPaymentItemService = new createCustomerPaymentItemService();
const CreateCustomerPaymentItemServiceData = new createCustomerPaymentItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerpaymentitem.ts.001] | FunctionPath : [src/services/customer/create.customerpaymentitem.service.js/createOneCustomerPaymentItem()]", () => {


	test(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.description, async () => {

        const output = await CreateCustomerPaymentItemService.createOneCustomerPaymentItem(
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.input.databaseConnector,
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.input.apiID,
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.input.config,
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.output)[2])
	});



    test(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.description, async () => {

        const output = await CreateCustomerPaymentItemService.createOneCustomerPaymentItem(
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.input.databaseConnector,
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.input.apiID,
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.input.config,
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.output.message)        
	});



    test(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.description, async () => {

        const output = await CreateCustomerPaymentItemService.createOneCustomerPaymentItem(
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.input.databaseConnector,
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.input.apiID,
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.input.config,
            CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerPaymentItemServiceData.CREATE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.output.message)        
	});

});