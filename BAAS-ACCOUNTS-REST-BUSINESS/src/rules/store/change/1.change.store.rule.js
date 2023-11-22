/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : NOV 10 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : NOV 10 2023
 * Description  : This File contain rule for Category Table
 **/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const storeInternal = require("../../../internals/dataaccess/store.internal")

/**
 * Initializing objects for all the imported classes
 */

const Commons = new commons();
const StoreInternal = new storeInternal();




module.exports = class changeStore {

    async changeStore(headers, input) {
        try {

            const userInfo = {
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                DeletedAuthID: input.UserInfo.DeletedAuthID,
                DeletedBy: input.UserInfo.DeletedBy,
                DeletedDate: input.UserInfo.DeletedDate,
                ModifiedBy: input.UserInfo.ModifiedBy,
                ModifiedDate: input.UserInfo.ModifiedDate
            };

            const storeFilter = {
                StoreID: input.StoreInfo.StoreID,
                IsDeleted: false
            };

            const storeData = {
                ...userInfo,
                StoreTypeID: input.StoreInfo.StoreTypeID,
                StoreName: input.StoreInfo.StoreName,
                StoreCode: input.StoreInfo.StoreCode,
                Description: input.StoreInfo.Description,
                StartDate: input.StoreInfo.StartDate,
                EndDate: input?.StoreInfo?.EndDate,
                IsEnabled: input?.StoreInfo?.IsEnabled
            };

            const createdCategory = await StoreInternal.updateStore(headers, storeFilter, storeData);
            return createdCategory;
        }
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}