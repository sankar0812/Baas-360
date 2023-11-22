/**
* CreatedBy    : Ayerathammal
* CreatedTime  : Oct 08 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : Oct 18 2023
* Description  : This file is the entry point for the service
**/

module.exports = class endpoints {

	// Auth endpoint of the REST service
	ENDPOINT_BASE_URL = "/api/rest/accounts/business";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_MODULES */
	ENDPOINT_MODULE_INVOICE = "/1.0.0/invoice"
	ENDPOINT_MODULE_CUSTOMER = "/1.0.0/customer"
	ENDPOINT_MODULE_PRICELIST = "/1.0.0/pricelist"
	ENDPOINT_MODULE_STORE = "/1.0.0/store"

	ENDPOINT_MODULE_CATEGORY = "/1.0.0/category"
	ENDPOINT_MODULE_PRODUCT = "/1.0.0/product"

	// Endpoint versions for the REST Service
	ENDPOINT_VERSION_1 = "/v1";
	ENDPOINT_VERSION_2 = "/v2";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_FUNCTIONALIES */
	// Invoice Module
	ENDPOINT_API_DOWNLOAD = "/download";
	ENDPOINT_API_ADD_INVOICE = "/add";
	ENDPOINT_API_GENERATE_NUMBER = "/generatenumber"
	ENDPOINT_API_INVOICE_STATUS_OPEN = "/changetoopen"
	ENDPOINT_API_INVOICE_STATUS_VOID = "/changetovoid"

	// Customer Module
	ENDPOINT_API_GET_PRICE_LIST_ITEMS = "/getpricelist"
	ENDPOINT_API_ADD_CUSTOMER_ACCOUNT = "/addcustomeraccount"
	ENDPOINT_API_PAYMENT = "/addpayment"
	ENDPOINT_API_CUSTOMER_ADD_PRICELIST = "/addpricelist"

	// PriceList Module
	ENDPOINT_API_ADD_PRICE_LIST = "/add"
	ENDPOINT_API_CHANGE_PRICE_LIST = "/change"
	ENDPOINT_API_PRICELIST_STATUS_CHANGE = "/statuschange"
	ENDPOINT_API_PRICELIST_ADD_PRODUCT = "/addproduct"
	ENDPOINT_API_PRICELIST_REMOVE_PRODUCT = "/removeproduct"



	// Store Module
	ENDPOINT_API_ADD_STORE = "/add"
	ENDPOINT_API_CHANGE_STORE = "/change"
	ENDPOINT_API_STORE_ADD_PRICELIST = "/addpricelist"
	ENDPOINT_API_STORE_REMOVE_PRICELIST = "/removepricelist"
	ENDPOINT_API_STORE_CHANGE_EFFECTIVE_DATE = "/changeeffectivedate"
	ENDPOINT_API_STORE_ENABLE = "/enable"

	//Category Module
	ENDPOINT_API_ADD_CATEGORY = "/add";
	ENDPOINT_API_CHANGE_CATEGORY = "/change";
	ENDPOINT_API_ADD_ROOT_CATEGORY = "/addrootcategory";

	//Product Module
	ENDPOINT_API_ADD_PRODUCT_CATEGORY = "/addcategory"
	ENDPOINT_API_REMOVE_PRODUCT = "/removeproduct"
	ENDPOINT_API_GET_PRICE_LIST = "/getpricelist"
	ENDPOINT_API_ADD_PRODUCT = "/add"
	ENDPOINT_API_ADD_PACKAGE = "/addpackage"
	ENDPOINT_API_ADD_BULK_DISCOUNT = "/addblukdiscount"
	ENDPOINT_API_UPDATE_PRODUCT = "/update"
	ENDPOINT_API_CHANGE_PRODUCT_PACKAGE = "/changepackage"
	ENDPOINT_API_PRODUCT_ENABLE_AVAILABLITY = "/enableavailability"
	ENDPOINT_API_PRODUCT_DISABLE_AVAILABLITY = "/disableavailability"
	ENDPOINT_API_REMOVE_PRODUCT_PACKAGE = "/removepackage"
	ENDPOINT_API_CHANGE_PARENT_PRODUCT = "/changeparentproduct"
	ENDPOINT_API_REMOVE_PRODUCT_CATEGORY = "/removecategory"
	ENDPOINT_API_PRODUCT_ENABLE_SALE = "/enablesale"
	ENDPOINT_API_PRODUCT_DISABLE_SALE = "/disablesale"
	ENDPOINT_API_PRODUCT_ENABLE_PURCHASE = "/enablepurchase"
	ENDPOINT_API_PRODUCT_DISABLE_PURCHASE = "/disablepurchase"
	ENDPOINT_API_REMOVE_PRODUCT_BULK_DISCOUNT = "/removebulkdiscount"
	ENDPOINT_API_FILTER_PRODUCT = "/filter"

};