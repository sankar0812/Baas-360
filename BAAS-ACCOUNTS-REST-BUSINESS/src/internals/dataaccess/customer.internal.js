/**
* CreatedBy    : RaviBalan
* CreatedTime  : OCT 17 2023
* ModifiedBy   : RaviBalan 
* ModifiedTime : OCT 17 2023
* Description  : This file contains the all api endpoint to function mapping for all invoice module
**/


/**
 * Importing all the required modules
 */
const coreInternal = require("../core.internal");


/**
 * Initializing objects for all the imported classes
 */
const CoreInternal = new coreInternal();



module.exports = class customerInternal {
    /**
    * CreatedBy    : RaviBalan
    * CreatedTime  : OCT 18 2023
    * ModifiedBy   : RaviBalan 
    * ModifiedTime : OCT 18 2023
    * Description  : This file contains the all api endpoint to function mapping for all invoice module
    **/

    async createCustomerPayment(headers, data, filter) {

        console.log(`CREATE CUSTOMER PAYMENT - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerpayment"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE CUSTOMER PAYMENT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }
    /**
    * CreatedBy    : RaviBalan
    * CreatedTime  : OCT 18 2023
    * ModifiedBy   : RaviBalan 
    * ModifiedTime : OCT 18 2023
    * Description  : This file contains the all api endpoint to function mapping for all invoice module
    **/

    async createCustomerPaymentItem(headers, data, filter) {

        console.log(`CREATE CUSTOMER PAYMENTITEM - FUCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerpaymentitem"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)
        console.log(`CREATE CUSTOMER PAYMENT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output

    }

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 12 2023
    * ModifiedBy   : Ayerathammal
    * ModifiedTime : OCT 12 2023
    * Description  : Reading the customer from the table
    **/
    async readCustomer(headers, filter, fields, limit, page, sort) {
        console.log(`READ CUSTOMER - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customers"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ CUSTOMER - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }

    async updateCustomer(headers, filter, fields) {

        console.log(`UPDATE CUSTOMER - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customers"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE CUSTOMER - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 20 2023
    * ModifiedBy   : Ayerathammal
    * ModifiedTime : OCT 20 2023
    * Description  : Create the Customer Account Data from this function
    **/
    async createCustomerAccount(headers, data, filter) {

        console.log(`CREATE CUSTOMER ACCOUNT - FUCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customeraccount"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)
        console.log(`CREATE CUSTOMER ACCOUNT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output

    }


    async updateCustomerAccount(headers, filter, fields) {

        console.log(`UPDATE CUSTOMER ACCOUNT - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customeraccounts"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE CUSTOMER ACCOUNT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 20 2023
    * ModifiedBy   : Ayerathammal
    * ModifiedTime : OCT 20 2023
    * Description  : Create the Customer Account Balance Data from this function
    **/
    async createCustomerAccountBalance(headers, data, filter) {

        console.log(`CREATE CUSTOMER ACCOUNT BALANCE - FUCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customeraccountbalance"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)
        console.log(`CREATE CUSTOMER ACCOUNT BALANCE - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    /**
   * CreatedBy    : Ayerathammal
   * CreatedTime  : OCT 31 2023
   * ModifiedBy   : Ayerathammal
   * ModifiedTime : OCT 31 2023
   * Description  : Read the Customer Account Balance Data from this function
   **/

    async readCustomerAccountBalance(headers, filter, fields, limit, page, sort) {
        console.log(`READ CUSTOMER ACCOUNT  BALANCE- FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customeraccountbalances"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ CUSTOMER ACCOUNT BALANCE - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 31 2023
    * ModifiedBy   : Ayerathammal
    * ModifiedTime : OCT 31 2023
    * Description  : Create the Customer Account Transaction Data from this function
    **/
    async createCustomerAccountTransaction(headers, data, filter) {

        console.log(`CREATE CUSTOMER ACCOUNT TRANSACTION - FUCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customeraccounttransaction"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)
        console.log(`CREATE CUSTOMER ACCOUNT TRANSACTION - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output

    }
}







