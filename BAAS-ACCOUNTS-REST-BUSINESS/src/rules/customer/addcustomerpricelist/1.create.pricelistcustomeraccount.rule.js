

const commons = require("../../../utils/commons");
const customerInternal = require("../../../internals/dataaccess/pricelist.internal")



/**
 * Initializing objects for all the imported classes
 */

const CustomerInternal = new customerInternal();
const Commons = new commons();


module.exports = class addpriceListCustomerAccount {

    async addpriceListCustomerAccount(headers, input) {
        try {

            const userInfo = {
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy
            }

            let priceListData = {
                ...userInfo,
                PriceListID: input.PriceItmeInfo.PriceListID,
                CustomerAccountID: input.PriceItmeInfo.CustomerAccountID
            }

            let priceListFilter = {

                PriceListID: input.PriceItmeInfo.PriceListID,
                CustomerAccountID: input.PriceItmeInfo.CustomerAccountID,
                IsDeleted: false

            }


            let priceListCustomerAccount = await CustomerInternal.createPriceListCustomerAccount(headers, priceListData, priceListFilter)

            return priceListCustomerAccount

        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}

