/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 16 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 16 2023
* Description : This file contains all the business rules for status change
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");

const priceListInternal = require("../../../internals/dataaccess/pricelist.internal")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();


const PriceListInternal = new priceListInternal()

module.exports = class statusChangeRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 16 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 16 2023
    * Description  : This function fetches all the information for pricelist
    **/
    async statusChange(headers, input) {
        try {
            let statusChangeFilter = {
                PriceListID: input.PriceListID,
                IsDeleted: false
            }
            let statusChangeFields = {
                PriceListStatusID: input.PriceListStatusID,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy
            }
            let statusChangeData = await PriceListInternal.updatePriceList(headers, statusChangeFilter, statusChangeFields)
            return statusChangeData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}