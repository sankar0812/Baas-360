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

    async removePriceList(headers, input) {
        try {

            const userInfo = {
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
                DeletedAuthID: input.UserInfo.DeletedAuthID,
                DeletedBy: input.UserInfo.DeletedBy,
                DeletedDate: input.UserInfo.DeletedDate
            };
            const removePriceListData = {
                ...userInfo,
                PriceListID: input.PricelistInfo.PriceListID,
                StoreID: input.PricelistInfo.StoreID,
                IsEnabled: input.PricelistInfo.IsEnabled
            };

            const removePriceListFilter = {
                PriceListStoreID: input.PricelistInfo.PriceListStoreID,
                IsDeleted: false
            };
            const createdCategory = await CategoryInternal.updatePriceListStore(headers, removePriceListFilter, removePriceListData);
            return createdCategory;
        }
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}