/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all proposal module api
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
const createProposalVendorProductService = require("../../services/proposal/create.proposalvendorproduct.service");
const readProposalVendorProductService = require("../../services/proposal/read.proposalvendorproduct.service");
const readoneProposalVendorProductService = require("../../services/proposal/read.proposalvendorproduct.service");
const countProposalVendorProductService = require("../../services/proposal/read.proposalvendorproduct.service");
const updateProposalVendorProductService = require("../../services/proposal/update.proposalvendorproduct.service");
const deleteProposalVendorProductService = require("../../services/proposal/delete.proposalvendorproduct.service");
const createProposalItemParamService = require("../../services/proposal/create.proposalitemparam.service");
const readProposalItemParamService = require("../../services/proposal/read.proposalitemparam.service");
const readoneProposalItemParamService = require("../../services/proposal/read.proposalitemparam.service");
const countProposalItemParamService = require("../../services/proposal/read.proposalitemparam.service");
const updateProposalItemParamService = require("../../services/proposal/update.proposalitemparam.service");
const deleteProposalItemParamService = require("../../services/proposal/delete.proposalitemparam.service");
const createProposalItemService = require("../../services/proposal/create.proposalitem.service");
const readProposalItemService = require("../../services/proposal/read.proposalitem.service");
const readoneProposalItemService = require("../../services/proposal/read.proposalitem.service");
const countProposalItemService = require("../../services/proposal/read.proposalitem.service");
const updateProposalItemService = require("../../services/proposal/update.proposalitem.service");
const deleteProposalItemService = require("../../services/proposal/delete.proposalitem.service");
const createProposalService = require("../../services/proposal/create.proposal.service");
const readProposalService = require("../../services/proposal/read.proposal.service");
const readoneProposalService = require("../../services/proposal/read.proposal.service");
const countProposalService = require("../../services/proposal/read.proposal.service");
const updateProposalService = require("../../services/proposal/update.proposal.service");
const deleteProposalService = require("../../services/proposal/delete.proposal.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateProposalVendorProductService = new createProposalVendorProductService();
const ReadProposalVendorProductService = new readProposalVendorProductService();
const ReadoneProposalVendorProductService = new readoneProposalVendorProductService();
const CountProposalVendorProductService = new countProposalVendorProductService();
const UpdateProposalVendorProductService = new updateProposalVendorProductService();
const DeleteProposalVendorProductService = new deleteProposalVendorProductService();
const CreateProposalItemParamService = new createProposalItemParamService();
const ReadProposalItemParamService = new readProposalItemParamService();
const ReadoneProposalItemParamService = new readoneProposalItemParamService();
const CountProposalItemParamService = new countProposalItemParamService();
const UpdateProposalItemParamService = new updateProposalItemParamService();
const DeleteProposalItemParamService = new deleteProposalItemParamService();
const CreateProposalItemService = new createProposalItemService();
const ReadProposalItemService = new readProposalItemService();
const ReadoneProposalItemService = new readoneProposalItemService();
const CountProposalItemService = new countProposalItemService();
const UpdateProposalItemService = new updateProposalItemService();
const DeleteProposalItemService = new deleteProposalItemService();
const CreateProposalService = new createProposalService();
const ReadProposalService = new readProposalService();
const ReadoneProposalService = new readoneProposalService();
const CountProposalService = new countProposalService();
const UpdateProposalService = new updateProposalService();
const DeleteProposalService = new deleteProposalService();


/**
 * Initializing the controller object
 */
const ProposalController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

ProposalController.post(Endpoints.ENDPOINT_PROPOSAL_VENDOR_PRODUCT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalvendorproduct.create.v1"
    Commons.executeController(request, response, apiID, CreateProposalVendorProductService.createOneProposalVendorProduct ) 
}); 

ProposalController.post(Endpoints.ENDPOINT_PROPOSAL_VENDOR_PRODUCTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalvendorproduct.read.v1"
    Commons.executeController(request, response, apiID, ReadProposalVendorProductService.readProposalVendorProducts ) 
});

ProposalController.get(Endpoints.ENDPOINT_ONE_PROPOSAL_VENDOR_PRODUCT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalvendorproduct.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProposalVendorProductService.readOneProposalVendorProduct ) 
});

ProposalController.post(Endpoints.ENDPOINT_PROPOSAL_VENDOR_PRODUCTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalvendorproduct.count.v1"
    Commons.executeController(request, response, apiID, CountProposalVendorProductService.readProposalVendorProductCount ) 
});

ProposalController.patch(Endpoints.ENDPOINT_PROPOSAL_VENDOR_PRODUCTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalvendorproduct.update.v1"
    Commons.executeController(request, response, apiID, UpdateProposalVendorProductService.updateProposalVendorProduct ) 
});

ProposalController.delete(Endpoints.ENDPOINT_ONE_PROPOSAL_VENDOR_PRODUCT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalvendorproduct.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProposalVendorProductService.deleteOneProposalVendorProduct ) 
});


ProposalController.post(Endpoints.ENDPOINT_PROPOSAL_ITEM_PARAM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitemparam.create.v1"
    Commons.executeController(request, response, apiID, CreateProposalItemParamService.createOneProposalItemParam ) 
}); 

ProposalController.post(Endpoints.ENDPOINT_PROPOSAL_ITEM_PARAMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitemparam.read.v1"
    Commons.executeController(request, response, apiID, ReadProposalItemParamService.readProposalItemParams ) 
});

ProposalController.get(Endpoints.ENDPOINT_ONE_PROPOSAL_ITEM_PARAM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitemparam.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProposalItemParamService.readOneProposalItemParam ) 
});

ProposalController.post(Endpoints.ENDPOINT_PROPOSAL_ITEM_PARAMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitemparam.count.v1"
    Commons.executeController(request, response, apiID, CountProposalItemParamService.readProposalItemParamCount ) 
});

ProposalController.patch(Endpoints.ENDPOINT_PROPOSAL_ITEM_PARAMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitemparam.update.v1"
    Commons.executeController(request, response, apiID, UpdateProposalItemParamService.updateProposalItemParam ) 
});

ProposalController.delete(Endpoints.ENDPOINT_ONE_PROPOSAL_ITEM_PARAM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitemparam.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProposalItemParamService.deleteOneProposalItemParam ) 
});


ProposalController.post(Endpoints.ENDPOINT_PROPOSAL_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitem.create.v1"
    Commons.executeController(request, response, apiID, CreateProposalItemService.createOneProposalItem ) 
}); 

ProposalController.post(Endpoints.ENDPOINT_PROPOSAL_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitem.read.v1"
    Commons.executeController(request, response, apiID, ReadProposalItemService.readProposalItems ) 
});

ProposalController.get(Endpoints.ENDPOINT_ONE_PROPOSAL_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitem.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProposalItemService.readOneProposalItem ) 
});

ProposalController.post(Endpoints.ENDPOINT_PROPOSAL_ITEMS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitem.count.v1"
    Commons.executeController(request, response, apiID, CountProposalItemService.readProposalItemCount ) 
});

ProposalController.patch(Endpoints.ENDPOINT_PROPOSAL_ITEMS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitem.update.v1"
    Commons.executeController(request, response, apiID, UpdateProposalItemService.updateProposalItem ) 
});

ProposalController.delete(Endpoints.ENDPOINT_ONE_PROPOSAL_ITEM, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposalitem.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProposalItemService.deleteOneProposalItem ) 
});


ProposalController.post(Endpoints.ENDPOINT_PROPOSAL, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposal.create.v1"
    Commons.executeController(request, response, apiID, CreateProposalService.createOneProposal ) 
}); 

ProposalController.post(Endpoints.ENDPOINT_PROPOSALS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposal.read.v1"
    Commons.executeController(request, response, apiID, ReadProposalService.readProposals ) 
});

ProposalController.get(Endpoints.ENDPOINT_ONE_PROPOSAL, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposal.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProposalService.readOneProposal ) 
});

ProposalController.post(Endpoints.ENDPOINT_PROPOSALS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposal.count.v1"
    Commons.executeController(request, response, apiID, CountProposalService.readProposalCount ) 
});

ProposalController.patch(Endpoints.ENDPOINT_PROPOSALS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposal.update.v1"
    Commons.executeController(request, response, apiID, UpdateProposalService.updateProposal ) 
});

ProposalController.delete(Endpoints.ENDPOINT_ONE_PROPOSAL, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.proposal.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProposalService.deleteOneProposal ) 
});



module.exports = ProposalController;
