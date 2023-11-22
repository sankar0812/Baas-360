/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customerpaymentitem service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerPaymentItemServiceData = require("../data/delete.customerpaymentitem.service.data")
const deleteCustomerPaymentItemService = require("../../../../src/services/customer/delete.customerpaymentitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerPaymentItemService = new deleteCustomerPaymentItemService();
const DeleteCustomerPaymentItemServiceData = new deleteCustomerPaymentItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerpaymentitem.ts.001] | FunctionPath : [src/services/customer/delete.customerpaymentitem.service.js/deleteOneCustomerPaymentItem()]", () => {


	test(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.description, async () => {

        const output = await DeleteCustomerPaymentItemService.deleteOneCustomerPaymentItem(
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.input.databaseConnector,
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.input.apiID,
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.input.config,
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001.output)[2])
	});



    test(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.description, async () => {

        const output = await DeleteCustomerPaymentItemService.deleteOneCustomerPaymentItem(
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.input.databaseConnector,
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.input.apiID,
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.input.config,
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002.output.message)        
	});



    test(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.description, async () => {

        const output = await DeleteCustomerPaymentItemService.deleteOneCustomerPaymentItem(
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.input.databaseConnector,
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.input.apiID,
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.input.config,
            DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerPaymentItemServiceData.DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003.output.message)        
	});

});
