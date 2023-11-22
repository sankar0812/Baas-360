/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all vendor module api
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
const createVendorTransactionTypeService = require("../../services/vendor/create.vendortransactiontype.service");
const readVendorTransactionTypeService = require("../../services/vendor/read.vendortransactiontype.service");
const readoneVendorTransactionTypeService = require("../../services/vendor/read.vendortransactiontype.service");
const countVendorTransactionTypeService = require("../../services/vendor/read.vendortransactiontype.service");
const updateVendorTransactionTypeService = require("../../services/vendor/update.vendortransactiontype.service");
const deleteVendorTransactionTypeService = require("../../services/vendor/delete.vendortransactiontype.service");
const createVendorStatementService = require("../../services/vendor/create.vendorstatement.service");
const readVendorStatementService = require("../../services/vendor/read.vendorstatement.service");
const readoneVendorStatementService = require("../../services/vendor/read.vendorstatement.service");
const countVendorStatementService = require("../../services/vendor/read.vendorstatement.service");
const updateVendorStatementService = require("../../services/vendor/update.vendorstatement.service");
const deleteVendorStatementService = require("../../services/vendor/delete.vendorstatement.service");
const createVendorProductService = require("../../services/vendor/create.vendorproduct.service");
const readVendorProductService = require("../../services/vendor/read.vendorproduct.service");
const readoneVendorProductService = require("../../services/vendor/read.vendorproduct.service");
const countVendorProductService = require("../../services/vendor/read.vendorproduct.service");
const updateVendorProductService = require("../../services/vendor/update.vendorproduct.service");
const deleteVendorProductService = require("../../services/vendor/delete.vendorproduct.service");
const createVendorPaymentLogService = require("../../services/vendor/create.vendorpaymentlog.service");
const readVendorPaymentLogService = require("../../services/vendor/read.vendorpaymentlog.service");
const readoneVendorPaymentLogService = require("../../services/vendor/read.vendorpaymentlog.service");
const countVendorPaymentLogService = require("../../services/vendor/read.vendorpaymentlog.service");
const updateVendorPaymentLogService = require("../../services/vendor/update.vendorpaymentlog.service");
const deleteVendorPaymentLogService = require("../../services/vendor/delete.vendorpaymentlog.service");
const createVendorPaymentItemService = require("../../services/vendor/create.vendorpaymentitem.service");
const readVendorPaymentItemService = require("../../services/vendor/read.vendorpaymentitem.service");
const readoneVendorPaymentItemService = require("../../services/vendor/read.vendorpaymentitem.service");
const countVendorPaymentItemService = require("../../services/vendor/read.vendorpaymentitem.service");
const updateVendorPaymentItemService = require("../../services/vendor/update.vendorpaymentitem.service");
const deleteVendorPaymentItemService = require("../../services/vendor/delete.vendorpaymentitem.service");
const createVendorPaymentService = require("../../services/vendor/create.vendorpayment.service");
const readVendorPaymentService = require("../../services/vendor/read.vendorpayment.service");
const readoneVendorPaymentService = require("../../services/vendor/read.vendorpayment.service");
const countVendorPaymentService = require("../../services/vendor/read.vendorpayment.service");
const updateVendorPaymentService = require("../../services/vendor/update.vendorpayment.service");
const deleteVendorPaymentService = require("../../services/vendor/delete.vendorpayment.service");
const createVendorExpenseService = require("../../services/vendor/create.vendorexpense.service");
const readVendorExpenseService = require("../../services/vendor/read.vendorexpense.service");
const readoneVendorExpenseService = require("../../services/vendor/read.vendorexpense.service");
const countVendorExpenseService = require("../../services/vendor/read.vendorexpense.service");
const updateVendorExpenseService = require("../../services/vendor/update.vendorexpense.service");
const deleteVendorExpenseService = require("../../services/vendor/delete.vendorexpense.service");
const createVendorCategoryService = require("../../services/vendor/create.vendorcategory.service");
const readVendorCategoryService = require("../../services/vendor/read.vendorcategory.service");
const readoneVendorCategoryService = require("../../services/vendor/read.vendorcategory.service");
const countVendorCategoryService = require("../../services/vendor/read.vendorcategory.service");
const updateVendorCategoryService = require("../../services/vendor/update.vendorcategory.service");
const deleteVendorCategoryService = require("../../services/vendor/delete.vendorcategory.service");
const createVendorBillItemService = require("../../services/vendor/create.vendorbillitem.service");
const readVendorBillItemService = require("../../services/vendor/read.vendorbillitem.service");
const readoneVendorBillItemService = require("../../services/vendor/read.vendorbillitem.service");
const countVendorBillItemService = require("../../services/vendor/read.vendorbillitem.service");
const updateVendorBillItemService = require("../../services/vendor/update.vendorbillitem.service");
const deleteVendorBillItemService = require("../../services/vendor/delete.vendorbillitem.service");
const createVendorBillService = require("../../services/vendor/create.vendorbill.service");
const readVendorBillService = require("../../services/vendor/read.vendorbill.service");
const readoneVendorBillService = require("../../services/vendor/read.vendorbill.service");
const countVendorBillService = require("../../services/vendor/read.vendorbill.service");
const updateVendorBillService = require("../../services/vendor/update.vendorbill.service");
const deleteVendorBillService = require("../../services/vendor/delete.vendorbill.service");
const createVendorApprovalItemService = require("../../services/vendor/create.vendorapprovalitem.service");
const readVendorApprovalItemService = require("../../services/vendor/read.vendorapprovalitem.service");
const readoneVendorApprovalItemService = require("../../services/vendor/read.vendorapprovalitem.service");
const countVendorApprovalItemService = require("../../services/vendor/read.vendorapprovalitem.service");
const updateVendorApprovalItemService = require("../../services/vendor/update.vendorapprovalitem.service");
const deleteVendorApprovalItemService = require("../../services/vendor/delete.vendorapprovalitem.service");
const createVendorApprovalService = require("../../services/vendor/create.vendorapproval.service");
const readVendorApprovalService = require("../../services/vendor/read.vendorapproval.service");
const readoneVendorApprovalService = require("../../services/vendor/read.vendorapproval.service");
const countVendorApprovalService = require("../../services/vendor/read.vendorapproval.service");
const updateVendorApprovalService = require("../../services/vendor/update.vendorapproval.service");
const deleteVendorApprovalService = require("../../services/vendor/delete.vendorapproval.service");
const createVendorAccountBalanceService = require("../../services/vendor/create.vendoraccountbalance.service");
const readVendorAccountBalanceService = require("../../services/vendor/read.vendoraccountbalance.service");
const readoneVendorAccountBalanceService = require("../../services/vendor/read.vendoraccountbalance.service");
const countVendorAccountBalanceService = require("../../services/vendor/read.vendoraccountbalance.service");
const updateVendorAccountBalanceService = require("../../services/vendor/update.vendoraccountbalance.service");
const deleteVendorAccountBalanceService = require("../../services/vendor/delete.vendoraccountbalance.service");
const createVendorAccountService = require("../../services/vendor/create.vendoraccount.service");
const readVendorAccountService = require("../../services/vendor/read.vendoraccount.service");
const readoneVendorAccountService = require("../../services/vendor/read.vendoraccount.service");
const countVendorAccountService = require("../../services/vendor/read.vendoraccount.service");
const updateVendorAccountService = require("../../services/vendor/update.vendoraccount.service");
const deleteVendorAccountService = require("../../services/vendor/delete.vendoraccount.service");
const createVendorService = require("../../services/vendor/create.vendor.service");
const readVendorService = require("../../services/vendor/read.vendor.service");
const readoneVendorService = require("../../services/vendor/read.vendor.service");
const countVendorService = require("../../services/vendor/read.vendor.service");
const updateVendorService = require("../../services/vendor/update.vendor.service");
const deleteVendorService = require("../../services/vendor/delete.vendor.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateVendorTransactionTypeService = new createVendorTransactionTypeService();
const ReadVendorTransactionTypeService = new readVendorTransactionTypeService();
const ReadoneVendorTransactionTypeService = new readoneVendorTransactionTypeService();
const CountVendorTransactionTypeService = new countVendorTransactionTypeService();
const UpdateVendorTransactionTypeService = new updateVendorTransactionTypeService();
const DeleteVendorTransactionTypeService = new deleteVendorTransactionTypeService();
const CreateVendorStatementService = new createVendorStatementService();
const ReadVendorStatementService = new readVendorStatementService();
const ReadoneVendorStatementService = new readoneVendorStatementService();
const CountVendorStatementService = new countVendorStatementService();
const UpdateVendorStatementService = new updateVendorStatementService();
const DeleteVendorStatementService = new deleteVendorStatementService();
const CreateVendorProductService = new createVendorProductService();
const ReadVendorProductService = new readVendorProductService();
const ReadoneVendorProductService = new readoneVendorProductService();
const CountVendorProductService = new countVendorProductService();
const UpdateVendorProductService = new updateVendorProductService();
const DeleteVendorProductService = new deleteVendorProductService();
const CreateVendorPaymentLogService = new createVendorPaymentLogService();
const ReadVendorPaymentLogService = new readVendorPaymentLogService();
const ReadoneVendorPaymentLogService = new readoneVendorPaymentLogService();
const CountVendorPaymentLogService = new countVendorPaymentLogService();
const UpdateVendorPaymentLogService = new updateVendorPaymentLogService();
const DeleteVendorPaymentLogService = new deleteVendorPaymentLogService();
const CreateVendorPaymentItemService = new createVendorPaymentItemService();
const ReadVendorPaymentItemService = new readVendorPaymentItemService();
const ReadoneVendorPaymentItemService = new readoneVendorPaymentItemService();
const CountVendorPaymentItemService = new countVendorPaymentItemService();
const UpdateVendorPaymentItemService = new updateVendorPaymentItemService();
const DeleteVendorPaymentItemService = new deleteVendorPaymentItemService();
const CreateVendorPaymentService = new createVendorPaymentService();
const ReadVendorPaymentService = new readVendorPaymentService();
const ReadoneVendorPaymentService = new readoneVendorPaymentService();
const CountVendorPaymentService = new countVendorPaymentService();
const UpdateVendorPaymentService = new updateVendorPaymentService();
const DeleteVendorPaymentService = new deleteVendorPaymentService();
const CreateVendorExpenseService = new createVendorExpenseService();
const ReadVendorExpenseService = new readVendorExpenseService();
const ReadoneVendorExpenseService = new readoneVendorExpenseService();
const CountVendorExpenseService = new countVendorExpenseService();
const UpdateVendorExpenseService = new updateVendorExpenseService();
const DeleteVendorExpenseService = new deleteVendorExpenseService();
const CreateVendorCategoryService = new createVendorCategoryService();
const ReadVendorCategoryService = new readVendorCategoryService();
const ReadoneVendorCategoryService = new readoneVendorCategoryService();
const CountVendorCategoryService = new countVendorCategoryService();
const UpdateVendorCategoryService = new updateVendorCategoryService();
const DeleteVendorCategoryService = new deleteVendorCategoryService();
const CreateVendorBillItemService = new createVendorBillItemService();
const ReadVendorBillItemService = new readVendorBillItemService();
const ReadoneVendorBillItemService = new readoneVendorBillItemService();
const CountVendorBillItemService = new countVendorBillItemService();
const UpdateVendorBillItemService = new updateVendorBillItemService();
const DeleteVendorBillItemService = new deleteVendorBillItemService();
const CreateVendorBillService = new createVendorBillService();
const ReadVendorBillService = new readVendorBillService();
const ReadoneVendorBillService = new readoneVendorBillService();
const CountVendorBillService = new countVendorBillService();
const UpdateVendorBillService = new updateVendorBillService();
const DeleteVendorBillService = new deleteVendorBillService();
const CreateVendorApprovalItemService = new createVendorApprovalItemService();
const ReadVendorApprovalItemService = new readVendorApprovalItemService();
const ReadoneVendorApprovalItemService = new readoneVendorApprovalItemService();
const CountVendorApprovalItemService = new countVendorApprovalItemService();
const UpdateVendorApprovalItemService = new updateVendorApprovalItemService();
const DeleteVendorApprovalItemService = new deleteVendorApprovalItemService();
const CreateVendorApprovalService = new createVendorApprovalService();
const ReadVendorApprovalService = new readVendorApprovalService();
const ReadoneVendorApprovalService = new readoneVendorApprovalService();
const CountVendorApprovalService = new countVendorApprovalService();
const UpdateVendorApprovalService = new updateVendorApprovalService();
const DeleteVendorApprovalService = new deleteVendorApprovalService();
const CreateVendorAccountBalanceService = new createVendorAccountBalanceService();
const ReadVendorAccountBalanceService = new readVendorAccountBalanceService();
const ReadoneVendorAccountBalanceService = new readoneVendorAccountBalanceService();
const CountVendorAccountBalanceService = new countVendorAccountBalanceService();
const UpdateVendorAccountBalanceService = new updateVendorAccountBalanceService();
const DeleteVendorAccountBalanceService = new deleteVendorAccountBalanceService();
const CreateVendorAccountService = new createVendorAccountService();
const ReadVendorAccountService = new readVendorAccountService();
const ReadoneVendorAccountService = new readoneVendorAccountService();
const CountVendorAccountService = new countVendorAccountService();
const UpdateVendorAccountService = new updateVendorAccountService();
const DeleteVendorAccountService = new deleteVendorAccountService();
const CreateVendorService = new createVendorService();
const ReadVendorService = new readVendorService();
const ReadoneVendorService = new readoneVendorService();
const CountVendorService = new countVendorService();
const UpdateVendorService = new updateVendorService();
const DeleteVendorService = new deleteVendorService();


/**
 * Initializing the controller object
 */
const VendorController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

VendorController.post(Endpoints.ENDPOINT_VENDOR_TRANSACTION_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortransactiontype.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorTransactionTypeService.createOneVendorTransactionType ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_TRANSACTION_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortransactiontype.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorTransactionTypeService.readVendorTransactionTypes ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_TRANSACTION_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortransactiontype.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorTransactionTypeService.readOneVendorTransactionType ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_TRANSACTION_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortransactiontype.count.v1"
    Commons.executeController(request, response, apiID, CountVendorTransactionTypeService.readVendorTransactionTypeCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_TRANSACTION_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortransactiontype.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorTransactionTypeService.updateVendorTransactionType ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_TRANSACTION_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortransactiontype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorTransactionTypeService.deleteOneVendorTransactionType ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_STATEMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorstatement.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorStatementService.createOneVendorStatement ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_STATEMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorstatement.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorStatementService.readVendorStatements ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_STATEMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorstatement.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorStatementService.readOneVendorStatement ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_STATEMENTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorstatement.count.v1"
    Commons.executeController(request, response, apiID, CountVendorStatementService.readVendorStatementCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_STATEMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorstatement.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorStatementService.updateVendorStatement ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_STATEMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorstatement.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorStatementService.deleteOneVendorStatement ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_PRODUCT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorproduct.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorProductService.createOneVendorProduct ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_PRODUCTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorproduct.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorProductService.readVendorProducts ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_PRODUCT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorproduct.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorProductService.readOneVendorProduct ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_PRODUCTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorproduct.count.v1"
    Commons.executeController(request, response, apiID, CountVendorProductService.readVendorProductCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_PRODUCTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorproduct.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorProductService.updateVendorProduct ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_PRODUCT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorproduct.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorProductService.deleteOneVendorProduct ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_PAYMENT_LOG, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentlog.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorPaymentLogService.createOneVendorPaymentLog ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_PAYMENT_LOGS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentlog.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorPaymentLogService.readVendorPaymentLogs ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_PAYMENT_LOG, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentlog.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorPaymentLogService.readOneVendorPaymentLog ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_PAYMENT_LOGS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentlog.count.v1"
    Commons.executeController(request, response, apiID, CountVendorPaymentLogService.readVendorPaymentLogCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_PAYMENT_LOGS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentlog.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorPaymentLogService.updateVendorPaymentLog ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_PAYMENT_LOG, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentlog.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorPaymentLogService.deleteOneVendorPaymentLog ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_PAYMENT_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentitem.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorPaymentItemService.createOneVendorPaymentItem ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_PAYMENT_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentitem.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorPaymentItemService.readVendorPaymentItems ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_PAYMENT_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorPaymentItemService.readOneVendorPaymentItem ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_PAYMENT_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentitem.count.v1"
    Commons.executeController(request, response, apiID, CountVendorPaymentItemService.readVendorPaymentItemCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_PAYMENT_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentitem.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorPaymentItemService.updateVendorPaymentItem ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_PAYMENT_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpaymentitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorPaymentItemService.deleteOneVendorPaymentItem ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_PAYMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpayment.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorPaymentService.createOneVendorPayment ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_PAYMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpayment.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorPaymentService.readVendorPayments ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_PAYMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpayment.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorPaymentService.readOneVendorPayment ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_PAYMENTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpayment.count.v1"
    Commons.executeController(request, response, apiID, CountVendorPaymentService.readVendorPaymentCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_PAYMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpayment.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorPaymentService.updateVendorPayment ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_PAYMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorpayment.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorPaymentService.deleteOneVendorPayment ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_EXPENSE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorexpense.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorExpenseService.createOneVendorExpense ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_EXPENSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorexpense.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorExpenseService.readVendorExpenses ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_EXPENSE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorexpense.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorExpenseService.readOneVendorExpense ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_EXPENSES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorexpense.count.v1"
    Commons.executeController(request, response, apiID, CountVendorExpenseService.readVendorExpenseCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_EXPENSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorexpense.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorExpenseService.updateVendorExpense ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_EXPENSE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorexpense.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorExpenseService.deleteOneVendorExpense ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcategory.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorCategoryService.createOneVendorCategory ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_CATEGORIES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcategory.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorCategoryService.readVendorCategories ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcategory.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorCategoryService.readOneVendorCategory ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_CATEGORIES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcategory.count.v1"
    Commons.executeController(request, response, apiID, CountVendorCategoryService.readVendorCategoryCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_CATEGORIES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcategory.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorCategoryService.updateVendorCategory ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcategory.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorCategoryService.deleteOneVendorCategory ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_BILL_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbillitem.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorBillItemService.createOneVendorBillItem ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_BILL_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbillitem.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorBillItemService.readVendorBillItems ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_BILL_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbillitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorBillItemService.readOneVendorBillItem ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_BILL_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbillitem.count.v1"
    Commons.executeController(request, response, apiID, CountVendorBillItemService.readVendorBillItemCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_BILL_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbillitem.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorBillItemService.updateVendorBillItem ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_BILL_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbillitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorBillItemService.deleteOneVendorBillItem ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_BILL, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbill.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorBillService.createOneVendorBill ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_BILLS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbill.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorBillService.readVendorBills ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_BILL, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbill.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorBillService.readOneVendorBill ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_BILLS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbill.count.v1"
    Commons.executeController(request, response, apiID, CountVendorBillService.readVendorBillCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_BILLS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbill.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorBillService.updateVendorBill ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_BILL, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorbill.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorBillService.deleteOneVendorBill ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_APPROVAL_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapprovalitem.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorApprovalItemService.createOneVendorApprovalItem ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_APPROVAL_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapprovalitem.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorApprovalItemService.readVendorApprovalItems ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_APPROVAL_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapprovalitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorApprovalItemService.readOneVendorApprovalItem ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_APPROVAL_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapprovalitem.count.v1"
    Commons.executeController(request, response, apiID, CountVendorApprovalItemService.readVendorApprovalItemCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_APPROVAL_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapprovalitem.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorApprovalItemService.updateVendorApprovalItem ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_APPROVAL_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapprovalitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorApprovalItemService.deleteOneVendorApprovalItem ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_APPROVAL, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapproval.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorApprovalService.createOneVendorApproval ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_APPROVALS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapproval.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorApprovalService.readVendorApprovals ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_APPROVAL, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapproval.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorApprovalService.readOneVendorApproval ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_APPROVALS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapproval.count.v1"
    Commons.executeController(request, response, apiID, CountVendorApprovalService.readVendorApprovalCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_APPROVALS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapproval.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorApprovalService.updateVendorApproval ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_APPROVAL, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorapproval.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorApprovalService.deleteOneVendorApproval ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_ACCOUNT_BALANCE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccountbalance.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorAccountBalanceService.createOneVendorAccountBalance ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_ACCOUNT_BALANCES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccountbalance.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorAccountBalanceService.readVendorAccountBalances ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_ACCOUNT_BALANCE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccountbalance.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorAccountBalanceService.readOneVendorAccountBalance ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_ACCOUNT_BALANCES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccountbalance.count.v1"
    Commons.executeController(request, response, apiID, CountVendorAccountBalanceService.readVendorAccountBalanceCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_ACCOUNT_BALANCES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccountbalance.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorAccountBalanceService.updateVendorAccountBalance ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_ACCOUNT_BALANCE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccountbalance.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorAccountBalanceService.deleteOneVendorAccountBalance ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccount.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorAccountService.createOneVendorAccount ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDOR_ACCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccount.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorAccountService.readVendorAccounts ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccount.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorAccountService.readOneVendorAccount ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDOR_ACCOUNTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccount.count.v1"
    Commons.executeController(request, response, apiID, CountVendorAccountService.readVendorAccountCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDOR_ACCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccount.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorAccountService.updateVendorAccount ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendoraccount.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorAccountService.deleteOneVendorAccount ) 
});


VendorController.post(Endpoints.ENDPOINT_VENDOR, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendor.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorService.createOneVendor ) 
}); 

VendorController.post(Endpoints.ENDPOINT_VENDORS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendor.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorService.readVendors ) 
});

VendorController.get(Endpoints.ENDPOINT_ONE_VENDOR, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendor.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorService.readOneVendor ) 
});

VendorController.post(Endpoints.ENDPOINT_VENDORS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendor.count.v1"
    Commons.executeController(request, response, apiID, CountVendorService.readVendorCount ) 
});

VendorController.patch(Endpoints.ENDPOINT_VENDORS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendor.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorService.updateVendor ) 
});

VendorController.delete(Endpoints.ENDPOINT_ONE_VENDOR, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendor.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorService.deleteOneVendor ) 
});



module.exports = VendorController;
