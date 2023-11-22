/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : OCT 17 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : OCT 17 2023
 * Description  : This file contains the all api endpoint to function mapping for all invoice module
 **/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");
const constants = require("../../../utils/constants")
const customerMock = require("../../../mocks/customer.mock.json");

const customerInternal = require("../../../internals/dataaccess/customer.internal");
const invoiceInternal = require("../../../internals/dataaccess/invoice.internal");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Constants = new constants();
const Messages = new messages();

const CustomerInternal = new customerInternal();
const InvoiceInternal = new invoiceInternal()

module.exports = class addCustomerPaymentCoreRule {
    /**
     * CreatedBy    : RaviBalan
     * CreatedTime  : OCT 17 2023
     * ModifiedBy   : RaviBalan
     * ModifiedTime : OCT 17 2023
     * Description  : This file contains the all api endpoint to function mapping for all invoice module
     **/
    async addCustomerPayment(apiID, config, headers, input) {
        try {
            if (!config.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled(); }
            if (config.IsMockEnabled) { return customerMock[apiID]; }
            else {

                const AddCustomerPaymentCoreRule = new addCustomerPaymentCoreRule()
                let userInfo = {
                    MerchantID: input.userInfo.MerchantID,
                    TenantID: input.userInfo.TenantID,
                    CreatedAuthID: input.userInfo.CreatedAuthID,
                    CreatedBy: input.userInfo.CreatedBy,
                    ModifiedAuthID: input.userInfo.ModifiedAuthID,
                    ModifiedBy: input.userInfo.ModifiedBy

                }
                let createCustomerPaymentData = {
                    CustomerAccountID: input.CustomerPayment.CustomerAccountID,
                    BankAccountID: input.CustomerPayment.BankAccountID,
                    CustomerID: input.CustomerPayment.CustomerID,
                    PaymentMethodID: input.CustomerPayment.PaymentMethodID,
                    CurrencyID: input.CustomerPayment.CurrencyID,
                    PaidDate: input.CustomerPayment.PaidDate,
                    PaidAmount: input.CustomerPayment.PaidAmount,
                    PaymentConfirmation: input.CustomerPayment.PaymentConfirmation,
                    BankDepositedDate: input.CustomerPayment.BankDepositedDate,
                    BankPostedDate: input.CustomerPayment.BankPostedDate,
                    Remarks: input.CustomerPayment.Remarks,
                    CreatedAuthID: userInfo.CreatedAuthID,
                    CreatedBy: userInfo.CreatedBy,
                    ModifiedAuthID: userInfo.ModifiedAuthID,
                    ModifiedBy: userInfo.ModifiedBy,

                }
                let createCustomerPaymentFilter = {
                    CustomerAccountID: input.CustomerPayment.CustomerAccountID,
                    BankAccountID: input.CustomerPayment.BankAccountID,
                    CustomerID: input.CustomerPayment.CustomerID,
                    PaymentMethodID: input.CustomerPayment.PaymentMethodID,
                    CurrencyID: input.CustomerPayment.CurrencyID,
                    PaidDate: input.CustomerPayment.PaidDate,
                    PaidAmount: input.CustomerPayment.PaidAmount,
                    PaymentConfirmation: input.CustomerPayment.PaymentConfirmation,
                    IsDeleted: false
                }
                let createdCustomerPayment = await CustomerInternal.createCustomerPayment(headers, createCustomerPaymentData, createCustomerPaymentFilter)
                let outputs = []
                for (let createCustomerPaymentItem of input.CustomerPaymentItem) {
                    let createdCustomerPaymentItemOutput = []
                    let createCustomerPaymentItemData = {
                        CustomerPaymentID: createdCustomerPayment.data.CustomerPaymentID,
                        InvoiceID: createCustomerPaymentItem.InvoiceID,
                        CurrencyID: input.CustomerPayment.CurrencyID,
                        ReferenceCode: createCustomerPaymentItem.ReferenceCode,
                        Description: createCustomerPaymentItem.Description,
                        InvoicePaidAmount: createCustomerPaymentItem.InvoicePaidAmount,
                        CreatedAuthID: userInfo.CreatedAuthID,
                        CreatedBy: userInfo.CreatedBy,
                        ModifiedAuthID: userInfo.ModifiedAuthID,
                        ModifiedBy: userInfo.ModifiedBy
                    }

                    let createCustomerPaymentItemFilter = {
                        CustomerPaymentID: createdCustomerPayment.data.CustomerPaymentID,
                        InvoiceID: createCustomerPaymentItem.InvoiceID,
                        CurrencyID: input.CustomerPayment.CurrencyID,
                        IsDeleted: false
                    }
                    let createdCustomerPaymentItem = await CustomerInternal.createCustomerPaymentItem(headers, createCustomerPaymentItemData, createCustomerPaymentItemFilter)
                    createdCustomerPaymentItemOutput.push(createdCustomerPaymentItem.data)
                    let updateInvoice = await AddCustomerPaymentCoreRule.updateInvoice(headers, createCustomerPaymentItemData)

                    let output = {
                        createdCustomerPaymentItem: createdCustomerPaymentItemOutput,
                        updatInvoiced: updateInvoice.data
                    }
                    outputs.push(output)
                }

                outputs.push(createdCustomerPayment.data)
                // Read CustomerAccountBalance Table to get the Account Balance

                let readCustomerAccountBalanceFilter = {
                    CustomerID: input.CustomerPayment.CustomerID,
                    CustomerAccountID: input.CustomerPayment.CustomerAccountID
                }
                let readCustomerAccountBalanceFields = {
                    CustomerAccountBalanceID: true,
                    CustomerAccountID: true,
                    CustomerID: true,
                    AccountBalance: true
                }
                let readCustomerAccountBalanceObject = await CustomerInternal.readCustomerAccountBalance(headers, readCustomerAccountBalanceFilter, readCustomerAccountBalanceFields, 1, 0, { "CustomerAccountBalanceID": "desc" })

                //Calculating the Customer AccountBalanceData
                let customerrunningbal = readCustomerAccountBalanceObject.data[0].AccountBalance + input.CustomerPayment.PaidAmount

                // Update CustomerAccount Table 
                const customerAccountFilter = {
                    CustomerAccountID: input.CustomerPayment.CustomerAccountID,
                    IsDeleted: false
                }

                const customerAccountFields = {
                    AccountBalance: parseFloat(customerrunningbal.toFixed(2)),
                    ModifiedAuthID: input.userInfo.ModifiedAuthID,
                    ModifiedBy: input.userInfo.ModifiedBy,
                    ModifiedDate: input.userInfo.ModifiedDate,
                }

                const updatedCustomerAccount = await CustomerInternal.updateCustomerAccount(headers, customerAccountFilter, customerAccountFields)
                outputs.push(updatedCustomerAccount.data)

                return Commons.generateServiceOutput(outputs, 200, Messages.MEESAGE_CREATE_CUSTOMER_PAYMENT)
            }
        } catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

    async updateInvoice(headers, createCustomerPaymentItemData) {
        let invoiceStatusFilter = {
            InternalCode: Constants.INVOICE_STATUS.PAID,
            IsDeleted: false
        }
        let invoiceStatusFields = {
            InvoiceStatusID: true,
            InvoiceStatus: true,
            InternalCode: true
        }
        let readInvoiceStatusObject = await InvoiceInternal.readInvoiceStatus(headers, invoiceStatusFilter, invoiceStatusFields, 1000, 0, {})

        const invoiceFilter = {
            InvoiceID: createCustomerPaymentItemData.InvoiceID,
            IsDeleted: false
        }
        const invoiceFields = {
            InvoiceID: true,
            BalanceDue: true,
        }
        const readInvoice = await InvoiceInternal.readInvoices(headers, invoiceFilter, invoiceFields, 1, 0, {})
        let balanceDue = parseFloat(readInvoice?.data[0].BalanceDue) - parseFloat(createCustomerPaymentItemData?.InvoicePaidAmount);

        const updateInvoiceFields = {
            BalanceDue: balanceDue
        }
        const updateInvoiceFilter = {
            InvoiceID: createCustomerPaymentItemData.InvoiceID,
            IsDeleted: false
        }

        if (balanceDue === 0 || balanceDue < 0) {
            Object.assign(updateInvoiceFields, { "InvoiceStatusID": readInvoiceStatusObject?.data[0]?.InvoiceStatusID });
        }

        let updatedInvoiced = await InvoiceInternal.updateInvoice(headers, updateInvoiceFilter, updateInvoiceFields)

        return updatedInvoiced
    }

};
