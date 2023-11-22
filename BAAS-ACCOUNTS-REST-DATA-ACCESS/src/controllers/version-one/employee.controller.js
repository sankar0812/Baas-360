/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 24 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 09 2023
* Description  : This file contains the all api endpoint to function mapping for all employee module api
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
const createEmployeePackageLogService = require("../../services/employee/create.employeepackagelog.service");
const readEmployeePackageLogService = require("../../services/employee/read.employeepackagelog.service");
const readoneEmployeePackageLogService = require("../../services/employee/read.employeepackagelog.service");
const countEmployeePackageLogService = require("../../services/employee/read.employeepackagelog.service");
const updateEmployeePackageLogService = require("../../services/employee/update.employeepackagelog.service");
const deleteEmployeePackageLogService = require("../../services/employee/delete.employeepackagelog.service");
const createEmployeePackageService = require("../../services/employee/create.employeepackage.service");
const readEmployeePackageService = require("../../services/employee/read.employeepackage.service");
const readoneEmployeePackageService = require("../../services/employee/read.employeepackage.service");
const countEmployeePackageService = require("../../services/employee/read.employeepackage.service");
const updateEmployeePackageService = require("../../services/employee/update.employeepackage.service");
const deleteEmployeePackageService = require("../../services/employee/delete.employeepackage.service");
const createEmployeeTypeService = require("../../services/employee/create.employeetype.service");
const readEmployeeTypeService = require("../../services/employee/read.employeetype.service");
const readoneEmployeeTypeService = require("../../services/employee/read.employeetype.service");
const countEmployeeTypeService = require("../../services/employee/read.employeetype.service");
const updateEmployeeTypeService = require("../../services/employee/update.employeetype.service");
const deleteEmployeeTypeService = require("../../services/employee/delete.employeetype.service");
const createEmployeeService = require("../../services/employee/create.employee.service");
const readEmployeeService = require("../../services/employee/read.employee.service");
const readoneEmployeeService = require("../../services/employee/read.employee.service");
const countEmployeeService = require("../../services/employee/read.employee.service");
const updateEmployeeService = require("../../services/employee/update.employee.service");
const deleteEmployeeService = require("../../services/employee/delete.employee.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateEmployeePackageLogService = new createEmployeePackageLogService();
const ReadEmployeePackageLogService = new readEmployeePackageLogService();
const ReadoneEmployeePackageLogService = new readoneEmployeePackageLogService();
const CountEmployeePackageLogService = new countEmployeePackageLogService();
const UpdateEmployeePackageLogService = new updateEmployeePackageLogService();
const DeleteEmployeePackageLogService = new deleteEmployeePackageLogService();
const CreateEmployeePackageService = new createEmployeePackageService();
const ReadEmployeePackageService = new readEmployeePackageService();
const ReadoneEmployeePackageService = new readoneEmployeePackageService();
const CountEmployeePackageService = new countEmployeePackageService();
const UpdateEmployeePackageService = new updateEmployeePackageService();
const DeleteEmployeePackageService = new deleteEmployeePackageService();
const CreateEmployeeTypeService = new createEmployeeTypeService();
const ReadEmployeeTypeService = new readEmployeeTypeService();
const ReadoneEmployeeTypeService = new readoneEmployeeTypeService();
const CountEmployeeTypeService = new countEmployeeTypeService();
const UpdateEmployeeTypeService = new updateEmployeeTypeService();
const DeleteEmployeeTypeService = new deleteEmployeeTypeService();
const CreateEmployeeService = new createEmployeeService();
const ReadEmployeeService = new readEmployeeService();
const ReadoneEmployeeService = new readoneEmployeeService();
const CountEmployeeService = new countEmployeeService();
const UpdateEmployeeService = new updateEmployeeService();
const DeleteEmployeeService = new deleteEmployeeService();


/**
 * Initializing the controller object
 */
const EmployeeController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE_PACKAGE_LOG, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackagelog.create.v1"
    Commons.executeController(request, response, apiID, CreateEmployeePackageLogService.createOneEmployeePackageLog ) 
}); 

EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE_PACKAGE_LOGS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackagelog.read.v1"
    Commons.executeController(request, response, apiID, ReadEmployeePackageLogService.readEmployeePackageLogs ) 
});

EmployeeController.get(Endpoints.ENDPOINT_ONE_EMPLOYEE_PACKAGE_LOG, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackagelog.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneEmployeePackageLogService.readOneEmployeePackageLog ) 
});

EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE_PACKAGE_LOGS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackagelog.count.v1"
    Commons.executeController(request, response, apiID, CountEmployeePackageLogService.readEmployeePackageLogCount ) 
});

EmployeeController.patch(Endpoints.ENDPOINT_EMPLOYEE_PACKAGE_LOGS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackagelog.update.v1"
    Commons.executeController(request, response, apiID, UpdateEmployeePackageLogService.updateEmployeePackageLog ) 
});

EmployeeController.delete(Endpoints.ENDPOINT_ONE_EMPLOYEE_PACKAGE_LOG, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackagelog.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteEmployeePackageLogService.deleteOneEmployeePackageLog ) 
});


EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE_PACKAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackage.create.v1"
    Commons.executeController(request, response, apiID, CreateEmployeePackageService.createOneEmployeePackage ) 
}); 

EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE_PACKAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackage.read.v1"
    Commons.executeController(request, response, apiID, ReadEmployeePackageService.readEmployeePackages ) 
});

EmployeeController.get(Endpoints.ENDPOINT_ONE_EMPLOYEE_PACKAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackage.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneEmployeePackageService.readOneEmployeePackage ) 
});

EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE_PACKAGES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackage.count.v1"
    Commons.executeController(request, response, apiID, CountEmployeePackageService.readEmployeePackageCount ) 
});

EmployeeController.patch(Endpoints.ENDPOINT_EMPLOYEE_PACKAGES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackage.update.v1"
    Commons.executeController(request, response, apiID, UpdateEmployeePackageService.updateEmployeePackage ) 
});

EmployeeController.delete(Endpoints.ENDPOINT_ONE_EMPLOYEE_PACKAGE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeepackage.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteEmployeePackageService.deleteOneEmployeePackage ) 
});


EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeetype.create.v1"
    Commons.executeController(request, response, apiID, CreateEmployeeTypeService.createOneEmployeeType ) 
}); 

EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeetype.read.v1"
    Commons.executeController(request, response, apiID, ReadEmployeeTypeService.readEmployeeTypes ) 
});

EmployeeController.get(Endpoints.ENDPOINT_ONE_EMPLOYEE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeetype.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneEmployeeTypeService.readOneEmployeeType ) 
});

EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE_TYPES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeetype.count.v1"
    Commons.executeController(request, response, apiID, CountEmployeeTypeService.readEmployeeTypeCount ) 
});

EmployeeController.patch(Endpoints.ENDPOINT_EMPLOYEE_TYPES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeetype.update.v1"
    Commons.executeController(request, response, apiID, UpdateEmployeeTypeService.updateEmployeeType ) 
});

EmployeeController.delete(Endpoints.ENDPOINT_ONE_EMPLOYEE_TYPE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employeetype.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteEmployeeTypeService.deleteOneEmployeeType ) 
});


EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employee.create.v1"
    Commons.executeController(request, response, apiID, CreateEmployeeService.createOneEmployee ) 
}); 

EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employee.read.v1"
    Commons.executeController(request, response, apiID, ReadEmployeeService.readEmployees ) 
});

EmployeeController.get(Endpoints.ENDPOINT_ONE_EMPLOYEE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employee.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneEmployeeService.readOneEmployee ) 
});

EmployeeController.post(Endpoints.ENDPOINT_EMPLOYEES+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employee.count.v1"
    Commons.executeController(request, response, apiID, CountEmployeeService.readEmployeeCount ) 
});

EmployeeController.patch(Endpoints.ENDPOINT_EMPLOYEES, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employee.update.v1"
    Commons.executeController(request, response, apiID, UpdateEmployeeService.updateEmployee ) 
});

EmployeeController.delete(Endpoints.ENDPOINT_ONE_EMPLOYEE, async(request, response) => {
    const apiID = "accounts.api.rest.dataaccess.employee.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteEmployeeService.deleteOneEmployee ) 
});



module.exports = EmployeeController;
