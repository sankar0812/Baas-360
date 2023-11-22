/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 18 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 18 2023
* Description : This file contains all the business rules for read product list and product list item
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages")
const customerMock = require("../../../mocks/customer.mock.json");
const priceListInternal = require("../../../internals/dataaccess/pricelist.internal");



/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages()

const PriceListInternal = new priceListInternal()

module.exports = class getPriceListCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 18 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : OCT 18 2023
    * Description  : This function fetches all the information for product list
    **/
    async getPriceList(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return customerMock[apiID]
            }
            else {


                let priceListFilter = {
                    IsActive: true,
                    IsDeleted: false
                }
                let priceListFields = {
                    PriceListID: true
                }
                let priceListData = await PriceListInternal.readPriceList(headers, priceListFilter, priceListFields, 100, 0, {})

                let PriceListID = []
                for (let priceListOutput of priceListData.data) {
                    PriceListID.push(priceListOutput.PriceListID)
                }

                let priceListCusAccFilter = {
                    PriceListID: { "in": PriceListID },
                    CustomerAccountID: input.CustomerAccountID,
                    IsDeleted: false
                }
                let priceListCusAccFields = {
                    PriceListCustomerAccountID: true,
                    PriceListID: true,
                    CustomerAccountID: true,
                    CreatedAuthID: true,
                    CreatedBy: true
                }
                let priceListCusAccData = await PriceListInternal.readPriceListCustomerAccount(headers, priceListCusAccFilter, priceListCusAccFields, 100, 0, {})

                let priceListCusAccDataArray = []
                for (let priceListCusAcc of priceListCusAccData.data) {
                    priceListCusAccDataArray.push(priceListCusAcc.PriceListID)
                }

                let priceListItemFilter = {
                    PriceListID: { "in": priceListCusAccDataArray },
                    IsDeleted: false
                }
                let piceListItemFields = {
                    "PriceListID": true,
                    "ProductID": true,
                    "Rate": true,
                    "Remarks": true,
                    "PriceList": {
                        "select": {
                            "DisplayName": true
                        }
                    },
                    "Product": {
                        "select": {
                            "ProductName": true,
                            "ProductCode": true,
                            "AppSettingUomID": true,
                            "AppSettingUom": {
                                "select": {
                                    "UomName": true
                                }
                            }
                        }
                    }
                }

                let priceListItemData = await PriceListInternal.readPriceListItem(headers, priceListItemFilter, piceListItemFields, 1000, 0, {})
                let PriceListItemOutput =
                {
                    productInfo: priceListItemData.data
                }
                return Commons.generateServiceOutput(PriceListItemOutput, 200, Messages.MESSAGE_PRODUCT_INFO);
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}