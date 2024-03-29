/**
* CreatedBy    : Dinesh
* CreatedTime  : March 07 2023
* ModifiedBy   : Ayerathammal
* ModifiedTime : OCT 06 2023
* Description  : This file is the entry point for the service
**/

/**
 * Importing all the required modules 
 */
const cors = require("cors");
const compression = require("compression");
const basicAuth = require("express-basic-auth");

const express = require("express");
const config = require("./config");

const commons = require("./src/utils/commons");
const endpoints = require("./src/utils/endpoints");

/**
 * Initializing objects from the imported classes
 */
const RestBusiness = express();
const Config = new config();
const Commons = new commons();
const Endpoints = new endpoints();

/**
 * Adding middlewares to the express object
 */
RestBusiness.use(cors());
RestBusiness.use(compression());
RestBusiness.use(express.json());

/**
 * Adding get service info endpoint without any authentication
 */
RestBusiness.get(Endpoints.ENDPOINT_BASE_URL, async (request, response) => {
    let executionStartTime = null; let executionEndTime = null;
    try {
        executionStartTime = await Commons.getCurrentDateTime();
        console.log(`GET SERVICE INFO API EXECUTION STARTS AT (${executionStartTime})`);

        const output = ({
            serviceName: Config.SERVICE_NAME,
            serviceHost: Config.SERVICE_HOST,
            servicePort: Config.SERVICE_PORT,
            // eslint-disable-next-line no-undef
            serviceUpTime: `${process.uptime()} sec(s)`
        });
        response.json(output);

        executionEndTime = await Commons.getCurrentDateTime();
        console.info({
            requestURL: request.originalUrl,
            requestHeaders: request.headers,
            requestBody: request.body,
            responseBody: output,
            executionStartTime: executionStartTime,
            executionEndTime: executionEndTime
        });
        console.log(`GET SERVICE INFO API EXECUTION ENDS AT (${executionEndTime})`);
    }
    catch (error) {
        executionEndTime = await Commons.getCurrentDateTime();
        console.error({
            requestURL: request.originalUrl,
            requestMethod: request.method,
            requestHeaders: request.headers,
            requestBody: request.body,
            responseBody: error,
            executionStartTime: executionStartTime,
            executionEndTime: executionEndTime
        });
    }
});

/**
 * Adding basic authentication middleware based on configuration
 */
RestBusiness.use(basicAuth({ users: { [Config.SERVICE_AUTH.AUTH_USERNAME]: Config.SERVICE_AUTH.AUTH_PASSWORD }, unauthorizedResponse: Commons.getUnauthorizedResponse }));

/* Importing all the controller classes */
const invoiceControllerVersionOne = require("./src/controllers/version-one/invoice.controller");
const customerControllerVersionOne = require("./src/controllers/version-one/customer.controller")
const priceListControllerVersionOne = require("./src/controllers/version-one/pricelist.controller")
const storeControllerVersionOne = require("./src/controllers/version-one/store.controller")
const categoryControllerVersionOne = require("./src/controllers/version-one/category.controller")
const productControllerVersionOne = require("./src/controllers/version-one/product.controller")

/* Inject the endpoints to the respective controller modules */
RestBusiness.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_INVOICE + Endpoints.ENDPOINT_VERSION_1, invoiceControllerVersionOne)
RestBusiness.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_CUSTOMER + Endpoints.ENDPOINT_VERSION_1, customerControllerVersionOne)
RestBusiness.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PRICELIST + Endpoints.ENDPOINT_VERSION_1, priceListControllerVersionOne)
RestBusiness.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_STORE + Endpoints.ENDPOINT_VERSION_1, storeControllerVersionOne  )
RestBusiness.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_CATEGORY + Endpoints.ENDPOINT_VERSION_1, categoryControllerVersionOne  )
RestBusiness.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PRODUCT + Endpoints.ENDPOINT_VERSION_1, productControllerVersionOne  )

module.exports = RestBusiness;

