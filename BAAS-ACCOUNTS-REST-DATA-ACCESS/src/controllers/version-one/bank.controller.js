/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all bank module api
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
const createBankTransactionTypeService = require("../../services/bank/create.banktransactiontype.service");
const readBankTransactionTypeService = require("../../services/bank/read.banktransactiontype.service");
const readoneBankTransactionTypeService = require("../../services/bank/read.banktransactiontype.service");
const countBankTransactionTypeService = require("../../services/bank/read.banktransactiontype.service");
const updateBankTransactionTypeService = require("../../services/bank/update.banktransactiontype.service");
const deleteBankTransactionTypeService = require("../../services/bank/delete.banktransactiontype.service");
const createBankTransactionService = require("../../services/bank/create.banktransaction.service");
const readBankTransactionService = require("../../services/bank/read.banktransaction.service");
const readoneBankTransactionService = require("../../services/bank/read.banktransaction.service");
const countBankTransactionService = require("../../services/bank/read.banktransaction.service");
const updateBankTransactionService = require("../../services/bank/update.banktransaction.service");
const deleteBankTransactionService = require("../../services/bank/delete.banktransaction.service");
const createBankAccountUserService = require("../../services/bank/create.bankaccountuser.service");
const readBankAccountUserService = require("../../services/bank/read.bankaccountuser.service");
const readoneBankAccountUserService = require("../../services/bank/read.bankaccountuser.service");
const countBankAccountUserService = require("../../services/bank/read.bankaccountuser.service");
const updateBankAccountUserService = require("../../services/bank/update.bankaccountuser.service");
const deleteBankAccountUserService = require("../../services/bank/delete.bankaccountuser.service");
const createBankAccountBalanceService = require("../../services/bank/create.bankaccountbalance.service");
const readBankAccountBalanceService = require("../../services/bank/read.bankaccountbalance.service");
const readoneBankAccountBalanceService = require("../../services/bank/read.bankaccountbalance.service");
const countBankAccountBalanceService = require("../../services/bank/read.bankaccountbalance.service");
const updateBankAccountBalanceService = require("../../services/bank/update.bankaccountbalance.service");
const deleteBankAccountBalanceService = require("../../services/bank/delete.bankaccountbalance.service");
const createBankAccountService = require("../../services/bank/create.bankaccount.service");
const readBankAccountService = require("../../services/bank/read.bankaccount.service");
const readoneBankAccountService = require("../../services/bank/read.bankaccount.service");
const countBankAccountService = require("../../services/bank/read.bankaccount.service");
const updateBankAccountService = require("../../services/bank/update.bankaccount.service");
const deleteBankAccountService = require("../../services/bank/delete.bankaccount.service");
const createBankService = require("../../services/bank/create.bank.service");
const readBankService = require("../../services/bank/read.bank.service");
const readoneBankService = require("../../services/bank/read.bank.service");
const countBankService = require("../../services/bank/read.bank.service");
const updateBankService = require("../../services/bank/update.bank.service");
const deleteBankService = require("../../services/bank/delete.bank.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateBankTransactionTypeService = new createBankTransactionTypeService();
const ReadBankTransactionTypeService = new readBankTransactionTypeService();
const ReadoneBankTransactionTypeService = new readoneBankTransactionTypeService();
const CountBankTransactionTypeService = new countBankTransactionTypeService();
const UpdateBankTransactionTypeService = new updateBankTransactionTypeService();
const DeleteBankTransactionTypeService = new deleteBankTransactionTypeService();
const CreateBankTransactionService = new createBankTransactionService();
const ReadBankTransactionService = new readBankTransactionService();
const ReadoneBankTransactionService = new readoneBankTransactionService();
const CountBankTransactionService = new countBankTransactionService();
const UpdateBankTransactionService = new updateBankTransactionService();
const DeleteBankTransactionService = new deleteBankTransactionService();
const CreateBankAccountUserService = new createBankAccountUserService();
const ReadBankAccountUserService = new readBankAccountUserService();
const ReadoneBankAccountUserService = new readoneBankAccountUserService();
const CountBankAccountUserService = new countBankAccountUserService();
const UpdateBankAccountUserService = new updateBankAccountUserService();
const DeleteBankAccountUserService = new deleteBankAccountUserService();
const CreateBankAccountBalanceService = new createBankAccountBalanceService();
const ReadBankAccountBalanceService = new readBankAccountBalanceService();
const ReadoneBankAccountBalanceService = new readoneBankAccountBalanceService();
const CountBankAccountBalanceService = new countBankAccountBalanceService();
const UpdateBankAccountBalanceService = new updateBankAccountBalanceService();
const DeleteBankAccountBalanceService = new deleteBankAccountBalanceService();
const CreateBankAccountService = new createBankAccountService();
const ReadBankAccountService = new readBankAccountService();
const ReadoneBankAccountService = new readoneBankAccountService();
const CountBankAccountService = new countBankAccountService();
const UpdateBankAccountService = new updateBankAccountService();
const DeleteBankAccountService = new deleteBankAccountService();
const CreateBankService = new createBankService();
const ReadBankService = new readBankService();
const ReadoneBankService = new readoneBankService();
const CountBankService = new countBankService();
const UpdateBankService = new updateBankService();
const DeleteBankService = new deleteBankService();


/**
 * Initializing the controller object
 */
const BankController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

BankController.post(Endpoints.ENDPOINT_BANK_TRANSACTION_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransactiontype.create.v1"
    Commons.executeController(request, response, apiID, CreateBankTransactionTypeService.createOneBankTransactionType ) 
}); 

BankController.post(Endpoints.ENDPOINT_BANK_TRANSACTION_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransactiontype.read.v1"
    Commons.executeController(request, response, apiID, ReadBankTransactionTypeService.readBankTransactionTypes ) 
});

BankController.get(Endpoints.ENDPOINT_ONE_BANK_TRANSACTION_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransactiontype.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneBankTransactionTypeService.readOneBankTransactionType ) 
});

BankController.post(Endpoints.ENDPOINT_BANK_TRANSACTION_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransactiontype.count.v1"
    Commons.executeController(request, response, apiID, CountBankTransactionTypeService.readBankTransactionTypeCount ) 
});

BankController.patch(Endpoints.ENDPOINT_BANK_TRANSACTION_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransactiontype.update.v1"
    Commons.executeController(request, response, apiID, UpdateBankTransactionTypeService.updateBankTransactionType ) 
});

BankController.delete(Endpoints.ENDPOINT_ONE_BANK_TRANSACTION_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransactiontype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteBankTransactionTypeService.deleteOneBankTransactionType ) 
});


BankController.post(Endpoints.ENDPOINT_BANK_TRANSACTION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransaction.create.v1"
    Commons.executeController(request, response, apiID, CreateBankTransactionService.createOneBankTransaction ) 
}); 

BankController.post(Endpoints.ENDPOINT_BANK_TRANSACTIONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransaction.read.v1"
    Commons.executeController(request, response, apiID, ReadBankTransactionService.readBankTransactions ) 
});

BankController.get(Endpoints.ENDPOINT_ONE_BANK_TRANSACTION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransaction.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneBankTransactionService.readOneBankTransaction ) 
});

BankController.post(Endpoints.ENDPOINT_BANK_TRANSACTIONS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransaction.count.v1"
    Commons.executeController(request, response, apiID, CountBankTransactionService.readBankTransactionCount ) 
});

BankController.patch(Endpoints.ENDPOINT_BANK_TRANSACTIONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransaction.update.v1"
    Commons.executeController(request, response, apiID, UpdateBankTransactionService.updateBankTransaction ) 
});

BankController.delete(Endpoints.ENDPOINT_ONE_BANK_TRANSACTION, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.banktransaction.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteBankTransactionService.deleteOneBankTransaction ) 
});


BankController.post(Endpoints.ENDPOINT_BANK_ACCOUNT_USER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountuser.create.v1"
    Commons.executeController(request, response, apiID, CreateBankAccountUserService.createOneBankAccountUser ) 
}); 

BankController.post(Endpoints.ENDPOINT_BANK_ACCOUNT_USERS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountuser.read.v1"
    Commons.executeController(request, response, apiID, ReadBankAccountUserService.readBankAccountUsers ) 
});

BankController.get(Endpoints.ENDPOINT_ONE_BANK_ACCOUNT_USER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountuser.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneBankAccountUserService.readOneBankAccountUser ) 
});

BankController.post(Endpoints.ENDPOINT_BANK_ACCOUNT_USERS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountuser.count.v1"
    Commons.executeController(request, response, apiID, CountBankAccountUserService.readBankAccountUserCount ) 
});

BankController.patch(Endpoints.ENDPOINT_BANK_ACCOUNT_USERS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountuser.update.v1"
    Commons.executeController(request, response, apiID, UpdateBankAccountUserService.updateBankAccountUser ) 
});

BankController.delete(Endpoints.ENDPOINT_ONE_BANK_ACCOUNT_USER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountuser.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteBankAccountUserService.deleteOneBankAccountUser ) 
});


BankController.post(Endpoints.ENDPOINT_BANK_ACCOUNT_BALANCE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountbalance.create.v1"
    Commons.executeController(request, response, apiID, CreateBankAccountBalanceService.createOneBankAccountBalance ) 
}); 

BankController.post(Endpoints.ENDPOINT_BANK_ACCOUNT_BALANCES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountbalance.read.v1"
    Commons.executeController(request, response, apiID, ReadBankAccountBalanceService.readBankAccountBalances ) 
});

BankController.get(Endpoints.ENDPOINT_ONE_BANK_ACCOUNT_BALANCE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountbalance.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneBankAccountBalanceService.readOneBankAccountBalance ) 
});

BankController.post(Endpoints.ENDPOINT_BANK_ACCOUNT_BALANCES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountbalance.count.v1"
    Commons.executeController(request, response, apiID, CountBankAccountBalanceService.readBankAccountBalanceCount ) 
});

BankController.patch(Endpoints.ENDPOINT_BANK_ACCOUNT_BALANCES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountbalance.update.v1"
    Commons.executeController(request, response, apiID, UpdateBankAccountBalanceService.updateBankAccountBalance ) 
});

BankController.delete(Endpoints.ENDPOINT_ONE_BANK_ACCOUNT_BALANCE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccountbalance.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteBankAccountBalanceService.deleteOneBankAccountBalance ) 
});


BankController.post(Endpoints.ENDPOINT_BANK_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccount.create.v1"
    Commons.executeController(request, response, apiID, CreateBankAccountService.createOneBankAccount ) 
}); 

BankController.post(Endpoints.ENDPOINT_BANK_ACCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccount.read.v1"
    Commons.executeController(request, response, apiID, ReadBankAccountService.readBankAccounts ) 
});

BankController.get(Endpoints.ENDPOINT_ONE_BANK_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccount.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneBankAccountService.readOneBankAccount ) 
});

BankController.post(Endpoints.ENDPOINT_BANK_ACCOUNTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccount.count.v1"
    Commons.executeController(request, response, apiID, CountBankAccountService.readBankAccountCount ) 
});

BankController.patch(Endpoints.ENDPOINT_BANK_ACCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccount.update.v1"
    Commons.executeController(request, response, apiID, UpdateBankAccountService.updateBankAccount ) 
});

BankController.delete(Endpoints.ENDPOINT_ONE_BANK_ACCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bankaccount.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteBankAccountService.deleteOneBankAccount ) 
});


BankController.post(Endpoints.ENDPOINT_BANK, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bank.create.v1"
    Commons.executeController(request, response, apiID, CreateBankService.createOneBank ) 
}); 

BankController.post(Endpoints.ENDPOINT_BANKS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bank.read.v1"
    Commons.executeController(request, response, apiID, ReadBankService.readBanks ) 
});

BankController.get(Endpoints.ENDPOINT_ONE_BANK, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bank.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneBankService.readOneBank ) 
});

BankController.post(Endpoints.ENDPOINT_BANKS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bank.count.v1"
    Commons.executeController(request, response, apiID, CountBankService.readBankCount ) 
});

BankController.patch(Endpoints.ENDPOINT_BANKS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bank.update.v1"
    Commons.executeController(request, response, apiID, UpdateBankService.updateBank ) 
});

BankController.delete(Endpoints.ENDPOINT_ONE_BANK, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.bank.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteBankService.deleteOneBank ) 
});



module.exports = BankController;
