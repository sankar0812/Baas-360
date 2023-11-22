/**
* CreatedBy    : Dinesh
* CreatedTime  : July 29 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 06 2023
* Description : This file contains all messages for application
 */
module.exports = class messages {

	/**
	 * Common messages
	 */

	MEESAGE_DUPLICATE_IDENTIFIED = "GIVEN RECORDS DUPLICATED"

	MESSAGE_SERVICE_RUNNING_SUCESSFULLY = "Baas Accounts Rest Business is now running on";
	MESSAGE_AVAILABILITY_NOT_ENABLED = "Avaliability flag has not been enabled";
	MESSAGE_MISSING_REQUEST_HEADER = "Missing 'TenantKey' or 'MerchantKey' or 'AuthKey' or 'ContactPeronKey' or 'ApplicationKey' or 'IntanceKey' in the request headers";
	MESSAGE_INVALID_REQUEST_HEADERS = "'TenantKey' or 'MerchantKey' in the request headers is not valid";
	MESSAGE_BASIC_AUTH_FAILED = "Basic authentication failed, incorrect username or password";

	MESSAGE_INVOICE_INFO = "Fetched Information about Invoice for Download"
	MESSAGE_ADD_INVOICE = "Successfully added a New Invoice"
	MESSAGE_ADD_INVOICE_ITEM = "Successfully added a New Invoice Item"
	MEESAGE_CREATE_CUSTOMER_PAYMENT = "Customer Payment Created Successfully"
	MESSAGE_PRODUCT_INFO = "Successfully Fetched Product Information"
	MESSAGE_GENERATE_NUMBER = "Successfully Generate the Number"
	MESSAGE_ADD_CUSTOMER_ACCOUNT = "Successfully Added Customer Account and Customer Account Balance Data"
	MESSAGE_INVOICE_STATUS_OPEN = "Invoice Open Updated Successfully"

	// PRICELIST MODULE
	MESSAGE_ADD_PRICE_LIST = "Successfully Added data for Price List, Price List Item and Price List Item Bulk Discount"
	MESSAGE_ADD_PRICE_LIST_STATUS = "PriceList Status Updated Successfully"
	MESSAGE_CHANGE_PRICE_LIST = "Successfully Updated the PriceList Data"
	MESSAGE_PRICE_LIST_ADD_PRODUCT = "Product Added to the PriceList' has been added successfully"
	MESSAGE_PRICE_LIST_REMOVE_PRODUCT = "Remove Product from the PriceList has been updated successfully"
	MEESAGE_ADD_PRICELIST_CUSTOMER_ACCOUNT = "Pricelist Added For Customer Account"

	//CATEGORY MODULE
	MESSAGE_UPDATED_CATEGORY = "Category Modified Has Been Successfully"
	MESSAGE_UPDATED_ROOT_CATEGORY = "Root Category Modified Has Been Successfully"
	MEESAGE_PRODUCT_CATEGORY = "Product Category Added Successfully"
	MEESAGE_PRODUCT_CATEGORY_DUPLICATE = "Product Category Already Exists.."
	MEESAGE_CATEGORY_ADDED = "Category Added Successfully"
	MEESAGE_CATEGORY_EMPTY_DATA = "Data Is Not Available In Given Filter"

	// PRODUCT MODULE
	MESSAGE_ADD_PRODUCT_PACKAGE = "Successfully Added Product Package"
	MESSAGE_ADD_BULK_DISCOUNT = "Scccessfully Added Product Bulk Discount"
	MESSAGE_ADD_PRODUCT = "Successfully Added the Product"
	MESSAGE_UPDATE_PRODUCT = "Successfully Updated the Product"
	MESSAGE_UPDATE_PRODUCT_SALE = "Successfully Updated the Product sales"
	MESSAGE_UPDATE_PRODUCT_PACKAGE = "Successfully Updated the Product Package"
	MESSAGE_UPDATE_PRODUCT_AVAILABLE = "Product Has Been Enabled"
	MESSAGE_UPDATE_PRODUCT_DISABLE = "Product Has Been Disabled"
	MESSAGE_INVALID_PRODUCT_PACKAGE_AVAILABLE = "Product Not Available In ProductPackage"
	MESSAGE_INVALID_PRODUCT_CATEGORY_AVAILABLE = "Product Not Available In ProductCategory"
	MESSAGE_INVALID_PRODUCT_AVAILABLE = "Product Not Available In Product"
	MESSAGE_INVALID_PRODUCT_AVAILABLE_UPC = "UPC And SKU Not Available In Product"
	MESSAGE_INVALID_PRODUCT_PRICELIST_AVAILABLE = "Product Not Available In PriceListItem"
	MESSGE_INVALID_PRODUCT_PRICELIST_STATUS = "Cannot Remove Product. Product Configured in PriceList"
	MESSAGE_UPDATE_PRODUCT_CATEGORY = "Successfully Updated the Product Category"
	MESSAGE_UPDATE_PRODUCT_PURCHASE = "Successfully Updated the Product Purchase"
	MESSAGE_UPDATE_PRODUCT_BULK_DISCOUNT = "Successfully Updated the Product Bulk Discount"
	MEESAGE_PRODUCT_ADVANCED_FILTER = "Filter Has Been Successfully"
	MESSAGE_DUPLICATE_PRODUCT = "Product is Not Found"

	//STORE MODULE
	MESSAGE_ADD_STORE = "Successfully Added the Store"
	MESSAGE_STORE_ADD_PRICELIST = "Successfully Added The Pricelist"
	MESSAGE_STORE_REMOVE_PRICELIST = "Successfully Removed The Pricelist"
	MESSAGE_STORE_ENABLE = "Successfully Update the Store Enabled"


}