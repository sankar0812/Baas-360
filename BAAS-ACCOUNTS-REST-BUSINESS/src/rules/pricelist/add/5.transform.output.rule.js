/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 21 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 21 2023
* Description : This file contains all the business rules for Transform Output
**/


/**
 * Importing all the required modules
 */
// const commons = require("../../../utils/commons");

const commons = require("../../../utils/commons");
const Message = require("../../../utils/messages")



/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const message = new Message()



module.exports = class addOutputRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This function fetches all the information for product
    **/
    async addOutput(PriceListData, priceListItemDataOutput, priceListItemDiscountDataOutput) {

        const priceListItemDatum = priceListItemDataOutput.map(item => ({
            PriceListItemID: item.PriceListItemID,
            PriceListID: item.PriceListID,
            ProductID: item.ProductID,
            Rate: item.Rate,
            Remarks: item.Remarks,
        }))


        const priceListDiscountItemData = priceListItemDiscountDataOutput.map(item => ({
            PriceListItemBulkDiscountID: item.PriceListItemBulkDiscountID,
            PriceListItemID: item.PriceListItemID,
            PriceListID: item.PriceListID,
            ProductID: item.ProductID,
            CurrencyID: item.CurrencyID,
            RangeMin: item.RangeMin,
            RangeMax: item.RangeMax,
            DiscountPeriod: item.DiscountPeriod,
            DiscountType: item.DiscountType,
            DiscountPercent: item.DiscountPercent,
            DiscountRate: item.DiscountRate,
            Description: item.Description,
        }))

        let PriceListInfoOutput = {
            PriceListID: PriceListData.data.PriceListID,
            StartDate: PriceListData.data.StartDate,
            EndDate: PriceListData.data.EndDate || null,
            DisplayName: PriceListData.data.DisplayName,
            IsActive: PriceListData.data.IsActive,
            ActiveDate: PriceListData.data.ActiveDate,

        }

        let UserInfoOutput = {
            MerchantID: PriceListData.data.MerchantID,
            TenantID: PriceListData.data.TenantID,
            CustomerID: PriceListData.data.CustomerID,
            CreatedAuthID: PriceListData.data.CreatedAuthID,
            CreatedBy: PriceListData.data.CreatedBy,
            ModifiedAuthID: PriceListData.data.ModifiedAuthID,
            ModifiedBy: PriceListData.data.ModifiedBy
        }

        let Output = {
            UserInfo: UserInfoOutput,
            PriceListInfo: PriceListInfoOutput,
            PriceListItemInfo: priceListItemDatum,
            PriceListItemDiscountInfo: priceListDiscountItemData
        }
        let transFormOutput = await Commons.generateServiceOutput(Output, 200, message.MESSAGE_ADD_PRODUCT)
        return transFormOutput
    }

}