/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all department module api
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
const createDepartmentService = require("../../services/department/create.department.service");
const readDepartmentService = require("../../services/department/read.department.service");
const readoneDepartmentService = require("../../services/department/read.department.service");
const countDepartmentService = require("../../services/department/read.department.service");
const updateDepartmentService = require("../../services/department/update.department.service");
const deleteDepartmentService = require("../../services/department/delete.department.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateDepartmentService = new createDepartmentService();
const ReadDepartmentService = new readDepartmentService();
const ReadoneDepartmentService = new readoneDepartmentService();
const CountDepartmentService = new countDepartmentService();
const UpdateDepartmentService = new updateDepartmentService();
const DeleteDepartmentService = new deleteDepartmentService();


/**
 * Initializing the controller object
 */
const DepartmentController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

DepartmentController.post(Endpoints.ENDPOINT_DEPARTMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.department.create.v1"
    Commons.executeController(request, response, apiID, CreateDepartmentService.createOneDepartment ) 
}); 

DepartmentController.post(Endpoints.ENDPOINT_DEPARTMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.department.read.v1"
    Commons.executeController(request, response, apiID, ReadDepartmentService.readDepartments ) 
});

DepartmentController.get(Endpoints.ENDPOINT_ONE_DEPARTMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.department.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneDepartmentService.readOneDepartment ) 
});

DepartmentController.post(Endpoints.ENDPOINT_DEPARTMENTS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.department.count.v1"
    Commons.executeController(request, response, apiID, CountDepartmentService.readDepartmentCount ) 
});

DepartmentController.patch(Endpoints.ENDPOINT_DEPARTMENTS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.department.update.v1"
    Commons.executeController(request, response, apiID, UpdateDepartmentService.updateDepartment ) 
});

DepartmentController.delete(Endpoints.ENDPOINT_ONE_DEPARTMENT, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.department.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteDepartmentService.deleteOneDepartment ) 
});



module.exports = DepartmentController;
