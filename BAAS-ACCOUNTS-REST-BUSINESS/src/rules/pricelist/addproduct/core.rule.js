/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 16 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 16 2023
* Description : This file contains all the business rules for add product to the pricelist
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const priceListMock = require("../../../mocks/pricelist.mock.json");
const addPriceListItem = require("./1.add.pricelistitem.rule");
const readProductBulkDiscountRule = require("./2.read.productbulkdiscount.rule")
const addPriceListItemBulkDiscount = require("./3.add.pricelistitembulkdiscount.rule")
const addOutputRule = require("./4.transform.output");





/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const AddPriceListItem = new addPriceListItem();
const ReadProductBulkDiscountRule = new readProductBulkDiscountRule();
const AddPriceListItemBulkDiscount = new addPriceListItemBulkDiscount();
const AddOutputRule = new addOutputRule();


module.exports = class addProductCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for pricelist
    **/
    async addProductCore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return priceListMock[apiID]
            }
            else {
                let addPriceListItemData = await AddPriceListItem.addPriceListItem(headers, input)
                let readProductBulkDiscount = await ReadProductBulkDiscountRule.readProductBulkDiscount(headers, input)
                let addPriceListItemBulkDiscountData = await AddPriceListItemBulkDiscount.addPriceListItemBulkDiscount(headers, input, addPriceListItemData, readProductBulkDiscount)
                let ProductOutput = await AddOutputRule.addOutput(addPriceListItemData, readProductBulkDiscount, addPriceListItemBulkDiscountData)
                return ProductOutput
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}