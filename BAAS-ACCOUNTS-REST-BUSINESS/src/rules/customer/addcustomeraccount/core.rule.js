/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 19 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 19 2023
* Description : This file contains all the business rules for create customer account and customer account balance
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages")
const customerMock = require("../../../mocks/customer.mock.json");

const customerInternal = require("../../../internals/dataaccess/customer.internal")



/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

const CustomerInternal = new customerInternal();

module.exports = class addCustomerAccountCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 19 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : OCT 19 2023
    * Description  : This function fadd the customer account and customer account balance
    **/
    async addCustomerAccount(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return customerMock[apiID]
            }
            else {
                let customerAccountFields = {
                    CustomerID: input.UserInfo.CustomerID,
                    CurrencyID: input.UserInfo.CurrencyID,
                    AccountNumber: input.CustomerAccountInfo.AccountNumber,
                    AccountCode: input.CustomerAccountInfo.AccountCode,
                    DisplayName: input.CustomerAccountInfo.DisplayName,
                    AppSettingNetTermID: input.CustomerAccountInfo.AppSettingNetTermID,
                    OpenedDate: input.CustomerAccountInfo.OpenedDate,
                    AutoReplenishAmount: input.CustomerAccountInfo.AutoReplenishAmount,
                    LowBalanceThreshold: input.CustomerAccountInfo.LowBalanceThreshold,
                    Username: input.CustomerAccountInfo.Username,
                    Password: input.CustomerAccountInfo.Password,
                    CreatedAuthID: input.UserInfo.CreatedAuthID,
                    CreatedBy: input.UserInfo.CreatedBy
                }

                let customerAccountFilter = {
                    AccountNumber: {
                        "equals": input.CustomerAccountInfo.AccountNumber,
                        "mode": "insensitive"
                    },
                    AccountCode: {
                        "equals": input.CustomerAccountInfo.AccountCode,
                        "mode": "insensitive"
                    },
                    DisplayName: input.CustomerAccountInfo.DisplayName,
                    IsDeleted: false
                }

                let CustomerAccountData = await CustomerInternal.createCustomerAccount(headers, customerAccountFields, customerAccountFilter)

                let customerAccountBalanceFields = {
                    MerchantID: input.UserInfo.MerchantID,
                    TenantID: input.UserInfo.TenantID,
                    CustomerAccountID: CustomerAccountData.data.CustomerAccountID,
                    CustomerID: CustomerAccountData.data.CustomerID,
                    CurrencyID: CustomerAccountData.data.CurrencyID,
                    PostedDate: new Date(),
                    AccountBalance: 0,
                    CreatedAuthID: CustomerAccountData.data.CreatedAuthID,
                    CreatedBy: CustomerAccountData.data.CreatedBy
                }

                let customerAccountBalanceFilter = {
                    CustomerAccountID: CustomerAccountData.data.CustomerAccountID,
                    IsDeleted: false
                }

                let CustomerAccountBalanceData = await CustomerInternal.createCustomerAccountBalance(headers, customerAccountBalanceFields, customerAccountBalanceFilter)

                let output = {
                    CustomerAccountData: CustomerAccountData.data,
                    CustomerAccountBalanceData: CustomerAccountBalanceData.data
                }

                return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_ADD_CUSTOMER_ACCOUNT)
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}