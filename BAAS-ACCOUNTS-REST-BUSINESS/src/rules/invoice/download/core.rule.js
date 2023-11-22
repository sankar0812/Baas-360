/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 05 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 05 2023
* Description : This file contains all the business rules for read invoice and invoice item
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");
const invoiceMock = require("../../../mocks/invoice.mock.json");

const invoiceInternal = require("../../../internals/dataaccess/invoice.internal");


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

const InvoiceInternal = new invoiceInternal()


module.exports = class downloadInvoiceCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 05 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : OCT 05 2023
    * Description  : This function fetches all the information for download invoice
    **/
    async downloadInvoice(apiID, config, headers, input) {
        try {
            if (!config.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
            if (config.IsMockEnabled) { return invoiceMock[apiID] }
            else {
                const invoiceDownloadFilter = {
                    "InvoiceID": input.InvoiceID || "NULL",
                    "IsDeleted": false
                }

                const invoiceDownloadFields = {
                    "Tenant": {
                        "select": {
                            "TenantName": true,
                            "Address": true,
                            "City": true,
                            "State": true,
                            "Country": true,
                            "ZipCode": true
                        }
                    },
                    "Customer": {
                        "select": {
                            "CustomerName": true,
                            "Address1": true,
                            "Address2": true,
                            "City": true,
                            "State": true,
                            "Country": true,
                            "PostalCode": true
                        }
                    },
                    "BackupCharges": true,
                    "InvoiceNumber": true,
                    "AppSettingNetTermID": true,
                    "AppSettingNetTerm": {
                        "select": {
                            "AppSettingNetTermID": true,
                            "AppSettingNetTerm": true
                        }
                    },
                    "InvoiceDate": true,
                    "InvoiceAmount": true,
                    "BalanceDue": true,
                    "DueDate": true,
                    "Currency": {
                        "select": {
                            "CurrencyCode": true,
                            "CurrencySymbol": true
                        }
                    }
                }
                const invoiceItemDownloadFields = {
                    "Product": {
                        "select": {
                            "ProductName": true,
                            "AppSettingUomID": true
                        }
                    },
                    "Qty": true,
                    "Rate": true,
                    "TotalAmount": true
                }


                let invoiceInfoData = await InvoiceInternal.readInvoices(headers, invoiceDownloadFilter, invoiceDownloadFields, 1000, 0, {})


                let invoiceInfoOutputData =
                {
                    "InvoiceNumber": invoiceInfoData.data[0].InvoiceNumber,
                    "InvoiceDate": invoiceInfoData.data[0].InvoiceDate,
                    "BalanceDue": invoiceInfoData.data[0].BalanceDue.toFixed(2),
                    "InvoiceAmount": invoiceInfoData.data[0].Currency.CurrencyCode + invoiceInfoData.data[0].Currency.CurrencySymbol + ' ' + invoiceInfoData.data[0].InvoiceAmount.toFixed(2),
                    "Terms": "Due on Reciept",
                    "DueDate": invoiceInfoData.data[0].DueDate
                }

                let invoiceItemInfoData = await InvoiceInternal.readInvoiceItems(headers, invoiceDownloadFilter, invoiceItemDownloadFields, 1000, 0, {})
                let invoiceItemInfoOutput = invoiceItemInfoData.data

                if (invoiceInfoData.data[0].BackupCharges > 0) {
                    invoiceItemInfoOutput.push(
                        {
                            "Product": {
                                "ProductName": "BackupCharges",
                                "UoM": ""
                            },

                            "Qty": 1,
                            "Rate": invoiceInfoData.data[0].BackupCharges,
                            "TotalAmount": invoiceInfoData.data[0].BackupCharges,
                        }
                    )
                }
                let invoiceInfooutput = {
                    MerchantTenantInfo: invoiceInfoData.data[0].Tenant,
                    CustomerInfo: invoiceInfoData.data[0].Customer,
                    InvoiceInfo: invoiceInfoOutputData,
                    AppSettingNetTerm: invoiceInfoData.data[0].AppSettingNetTerm,
                    InvoiceItemInfo: invoiceItemInfoOutput,
                }
                return Commons.generateServiceOutput(invoiceInfooutput, 200, Messages.MESSAGE_INVOICE_INFO);
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}