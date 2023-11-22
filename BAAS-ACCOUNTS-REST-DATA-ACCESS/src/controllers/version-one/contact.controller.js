/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all contact module api
**/

/**
 *  Importing all the required modules
 */
const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Endpoints = new endpoints();


/* Importing all the services classes (INJECTED USING CODE GENERATOR) */
const createVendorTenantContactService = require("../../services/contact/create.vendortenantcontact.service");
const readVendorTenantContactService = require("../../services/contact/read.vendortenantcontact.service");
const readoneVendorTenantContactService = require("../../services/contact/read.vendortenantcontact.service");
const countVendorTenantContactService = require("../../services/contact/read.vendortenantcontact.service");
const updateVendorTenantContactService = require("../../services/contact/update.vendortenantcontact.service");
const deleteVendorTenantContactService = require("../../services/contact/delete.vendortenantcontact.service");
const createVendorContactService = require("../../services/contact/create.vendorcontact.service");
const readVendorContactService = require("../../services/contact/read.vendorcontact.service");
const readoneVendorContactService = require("../../services/contact/read.vendorcontact.service");
const countVendorContactService = require("../../services/contact/read.vendorcontact.service");
const updateVendorContactService = require("../../services/contact/update.vendorcontact.service");
const deleteVendorContactService = require("../../services/contact/delete.vendorcontact.service");
const createTenantContactService = require("../../services/contact/create.tenantcontact.service");
const readTenantContactService = require("../../services/contact/read.tenantcontact.service");
const readoneTenantContactService = require("../../services/contact/read.tenantcontact.service");
const countTenantContactService = require("../../services/contact/read.tenantcontact.service");
const updateTenantContactService = require("../../services/contact/update.tenantcontact.service");
const deleteTenantContactService = require("../../services/contact/delete.tenantcontact.service");
const createCustomerTenantContactService = require("../../services/contact/create.customertenantcontact.service");
const readCustomerTenantContactService = require("../../services/contact/read.customertenantcontact.service");
const readoneCustomerTenantContactService = require("../../services/contact/read.customertenantcontact.service");
const countCustomerTenantContactService = require("../../services/contact/read.customertenantcontact.service");
const updateCustomerTenantContactService = require("../../services/contact/update.customertenantcontact.service");
const deleteCustomerTenantContactService = require("../../services/contact/delete.customertenantcontact.service");
const createCustomerContactService = require("../../services/contact/create.customercontact.service");
const readCustomerContactService = require("../../services/contact/read.customercontact.service");
const readoneCustomerContactService = require("../../services/contact/read.customercontact.service");
const countCustomerContactService = require("../../services/contact/read.customercontact.service");
const updateCustomerContactService = require("../../services/contact/update.customercontact.service");
const deleteCustomerContactService = require("../../services/contact/delete.customercontact.service");
const createContactPersonService = require("../../services/contact/create.contactperson.service");
const readContactPersonService = require("../../services/contact/read.contactperson.service");
const readoneContactPersonService = require("../../services/contact/read.contactperson.service");
const countContactPersonService = require("../../services/contact/read.contactperson.service");
const updateContactPersonService = require("../../services/contact/update.contactperson.service");
const deleteContactPersonService = require("../../services/contact/delete.contactperson.service");
const createContactService = require("../../services/contact/create.contact.service");
const readContactService = require("../../services/contact/read.contact.service");
const readoneContactService = require("../../services/contact/read.contact.service");
const countContactService = require("../../services/contact/read.contact.service");
const updateContactService = require("../../services/contact/update.contact.service");
const deleteContactService = require("../../services/contact/delete.contact.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateVendorTenantContactService = new createVendorTenantContactService();
const ReadVendorTenantContactService = new readVendorTenantContactService();
const ReadoneVendorTenantContactService = new readoneVendorTenantContactService();
const CountVendorTenantContactService = new countVendorTenantContactService();
const UpdateVendorTenantContactService = new updateVendorTenantContactService();
const DeleteVendorTenantContactService = new deleteVendorTenantContactService();
const CreateVendorContactService = new createVendorContactService();
const ReadVendorContactService = new readVendorContactService();
const ReadoneVendorContactService = new readoneVendorContactService();
const CountVendorContactService = new countVendorContactService();
const UpdateVendorContactService = new updateVendorContactService();
const DeleteVendorContactService = new deleteVendorContactService();
const CreateTenantContactService = new createTenantContactService();
const ReadTenantContactService = new readTenantContactService();
const ReadoneTenantContactService = new readoneTenantContactService();
const CountTenantContactService = new countTenantContactService();
const UpdateTenantContactService = new updateTenantContactService();
const DeleteTenantContactService = new deleteTenantContactService();
const CreateCustomerTenantContactService = new createCustomerTenantContactService();
const ReadCustomerTenantContactService = new readCustomerTenantContactService();
const ReadoneCustomerTenantContactService = new readoneCustomerTenantContactService();
const CountCustomerTenantContactService = new countCustomerTenantContactService();
const UpdateCustomerTenantContactService = new updateCustomerTenantContactService();
const DeleteCustomerTenantContactService = new deleteCustomerTenantContactService();
const CreateCustomerContactService = new createCustomerContactService();
const ReadCustomerContactService = new readCustomerContactService();
const ReadoneCustomerContactService = new readoneCustomerContactService();
const CountCustomerContactService = new countCustomerContactService();
const UpdateCustomerContactService = new updateCustomerContactService();
const DeleteCustomerContactService = new deleteCustomerContactService();
const CreateContactPersonService = new createContactPersonService();
const ReadContactPersonService = new readContactPersonService();
const ReadoneContactPersonService = new readoneContactPersonService();
const CountContactPersonService = new countContactPersonService();
const UpdateContactPersonService = new updateContactPersonService();
const DeleteContactPersonService = new deleteContactPersonService();
const CreateContactService = new createContactService();
const ReadContactService = new readContactService();
const ReadoneContactService = new readoneContactService();
const CountContactService = new countContactService();
const UpdateContactService = new updateContactService();
const DeleteContactService = new deleteContactService();


/**
 * Initializing the controller object
 */
const ContactController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

ContactController.post(Endpoints.ENDPOINT_VENDOR_TENANT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortenantcontact.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorTenantContactService.createOneVendorTenantContact ) 
}); 

ContactController.post(Endpoints.ENDPOINT_VENDOR_TENANT_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortenantcontact.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorTenantContactService.readVendorTenantContacts ) 
});

ContactController.get(Endpoints.ENDPOINT_ONE_VENDOR_TENANT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortenantcontact.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorTenantContactService.readOneVendorTenantContact ) 
});

ContactController.post(Endpoints.ENDPOINT_VENDOR_TENANT_CONTACTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortenantcontact.count.v1"
    Commons.executeController(request, response, apiID, CountVendorTenantContactService.readVendorTenantContactCount ) 
});

ContactController.patch(Endpoints.ENDPOINT_VENDOR_TENANT_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortenantcontact.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorTenantContactService.updateVendorTenantContact ) 
});

ContactController.delete(Endpoints.ENDPOINT_ONE_VENDOR_TENANT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendortenantcontact.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorTenantContactService.deleteOneVendorTenantContact ) 
});


ContactController.post(Endpoints.ENDPOINT_VENDOR_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcontact.create.v1"
    Commons.executeController(request, response, apiID, CreateVendorContactService.createOneVendorContact ) 
}); 

ContactController.post(Endpoints.ENDPOINT_VENDOR_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcontact.read.v1"
    Commons.executeController(request, response, apiID, ReadVendorContactService.readVendorContacts ) 
});

ContactController.get(Endpoints.ENDPOINT_ONE_VENDOR_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcontact.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneVendorContactService.readOneVendorContact ) 
});

ContactController.post(Endpoints.ENDPOINT_VENDOR_CONTACTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcontact.count.v1"
    Commons.executeController(request, response, apiID, CountVendorContactService.readVendorContactCount ) 
});

ContactController.patch(Endpoints.ENDPOINT_VENDOR_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcontact.update.v1"
    Commons.executeController(request, response, apiID, UpdateVendorContactService.updateVendorContact ) 
});

ContactController.delete(Endpoints.ENDPOINT_ONE_VENDOR_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.vendorcontact.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteVendorContactService.deleteOneVendorContact ) 
});


ContactController.post(Endpoints.ENDPOINT_TENANT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenantcontact.create.v1"
    Commons.executeController(request, response, apiID, CreateTenantContactService.createOneTenantContact ) 
}); 

ContactController.post(Endpoints.ENDPOINT_TENANT_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenantcontact.read.v1"
    Commons.executeController(request, response, apiID, ReadTenantContactService.readTenantContacts ) 
});

ContactController.get(Endpoints.ENDPOINT_ONE_TENANT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenantcontact.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneTenantContactService.readOneTenantContact ) 
});

ContactController.post(Endpoints.ENDPOINT_TENANT_CONTACTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenantcontact.count.v1"
    Commons.executeController(request, response, apiID, CountTenantContactService.readTenantContactCount ) 
});

ContactController.patch(Endpoints.ENDPOINT_TENANT_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenantcontact.update.v1"
    Commons.executeController(request, response, apiID, UpdateTenantContactService.updateTenantContact ) 
});

ContactController.delete(Endpoints.ENDPOINT_ONE_TENANT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.tenantcontact.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteTenantContactService.deleteOneTenantContact ) 
});


ContactController.post(Endpoints.ENDPOINT_CUSTOMER_TENANT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customertenantcontact.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerTenantContactService.createOneCustomerTenantContact ) 
}); 

ContactController.post(Endpoints.ENDPOINT_CUSTOMER_TENANT_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customertenantcontact.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerTenantContactService.readCustomerTenantContacts ) 
});

ContactController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_TENANT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customertenantcontact.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerTenantContactService.readOneCustomerTenantContact ) 
});

ContactController.post(Endpoints.ENDPOINT_CUSTOMER_TENANT_CONTACTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customertenantcontact.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerTenantContactService.readCustomerTenantContactCount ) 
});

ContactController.patch(Endpoints.ENDPOINT_CUSTOMER_TENANT_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customertenantcontact.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerTenantContactService.updateCustomerTenantContact ) 
});

ContactController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_TENANT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customertenantcontact.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerTenantContactService.deleteOneCustomerTenantContact ) 
});


ContactController.post(Endpoints.ENDPOINT_CUSTOMER_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customercontact.create.v1"
    Commons.executeController(request, response, apiID, CreateCustomerContactService.createOneCustomerContact ) 
}); 

ContactController.post(Endpoints.ENDPOINT_CUSTOMER_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customercontact.read.v1"
    Commons.executeController(request, response, apiID, ReadCustomerContactService.readCustomerContacts ) 
});

ContactController.get(Endpoints.ENDPOINT_ONE_CUSTOMER_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customercontact.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneCustomerContactService.readOneCustomerContact ) 
});

ContactController.post(Endpoints.ENDPOINT_CUSTOMER_CONTACTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customercontact.count.v1"
    Commons.executeController(request, response, apiID, CountCustomerContactService.readCustomerContactCount ) 
});

ContactController.patch(Endpoints.ENDPOINT_CUSTOMER_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customercontact.update.v1"
    Commons.executeController(request, response, apiID, UpdateCustomerContactService.updateCustomerContact ) 
});

ContactController.delete(Endpoints.ENDPOINT_ONE_CUSTOMER_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.customercontact.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteCustomerContactService.deleteOneCustomerContact ) 
});


ContactController.post(Endpoints.ENDPOINT_CONTACT_PERSON, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contactperson.create.v1"
    Commons.executeController(request, response, apiID, CreateContactPersonService.createOneContactPerson ) 
}); 

ContactController.post(Endpoints.ENDPOINT_CONTACT_PERSONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contactperson.read.v1"
    Commons.executeController(request, response, apiID, ReadContactPersonService.readContactPersons ) 
});

ContactController.get(Endpoints.ENDPOINT_ONE_CONTACT_PERSON, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contactperson.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneContactPersonService.readOneContactPerson ) 
});

ContactController.post(Endpoints.ENDPOINT_CONTACT_PERSONS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contactperson.count.v1"
    Commons.executeController(request, response, apiID, CountContactPersonService.readContactPersonCount ) 
});

ContactController.patch(Endpoints.ENDPOINT_CONTACT_PERSONS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contactperson.update.v1"
    Commons.executeController(request, response, apiID, UpdateContactPersonService.updateContactPerson ) 
});

ContactController.delete(Endpoints.ENDPOINT_ONE_CONTACT_PERSON, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contactperson.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteContactPersonService.deleteOneContactPerson ) 
});


ContactController.post(Endpoints.ENDPOINT_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contact.create.v1"
    Commons.executeController(request, response, apiID, CreateContactService.createOneContact ) 
}); 

ContactController.post(Endpoints.ENDPOINT_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contact.read.v1"
    Commons.executeController(request, response, apiID, ReadContactService.readContacts ) 
});

ContactController.get(Endpoints.ENDPOINT_ONE_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contact.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneContactService.readOneContact ) 
});

ContactController.post(Endpoints.ENDPOINT_CONTACTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contact.count.v1"
    Commons.executeController(request, response, apiID, CountContactService.readContactCount ) 
});

ContactController.patch(Endpoints.ENDPOINT_CONTACTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contact.update.v1"
    Commons.executeController(request, response, apiID, UpdateContactService.updateContact ) 
});

ContactController.delete(Endpoints.ENDPOINT_ONE_CONTACT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.contact.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteContactService.deleteOneContact ) 
});



module.exports = ContactController;
