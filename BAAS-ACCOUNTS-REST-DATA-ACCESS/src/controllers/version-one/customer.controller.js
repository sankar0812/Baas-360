/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all customer module api
**/

/**
 *  Importing all the required modules
 */
const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Endpoints = new endpoints();


/* Importing all the services classes (INJECTED USING CODE GENERATOR) */
const createCustomerStatementService = require("../../services/customer/create.customerstatement.service");
const readCustomerStatementService = require("../../services/customer/read.customerstatement.service");
const readoneCustomerStatementService = require("../../services/customer/read.customerstatement.service");
const countCustomerStatementService = require("../../services/customer/read.customerstatement.service");
const updateCustomerStatementService = require("../../services/customer/update.customerstatement.service");
const deleteCustomerStatementService = require("../../services/customer/delete.customerstatement.service");
const createCustomerProductUsageLogService = require("../../services/customer/create.customerproductusagelog.service");
const readCustomerProductUsageLogService = require("../../services/customer/read.customerproductusagelog.service");
const readoneCustomerProductUsageLogService = require("../../services/customer/read.customerproductusagelog.service");
const countCustomerProductUsageLogService = require("../../services/customer/read.customerproductusagelog.service");
const updateCustomerProductUsageLogService = require("../../services/customer/update.customerproductusagelog.service");
const deleteCustomerProductUsageLogService = require("../../services/customer/delete.customerproductusagelog.service");
const createCustomerProductUsageService = require("../../services/customer/create.customerproductusage.service");
const readCustomerProductUsageService = require("../../services/customer/read.customerproductusage.service");
const readoneCustomerProductUsageService = require("../../services/customer/read.customerproductusage.service");
const countCustomerProductUsageService = require("../../services/customer/read.customerproductusage.service");
const updateCustomerProductUsageService = require("../../services/customer/update.customerproductusage.service");
const deleteCustomerProductUsageService = require("../../services/customer/delete.customerproductusage.service");
const createCustomerPaymentItemService = require("../../services/customer/create.customerpaymentitem.service");
const readCustomerPaymentItemService = require("../../services/customer/read.customerpaymentitem.service");
const readoneCustomerPaymentItemService = require("../../services/customer/read.customerpaymentitem.service");
const countCustomerPaymentItemService = require("../../services/customer/read.customerpaymentitem.service");
const updateCustomerPaymentItemService = require("../../services/customer/update.customerpaymentitem.service");
const deleteCustomerPaymentItemService = require("../../services/customer/delete.customerpaymentitem.service");
const createCustomerPaymentService = require("../../services/customer/create.customerpayment.service");
const readCustomerPaymentService = require("../../services/customer/read.customerpayment.service");
const readoneCustomerPaymentService = require("../../services/customer/read.customerpayment.service");
const countCustomerPaymentService = require("../../services/customer/read.customerpayment.service");
const updateCustomerPaymentService = require("../../services/customer/update.customerpayment.service");
const deleteCustomerPaymentService = require("../../services/customer/delete.customerpayment.service");
const createCustomerAccountTransactionService = require("../../services/customer/create.customeraccounttransaction.service");
const readCustomerAccountTransactionService = require("../../services/customer/read.customeraccounttransaction.service");
const readoneCustomerAccountTransactionService = require("../../services/customer/read.customeraccounttransaction.service");
const countCustomerAccountTransactionService = require("../../services/customer/read.customeraccounttransaction.service");
const updateCustomerAccountTransactionService = require("../../services/customer/update.customeraccounttransaction.service");
const deleteCustomerAccountTransactionService = require("../../services/customer/delete.customeraccounttransaction.service");
const createCustomerAccountCardService = require("../../services/customer/create.customeraccountcard.service");
const readCustomerAccountCardService = require("../../services/customer/read.customeraccountcard.service");
const readoneCustomerAccountCardService = require("../../services/customer/read.customeraccountcard.service");
const countCustomerAccountCardService = require("../../services/customer/read.customeraccountcard.service");
const updateCustomerAccountCardService = require("../../services/customer/update.customeraccountcard.service");
const deleteCustomerAccountCardService = require("../../services/customer/delete.customeraccountcard.service");
const createCustomerAccountBalanceService = require("../../services/customer/create.customeraccountbalance.service");
const readCustomerAccountBalanceService = require("../../services/customer/read.customeraccountbalance.service");
const readoneCustomerAccountBalanceService = require("../../services/customer/read.customeraccountbalance.service");
const countCustomerAccountBalanceService = require("../../services/customer/read.customeraccountbalance.service");
const updateCustomerAccountBalanceService = require("../../services/customer/update.customeraccountbalance.service");
const deleteCustomerAccountBalanceService = require("../../services/customer/delete.customeraccountbalance.service");
const createCustomerAccountService = require("../../services/customer/create.customeraccount.service");
const readCustomerAccountService = require("../../services/customer/read.customeraccount.service");
const readoneCustomerAccountService = require("../../services/customer/read.customeraccount.service");
const countCustomerAccountService = require("../../services/customer/read.customeraccount.service");
const updateCustomerAccountService = require("../../services/customer/update.customeraccount.service");
const deleteCustomerAccountService = require("../../services/customer/delete.customeraccount.service");
const createCustomerService = require("../../services/customer/create.customer.service");
const readCustomerService = require("../../services/customer/read.customer.service");
const readoneCustomerService = require("../../services/customer/read.customer.service");
const countCustomerService = require("../../services/customer/read.customer.service");
const updateCustomerService = require("../../services/customer/update.customer.service");
const deleteCustomerService = require("../../services/customer/delete.customer.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateCustomerStatementService = new createCustomerStatementService();
const ReadCustomerStatementService = new readCustomerStatementService();
const ReadoneCustomerStatementService = new readoneCustomerStatementService();
const CountCustomerStatementService = new countCustomerStatementService();
const UpdateCustomerStatementService = new updateCustomerStatementService();
const DeleteCustomerStatementService = new deleteCustomerStatementService();
const CreateCustomerProductUsageLogService = new createCustomerProductUsageLogService();
const ReadCustomerProductUsageLogService = new readCustomerProductUsageLogService();
const ReadoneCustomerProductUsageLogService = new readoneCustomerProductUsageLogService();
const CountCustomerProductUsageLogService = new countCustomerProductUsageLogService();
const UpdateCustomerProductUsageLogService = new updateCustomerProductUsageLogService();
const DeleteCustomerProductUsageLogService = new deleteCustomerProductUsageLogService();
const CreateCustomerProductUsageService = new createCustomerProductUsageService();
const ReadCustomerProductUsageService = new readCustomerProductUsageService();
const ReadoneCustomerProductUsageService = new readoneCustomerProductUsageService();
const CountCustomerProductUsageService = new countCustomerProductUsageService();
const UpdateCustomerProductUsageService = new updateCustomerProductUsageService();
const DeleteCustomerProductUsageService = new deleteCustomerProductUsageService();
const CreateCustomerPaymentItemService = new createCustomerPaymentItemService();
const ReadCustomerPaymentItemService = new readCustomerPaymentItemService();
const ReadoneCustomerPaymentItemService = new readoneCustomerPaymentItemService();
const CountCustomerPaymentItemService = new countCustomerPaymentItemService();
const UpdateCustomerPaymentItemService = new updateCustomerPaymentItemService();
const DeleteCustomerPaymentItemService = new deleteCustomerPaymentItemService();
const CreateCustomerPaymentService = new createCustomerPaymentService();
const ReadCustomerPaymentService = new readCustomerPaymentService();
const ReadoneCustomerPaymentService = new readoneCustomerPaymentService();
const CountCustomerPaymentService = new countCustomerPaymentService();
const UpdateCustomerPaymentService = new updateCustomerPaymentService();
const DeleteCustomerPaymentService = new deleteCustomerPaymentService();
const CreateCustomerAccountTransactionService = new createCustomerAccountTransactionService();
const ReadCustomerAccountTransactionService = new readCustomerAccountTransactionService();
const ReadoneCustomerAccountTransactionService = new readoneCustomerAccountTransactionService();
const CountCustomerAccountTransactionService = new countCustomerAccountTransactionService();
const UpdateCustomerAccountTransactionService = new updateCustomerAccountTransactionService();
const DeleteCustomerAccountTransactionService = new deleteCustomerAccountTransactionService();
const CreateCustomerAccountCardService = new createCustomerAccountCardService();
const ReadCustomerAccountCardService = new readCustomerAccountCardService();
const ReadoneCustomerAccountCardService = new readoneCustomerAccountCardService();
const CountCustomerAccountCardService = new countCustomerAccountCardService();
const UpdateCustomerAccountCardService = new updateCustomerAccountCardService();
const DeleteCustomerAccountCardService = new deleteCustomerAccountCardService();
const CreateCustomerAccountBalanceService = new createCustomerAccountBalanceService();
const ReadCustomerAccountBalanceService = new readCustomerAccountBalanceService();
const ReadoneCustomerAccountBalanceService = new readoneCustomerAccountBalanceService();
const CountCustomerAccountBalanceService = new countCustomerAccountBalanceService();
const UpdateCustomerAccountBalanceService = new updateCustomerAccountBalanceService();
const DeleteCustomerAccountBalanceService = new deleteCustomerAccountBalanceService();
const CreateCustomerAccountService = new createCustomerAccountService();
const ReadCustomerAccountService = new readCustomerAccountService();
const ReadoneCustomerAccountService = new readoneCustomerAccountService();
const CountCustomerAccountService = new countCustomerAccountService();
const UpdateCustomerAccountService = new updateCustomerAccountService();
const DeleteCustomerAccountService = new deleteCustomerAccountService();
const CreateCustomerService = new createCustomerService();
const ReadCustomerService = new readCustomerService();
const ReadoneCustomerService = new readoneCustomerService();
const CountCustomerService = new countCustomerService();
const UpdateCustomerService = new updateCustomerService();
const DeleteCustomerService = new deleteCustomerService();


/**
 * Initializing the controller object
 */
const CustomerController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_STATEMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerstatement.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerStatementService.createOneCustomerStatement ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_STATEMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerstatement.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerStatementService.readCustomerStatements ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_STATEMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerstatement.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerStatementService.readOneCustomerStatement ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_STATEMENTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerstatement.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerStatementService.readCustomerStatementCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMER_STATEMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerstatement.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerStatementService.updateCustomerStatement ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_STATEMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerstatement.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerStatementService.deleteOneCustomerStatement ) 
});


CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PRODUCT_USAGE_LOG, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusagelog.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerProductUsageLogService.createOneCustomerProductUsageLog ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PRODUCT_USAGE_LOGS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusagelog.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerProductUsageLogService.readCustomerProductUsageLogs ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_PRODUCT_USAGE_LOG, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusagelog.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerProductUsageLogService.readOneCustomerProductUsageLog ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PRODUCT_USAGE_LOGS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusagelog.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerProductUsageLogService.readCustomerProductUsageLogCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMER_PRODUCT_USAGE_LOGS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusagelog.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerProductUsageLogService.updateCustomerProductUsageLog ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_PRODUCT_USAGE_LOG, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusagelog.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerProductUsageLogService.deleteOneCustomerProductUsageLog ) 
});


CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PRODUCT_USAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusage.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerProductUsageService.createOneCustomerProductUsage ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PRODUCT_USAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusage.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerProductUsageService.readCustomerProductUsages ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_PRODUCT_USAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusage.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerProductUsageService.readOneCustomerProductUsage ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PRODUCT_USAGES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusage.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerProductUsageService.readCustomerProductUsageCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMER_PRODUCT_USAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusage.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerProductUsageService.updateCustomerProductUsage ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_PRODUCT_USAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerproductusage.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerProductUsageService.deleteOneCustomerProductUsage ) 
});


CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PAYMENT_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpaymentitem.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerPaymentItemService.createOneCustomerPaymentItem ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PAYMENT_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpaymentitem.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerPaymentItemService.readCustomerPaymentItems ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_PAYMENT_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpaymentitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerPaymentItemService.readOneCustomerPaymentItem ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PAYMENT_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpaymentitem.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerPaymentItemService.readCustomerPaymentItemCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMER_PAYMENT_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpaymentitem.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerPaymentItemService.updateCustomerPaymentItem ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_PAYMENT_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpaymentitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerPaymentItemService.deleteOneCustomerPaymentItem ) 
});


CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PAYMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpayment.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerPaymentService.createOneCustomerPayment ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PAYMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpayment.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerPaymentService.readCustomerPayments ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_PAYMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpayment.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerPaymentService.readOneCustomerPayment ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_PAYMENTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpayment.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerPaymentService.readCustomerPaymentCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMER_PAYMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpayment.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerPaymentService.updateCustomerPayment ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_PAYMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customerpayment.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerPaymentService.deleteOneCustomerPayment ) 
});


CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_TRANSACTION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccounttransaction.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerAccountTransactionService.createOneCustomerAccountTransaction ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_TRANSACTIONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccounttransaction.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerAccountTransactionService.readCustomerAccountTransactions ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_ACCOUNT_TRANSACTION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccounttransaction.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerAccountTransactionService.readOneCustomerAccountTransaction ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_TRANSACTIONS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccounttransaction.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerAccountTransactionService.readCustomerAccountTransactionCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_TRANSACTIONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccounttransaction.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerAccountTransactionService.updateCustomerAccountTransaction ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_ACCOUNT_TRANSACTION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccounttransaction.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerAccountTransactionService.deleteOneCustomerAccountTransaction ) 
});


CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_CARD, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountcard.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerAccountCardService.createOneCustomerAccountCard ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_CARDS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountcard.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerAccountCardService.readCustomerAccountCards ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_ACCOUNT_CARD, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountcard.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerAccountCardService.readOneCustomerAccountCard ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_CARDS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountcard.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerAccountCardService.readCustomerAccountCardCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_CARDS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountcard.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerAccountCardService.updateCustomerAccountCard ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_ACCOUNT_CARD, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountcard.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerAccountCardService.deleteOneCustomerAccountCard ) 
});


CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_BALANCE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountbalance.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerAccountBalanceService.createOneCustomerAccountBalance ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_BALANCES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountbalance.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerAccountBalanceService.readCustomerAccountBalances ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_ACCOUNT_BALANCE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountbalance.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerAccountBalanceService.readOneCustomerAccountBalance ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_BALANCES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountbalance.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerAccountBalanceService.readCustomerAccountBalanceCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT_BALANCES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountbalance.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerAccountBalanceService.updateCustomerAccountBalance ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_ACCOUNT_BALANCE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccountbalance.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerAccountBalanceService.deleteOneCustomerAccountBalance ) 
});


CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccount.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerAccountService.createOneCustomerAccount ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccount.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerAccountService.readCustomerAccounts ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccount.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerAccountService.readOneCustomerAccount ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMER_ACCOUNTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccount.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerAccountService.readCustomerAccountCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMER_ACCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccount.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerAccountService.updateCustomerAccount ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customeraccount.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerAccountService.deleteOneCustomerAccount ) 
});


CustomerController.post(Endpoints.ENDPOINT_CUSTOMER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customer.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerService.createOneCustomer ) 
}); 

CustomerController.post(Endpoints.ENDPOINT_CUSTOMERS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customer.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerService.readCustomers ) 
});

CustomerController.get(Endpoints.ENDPOINT_ONE_CUSTOMER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customer.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerService.readOneCustomer ) 
});

CustomerController.post(Endpoints.ENDPOINT_CUSTOMERS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customer.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerService.readCustomerCount ) 
});

CustomerController.patch(Endpoints.ENDPOINT_CUSTOMERS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customer.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerService.updateCustomer ) 
});

CustomerController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customer.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerService.deleteOneCustomer ) 
});



module.exports = CustomerController;
