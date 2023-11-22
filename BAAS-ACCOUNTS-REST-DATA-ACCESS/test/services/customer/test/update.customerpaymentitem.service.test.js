

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customerpaymentitem service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerPaymentItemServiceData = require("../data/update.customerpaymentitem.service.data")
const updateCustomerPaymentItemService = require("../../../../src/services/customer/update.customerpaymentitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerPaymentItemService = new updateCustomerPaymentItemService();
const UpdateCustomerPaymentItemServiceData = new updateCustomerPaymentItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerpaymentitem.ts.001] | FunctionPath : [src/services/customer/update.customerpaymentitem.service.js/updateCustomerPaymentItem()]", () => {

	test(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC001.description, async () => {

        const output = await UpdateCustomerPaymentItemService.updateCustomerPaymentItem(
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC001.input.databaseConnector,
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC001.input.apiID,
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC001.input.config,
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC001.output)[2])
	});

    test(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC002.description, async () => {

        const output = await UpdateCustomerPaymentItemService.updateCustomerPaymentItem(
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC002.input.databaseConnector,
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC002.input.apiID,
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC002.input.config,
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC002.output.message)        
	});

    test(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC003.description, async () => {

        const output = await UpdateCustomerPaymentItemService.updateCustomerPaymentItem(
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC003.input.databaseConnector,
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC003.input.apiID,
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC003.input.config,
            UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerPaymentItemServiceData.UPDATE_CUSTOMERPAYMENTITEM_TS001_TC003.output.message)        
	});

});
