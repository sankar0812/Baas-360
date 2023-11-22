/**
* CreatedBy    : RaviBalan
* CreatedTime  : NOV 08 2023
* ModifiedBy   : RaviBalan 
* ModifiedTime : NOV 08 2023
* Description  : This file contains the all api endpoint to function mapping for all Category module
**/


/**
 * Importing all the required modules
 */
const coreInternal = require("../core.internal");


/**
 * Initializing objects for all the imported classes
 */
const CoreInternal = new coreInternal();



module.exports = class productInternal {
    /**
    * CreatedBy    : RaviBalan
    * CreatedTime  : NOV 08 2023
    * ModifiedBy   : RaviBalan 
    * ModifiedTime : NOV 08 2023
    * Description  : This file contains the all api endpoint to function mapping for all Category module
        **/

    async createProductCategory(headers, data, filter) {

        console.log(`CREATE PRODUCT CATEGORY - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/productcategory"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE PRODUCT CATEGORY  - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async updateProductCategory(headers, filter, fields) {

        console.log(`UPDATE PRODUCT CATEGORY - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/productcategorys"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE PRODUCT CATEGORY - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }
    async readProductCategory(headers, filter, fields, limit, page, sort) {
        console.log(`READ PRODUCT  CATEGORY- FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/productcategorys"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ product CATEGORY - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }
    async readProduct(headers, filter, fields, limit, page, sort) {
        console.log(`READ PRODUCT  - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/products"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ product  - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }


    /**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 09 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 09 2023
* Description  : This file contains the all api endpoint to function mapping for all product module
**/

    async createProduct(headers, data, filter) {

        console.log(`CREATE PRODUCT - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/product"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE PRODUCT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async updateProduct(headers, filter, fields) {

        console.log(`UPDATE PRODUCT - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/products"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE PRODUCT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This file contains the all api endpoint to function mapping for all product module
    **/

    async createProductPackage(headers, data, filter) {

        console.log(`CREATE PRODUCT PACKAGE - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/productpackage"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE PRODUCT PACKAGE- FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async updateProductPackage(headers, filter, fields) {

        console.log(`UPDATE PRODUCT PACKAGE - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/productpackages"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE PRODUCT PACKAGE - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }
    async readProductPackage(headers, filter, fields, limit, page, sort) {
        console.log(`READ PRODUCT  PACKAGE- FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/productpackages"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ product PACKAGE - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }


    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This file contains the all api endpoint to function mapping for all product module
    **/

    async createProductBulkDiscount(headers, data, filter) {

        console.log(`CREATE PRODUCT BULK DISCOUNT - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbulkdiscount"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE PRODUCT BULK DISCOUNT- FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async updateProductBulkDiscount(headers, filter, fields) {

        console.log(`UPDATE PRODUCT BULK DISCOUNT - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbulkdiscounts"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE PRODUCT BULK DISCOUNT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async readProductBulkDiscount(headers, filter, fields, limit, page, sort) {
        console.log(`READ PRODUCT BULK DISCOUNT - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbulkdiscounts"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ PRODUCT BULK DISCOUNT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }



}