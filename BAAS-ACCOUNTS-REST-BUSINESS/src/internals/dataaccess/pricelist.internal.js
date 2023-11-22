/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 06 2023
* ModifiedBy   : Ayerathammal
* ModifiedTime : OCT 12 2023
* Description  : This file contains all the pricelist releated tables
**/


/**
 * Importing all the required modules
 */
const coreInternal = require("../core.internal");


/**
 * Initializing objects for all the imported classes
 */
const CoreInternal = new coreInternal();

module.exports = class priceListInternal {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 18 2023
    * ModifiedBy   : Ayerathammal
    * ModifiedTime : OCT 18 2023
    * Description  : Reading the PriceList and PriceListItem from the table
    **/

    async createPriceList(headers, data, filter) {

        console.log(`CREATE PRICE LIST - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelist"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE PRICE LIST - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async readPriceList(headers, filter, fields, limit, page, sort) {
        console.log(`READ PRICE LIST - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelists"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ PRICE LIST - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }

    async updatePriceList(headers, filter, fields) {

        console.log(`UPDATE PRICE LIST - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelists"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE PRICE LIST - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async readPriceListCustomerAccount(headers, filter, fields, limit, page, sort) {
        console.log(`READ PRICE LIST CUSTOMER ACCOUNT- FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccounts"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ PRICE LIST CUSTOMER ACCOUNT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }

    async readPriceListItem(headers, filter, fields, limit, page, sort) {
        console.log(`READ PRICE LIST ITEM - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistitems"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ PRICE LIST ITEM - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }

    async updatePriceListItem(headers, filter, fields) {

        console.log(`UPDATE PRICE LIST ITEM - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistitems"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE PRICE LIST ITEM - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    /**
   * CreatedBy    : Ayerathammal
   * CreatedTime  : OCT 24 2023
   * ModifiedBy   : Ayerathammal
   * ModifiedTime : OCT 24 2023
   * Description  : Create the PriceList and PriceListItem 
   **/


    async createPriceListCustomerAccount(headers, data, filter) {

        console.log(`CREATE PRICE LIST CUSTOMER ACCOUNT - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccount"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE PRICE LIST CUSTOMER ACCOUNT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async createPriceListItem(headers, data, filter) {

        console.log(`CREATE PRICE LIST ITEM - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistitem"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE PRICE LIST ITEM - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async createPriceListItemBulkDiscount(headers, data, filter) {

        console.log(`CREATE PRICE LIST ITEM BULK DISCOUNT- FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistitembulkdiscount"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE PRICE LIST ITEM BULK DISCOUNT- FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async readPriceListItemBulkDiscount(headers, filter, fields, limit, page, sort) {
        console.log(`READ PRICE LIST ITEM BULK DISCOUNT- FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistitembulkdiscounts"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ PRICE LIST ITEM BULK DISCOUNT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }

    async updatePriceListItemBulkDiscount(headers, filter, fields) {

        console.log(`UPDATE PRICE LIST ITEM BULK DISCOUNT - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistitembulkdiscounts"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE PRICE LIST ITEM BULK DISCOUNT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async createPriceListStore(headers, data, filter) {

        console.log(`CREATE PRICE LIST STORE- FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststore"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE PRICE LIST STORE - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }
    async updatePriceListStore(headers, filter, fields) {

        console.log(`UPDATE PRICE LIST STORE - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststores"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE PRICE LIST STORE - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }


}





