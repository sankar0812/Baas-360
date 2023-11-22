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
const storeInternal = require("../../../internals/dataaccess/store.internal");
/**
 * Initializing objects for all the imported classes
 */

const StoreInternal = new storeInternal();
const Commons = new commons();

module.exports = class addCategory {

    async changeEffectiveDate(headers, input) {
        try {

            const userInfo = {
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                DeletedAuthID: input.UserInfo.DeletedAuthID,
                DeletedBy: input.UserInfo.DeletedBy,
                DeletedDate: input.UserInfo.DeletedDate,
                ModifiedBy: input.UserInfo.ModifiedBy,
                ModifiedDate: input.UserInfo.ModifiedDate
            };
            const storeData = {
                ...userInfo,
                StartDate: input.StoreInfo.StartDate,
                EndDate: input.StoreInfo.EndDate,
            };

            const storeFilter = {
                StoreID: input.StoreInfo.StoreID,
                IsDeleted: false
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