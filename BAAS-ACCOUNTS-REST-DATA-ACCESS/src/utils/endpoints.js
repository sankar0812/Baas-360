/**
* CreatedBy   : Dinesh
* CreatedTime : 07 Jan 2022
* ModifiedBy  : Dinesh
* ModifiedDate: 12 Jan 2023
* Description : This file contains all endpoints for application
 */

module.exports = class 	endpoints {

	//Common Endpoints
	ENDPOINT_METRICS = "/metrics"

	// Accounts endpoint of the REST service
	ENDPOINT_BASE_URL = "/api/rest/accounts/dataaccess";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_MODULES */
	ENDPOINT_MODULE_VENDOR = "/1.0.0/vendor"
	ENDPOINT_MODULE_STORE = "/1.0.0/store"
	ENDPOINT_MODULE_ROLE = "/1.0.0/role"
	ENDPOINT_MODULE_QUOTE = "/1.0.0/quote"
	ENDPOINT_MODULE_PROPOSAL = "/1.0.0/proposal"
	ENDPOINT_MODULE_PROJECT = "/1.0.0/project"
	ENDPOINT_MODULE_PRODUCT = "/1.0.0/product"
	ENDPOINT_MODULE_PRICELIST = "/1.0.0/pricelist"
	ENDPOINT_MODULE_PAYROLL = "/1.0.0/payroll"
	ENDPOINT_MODULE_PAYMENT = "/1.0.0/payment"
	ENDPOINT_MODULE_PACKAGE = "/1.0.0/package"
	ENDPOINT_MODULE_AUTH = "/1.0.0/auth"
	ENDPOINT_MODULE_CONTACT = "/1.0.0/contact"
	ENDPOINT_MODULE_TENANT = "/1.0.0/tenant"
	ENDPOINT_MODULE_MANUFACTURER = "/1.0.0/manufacturer"
	ENDPOINT_MODULE_MERCHANT = "/1.0.0/merchant"
	ENDPOINT_MODULE_INVOICE = "/1.0.0/invoice"
	ENDPOINT_MODULE_GROUP = "/1.0.0/group"
	ENDPOINT_MODULE_LOCATION = "/1.0.0/location"
	ENDPOINT_MODULE_DEPARTMENT = "/1.0.0/department"
	ENDPOINT_MODULE_EMPLOYEE = "/1.0.0/employee"
	ENDPOINT_MODULE_CURRENCY = "/1.0.0/currency"
	ENDPOINT_MODULE_CUSTOMER = "/1.0.0/customer"
	ENDPOINT_MODULE_COST = "/1.0.0/cost"
	ENDPOINT_MODULE_CATEGORY = "/1.0.0/category"
	ENDPOINT_MODULE_BRAND = "/1.0.0/brand"
	ENDPOINT_MODULE_BANK = "/1.0.0/bank"
	ENDPOINT_MODULE_ASSET = "/1.0.0/asset"
	ENDPOINT_MODULE_APPROVAL = "/1.0.0/approval"
	ENDPOINT_MODULE_APPSETTING = "/1.0.0/appsetting"

	// Endpoint versions for the REST Service
	ENDPOINT_VERSION_1 = "/v1";
	ENDPOINT_VERSION_2 = "/v2";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_TABLES */

	ENDPOINT_VENDOR_TRANSACTION_TYPE = "/vendortransactiontype";
	ENDPOINT_VENDOR_TRANSACTION_TYPES = "/vendortransactiontypes";
	ENDPOINT_ONE_VENDOR_TRANSACTION_TYPE = "/vendortransactiontype/:vendortransactiontypeid";

	ENDPOINT_VENDOR_STATEMENT = "/vendorstatement";
	ENDPOINT_VENDOR_STATEMENTS = "/vendorstatements";
	ENDPOINT_ONE_VENDOR_STATEMENT = "/vendorstatement/:vendorstatementid";

	ENDPOINT_VENDOR_PRODUCT = "/vendorproduct";
	ENDPOINT_VENDOR_PRODUCTS = "/vendorproducts";
	ENDPOINT_ONE_VENDOR_PRODUCT = "/vendorproduct/:vendorproductid";

	ENDPOINT_VENDOR_PAYMENT_LOG = "/vendorpaymentlog";
	ENDPOINT_VENDOR_PAYMENT_LOGS = "/vendorpaymentlogs";
	ENDPOINT_ONE_VENDOR_PAYMENT_LOG = "/vendorpaymentlog/:vendorpaymentlogid";

	ENDPOINT_VENDOR_PAYMENT_ITEM = "/vendorpaymentitem";
	ENDPOINT_VENDOR_PAYMENT_ITEMS = "/vendorpaymentitems";
	ENDPOINT_ONE_VENDOR_PAYMENT_ITEM = "/vendorpaymentitem/:vendorpaymentitemid";

	ENDPOINT_VENDOR_PAYMENT = "/vendorpayment";
	ENDPOINT_VENDOR_PAYMENTS = "/vendorpayments";
	ENDPOINT_ONE_VENDOR_PAYMENT = "/vendorpayment/:vendorpaymentid";

	ENDPOINT_VENDOR_EXPENSE = "/vendorexpense";
	ENDPOINT_VENDOR_EXPENSES = "/vendorexpenses";
	ENDPOINT_ONE_VENDOR_EXPENSE = "/vendorexpense/:vendorexpenseid";

	ENDPOINT_VENDOR_CATEGORY = "/vendorcategory";
	ENDPOINT_VENDOR_CATEGORIES = "/vendorcategories";
	ENDPOINT_ONE_VENDOR_CATEGORY = "/vendorcategory/:vendorcategoryid";

	ENDPOINT_VENDOR_BILL_ITEM = "/vendorbillitem";
	ENDPOINT_VENDOR_BILL_ITEMS = "/vendorbillitems";
	ENDPOINT_ONE_VENDOR_BILL_ITEM = "/vendorbillitem/:vendorbillitemid";

	ENDPOINT_VENDOR_BILL = "/vendorbill";
	ENDPOINT_VENDOR_BILLS = "/vendorbills";
	ENDPOINT_ONE_VENDOR_BILL = "/vendorbill/:vendorbillid";

	ENDPOINT_VENDOR_APPROVAL_ITEM = "/vendorapprovalitem";
	ENDPOINT_VENDOR_APPROVAL_ITEMS = "/vendorapprovalitems";
	ENDPOINT_ONE_VENDOR_APPROVAL_ITEM = "/vendorapprovalitem/:vendorapprovalitemid";

	ENDPOINT_VENDOR_APPROVAL = "/vendorapproval";
	ENDPOINT_VENDOR_APPROVALS = "/vendorapprovals";
	ENDPOINT_ONE_VENDOR_APPROVAL = "/vendorapproval/:vendorapprovalid";

	ENDPOINT_VENDOR_ACCOUNT_BALANCE = "/vendoraccountbalance";
	ENDPOINT_VENDOR_ACCOUNT_BALANCES = "/vendoraccountbalances";
	ENDPOINT_ONE_VENDOR_ACCOUNT_BALANCE = "/vendoraccountbalance/:vendoraccountbalanceid";

	ENDPOINT_VENDOR_ACCOUNT = "/vendoraccount";
	ENDPOINT_VENDOR_ACCOUNTS = "/vendoraccounts";
	ENDPOINT_ONE_VENDOR_ACCOUNT = "/vendoraccount/:vendoraccountid";

	ENDPOINT_VENDOR = "/vendor";
	ENDPOINT_VENDORS = "/vendors";
	ENDPOINT_ONE_VENDOR = "/vendor/:vendorid";

	ENDPOINT_STORE_TYPE = "/storetype";
	ENDPOINT_STORE_TYPES = "/storetypes";
	ENDPOINT_ONE_STORE_TYPE = "/storetype/:storetypeid";

	ENDPOINT_STORE = "/store";
	ENDPOINT_STORES = "/stores";
	ENDPOINT_ONE_STORE = "/store/:storeid";

	ENDPOINT_ROLE = "/role";
	ENDPOINT_ROLES = "/roles";
	ENDPOINT_ONE_ROLE = "/role/:roleid";

	ENDPOINT_QUOTE_ITEM = "/quoteitem";
	ENDPOINT_QUOTE_ITEMS = "/quoteitems";
	ENDPOINT_ONE_QUOTE_ITEM = "/quoteitem/:quoteitemid";

	ENDPOINT_QUOTE = "/quote";
	ENDPOINT_QUOTES = "/quotes";
	ENDPOINT_ONE_QUOTE = "/quote/:quoteid";

	ENDPOINT_PROPOSAL_VENDOR_PRODUCT = "/proposalvendorproduct";
	ENDPOINT_PROPOSAL_VENDOR_PRODUCTS = "/proposalvendorproducts";
	ENDPOINT_ONE_PROPOSAL_VENDOR_PRODUCT = "/proposalvendorproduct/:proposalvendorproductid";

	ENDPOINT_PROPOSAL_ITEM_PARAM = "/proposalitemparam";
	ENDPOINT_PROPOSAL_ITEM_PARAMS = "/proposalitemparams";
	ENDPOINT_ONE_PROPOSAL_ITEM_PARAM = "/proposalitemparam/:proposalitemparamid";

	ENDPOINT_PROPOSAL_ITEM = "/proposalitem";
	ENDPOINT_PROPOSAL_ITEMS = "/proposalitems";
	ENDPOINT_ONE_PROPOSAL_ITEM = "/proposalitem/:proposalitemid";

	ENDPOINT_PROPOSAL = "/proposal";
	ENDPOINT_PROPOSALS = "/proposals";
	ENDPOINT_ONE_PROPOSAL = "/proposal/:proposalid";

	ENDPOINT_PROJECT_TYPE = "/projecttype";
	ENDPOINT_PROJECT_TYPES = "/projecttypes";
	ENDPOINT_ONE_PROJECT_TYPE = "/projecttype/:projecttypeid";

	ENDPOINT_PROJECT = "/project";
	ENDPOINT_PROJECTS = "/projects";
	ENDPOINT_ONE_PROJECT = "/project/:projectid";

	ENDPOINT_PRODUCT_PACKAGE = "/productpackage";
	ENDPOINT_PRODUCT_PACKAGES = "/productpackages";
	ENDPOINT_ONE_PRODUCT_PACKAGE = "/productpackage/:productpackageid";

	ENDPOINT_PRODUCT_BULK_DISCOUNT = "/productbulkdiscount";
	ENDPOINT_PRODUCT_BULK_DISCOUNTS = "/productbulkdiscounts";
	ENDPOINT_ONE_PRODUCT_BULK_DISCOUNT = "/productbulkdiscount/:productbulkdiscountid";

	ENDPOINT_PRODUCT_BUNDLE = "/productbundle";
	ENDPOINT_PRODUCT_BUNDLES = "/productbundles";
	ENDPOINT_ONE_PRODUCT_BUNDLE = "/productbundle/:productbundleid";

	ENDPOINT_PRODUCT_CATEGORY = "/productcategory";
	ENDPOINT_PRODUCT_CATEGORYS = "/productcategorys";
	ENDPOINT_ONE_PRODUCT_CATEGORY = "/productcategory/:productcategoryid";

	ENDPOINT_PRODUCT_IMAGE = "/productimage";
	ENDPOINT_PRODUCT_IMAGES = "/productimages";
	ENDPOINT_ONE_PRODUCT_IMAGE = "/productimage/:productimageid";

	ENDPOINT_PRODUCT_PRICE = "/productprice";
	ENDPOINT_PRODUCT_PRICES = "/productprices";
	ENDPOINT_ONE_PRODUCT_PRICE = "/productprice/:productpriceid";

	ENDPOINT_PRODUCT_PARAM = "/productparam";
	ENDPOINT_PRODUCT_PARAMS = "/productparams";
	ENDPOINT_ONE_PRODUCT_PARAM = "/productparam/:productparamid";

	ENDPOINT_PRODUCT = "/product";
	ENDPOINT_PRODUCTS = "/products";
	ENDPOINT_ONE_PRODUCT = "/product/:productid";

	ENDPOINT_PRICE_LIST_STATUS = "/priceliststatus";
	ENDPOINT_PRICE_LIST_STATUSES = "/priceliststatuses";
	ENDPOINT_ONE_PRICE_LIST_STATUS = "/priceliststatus/:priceliststatusid";

	ENDPOINT_PRICE_LIST_STORE = "/priceliststore";
	ENDPOINT_PRICE_LIST_STORES = "/priceliststores";
	ENDPOINT_ONE_PRICE_LIST_STORE = "/priceliststore/:priceliststoreid";

	ENDPOINT_PRICE_LIST_CUSTOMER_ACCOUNT = "/pricelistcustomeraccount";
	ENDPOINT_PRICE_LIST_CUSTOMER_ACCOUNTS = "/pricelistcustomeraccounts";
	ENDPOINT_ONE_PRICE_LIST_CUSTOMER_ACCOUNT = "/pricelistcustomeraccount/:pricelistcustomeraccountid";

	ENDPOINT_PRICE_LIST_ITEM_BULK_DISCOUNT = "/pricelistitembulkdiscount";
	ENDPOINT_PRICE_LIST_ITEM_BULK_DISCOUNTS = "/pricelistitembulkdiscounts";
	ENDPOINT_ONE_PRICE_LIST_ITEM_BULK_DISCOUNT = "/pricelistitembulkdiscount/:pricelistitembulkdiscountid";

	ENDPOINT_PRICE_LIST_ITEM = "/pricelistitem";
	ENDPOINT_PRICE_LIST_ITEMS = "/pricelistitems";
	ENDPOINT_ONE_PRICE_LIST_ITEM = "/pricelistitem/:pricelistitemid";

	ENDPOINT_PRICE_LIST = "/pricelist";
	ENDPOINT_PRICE_LISTS = "/pricelists";
	ENDPOINT_ONE_PRICE_LIST = "/pricelist/:pricelistid";

	ENDPOINT_PAYROLL_BATCH_ITEM = "/payrollbatchitem";
	ENDPOINT_PAYROLL_BATCH_ITEMS = "/payrollbatchitems";
	ENDPOINT_ONE_PAYROLL_BATCH_ITEM = "/payrollbatchitem/:payrollbatchitemid";

	ENDPOINT_PAYROLL_BATCH = "/payrollbatch";
	ENDPOINT_PAYROLL_BATCHS = "/payrollbatchs";
	ENDPOINT_ONE_PAYROLL_BATCH = "/payrollbatch/:payrollbatchid";

	ENDPOINT_PAYMENT_STATUS = "/paymentstatus";
	ENDPOINT_PAYMENT_STATUSES = "/paymentstatuses";
	ENDPOINT_ONE_PAYMENT_STATUS = "/paymentstatus/:paymentstatusid";

	ENDPOINT_PAYMENT_METHOD = "/paymentmethod";
	ENDPOINT_PAYMENT_METHODS = "/paymentmethods";
	ENDPOINT_ONE_PAYMENT_METHOD = "/paymentmethod/:paymentmethodid";

	ENDPOINT_PACKAGE_TYPE = "/packagetype";
	ENDPOINT_PACKAGE_TYPES = "/packagetypes";
	ENDPOINT_ONE_PACKAGE_TYPE = "/packagetype/:packagetypeid";

	ENDPOINT_AUTH = "/auth";
	ENDPOINT_AUTHS = "/auths";
	ENDPOINT_ONE_AUTH = "/auth/:authid";

	ENDPOINT_VENDOR_TENANT_CONTACT = "/vendortenantcontact";
	ENDPOINT_VENDOR_TENANT_CONTACTS = "/vendortenantcontacts";
	ENDPOINT_ONE_VENDOR_TENANT_CONTACT = "/vendortenantcontact/:vendortenantcontactid";

	ENDPOINT_VENDOR_CONTACT = "/vendorcontact";
	ENDPOINT_VENDOR_CONTACTS = "/vendorcontacts";
	ENDPOINT_ONE_VENDOR_CONTACT = "/vendorcontact/:vendorcontactid";

	ENDPOINT_TENANT_CONTACT = "/tenantcontact";
	ENDPOINT_TENANT_CONTACTS = "/tenantcontacts";
	ENDPOINT_ONE_TENANT_CONTACT = "/tenantcontact/:tenantcontactid";

	ENDPOINT_CUSTOMER_TENANT_CONTACT = "/customertenantcontact";
	ENDPOINT_CUSTOMER_TENANT_CONTACTS = "/customertenantcontacts";
	ENDPOINT_ONE_CUSTOMER_TENANT_CONTACT = "/customertenantcontact/:customertenantcontactid";

	ENDPOINT_CUSTOMER_CONTACT = "/customercontact";
	ENDPOINT_CUSTOMER_CONTACTS = "/customercontacts";
	ENDPOINT_ONE_CUSTOMER_CONTACT = "/customercontact/:customercontactid";

	ENDPOINT_CONTACT_PERSON = "/contactperson";
	ENDPOINT_CONTACT_PERSONS = "/contactpersons";
	ENDPOINT_ONE_CONTACT_PERSON = "/contactperson/:contactpersonid";

	ENDPOINT_CONTACT = "/contact";
	ENDPOINT_CONTACTS = "/contacts";
	ENDPOINT_ONE_CONTACT = "/contact/:contactid";

	ENDPOINT_TENANT = "/tenant";
	ENDPOINT_TENANTS = "/tenants";
	ENDPOINT_ONE_TENANT = "/tenant/:tenantid";

	ENDPOINT_MANUFACTURER = "/manufacturer";
	ENDPOINT_MANUFACTURERS = "/manufacturers";
	ENDPOINT_ONE_MANUFACTURER = "/manufacturer/:manufacturerid";

	ENDPOINT_MERCHANT = "/merchant";
	ENDPOINT_MERCHANTS = "/merchants";
	ENDPOINT_ONE_MERCHANT = "/merchant/:merchantid";

	ENDPOINT_INVOICE_STATUS = "/invoicestatus";
	ENDPOINT_INVOICE_STATUSES = "/invoicestatuses";
	ENDPOINT_ONE_INVOICE_STATUS = "/invoicestatus/:invoicestatusid";

	ENDPOINT_INVOICE_ITEM = "/invoiceitem";
	ENDPOINT_INVOICE_ITEMS = "/invoiceitems";
	ENDPOINT_ONE_INVOICE_ITEM = "/invoiceitem/:invoiceitemid";

	ENDPOINT_INVOICE = "/invoice";
	ENDPOINT_INVOICES = "/invoices";
	ENDPOINT_ONE_INVOICE = "/invoice/:invoiceid";

	ENDPOINT_GROUP_USER = "/groupuser";
	ENDPOINT_GROUP_USERS = "/groupusers";
	ENDPOINT_ONE_GROUP_USER = "/groupuser/:groupuserid";

	ENDPOINT_GROUP_ROLE = "/grouprole";
	ENDPOINT_GROUP_ROLES = "/grouproles";
	ENDPOINT_ONE_GROUP_ROLE = "/grouprole/:grouproleid";

	ENDPOINT_GROUP = "/group";
	ENDPOINT_GROUPS = "/groups";
	ENDPOINT_ONE_GROUP = "/group/:groupid";

	ENDPOINT_LOCATION = "/location";
	ENDPOINT_LOCATIONS = "/locations";
	ENDPOINT_ONE_LOCATION = "/location/:locationid";

	ENDPOINT_DEPARTMENT = "/department";
	ENDPOINT_DEPARTMENTS = "/departments";
	ENDPOINT_ONE_DEPARTMENT = "/department/:departmentid";

	ENDPOINT_EMPLOYEE_PACKAGE_LOG = "/employeepackagelog";
	ENDPOINT_EMPLOYEE_PACKAGE_LOGS = "/employeepackagelogs";
	ENDPOINT_ONE_EMPLOYEE_PACKAGE_LOG = "/employeepackagelog/:employeepackagelogid";

	ENDPOINT_EMPLOYEE_PACKAGE = "/employeepackage";
	ENDPOINT_EMPLOYEE_PACKAGES = "/employeepackages";
	ENDPOINT_ONE_EMPLOYEE_PACKAGE = "/employeepackage/:employeepackageid";

	ENDPOINT_EMPLOYEE_TYPE = "/employeetype";
	ENDPOINT_EMPLOYEE_TYPES = "/employeetypes";
	ENDPOINT_ONE_EMPLOYEE_TYPE = "/employeetype/:employeetypeid";

	ENDPOINT_EMPLOYEE = "/employee";
	ENDPOINT_EMPLOYEES = "/employees";
	ENDPOINT_ONE_EMPLOYEE = "/employee/:employeeid";

	ENDPOINT_CURRENCY = "/currency";
	ENDPOINT_CURRENCYS = "/currencys";
	ENDPOINT_ONE_CURRENCY = "/currency/:currencyid";

	ENDPOINT_CUSTOMER_STATEMENT = "/customerstatement";
	ENDPOINT_CUSTOMER_STATEMENTS = "/customerstatements";
	ENDPOINT_ONE_CUSTOMER_STATEMENT = "/customerstatement/:customerstatementid";

	ENDPOINT_CUSTOMER_PRODUCT_USAGE_LOG = "/customerproductusagelog";
	ENDPOINT_CUSTOMER_PRODUCT_USAGE_LOGS = "/customerproductusagelogs";
	ENDPOINT_ONE_CUSTOMER_PRODUCT_USAGE_LOG = "/customerproductusagelog/:customerproductusagelogid";

	ENDPOINT_CUSTOMER_PRODUCT_USAGE = "/customerproductusage";
	ENDPOINT_CUSTOMER_PRODUCT_USAGES = "/customerproductusages";
	ENDPOINT_ONE_CUSTOMER_PRODUCT_USAGE = "/customerproductusage/:customerproductusageid";

	ENDPOINT_CUSTOMER_PAYMENT_ITEM = "/customerpaymentitem";
	ENDPOINT_CUSTOMER_PAYMENT_ITEMS = "/customerpaymentitems";
	ENDPOINT_ONE_CUSTOMER_PAYMENT_ITEM = "/customerpaymentitem/:customerpaymentitemid";

	ENDPOINT_CUSTOMER_PAYMENT = "/customerpayment";
	ENDPOINT_CUSTOMER_PAYMENTS = "/customerpayments";
	ENDPOINT_ONE_CUSTOMER_PAYMENT = "/customerpayment/:customerpaymentid";

	ENDPOINT_CUSTOMER_ACCOUNT_TRANSACTION = "/customeraccounttransaction";
	ENDPOINT_CUSTOMER_ACCOUNT_TRANSACTIONS = "/customeraccounttransactions";
	ENDPOINT_ONE_CUSTOMER_ACCOUNT_TRANSACTION = "/customeraccounttransaction/:customeraccounttransactionid";

	ENDPOINT_CUSTOMER_ACCOUNT_CARD = "/customeraccountcard";
	ENDPOINT_CUSTOMER_ACCOUNT_CARDS = "/customeraccountcards";
	ENDPOINT_ONE_CUSTOMER_ACCOUNT_CARD = "/customeraccountcard/:customeraccountcardid";

	ENDPOINT_CUSTOMER_ACCOUNT_BALANCE = "/customeraccountbalance";
	ENDPOINT_CUSTOMER_ACCOUNT_BALANCES = "/customeraccountbalances";
	ENDPOINT_ONE_CUSTOMER_ACCOUNT_BALANCE = "/customeraccountbalance/:customeraccountbalanceid";

	ENDPOINT_CUSTOMER_ACCOUNT = "/customeraccount";
	ENDPOINT_CUSTOMER_ACCOUNTS = "/customeraccounts";
	ENDPOINT_ONE_CUSTOMER_ACCOUNT = "/customeraccount/:customeraccountid";

	ENDPOINT_CUSTOMER = "/customer";
	ENDPOINT_CUSTOMERS = "/customers";
	ENDPOINT_ONE_CUSTOMER = "/customer/:customerid";

	ENDPOINT_COST_LIST_ITEM_BULK_DISCOUNT = "/costlistitembulkdiscount";
	ENDPOINT_COST_LIST_ITEM_BULK_DISCOUNTS = "/costlistitembulkdiscounts";
	ENDPOINT_ONE_COST_LIST_ITEM_BULK_DISCOUNT = "/costlistitembulkdiscount/:costlistitembulkdiscountid";

	ENDPOINT_COST_LIST_ITEM = "/costlistitem";
	ENDPOINT_COST_LIST_ITEMS = "/costlistitems";
	ENDPOINT_ONE_COST_LIST_ITEM = "/costlistitem/:costlistitemid";

	ENDPOINT_COST_LIST = "/costlist";
	ENDPOINT_COST_LISTS = "/costlists";
	ENDPOINT_ONE_COST_LIST = "/costlist/:costlistid";

	ENDPOINT_CATEGORY = "/category";
	ENDPOINT_CATEGORYS = "/categorys";
	ENDPOINT_ONE_CATEGORY = "/category/:categoryid";

	ENDPOINT_BRAND = "/brand";
	ENDPOINT_BRANDS = "/brands";
	ENDPOINT_ONE_BRAND = "/brand/:brandid";

	ENDPOINT_BANK_TRANSACTION_TYPE = "/banktransactiontype";
	ENDPOINT_BANK_TRANSACTION_TYPES = "/banktransactiontypes";
	ENDPOINT_ONE_BANK_TRANSACTION_TYPE = "/banktransactiontype/:banktransactiontypeid";

	ENDPOINT_BANK_TRANSACTION = "/banktransaction";
	ENDPOINT_BANK_TRANSACTIONS = "/banktransactions";
	ENDPOINT_ONE_BANK_TRANSACTION = "/banktransaction/:banktransactionid";

	ENDPOINT_BANK_ACCOUNT_USER = "/bankaccountuser";
	ENDPOINT_BANK_ACCOUNT_USERS = "/bankaccountusers";
	ENDPOINT_ONE_BANK_ACCOUNT_USER = "/bankaccountuser/:bankaccountuserid";

	ENDPOINT_BANK_ACCOUNT_BALANCE = "/bankaccountbalance";
	ENDPOINT_BANK_ACCOUNT_BALANCES = "/bankaccountbalances";
	ENDPOINT_ONE_BANK_ACCOUNT_BALANCE = "/bankaccountbalance/:bankaccountbalanceid";

	ENDPOINT_BANK_ACCOUNT = "/bankaccount";
	ENDPOINT_BANK_ACCOUNTS = "/bankaccounts";
	ENDPOINT_ONE_BANK_ACCOUNT = "/bankaccount/:bankaccountid";

	ENDPOINT_BANK = "/bank";
	ENDPOINT_BANKS = "/banks";
	ENDPOINT_ONE_BANK = "/bank/:bankid";

	ENDPOINT_ASSET_TYPE = "/assettype";
	ENDPOINT_ASSET_TYPES = "/assettypes";
	ENDPOINT_ONE_ASSET_TYPE = "/assettype/:assettypeid";

	ENDPOINT_ASSET_PRODUCT_PARAM = "/assetproductparam";
	ENDPOINT_ASSET_PRODUCT_PARAMS = "/assetproductparams";
	ENDPOINT_ONE_ASSET_PRODUCT_PARAM = "/assetproductparam/:assetproductparamid";

	ENDPOINT_ASSET_DEPRECIATION = "/assetdepreciation";
	ENDPOINT_ASSET_DEPRECIATIONS = "/assetdepreciations";
	ENDPOINT_ONE_ASSET_DEPRECIATION = "/assetdepreciation/:assetdepreciationid";

	ENDPOINT_ASSET_USAGE_TYPE = "/assetusagetype";
	ENDPOINT_ASSET_USAGE_TYPES = "/assetusagetypes";
	ENDPOINT_ONE_ASSET_USAGE_TYPE = "/assetusagetype/:assetusagetypeid";

	ENDPOINT_ASSET_USAGE = "/assetusage";
	ENDPOINT_ASSET_USAGES = "/assetusages";
	ENDPOINT_ONE_ASSET_USAGE = "/assetusage/:assetusageid";

	ENDPOINT_ASSET_CATEGORY = "/assetcategory";
	ENDPOINT_ASSET_CATEGORYS = "/assetcategorys";
	ENDPOINT_ONE_ASSET_CATEGORY = "/assetcategory/:assetcategoryid";

	ENDPOINT_ASSET_CLASS = "/assetclass";
	ENDPOINT_ASSET_CLASSES = "/assetclasses";
	ENDPOINT_ONE_ASSET_CLASS = "/assetclass/:assetclassid";

	ENDPOINT_ASSET = "/asset";
	ENDPOINT_ASSETS = "/assets";
	ENDPOINT_ONE_ASSET = "/asset/:assetid";

	ENDPOINT_APPROVAL_STATUS = "/approvalstatus";
	ENDPOINT_APPROVAL_STATUSES = "/approvalstatuses";
	ENDPOINT_ONE_APPROVAL_STATUS = "/approvalstatus/:approvalstatusid";

	ENDPOINT_APP_SETTING_UOM = "/appsettinguom";
	ENDPOINT_APP_SETTING_UOMS = "/appsettinguoms";
	ENDPOINT_ONE_APP_SETTING_UOM = "/appsettinguom/:appsettinguomid";

	ENDPOINT_APP_SETTING_UOM_TYPE = "/appsettinguomtype";
	ENDPOINT_APP_SETTING_UOM_TYPES = "/appsettinguomtypes";
	ENDPOINT_ONE_APP_SETTING_UOM_TYPE = "/appsettinguomtype/:appsettinguomtypeid";

	ENDPOINT_APP_SETTING_DATA_TYPE = "/appsettingdatatype";
	ENDPOINT_APP_SETTING_DATA_TYPES = "/appsettingdatatypes";
	ENDPOINT_ONE_APP_SETTING_DATA_TYPE = "/appsettingdatatype/:appsettingdatatypeid";

	ENDPOINT_APP_SETTING_NET_TERM = "/appsettingnetterm";
	ENDPOINT_APP_SETTING_NET_TERMS = "/appsettingnetterms";
	ENDPOINT_ONE_APP_SETTING_NET_TERM = "/appsettingnetterm/:appsettingnettermid";

	
};