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




module.exports = class addStore {

    async addStore(headers, input) {
        try {

            const userInfo = {
                MerchantID: input.UserInfo.TenantID,
                TenantID: input.UserInfo.TenantID,
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
            };
            const storeData = {
                ...userInfo,
                StoreTypeID: input.StoreInfo.StoreTypeID,
                StoreName: input.StoreInfo.StoreName,
                StoreCode: input.StoreInfo.StoreCode,
                StartDate: input.StoreInfo.StartDate,
                Description: input.StoreInfo.Description
            };

            const storeFilter = {
                "OR": [
                    {
                        StoreName: {
                            "equals": input.StoreInfo.StoreName,
                            "mode": "insensitive"
                        }
                    },
                    {
                        StoreCode: {
                            "equals": input.StoreInfo.StoreCode,
                            "mode": "insensitive"
                        }
                    }

                ],
                IsDeleted: false
            };
            const createdCategory = await StoreInternal.createStore(headers, storeData, storeFilter);
            return createdCategory;
        }
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}