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


module.exports = class storeInternal {
    /**
    * CreatedBy    : RaviBalan
    * CreatedTime  : NOV 08 2023
    * ModifiedBy   : RaviBalan 
    * ModifiedTime : NOV 08 2023
    * Description  : This file contains the all api endpoint to function mapping for all Category module
        **/

    async createStore(headers, data, filter) {

        console.log(`CREATE STORE - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/store/v1/store"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE STORE  - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async updateStore(headers, filter, fields) {

        console.log(`UPDATE STORE - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/store/v1/stores"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE STORE - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async readPriceListStore(headers, filter, fields, limit, page, sort) {
        console.log(`READ PRICELIST STORE- FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststores"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ PRICELIST STORE - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }


}