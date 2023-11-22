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
const priceListInternal = require("../../../internals/dataaccess/pricelist.internal.js")

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const PriceListInternal = new priceListInternal();

module.exports = class getPriceListRule {

    /**
    * CreatedBy    : RAVIBALAN
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : RAVIBALAN 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product
    **/
    async getPriceList(headers, getPriceListStoreData) {
        try {

            let priceListIDArray = [];

            for (let getPriceListData of getPriceListStoreData.data) {
                priceListIDArray.push(getPriceListData.PriceListID)
            }

            let priceListFilter = {
                PriceListID: { "in": priceListIDArray }
            }
            let priceListFields = {
                PriceListID: true,
                PriceListStatusID: true,
                "PriceListStatus": {
                    "select": {
                        "PriceListStatusID": true,
                        "PriceListStatus": true,
                        "PriceListStatusCode": true
                    }
                }
            }
            let getPriceListData = await PriceListInternal.readPriceList(headers, priceListFilter, priceListFields, 10000, 0, {})
            return getPriceListData
        }
        catch (error) {
            if (error.status == 404) {
                return Commons.generateServiceOutput([], 404, "No Data Found")
            }
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}