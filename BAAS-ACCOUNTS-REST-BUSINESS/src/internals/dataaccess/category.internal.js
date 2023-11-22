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



module.exports = class categoryInternal {
    /**
    * CreatedBy    : RaviBalan
    * CreatedTime  : NOV 08 2023
    * ModifiedBy   : RaviBalan 
    * ModifiedTime : NOV 08 2023
    * Description  : This file contains the all api endpoint to function mapping for all Category module
        **/

    async createCategory(headers, data, filter) {

        console.log(`CREATE CATEGORY - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/category/v1/category"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE CATEGORY  - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    /**
    * CreatedBy    : RaviBalan
    * CreatedTime  : NOV 08 2023
    * ModifiedBy   : RaviBalan 
    * ModifiedTime : NOV 08 2023
    * Description  : This file contains the all api endpoint to function mapping for all Category module
        **/

    async updateCategory(headers, filter, fields) {

        console.log(`UPDATE CATEGORY - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/category/v1/categorys"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE CATEGORY - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async readCategory(headers, filter, fields, limit, page, sort) {
        console.log(`READ CATEGORY - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/category/v1/categorys"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ CATEGORY - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }

}