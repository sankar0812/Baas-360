/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all approval module api
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
const createApprovalStatusService = require("../../services/approval/create.approvalstatus.service");
const readApprovalStatusService = require("../../services/approval/read.approvalstatus.service");
const readoneApprovalStatusService = require("../../services/approval/read.approvalstatus.service");
const countApprovalStatusService = require("../../services/approval/read.approvalstatus.service");
const updateApprovalStatusService = require("../../services/approval/update.approvalstatus.service");
const deleteApprovalStatusService = require("../../services/approval/delete.approvalstatus.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateApprovalStatusService = new createApprovalStatusService();
const ReadApprovalStatusService = new readApprovalStatusService();
const ReadoneApprovalStatusService = new readoneApprovalStatusService();
const CountApprovalStatusService = new countApprovalStatusService();
const UpdateApprovalStatusService = new updateApprovalStatusService();
const DeleteApprovalStatusService = new deleteApprovalStatusService();


/**
 * Initializing the controller object
 */
const ApprovalController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

ApprovalController.post(Endpoints.ENDPOINT_APPROVAL_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.approvalstatus.create.v1"
    Commons.executeController(request, response, apiID, CreateApprovalStatusService.createOneApprovalStatus ) 
}); 

ApprovalController.post(Endpoints.ENDPOINT_APPROVAL_STATUSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.approvalstatus.read.v1"
    Commons.executeController(request, response, apiID, ReadApprovalStatusService.readApprovalStatuses ) 
});

ApprovalController.get(Endpoints.ENDPOINT_ONE_APPROVAL_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.approvalstatus.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneApprovalStatusService.readOneApprovalStatus ) 
});

ApprovalController.post(Endpoints.ENDPOINT_APPROVAL_STATUSES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.approvalstatus.count.v1"
    Commons.executeController(request, response, apiID, CountApprovalStatusService.readApprovalStatusCount ) 
});

ApprovalController.patch(Endpoints.ENDPOINT_APPROVAL_STATUSES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.approvalstatus.update.v1"
    Commons.executeController(request, response, apiID, UpdateApprovalStatusService.updateApprovalStatus ) 
});

ApprovalController.delete(Endpoints.ENDPOINT_ONE_APPROVAL_STATUS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.approvalstatus.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteApprovalStatusService.deleteOneApprovalStatus ) 
});



module.exports = ApprovalController;
