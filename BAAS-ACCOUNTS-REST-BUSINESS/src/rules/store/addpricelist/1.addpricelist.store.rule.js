/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : NOV 08 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : NOV 08 2023
 * Description  : This File contain rule for Category Table
 **/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const categoryInternal = require("../../../internals/dataaccess/pricelist.internal");
/**
 * Initializing objects for all the imported classes
 */

const CategoryInternal = new categoryInternal();
const Commons = new commons();

module.exports = class addCategory {

    async addPriceList(headers, input) {
        try {

            const userInfo = {
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
            };
            const priceListData = {
                ...userInfo,
                PriceListID: input.PricelistInfo.PriceListID,
                StoreID: input.PricelistInfo.StoreID,
                IsEnabled: input.PricelistInfo.IsEnabled
            };

            const priceListFilter = {
                PriceListID: input.PricelistInfo.PriceListID,
                StoreID: input.PricelistInfo.StoreID,
                IsDeleted: false
            };
            const createdCategory = await CategoryInternal.createPriceListStore(headers, priceListData, priceListFilter);
            return createdCategory;
        }
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}