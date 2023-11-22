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
const constants = require("../../../utils/constants.js")
const storeInternal = require("../../../internals/dataaccess/store.internal.js")

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Constants = new constants();
const StoreInternal = new storeInternal();

module.exports = class enableStoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 21 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 21 2023
    * Description  : This function fetches all the information for product
    **/
    async enableStore(headers, getPriceListData) {
        try {
            let Count = 0
            let EnableSaleData = null
            for (let getPriceListDatum of getPriceListData.data) {
                if (Constants.PRICE_LIST_STATUS.PUBLISHED == getPriceListDatum.PriceListStatus.PriceListStatusCode) {
                    Count++;
                }
                else if (Count > 0) {
                    let enableSaleFilter = {}
                    let enableSaleFields = {
                        IsEnabled: true
                    }
                    EnableSaleData = await StoreInternal.updateStore(headers, enableSaleFilter, enableSaleFields)
                }
            }
            return EnableSaleData
        }
        catch (error) {
            if (error.status == 404) {
                return Commons.generateServiceOutput([], 404, "No Data Found")
            }
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }
}
