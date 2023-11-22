/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all project module api
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
const createProjectTypeService = require("../../services/project/create.projecttype.service");
const readProjectTypeService = require("../../services/project/read.projecttype.service");
const readoneProjectTypeService = require("../../services/project/read.projecttype.service");
const countProjectTypeService = require("../../services/project/read.projecttype.service");
const updateProjectTypeService = require("../../services/project/update.projecttype.service");
const deleteProjectTypeService = require("../../services/project/delete.projecttype.service");
const createProjectService = require("../../services/project/create.project.service");
const readProjectService = require("../../services/project/read.project.service");
const readoneProjectService = require("../../services/project/read.project.service");
const countProjectService = require("../../services/project/read.project.service");
const updateProjectService = require("../../services/project/update.project.service");
const deleteProjectService = require("../../services/project/delete.project.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateProjectTypeService = new createProjectTypeService();
const ReadProjectTypeService = new readProjectTypeService();
const ReadoneProjectTypeService = new readoneProjectTypeService();
const CountProjectTypeService = new countProjectTypeService();
const UpdateProjectTypeService = new updateProjectTypeService();
const DeleteProjectTypeService = new deleteProjectTypeService();
const CreateProjectService = new createProjectService();
const ReadProjectService = new readProjectService();
const ReadoneProjectService = new readoneProjectService();
const CountProjectService = new countProjectService();
const UpdateProjectService = new updateProjectService();
const DeleteProjectService = new deleteProjectService();


/**
 * Initializing the controller object
 */
const ProjectController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

ProjectController.post(Endpoints.ENDPOINT_PROJECT_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.projecttype.create.v1"
    Commons.executeController(request, response, apiID, CreateProjectTypeService.createOneProjectType ) 
}); 

ProjectController.post(Endpoints.ENDPOINT_PROJECT_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.projecttype.read.v1"
    Commons.executeController(request, response, apiID, ReadProjectTypeService.readProjectTypes ) 
});

ProjectController.get(Endpoints.ENDPOINT_ONE_PROJECT_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.projecttype.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProjectTypeService.readOneProjectType ) 
});

ProjectController.post(Endpoints.ENDPOINT_PROJECT_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.projecttype.count.v1"
    Commons.executeController(request, response, apiID, CountProjectTypeService.readProjectTypeCount ) 
});

ProjectController.patch(Endpoints.ENDPOINT_PROJECT_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.projecttype.update.v1"
    Commons.executeController(request, response, apiID, UpdateProjectTypeService.updateProjectType ) 
});

ProjectController.delete(Endpoints.ENDPOINT_ONE_PROJECT_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.projecttype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProjectTypeService.deleteOneProjectType ) 
});


ProjectController.post(Endpoints.ENDPOINT_PROJECT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.project.create.v1"
    Commons.executeController(request, response, apiID, CreateProjectService.createOneProject ) 
}); 

ProjectController.post(Endpoints.ENDPOINT_PROJECTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.project.read.v1"
    Commons.executeController(request, response, apiID, ReadProjectService.readProjects ) 
});

ProjectController.get(Endpoints.ENDPOINT_ONE_PROJECT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.project.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneProjectService.readOneProject ) 
});

ProjectController.post(Endpoints.ENDPOINT_PROJECTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.project.count.v1"
    Commons.executeController(request, response, apiID, CountProjectService.readProjectCount ) 
});

ProjectController.patch(Endpoints.ENDPOINT_PROJECTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.project.update.v1"
    Commons.executeController(request, response, apiID, UpdateProjectService.updateProject ) 
});

ProjectController.delete(Endpoints.ENDPOINT_ONE_PROJECT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.project.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteProjectService.deleteOneProject ) 
});



module.exports = ProjectController;
