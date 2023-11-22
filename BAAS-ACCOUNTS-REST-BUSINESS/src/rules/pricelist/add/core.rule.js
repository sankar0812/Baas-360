/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 24 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 24 2023
* Description : This file contains all the business rules for create Price list and Price list item and Bulk Discount
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");
const priceListMock = require("../../../mocks/pricelist.mock.json");

const addPriceListRule = require("./1.add.PriceList.rule")
// const addPriceListItemRule = require("./2.add.PriceListItem.rule")
// const readProductBulkDiscountRule = require("./3.read.ProductBulkDiscount.rule")
// const addPriceListItemBulkDiscountRule = require("./4.add.PriceListItemBulkDiscount.rule")
// const transformOutputRule = require("./5.transform.output.rule")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

const AddPriceListRule = new addPriceListRule();
// const AddPriceListItemRule = new addPriceListItemRule();
// const ReadProductBulkDiscountRule = new readProductBulkDiscountRule();
// const AddPriceListItemBulkDiscountRule = new addPriceListItemBulkDiscountRule();
// const TransformOutputRule = new transformOutputRule();


module.exports = class addPriceListCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 24 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : OCT 24 2023
    * Description  : This function add the information for price list and price list item 
    **/
    async addPriceList(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return priceListMock[apiID]
            }
            else {

                let PriceListData = await AddPriceListRule.addPriceList(headers, input)
                // let PriceListItemData = await AddPriceListItemRule.addPriceListItem(headers, input, PriceListData)
                // let ReadProductBulkDiscountData = await ReadProductBulkDiscountRule.readProductBulkDiscount(headers, input)
                // let AddPriceListItemData = await AddPriceListItemBulkDiscountRule.addPriceListItemBulkDiscount(headers, input, PriceListData, PriceListItemData, ReadProductBulkDiscountData)
                // let TransformOutputData = await TransformOutputRule.addOutput(PriceListData, PriceListItemData, ReadProductBulkDiscountData, AddPriceListItemData)

                return Commons.generateServiceOutput(PriceListData, 200, Messages.MESSAGE_ADD_PRICE_LIST)
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}