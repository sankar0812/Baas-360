/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 12 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 12 2023
* Description : This file contains all the business rules for add the invoice and invoiceitem
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");
const constants = require("../../../utils/constants")
const invoiceMock = require("../../../mocks/invoice.mock.json");

const invoiceInternal = require("../../../internals/dataaccess/invoice.internal");
const customerInternal = require("../../../internals/dataaccess/customer.internal")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const Constants = new constants();

const InvoiceInternal = new invoiceInternal()
const CustomerInternal = new customerInternal()

module.exports = class addInvoiceCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 12 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : OCT 12 2023
    * Description  : This function add the invoice and invoice item
    **/
    async addInvoice(apiID, config, headers, input) {
        let AddInvoiceCoreRule = new addInvoiceCoreRule()

        try {
            if (!config.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
            if (config.IsMockEnabled) { return invoiceMock[apiID] }
            else {
                let invoiceStatusFilter = {
                    InternalCode: Constants.INVOICE_STATUS.DRAFT,
                    IsDeleted: false
                }
                let invoiceStatusFields = {
                    InvoiceStatusID: true,
                    InvoiceStatus: true
                }

                let invoicestatus = await InvoiceInternal.readInvoiceStatus(headers, invoiceStatusFilter, invoiceStatusFields, 1, 0, {})

                let UserInfo = {
                    MerchantID: input.UserInfo.MerchantID,
                    TenantID: input.UserInfo.TenantID,
                    CreatedAuthID: input.UserInfo.CreatedAuthID,
                    CreatedBy: input.UserInfo.CreatedBy,
                    ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                    ModifiedBy: input.UserInfo.ModifiedBy
                }

                let data = {
                    ...UserInfo,
                    ProjectID: input.InvoiceInfo.ProjectID,
                    CustomerID: input.InvoiceInfo.CustomerID,
                    CurrencyID: input.InvoiceInfo.CurrencyID,
                    CustomerAccountID: input.InvoiceInfo.CustomerAccountID,
                    InvoiceNumber: input.InvoiceInfo.InvoiceNumber,
                    InvoiceDate: input.InvoiceInfo.InvoiceDate,
                    InvoiceStatusID: invoicestatus.data[0].InvoiceStatusID,
                    AppSettingNetTermID: input.InvoiceInfo.AppSettingNetTermID,
                    ProductCharges: input.InvoiceInfo.ProductCharges,
                    BackupCharges: input.InvoiceInfo.BackupCharges,
                    InvoiceAmount: input.InvoiceInfo.InvoiceAmount,
                    BalanceDue: input.InvoiceInfo.BalanceDue,
                    SubTotal: input.InvoiceInfo.SubTotal,
                    DueDate: input.InvoiceInfo.DueDate,
                    Remarks: input.InvoiceInfo.Remarks,
                };
                let filter = {
                    InvoiceNumber: input.InvoiceInfo.InvoiceNumber,
                    CustomerID: input.InvoiceInfo.CustomerID,
                    IsDeleted: true
                };
                let addNewInvoice = await InvoiceInternal.createInvoice(headers, data, filter);

                let customerFilter = {
                    CustomerID: input.InvoiceInfo.CustomerID,
                    IsDeleted: false
                }
                let customerField = {
                    InvoieSequence: true
                }
                let customerData = await CustomerInternal.readCustomer(headers, customerFilter, customerField, 1, 0, {})

                let customerUpdateField = {
                    InvoieSequence: parseInt(customerData.data[0].InvoieSequence) + 1
                }
                let customerUpdatedData = await CustomerInternal.updateCustomer(headers, customerFilter, customerUpdateField)

                if ((addNewInvoice.status === 200)) {
                    const addInvoiceItemsResult = await AddInvoiceCoreRule.addInvoiceItems(headers, input, addNewInvoice.data);
                    let UserInfoOutput = {
                        MerchantID: addNewInvoice.data.MerchantID,
                        TenantID: addNewInvoice.data.TenantID,
                        CreatedAuthID: addNewInvoice.data.CreatedAuthID,
                        CreatedBy: addNewInvoice.data.CreatedBy,
                        ModifiedAuthID: addNewInvoice.data.ModifiedAuthID,
                        ModifiedBy: addNewInvoice.data.ModifiedBy
                    }
                    let InvoiceInfoOutput = {
                        InvoiceID: addNewInvoice.data.InvoiceID,
                        ProjectID: addNewInvoice.data.ProjectID,
                        CustomerID: addNewInvoice.data.CustomerID,
                        CurrencyID: addNewInvoice.data.CurrencyID,
                        InvoiceNumber: addNewInvoice.data.InvoiceNumber,
                        InvoiceDate: addNewInvoice.data.InvoiceDate,
                        AppSettingNetTermID: addNewInvoice.data.AppSettingNetTermID,
                        InvoiceStatusID: addNewInvoice.data.InvoiceStatusID,
                        ProductCharges: addNewInvoice.data.ProductCharges,
                        BackupCharges: addNewInvoice.data.BackupCharges,
                        InvoiceAmount: addNewInvoice.data.InvoiceAmount,
                        BalanceDue: addNewInvoice.data.BalanceDue,
                        SubTotal: addNewInvoice.data.SubTotal,
                        DueDate: addNewInvoice.data.DueDate,
                        Remarks: addNewInvoice.data.Remarks,

                    }
                    let Output = {
                        UserInfo: UserInfoOutput,
                        InvoiceInfo: InvoiceInfoOutput,
                        customerUpdatedData: customerUpdatedData.data,
                        InvoiceItemInfo: addInvoiceItemsResult
                    }
                    return Commons.generateServiceOutput(Output, 200, Messages.MESSAGE_ADD_INVOICE);

                }
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

    async addInvoiceItems(headers, input, invoiceoutput) {
        try {
            let invoiceItemOutputData = [];

            for (let invoiceItemData of input.InvoiceItemInfo) {
                let data = {
                    ...input.UserInfo,
                    InvoiceID: invoiceoutput.InvoiceID,
                    ProductID: invoiceItemData.ProductID,
                    Qty: invoiceItemData.Qty,
                    Rate: invoiceItemData.Rate,
                    TotalAmount: invoiceItemData.TotalAmount,
                    Description: invoiceItemData.Description
                };
                let filter = {
                    InvoiceID: invoiceoutput.InvoiceID,
                    ProductID: invoiceItemData.ProductID,
                    IsDeleted: true
                };

                let addNewInvoiceItem = await InvoiceInternal.createInvoiceItem(headers, data, filter);
                invoiceItemOutputData.push(addNewInvoiceItem);

                if (invoiceItemOutputData.length === input.InvoiceItemInfo.length) {

                    // Manipulating the Output structure
                    const manipulatedOutputData = invoiceItemOutputData.map(item => ({
                        InvoiceItemID: item.data.InvoiceItemID,
                        InvoiceID: item.data.InvoiceID,
                        ProductID: item.data.ProductID,
                        Qty: item.data.Qty,
                        Rate: item.data.Rate,
                        TotalAmount: item.data.TotalAmount,
                        Description: item.data.Description
                    }));
                    return manipulatedOutputData
                }
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}