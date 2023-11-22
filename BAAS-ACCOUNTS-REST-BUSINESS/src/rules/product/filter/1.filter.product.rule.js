/**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update product package
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");
const productInternal = require("../../../internals/dataaccess/product.internal")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();


const ProductInternal = new productInternal()

module.exports = class changeProductPackageRule {

    /**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product
    **/
    async filterProduct(headers, input) {
        try {
            let productFilter = {
                "OR": [
                    input?.ProductInfo?.ProductUPC !== "" ? {
                        ProductUPC: {
                            "contains": input?.ProductInfo?.ProductUPC, "mode": 'insensitive'
                        }
                    } : { ProductUPC: undefined },

                    input?.ProductInfo?.ProductSKU !== "" ? {
                        ProductSKU: {
                            "contains": input?.ProductInfo?.ProductSKU, "mode": 'insensitive'
                        }
                    } : { ProductSKU: undefined },

                    input?.ProductInfo?.ProductCode !== "" ? {
                        ProductCode: {
                            "contains": input?.ProductInfo?.ProductCode, "mode": 'insensitive'
                        }
                    } : { ProductCode: undefined },

                    input?.ProductInfo?.ParentProductID === "" ? {
                        ParentProductID: undefined
                    } : { ParentProductID: input?.ProductInfo?.ParentProductID },

                    {
                        IsGoods: input?.ProductInfo?.IsGoods
                    },
                    {
                        IsService: input?.ProductInfo?.IsService
                    }
                ],
                IsDeleted: false
            }
            let productFields = {
                "ProductID": true,
                "ProductName": true,
                "ProductCode": true,
                "ProductUPC": true,
                "ProductSKU": true,
                "ParentProductID": true,
                "AppSettingUomID": true,
                "CurrencyID": true,
                "BaseSaleRate": true,
                "ComparisionSaleRate": true,
                "IsAsset": true,
                "IsRental": true,
                "IsGoods": true,
                "IsService": true,
                "IsEnabled": true,
                "IsSellable": true,
                "IsPurchase": true,
                "StockLimit": true,
                "IsStockLimitDisabled": true,
                "CreatedAuthID": true,
                "CreatedBy": true,
                "CreatedDate": true,
                "ModifiedAuthID": true,
                "ModifiedBy": true,
                "ModifiedDate": true,
                "IsDeleted": true,
                "ProductBulkDiscount": {
                    "select": {
                        "ProductBulkDiscountID": true,
                        "RangeMax": true,
                        "DiscountPercent": true,
                        "DiscountRate": true
                    }
                },
                "Currency": {
                    "select": {
                        "CurrencyCode": true,
                        "CurrencySymbol": true
                    }
                }
            }

            let productData = await ProductInternal.readProduct(headers, productFilter, productFields, 100, 0, {})

            return productData.data
        }
        catch (error) {
            if (error.status == 404) {
                return Commons.generateServiceOutput(null, 200, Messages.MEESAGE_CATEGORY_EMPTY_DATA)
            }
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}