/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 15 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update pricelist
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

module.exports = class changePriceListRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for pricelist
    **/
    async changePriceList(headers, input) {
        try {
            let changePriceListFilter = {
                PriceListID: input.PriceListID,
                IsDeleted: false
            }
            let changePriceListFields = {
                DisplayName: input.DisplayName,
                PriceListCode: input.PriceListCode,
                StartDate: input.StartDate,
                Remarks: input.Remarks,
                EndDate: input.EndDate,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy
            }
            let changePriceListData = await PriceListInternal.updatePriceList(headers, changePriceListFilter, changePriceListFields)
            return changePriceListData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}