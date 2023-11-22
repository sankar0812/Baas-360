/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 14 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 14 2023
* Description : This file contains all the business rules for create bulk discount
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
    * CreatedTime  : NOV 14 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 14 2023
    * Description  : This function fetches all the information for bulk discount
    **/
    async addOutput(bulkDiscountOutput) {
        let UserInfo = {
            CreatedAuthID: bulkDiscountOutput[0].data.CreatedAuthID,
            CreatedBy: bulkDiscountOutput[0].data.CreatedBy,
            ModifiedAuthID: bulkDiscountOutput[0].data.ModifiedAuthID,
            ModifiedBy: bulkDiscountOutput[0].data.ModifiedBy,
            MerchantID: bulkDiscountOutput[0].data.MerchantID,
            TenantID: bulkDiscountOutput[0].data.TenantID,
            CurrencyID: bulkDiscountOutput[0].data.CurrencyID,
            ProductID: bulkDiscountOutput[0].data.ProductID
        }
        let BulkDiscountInfo = bulkDiscountOutput.map(item => ({
            RangeMin: item.data.RangeMin,
            RangeMax: item.data.RangeMax,
            DiscountPeriod: item.data.DiscountPeriod,
            DiscountType: item.data.DiscountType,
            DiscountPercent: item.data.DiscountPercent,
            DiscountRate: item.data.DiscountRate,
            Description: item.data.Description
        }))
        let Output = {
            UserInfo: UserInfo,
            BulkDiscountInfo: BulkDiscountInfo
        }
        let transFormOutput = await Commons.generateServiceOutput(Output, 200, message.MESSAGE_ADD_BULK_DISCOUNT)
        return transFormOutput
    }

}