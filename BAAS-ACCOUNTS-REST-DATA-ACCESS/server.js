/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 23 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 11 2023
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
const RestDataAccess = express();
const Config = new config();
const Commons = new commons();
const Endpoints = new endpoints();

/**
 * Adding middlewares to the express object
 */
RestDataAccess.use(cors());
RestDataAccess.use(compression());
RestDataAccess.use(express.json());

/**
 * Adding get service info endpoint without any authentication
 */
RestDataAccess.get(Endpoints.ENDPOINT_BASE_URL, async (request, response) => {
    let executionStartTime = null; let executionEndTime = null;
    try {
        executionStartTime = await Commons.getCurrentDateTime();
        console.log(`GET SERVICE INFO API EXECUTION STARTS AT (${executionStartTime})`);

        const output = ({
            serviceName: Config.ACCOUNTS_REST_DATA_ACCESS_NAME,
            serviceHost: Config.ACCOUNTS_REST_DATA_ACCESS_HOST,
            servicePort: Config.ACCOUNTS_REST_DATA_ACCESS_PORT,
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
RestDataAccess.use(basicAuth({ users: { [Config.ACCOUNTS_REST_DATA_ACCESS_USERNAME]: Config.ACCOUNTS_REST_DATA_ACCESS_PASSWORD }, unauthorizedResponse: Commons.getUnauthorizedResponse }));

/* Importing all the controller classes (INJECTED USING CODE GENERATOR) */
const VendorControllerVersionOne = require("./src/controllers/version-one/vendor.controller");
const StoreControllerVersionOne = require("./src/controllers/version-one/store.controller");
const RoleControllerVersionOne = require("./src/controllers/version-one/role.controller");
const QuoteControllerVersionOne = require("./src/controllers/version-one/quote.controller");
const ProposalControllerVersionOne = require("./src/controllers/version-one/proposal.controller");
const ProjectControllerVersionOne = require("./src/controllers/version-one/project.controller");
const ProductControllerVersionOne = require("./src/controllers/version-one/product.controller");
const PriceListControllerVersionOne = require("./src/controllers/version-one/pricelist.controller");
const PayRollControllerVersionOne = require("./src/controllers/version-one/payroll.controller");
const PaymentControllerVersionOne = require("./src/controllers/version-one/payment.controller");
const PackageControllerVersionOne = require("./src/controllers/version-one/package.controller");
const AuthControllerVersionOne = require("./src/controllers/version-one/auth.controller");
const ContactControllerVersionOne = require("./src/controllers/version-one/contact.controller");
const TenantControllerVersionOne = require("./src/controllers/version-one/tenant.controller");
const ManufacturerControllerVersionOne = require("./src/controllers/version-one/manufacturer.controller");
const MerchantControllerVersionOne = require("./src/controllers/version-one/merchant.controller");
const InvoiceControllerVersionOne = require("./src/controllers/version-one/invoice.controller");
const GroupControllerVersionOne = require("./src/controllers/version-one/group.controller");
const LocationControllerVersionOne = require("./src/controllers/version-one/location.controller");
const DepartmentControllerVersionOne = require("./src/controllers/version-one/department.controller");
const EmployeeControllerVersionOne = require("./src/controllers/version-one/employee.controller");
const CurrencyControllerVersionOne = require("./src/controllers/version-one/currency.controller");
const CustomerControllerVersionOne = require("./src/controllers/version-one/customer.controller");
const CostControllerVersionOne = require("./src/controllers/version-one/cost.controller");
const CategoryControllerVersionOne = require("./src/controllers/version-one/category.controller");
const BrandControllerVersionOne = require("./src/controllers/version-one/brand.controller");
const BankControllerVersionOne = require("./src/controllers/version-one/bank.controller");
const AssetControllerVersionOne = require("./src/controllers/version-one/asset.controller");
const ApprovalControllerVersionOne = require("./src/controllers/version-one/approval.controller");
const AppSettingControllerVersionOne = require("./src/controllers/version-one/appsetting.controller");



/* Inject the endpoints to the respective controller modules */
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_VENDOR + Endpoints.ENDPOINT_VERSION_1, VendorControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_STORE + Endpoints.ENDPOINT_VERSION_1, StoreControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_ROLE + Endpoints.ENDPOINT_VERSION_1, RoleControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_QUOTE + Endpoints.ENDPOINT_VERSION_1, QuoteControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PROPOSAL + Endpoints.ENDPOINT_VERSION_1, ProposalControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PROJECT + Endpoints.ENDPOINT_VERSION_1, ProjectControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PRODUCT + Endpoints.ENDPOINT_VERSION_1, ProductControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PRICELIST + Endpoints.ENDPOINT_VERSION_1, PriceListControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PAYROLL + Endpoints.ENDPOINT_VERSION_1, PayRollControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PAYMENT + Endpoints.ENDPOINT_VERSION_1, PaymentControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PACKAGE + Endpoints.ENDPOINT_VERSION_1, PackageControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_AUTH + Endpoints.ENDPOINT_VERSION_1, AuthControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_CONTACT + Endpoints.ENDPOINT_VERSION_1, ContactControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_TENANT + Endpoints.ENDPOINT_VERSION_1, TenantControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_MANUFACTURER + Endpoints.ENDPOINT_VERSION_1, ManufacturerControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_MERCHANT + Endpoints.ENDPOINT_VERSION_1, MerchantControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_INVOICE + Endpoints.ENDPOINT_VERSION_1, InvoiceControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_GROUP + Endpoints.ENDPOINT_VERSION_1, GroupControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_LOCATION + Endpoints.ENDPOINT_VERSION_1, LocationControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_DEPARTMENT + Endpoints.ENDPOINT_VERSION_1, DepartmentControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_EMPLOYEE + Endpoints.ENDPOINT_VERSION_1, EmployeeControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_CURRENCY + Endpoints.ENDPOINT_VERSION_1, CurrencyControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_CUSTOMER + Endpoints.ENDPOINT_VERSION_1, CustomerControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_COST + Endpoints.ENDPOINT_VERSION_1, CostControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_CATEGORY + Endpoints.ENDPOINT_VERSION_1, CategoryControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_BRAND + Endpoints.ENDPOINT_VERSION_1, BrandControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_BANK + Endpoints.ENDPOINT_VERSION_1, BankControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_ASSET + Endpoints.ENDPOINT_VERSION_1, AssetControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_APPROVAL + Endpoints.ENDPOINT_VERSION_1, ApprovalControllerVersionOne); 
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_APPSETTING + Endpoints.ENDPOINT_VERSION_1, AppSettingControllerVersionOne); 

module.exports = RestDataAccess;