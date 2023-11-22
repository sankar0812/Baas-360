/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all group module api
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
const createGroupUserService = require("../../services/group/create.groupuser.service");
const readGroupUserService = require("../../services/group/read.groupuser.service");
const readoneGroupUserService = require("../../services/group/read.groupuser.service");
const countGroupUserService = require("../../services/group/read.groupuser.service");
const updateGroupUserService = require("../../services/group/update.groupuser.service");
const deleteGroupUserService = require("../../services/group/delete.groupuser.service");
const createGroupRoleService = require("../../services/group/create.grouprole.service");
const readGroupRoleService = require("../../services/group/read.grouprole.service");
const readoneGroupRoleService = require("../../services/group/read.grouprole.service");
const countGroupRoleService = require("../../services/group/read.grouprole.service");
const updateGroupRoleService = require("../../services/group/update.grouprole.service");
const deleteGroupRoleService = require("../../services/group/delete.grouprole.service");
const createGroupService = require("../../services/group/create.group.service");
const readGroupService = require("../../services/group/read.group.service");
const readoneGroupService = require("../../services/group/read.group.service");
const countGroupService = require("../../services/group/read.group.service");
const updateGroupService = require("../../services/group/update.group.service");
const deleteGroupService = require("../../services/group/delete.group.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateGroupUserService = new createGroupUserService();
const ReadGroupUserService = new readGroupUserService();
const ReadoneGroupUserService = new readoneGroupUserService();
const CountGroupUserService = new countGroupUserService();
const UpdateGroupUserService = new updateGroupUserService();
const DeleteGroupUserService = new deleteGroupUserService();
const CreateGroupRoleService = new createGroupRoleService();
const ReadGroupRoleService = new readGroupRoleService();
const ReadoneGroupRoleService = new readoneGroupRoleService();
const CountGroupRoleService = new countGroupRoleService();
const UpdateGroupRoleService = new updateGroupRoleService();
const DeleteGroupRoleService = new deleteGroupRoleService();
const CreateGroupService = new createGroupService();
const ReadGroupService = new readGroupService();
const ReadoneGroupService = new readoneGroupService();
const CountGroupService = new countGroupService();
const UpdateGroupService = new updateGroupService();
const DeleteGroupService = new deleteGroupService();


/**
 * Initializing the controller object
 */
const GroupController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

GroupController.post(Endpoints.ENDPOINT_GROUP_USER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.groupuser.create.v1"
    Commons.executeController(request, response, apiID, CreateGroupUserService.createOneGroupUser ) 
}); 

GroupController.post(Endpoints.ENDPOINT_GROUP_USERS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.groupuser.read.v1"
    Commons.executeController(request, response, apiID, ReadGroupUserService.readGroupUsers ) 
});

GroupController.get(Endpoints.ENDPOINT_ONE_GROUP_USER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.groupuser.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneGroupUserService.readOneGroupUser ) 
});

GroupController.post(Endpoints.ENDPOINT_GROUP_USERS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.groupuser.count.v1"
    Commons.executeController(request, response, apiID, CountGroupUserService.readGroupUserCount ) 
});

GroupController.patch(Endpoints.ENDPOINT_GROUP_USERS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.groupuser.update.v1"
    Commons.executeController(request, response, apiID, UpdateGroupUserService.updateGroupUser ) 
});

GroupController.delete(Endpoints.ENDPOINT_ONE_GROUP_USER, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.groupuser.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteGroupUserService.deleteOneGroupUser ) 
});


GroupController.post(Endpoints.ENDPOINT_GROUP_ROLE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.grouprole.create.v1"
    Commons.executeController(request, response, apiID, CreateGroupRoleService.createOneGroupRole ) 
}); 

GroupController.post(Endpoints.ENDPOINT_GROUP_ROLES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.grouprole.read.v1"
    Commons.executeController(request, response, apiID, ReadGroupRoleService.readGroupRoles ) 
});

GroupController.get(Endpoints.ENDPOINT_ONE_GROUP_ROLE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.grouprole.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneGroupRoleService.readOneGroupRole ) 
});

GroupController.post(Endpoints.ENDPOINT_GROUP_ROLES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.grouprole.count.v1"
    Commons.executeController(request, response, apiID, CountGroupRoleService.readGroupRoleCount ) 
});

GroupController.patch(Endpoints.ENDPOINT_GROUP_ROLES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.grouprole.update.v1"
    Commons.executeController(request, response, apiID, UpdateGroupRoleService.updateGroupRole ) 
});

GroupController.delete(Endpoints.ENDPOINT_ONE_GROUP_ROLE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.grouprole.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteGroupRoleService.deleteOneGroupRole ) 
});


GroupController.post(Endpoints.ENDPOINT_GROUP, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.group.create.v1"
    Commons.executeController(request, response, apiID, CreateGroupService.createOneGroup ) 
}); 

GroupController.post(Endpoints.ENDPOINT_GROUPS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.group.read.v1"
    Commons.executeController(request, response, apiID, ReadGroupService.readGroups ) 
});

GroupController.get(Endpoints.ENDPOINT_ONE_GROUP, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.group.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneGroupService.readOneGroup ) 
});

GroupController.post(Endpoints.ENDPOINT_GROUPS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.group.count.v1"
    Commons.executeController(request, response, apiID, CountGroupService.readGroupCount ) 
});

GroupController.patch(Endpoints.ENDPOINT_GROUPS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.group.update.v1"
    Commons.executeController(request, response, apiID, UpdateGroupService.updateGroup ) 
});

GroupController.delete(Endpoints.ENDPOINT_ONE_GROUP, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.group.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteGroupService.deleteOneGroup ) 
});



module.exports = GroupController;
