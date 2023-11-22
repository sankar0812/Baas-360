/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all product module api
**/

/**
 *  Importing all the required modules
 */
const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Endpoints = new endpoints();


/* Importing all the services classes (INJECTED USING CODE GENERATOR) */
const createProductPackageService = require("../../services/product/create.productpackage.service");
const readProductPackageService = require("../../services/product/read.productpackage.service");
const readoneProductPackageService = require("../../services/product/read.productpackage.service");
const countProductPackageService = require("../../services/product/read.productpackage.service");
const updateProductPackageService = require("../../services/product/update.productpackage.service");
const deleteProductPackageService = require("../../services/product/delete.productpackage.service");
const createProductBulkDiscountService = require("../../services/product/create.productbulkdiscount.service");
const readProductBulkDiscountService = require("../../services/product/read.productbulkdiscount.service");
const readoneProductBulkDiscountService = require("../../services/product/read.productbulkdiscount.service");
const countProductBulkDiscountService = require("../../services/product/read.productbulkdiscount.service");
const updateProductBulkDiscountService = require("../../services/product/update.productbulkdiscount.service");
const deleteProductBulkDiscountService = require("../../services/product/delete.productbulkdiscount.service");
const createProductBundleService = require("../../services/product/create.productbundle.service");
const readProductBundleService = require("../../services/product/read.productbundle.service");
const readoneProductBundleService = require("../../services/product/read.productbundle.service");
const countProductBundleService = require("../../services/product/read.productbundle.service");
const updateProductBundleService = require("../../services/product/update.productbundle.service");
const deleteProductBundleService = require("../../services/product/delete.productbundle.service");
const createProductCategoryService = require("../../services/product/create.productcategory.service");
const readProductCategoryService = require("../../services/product/read.productcategory.service");
const readoneProductCategoryService = require("../../services/product/read.productcategory.service");
const countProductCategoryService = require("../../services/product/read.productcategory.service");
const updateProductCategoryService = require("../../services/product/update.productcategory.service");
const deleteProductCategoryService = require("../../services/product/delete.productcategory.service");
const createProductImageService = require("../../services/product/create.productimage.service");
const readProductImageService = require("../../services/product/read.productimage.service");
const readoneProductImageService = require("../../services/product/read.productimage.service");
const countProductImageService = require("../../services/product/read.productimage.service");
const updateProductImageService = require("../../services/product/update.productimage.service");
const deleteProductImageService = require("../../services/product/delete.productimage.service");
const createProductPriceService = require("../../services/product/create.productprice.service");
const readProductPriceService = require("../../services/product/read.productprice.service");
const readoneProductPriceService = require("../../services/product/read.productprice.service");
const countProductPriceService = require("../../services/product/read.productprice.service");
const updateProductPriceService = require("../../services/product/update.productprice.service");
const deleteProductPriceService = require("../../services/product/delete.productprice.service");
const createProductParamService = require("../../services/product/create.productparam.service");
const readProductParamService = require("../../services/product/read.productparam.service");
const readoneProductParamService = require("../../services/product/read.productparam.service");
const countProductParamService = require("../../services/product/read.productparam.service");
const updateProductParamService = require("../../services/product/update.productparam.service");
const deleteProductParamService = require("../../services/product/delete.productparam.service");
const createProductService = require("../../services/product/create.product.service");
const readProductService = require("../../services/product/read.product.service");
const readoneProductService = require("../../services/product/read.product.service");
const countProductService = require("../../services/product/read.product.service");
const updateProductService = require("../../services/product/update.product.service");
const deleteProductService = require("../../services/product/delete.product.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateProductPackageService = new createProductPackageService();
const ReadProductPackageService = new readProductPackageService();
const ReadoneProductPackageService = new readoneProductPackageService();
const CountProductPackageService = new countProductPackageService();
const UpdateProductPackageService = new updateProductPackageService();
const DeleteProductPackageService = new deleteProductPackageService();
const CreateProductBulkDiscountService = new createProductBulkDiscountService();
const ReadProductBulkDiscountService = new readProductBulkDiscountService();
const ReadoneProductBulkDiscountService = new readoneProductBulkDiscountService();
const CountProductBulkDiscountService = new countProductBulkDiscountService();
const UpdateProductBulkDiscountService = new updateProductBulkDiscountService();
const DeleteProductBulkDiscountService = new deleteProductBulkDiscountService();
const CreateProductBundleService = new createProductBundleService();
const ReadProductBundleService = new readProductBundleService();
const ReadoneProductBundleService = new readoneProductBundleService();
const CountProductBundleService = new countProductBundleService();
const UpdateProductBundleService = new updateProductBundleService();
const DeleteProductBundleService = new deleteProductBundleService();
const CreateProductCategoryService = new createProductCategoryService();
const ReadProductCategoryService = new readProductCategoryService();
const ReadoneProductCategoryService = new readoneProductCategoryService();
const CountProductCategoryService = new countProductCategoryService();
const UpdateProductCategoryService = new updateProductCategoryService();
const DeleteProductCategoryService = new deleteProductCategoryService();
const CreateProductImageService = new createProductImageService();
const ReadProductImageService = new readProductImageService();
const ReadoneProductImageService = new readoneProductImageService();
const CountProductImageService = new countProductImageService();
const UpdateProductImageService = new updateProductImageService();
const DeleteProductImageService = new deleteProductImageService();
const CreateProductPriceService = new createProductPriceService();
const ReadProductPriceService = new readProductPriceService();
const ReadoneProductPriceService = new readoneProductPriceService();
const CountProductPriceService = new countProductPriceService();
const UpdateProductPriceService = new updateProductPriceService();
const DeleteProductPriceService = new deleteProductPriceService();
const CreateProductParamService = new createProductParamService();
const ReadProductParamService = new readProductParamService();
const ReadoneProductParamService = new readoneProductParamService();
const CountProductParamService = new countProductParamService();
const UpdateProductParamService = new updateProductParamService();
const DeleteProductParamService = new deleteProductParamService();
const CreateProductService = new createProductService();
const ReadProductService = new readProductService();
const ReadoneProductService = new readoneProductService();
const CountProductService = new countProductService();
const UpdateProductService = new updateProductService();
const DeleteProductService = new deleteProductService();


/**
 * Initializing the controller object
 */
const ProductController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

ProductController.post(Endpoints.ENDPOINT_PRODUCT_PACKAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productpackage.create.v1"
    Commons.executeController(request, response, apiID, CreateProductPackageService.createOneProductPackage ) 
}); 

ProductController.post(Endpoints.ENDPOINT_PRODUCT_PACKAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productpackage.read.v1"
    Commons.executeController(request, response, apiID, ReadProductPackageService.readProductPackages ) 
});

ProductController.get(Endpoints.ENDPOINT_ONE_PRODUCT_PACKAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productpackage.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProductPackageService.readOneProductPackage ) 
});

ProductController.post(Endpoints.ENDPOINT_PRODUCT_PACKAGES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productpackage.count.v1"
    Commons.executeController(request, response, apiID, CountProductPackageService.readProductPackageCount ) 
});

ProductController.patch(Endpoints.ENDPOINT_PRODUCT_PACKAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productpackage.update.v1"
    Commons.executeController(request, response, apiID, UpdateProductPackageService.updateProductPackage ) 
});

ProductController.delete(Endpoints.ENDPOINT_ONE_PRODUCT_PACKAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productpackage.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProductPackageService.deleteOneProductPackage ) 
});


ProductController.post(Endpoints.ENDPOINT_PRODUCT_BULK_DISCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbulkdiscount.create.v1"
    Commons.executeController(request, response, apiID, CreateProductBulkDiscountService.createOneProductBulkDiscount ) 
}); 

ProductController.post(Endpoints.ENDPOINT_PRODUCT_BULK_DISCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbulkdiscount.read.v1"
    Commons.executeController(request, response, apiID, ReadProductBulkDiscountService.readProductBulkDiscounts ) 
});

ProductController.get(Endpoints.ENDPOINT_ONE_PRODUCT_BULK_DISCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbulkdiscount.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProductBulkDiscountService.readOneProductBulkDiscount ) 
});

ProductController.post(Endpoints.ENDPOINT_PRODUCT_BULK_DISCOUNTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbulkdiscount.count.v1"
    Commons.executeController(request, response, apiID, CountProductBulkDiscountService.readProductBulkDiscountCount ) 
});

ProductController.patch(Endpoints.ENDPOINT_PRODUCT_BULK_DISCOUNTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbulkdiscount.update.v1"
    Commons.executeController(request, response, apiID, UpdateProductBulkDiscountService.updateProductBulkDiscount ) 
});

ProductController.delete(Endpoints.ENDPOINT_ONE_PRODUCT_BULK_DISCOUNT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbulkdiscount.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProductBulkDiscountService.deleteOneProductBulkDiscount ) 
});


ProductController.post(Endpoints.ENDPOINT_PRODUCT_BUNDLE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbundle.create.v1"
    Commons.executeController(request, response, apiID, CreateProductBundleService.createOneProductBundle ) 
}); 

ProductController.post(Endpoints.ENDPOINT_PRODUCT_BUNDLES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbundle.read.v1"
    Commons.executeController(request, response, apiID, ReadProductBundleService.readProductBundles ) 
});

ProductController.get(Endpoints.ENDPOINT_ONE_PRODUCT_BUNDLE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbundle.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProductBundleService.readOneProductBundle ) 
});

ProductController.post(Endpoints.ENDPOINT_PRODUCT_BUNDLES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbundle.count.v1"
    Commons.executeController(request, response, apiID, CountProductBundleService.readProductBundleCount ) 
});

ProductController.patch(Endpoints.ENDPOINT_PRODUCT_BUNDLES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbundle.update.v1"
    Commons.executeController(request, response, apiID, UpdateProductBundleService.updateProductBundle ) 
});

ProductController.delete(Endpoints.ENDPOINT_ONE_PRODUCT_BUNDLE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productbundle.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProductBundleService.deleteOneProductBundle ) 
});


ProductController.post(Endpoints.ENDPOINT_PRODUCT_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productcategory.create.v1"
    Commons.executeController(request, response, apiID, CreateProductCategoryService.createOneProductCategory ) 
}); 

ProductController.post(Endpoints.ENDPOINT_PRODUCT_CATEGORYS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productcategory.read.v1"
    Commons.executeController(request, response, apiID, ReadProductCategoryService.readProductCategorys ) 
});

ProductController.get(Endpoints.ENDPOINT_ONE_PRODUCT_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productcategory.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProductCategoryService.readOneProductCategory ) 
});

ProductController.post(Endpoints.ENDPOINT_PRODUCT_CATEGORYS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productcategory.count.v1"
    Commons.executeController(request, response, apiID, CountProductCategoryService.readProductCategoryCount ) 
});

ProductController.patch(Endpoints.ENDPOINT_PRODUCT_CATEGORYS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productcategory.update.v1"
    Commons.executeController(request, response, apiID, UpdateProductCategoryService.updateProductCategory ) 
});

ProductController.delete(Endpoints.ENDPOINT_ONE_PRODUCT_CATEGORY, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productcategory.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProductCategoryService.deleteOneProductCategory ) 
});


ProductController.post(Endpoints.ENDPOINT_PRODUCT_IMAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productimage.create.v1"
    Commons.executeController(request, response, apiID, CreateProductImageService.createOneProductImage ) 
}); 

ProductController.post(Endpoints.ENDPOINT_PRODUCT_IMAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productimage.read.v1"
    Commons.executeController(request, response, apiID, ReadProductImageService.readProductImages ) 
});

ProductController.get(Endpoints.ENDPOINT_ONE_PRODUCT_IMAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productimage.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProductImageService.readOneProductImage ) 
});

ProductController.post(Endpoints.ENDPOINT_PRODUCT_IMAGES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productimage.count.v1"
    Commons.executeController(request, response, apiID, CountProductImageService.readProductImageCount ) 
});

ProductController.patch(Endpoints.ENDPOINT_PRODUCT_IMAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productimage.update.v1"
    Commons.executeController(request, response, apiID, UpdateProductImageService.updateProductImage ) 
});

ProductController.delete(Endpoints.ENDPOINT_ONE_PRODUCT_IMAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productimage.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProductImageService.deleteOneProductImage ) 
});


ProductController.post(Endpoints.ENDPOINT_PRODUCT_PRICE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productprice.create.v1"
    Commons.executeController(request, response, apiID, CreateProductPriceService.createOneProductPrice ) 
}); 

ProductController.post(Endpoints.ENDPOINT_PRODUCT_PRICES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productprice.read.v1"
    Commons.executeController(request, response, apiID, ReadProductPriceService.readProductPrices ) 
});

ProductController.get(Endpoints.ENDPOINT_ONE_PRODUCT_PRICE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productprice.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProductPriceService.readOneProductPrice ) 
});

ProductController.post(Endpoints.ENDPOINT_PRODUCT_PRICES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productprice.count.v1"
    Commons.executeController(request, response, apiID, CountProductPriceService.readProductPriceCount ) 
});

ProductController.patch(Endpoints.ENDPOINT_PRODUCT_PRICES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productprice.update.v1"
    Commons.executeController(request, response, apiID, UpdateProductPriceService.updateProductPrice ) 
});

ProductController.delete(Endpoints.ENDPOINT_ONE_PRODUCT_PRICE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productprice.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProductPriceService.deleteOneProductPrice ) 
});


ProductController.post(Endpoints.ENDPOINT_PRODUCT_PARAM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productparam.create.v1"
    Commons.executeController(request, response, apiID, CreateProductParamService.createOneProductParam ) 
}); 

ProductController.post(Endpoints.ENDPOINT_PRODUCT_PARAMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productparam.read.v1"
    Commons.executeController(request, response, apiID, ReadProductParamService.readProductParams ) 
});

ProductController.get(Endpoints.ENDPOINT_ONE_PRODUCT_PARAM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productparam.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProductParamService.readOneProductParam ) 
});

ProductController.post(Endpoints.ENDPOINT_PRODUCT_PARAMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productparam.count.v1"
    Commons.executeController(request, response, apiID, CountProductParamService.readProductParamCount ) 
});

ProductController.patch(Endpoints.ENDPOINT_PRODUCT_PARAMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productparam.update.v1"
    Commons.executeController(request, response, apiID, UpdateProductParamService.updateProductParam ) 
});

ProductController.delete(Endpoints.ENDPOINT_ONE_PRODUCT_PARAM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.productparam.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProductParamService.deleteOneProductParam ) 
});


ProductController.post(Endpoints.ENDPOINT_PRODUCT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.product.create.v1"
    Commons.executeController(request, response, apiID, CreateProductService.createOneProduct ) 
}); 

ProductController.post(Endpoints.ENDPOINT_PRODUCTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.product.read.v1"
    Commons.executeController(request, response, apiID, ReadProductService.readProducts ) 
});

ProductController.get(Endpoints.ENDPOINT_ONE_PRODUCT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.product.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProductService.readOneProduct ) 
});

ProductController.post(Endpoints.ENDPOINT_PRODUCTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.product.count.v1"
    Commons.executeController(request, response, apiID, CountProductService.readProductCount ) 
});

ProductController.patch(Endpoints.ENDPOINT_PRODUCTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.product.update.v1"
    Commons.executeController(request, response, apiID, UpdateProductService.updateProduct ) 
});

ProductController.delete(Endpoints.ENDPOINT_ONE_PRODUCT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.product.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProductService.deleteOneProduct ) 
});



module.exports = ProductController;
