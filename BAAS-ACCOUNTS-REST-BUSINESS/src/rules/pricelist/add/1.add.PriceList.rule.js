/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 21 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 21 2023
* Description : This file contains all the business rules for create Price list 
**/


/**
 * Importing all the required modules
 */

const priceListInternal = require("../../../internals/dataaccess/pricelist.internal")



/**
 * Initializing objects for all the imported classes
 */

const PriceListInternal = new priceListInternal();


module.exports = class addPriceListRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 21 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 21 2023
    * Description  : This function add the information for price list
    **/
    async addPriceList(headers, input) {

        let UserInfo = {
            MerchantID: input.UserInfo.MerchantID,
            TenantID: input.UserInfo.TenantID,
            CreatedAuthID: input.UserInfo.CreatedAuthID,
            CreatedBy: input.UserInfo.CreatedBy,
            ModifiedAuthID: input.UserInfo.ModifiedAuthID,
            ModifiedBy: input.UserInfo.ModifiedBy
        }
        let priceListData = {
            ...UserInfo,
            CustomerID: input.PricelistInfo.CustomerID,
            PriceListCode: input.PricelistInfo.PriceListCode,
            PriceListStatusID: input.PricelistInfo.PriceListStatusID,
            StartDate: input.PricelistInfo.StartDate,
            EndDate: input.PricelistInfo.EndDate || null,
            DisplayName: input.PricelistInfo.DisplayName,
            IsActive: true,
            ActiveDate: new Date(),
        }
        let PriceListFilter = {
            DisplayName: {
                "equals": input.PricelistInfo.DisplayName,
                "mode": "insensitive"
            },
            PriceListCode: {
                "equals": input.PricelistInfo.PriceListCode,
                "mode": "insensitive"
            },
            IsDeleted: false
        }
        const PriceListData = await PriceListInternal.createPriceList(headers, priceListData, PriceListFilter)

        return PriceListData
    }
}