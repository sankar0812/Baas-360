/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 21 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 21 2023
* Description : This file contains all the business rules for enable the Store
**/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons.js");
const messages = require("../../../utils/messages.js");
const storeInternal = require("../../../internals/dataaccess/store.internal.js")

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const StoreInternal = new storeInternal();

module.exports = class getPriceListStoreRule {

    /**
    * CreatedBy    : RAVIBALAN
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : RAVIBALAN 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product
    **/
    async getPriceListStore(headers, input) {
        try {

            let enableStoreFilter = {
                StoreID: input.StoreID,
                IsDeleted: false
            }
            let enableStoreFields = {
                PriceListStoreID: true,
                PriceListID: true,
                StoreID: true
            }
            let getPriceListStoreData = await StoreInternal.readPriceListStore(headers, enableStoreFilter, enableStoreFields, 10000, 0, {})
            return getPriceListStoreData
        }
        catch (error) {
            if (error.status == 404) {
                return Commons.generateServiceOutput(null, 200, Messages.MESSAGE_UPDATE_PRODUCT_DISABLE)
            }
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}