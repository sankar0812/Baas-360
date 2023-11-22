/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 06 2023
* ModifiedBy   : Ayerathammal
* ModifiedTime : OCT 12 2023
* Description  : This file contains all the invoice releated tables
**/


/**
 * Importing all the required modules
 */
const coreInternal = require("../core.internal");


/**
 * Initializing objects for all the imported classes
 */
const CoreInternal = new coreInternal();

module.exports = class invoiceInternal {


    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 06 2023
    * ModifiedBy   : Ayerathammal
    * ModifiedTime : OCT 06 2023
    * Description  : Reading the invoice and InvoiceItem from the table
    **/
    async readInvoices(headers, filter, fields, limit, page, sort) {
        console.log(`READ INVOICES - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoices"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ INVOICES - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }
    /**
    * CreatedBy    : RaviBalan
    * CreatedTime  : OCT 18 2023
    * ModifiedBy   : RaviBalan 
    * ModifiedTime : OCT 18 2023
    * Description  : This file contains the all api endpoint to function mapping for all invoice module
    **/

    async readInvoiceStatus(headers, filter, fields, limit, page, sort) {
        console.log(`READ INVOICE STATUS - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoicestatuses"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ INVOICES STATUS - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }


    async updateInvoice(headers, filter, fields) {

        console.log(`UPDATE INVOICES - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoices"
        const body = { filter: filter, fields: fields }
        const output = await CoreInternal.executeDataAccessPatchAPI(apiEndpoint, headers, body)

        console.log(`UPDATE INVOICES - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }


    async readInvoiceCount(headers, filter) {
        console.log(`READ INVOICES COUNT- FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoices/metrics"
        const body = { filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ INVOICES COUNT- FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }

    async readInvoiceItems(headers, filter, fields, limit, page, sort) {
        console.log(`READ INVOICE ITEMS - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoiceitems"
        const body = { filter: filter, fields: fields, limit: limit, page: page, sort: sort }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`READ INVOICE ITEMS - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }



    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 12 2023
    * ModifiedBy   : Ayerathammal
    * ModifiedTime : OCT 12 2023
    * Description  : Create the invoice and InvoiceItem from the table
    **/

    async createInvoice(headers, data, filter) {

        console.log(`CREATE INVOICES - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoice"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE INVOICES - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

    async createInvoiceItem(headers, data, filter) {

        console.log(`CREATE INVOICES ITEM - FUNCTION EXECUTION STARTED`);

        const apiEndpoint = "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoiceitem"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)

        console.log(`CREATE INVOICES ITEM - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);

        return output
    }

}





