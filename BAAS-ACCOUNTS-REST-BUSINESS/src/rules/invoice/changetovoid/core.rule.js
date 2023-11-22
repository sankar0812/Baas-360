/**
 * CreatedBy    : Ayerathammal
 * CreatedTime  : OCT 31 2023
 * ModifiedBy   : Ayerathammal
 * ModifiedTime : OCT 31 2023
 * Description  : This file contains the all api endpoint to function mapping for all invoice module
 **/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");
const constants = require("../../../utils/constants");
const invoiceMock = require("../../../mocks/invoice.mock.json");
const invoiceInternal = require("../../../internals/dataaccess/invoice.internal")
const customerInternal = require("../../../internals/dataaccess/customer.internal")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const Constants = new constants();
const InvoiceInternal = new invoiceInternal();
const CustomerInternal = new customerInternal();

module.exports = class changeToVoidCoreRule {
    /**
     * CreatedBy    : Ayerathammal
     * CreatedTime  : OCT 31 2023
     * ModifiedBy   : Ayerathammal
     * ModifiedTime : OCT 31 2023
     * Description  : This file contains the all api endpoint to function mapping for all invoice module
     **/



    // InvoiceStatus update only in Invoice Table as per requirment. DESIGN WILL BE CHANGED IN FUTURE
    async changeToVoid(apiID, config, headers, input) {
        try {
            if (!config.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled(); }
            if (config.IsMockEnabled) { return invoiceMock[apiID]; }
            else {

                let StatusOpenOutput = {}
                // Read InvoiceStatus Table to get the InvoiceStatusID
                let invoiceStatusFilter = {
                    InternalCode: Constants.INVOICE_STATUS.VOID,
                    IsDeleted: false
                }
                let invoiceStatusFields = {
                    InvoiceStatusID: true
                }
                let readInvoiceStatusObject = await InvoiceInternal.readInvoiceStatus(headers, invoiceStatusFilter, invoiceStatusFields, 1, 0, {})
                // Update Invoice Table 

                const invoiceFilter = {
                    InvoiceID: input.StatusOpenInput.InvoiceID,
                    IsDeleted: false
                }
                const invoiceFields = {
                    ModifiedAuthID: input.userInfo.ModifiedAuthID,
                    ModifiedBy: input.userInfo.ModifiedBy,
                    ModifiedDate: input.userInfo.ModifiedDate,
                    InvoiceStatusID: readInvoiceStatusObject.data[0].InvoiceStatusID
                }

                const updatedInvoice = await InvoiceInternal.updateInvoice(headers, invoiceFilter, invoiceFields)

                if (input.StatusOpenInput.InternalCode === 'OPEN') {
                    // Read Invoice Table to get Invoice Amount

                    let readinvoiceFilter = {
                        InvoiceID: input.StatusOpenInput.InvoiceID,
                        IsDeleted: false
                    }
                    let readinvoiceFields = {
                        InvoiceID: true,
                        InvoiceAmount: true,
                        InvoiceStatusID: true
                    }
                    let readInvoiceObject = await InvoiceInternal.readInvoices(headers, readinvoiceFilter, readinvoiceFields, 1, 0, {})

                    // Read CustomerAccountBalance Table to get the Account Balance

                    let readCustomerAccountBalanceFilter = {
                        CustomerID: input.StatusOpenInput.CustomerID,
                        CustomerAccountID: input.StatusOpenInput.CustomerAccountID,
                        IsDeleted: false
                    }
                    let readCustomerAccountBalanceFields = {
                        CustomerAccountBalanceID: true,
                        CustomerAccountID: true,
                        CustomerID: true,
                        AccountBalance: true
                    }
                    let readCustomerAccountBalanceObject = await CustomerInternal.readCustomerAccountBalance(headers, readCustomerAccountBalanceFilter, readCustomerAccountBalanceFields, 1, 0, { "CustomerAccountBalanceID": "desc" })
                    //Calculating the Customer AccountBalanceData
                    let customerrunningbal = readCustomerAccountBalanceObject.data[0].AccountBalance + readInvoiceObject.data[0].InvoiceAmount
                    // Inserting Data into Customer Account Transaction

                    let customerAccountTransactionFilter = {
                        IsDeleted: false
                    }
                    let customerAccountTransactionFields = {
                        CustomerID: input.StatusOpenInput.CustomerID,
                        CustomerAccountID: input.StatusOpenInput.CustomerAccountID,
                        MerchantID: input.userInfo.MerchantID,
                        TenantID: input.userInfo.TenantID,
                        CurrencyID: input.userInfo.CurrencyID,
                        CreditDebitFlag: "C",
                        PostedDateTime: new Date(),
                        Amount: readInvoiceObject.data[0].InvoiceAmount,
                        RunningAccountBalance: parseFloat(customerrunningbal.toFixed(2)),
                        CreatedAuthID: input.userInfo.CreatedAuthID,
                        CreatedBy: input.userInfo.CreatedBy,
                        ModifiedAuthID: input.userInfo.ModifiedAuthID,
                        ModifiedBy: input.userInfo.ModifiedBy
                    }
                    let customerAccountTransactionObject = await CustomerInternal.createCustomerAccountTransaction(headers, customerAccountTransactionFields, customerAccountTransactionFilter)

                    // Inserting data into CustomerAccountBalance

                    let customerAccountBalanceFilter = {
                        IsDeleted: false
                    }
                    let customerAccountBalanceFields = {
                        MerchantID: input.userInfo.MerchantID,
                        TenantID: input.userInfo.TenantID,
                        CustomerID: input.StatusOpenInput.CustomerID,
                        CustomerAccountID: input.StatusOpenInput.CustomerAccountID,
                        PostedDate: new Date(),
                        AccountBalance: parseFloat(customerrunningbal.toFixed(2)),
                        CurrencyID: input.userInfo.CurrencyID,
                        CreatedAuthID: input.userInfo.CreatedAuthID,
                        CreatedBy: input.userInfo.CreatedBy,
                        ModifiedAuthID: input.userInfo.ModifiedAuthID,
                        ModifiedBy: input.userInfo.ModifiedBy
                    }

                    let customerAccountBalanceObject = await CustomerInternal.createCustomerAccountBalance(headers, customerAccountBalanceFields, customerAccountBalanceFilter)

                    // Update CustomerAccount Table 
                    const customerAccountFilter = {
                        CustomerAccountID: input.StatusOpenInput.CustomerAccountID,
                        IsDeleted: false
                    }

                    const customerAccountFields = {
                        AccountBalance: parseFloat(customerrunningbal.toFixed(2)),
                        ModifiedAuthID: input.userInfo.ModifiedAuthID,
                        ModifiedBy: input.userInfo.ModifiedBy,
                        ModifiedDate: input.userInfo.ModifiedDate,
                    }

                    const updatedCustomerAccount = await CustomerInternal.updateCustomerAccount(headers, customerAccountFilter, customerAccountFields)

                    StatusOpenOutput = {
                        ReadInvoice: readInvoiceObject.data,
                        ReadCustomerAccountBalance: readCustomerAccountBalanceObject.data,
                        CustomerAccountTransactionInfo: customerAccountTransactionObject.data,
                        CustomerAccountBalanceInfo: customerAccountBalanceObject.data,
                        updatedCustomerAccountInfo: updatedCustomerAccount.data
                    }
                }
                let OpenStatusOutput = {
                    ReadInvoiceStatusObject: readInvoiceStatusObject.data,
                    UpdateInvoice: updatedInvoice.data,
                    ...StatusOpenOutput,
                }
                let DraftStatusOutput = {
                    ReadInvoiceStatusObject: readInvoiceStatusObject.data,
                    UpdateInvoice: updatedInvoice.data,
                }
                let Output = input.StatusOpenInput.InternalCode === 'OPEN' ? OpenStatusOutput : DraftStatusOutput
                return Commons.generateServiceOutput(Output, 200, Messages.MESSAGE_INVOICE_STATUS_OPEN);

            }

        }
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }
}