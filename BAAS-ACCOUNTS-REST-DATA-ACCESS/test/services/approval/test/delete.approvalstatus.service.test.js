/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete approvalstatus service class
**/

/**
 * Importing all required modules here
 */

const deleteApprovalStatusServiceData = require("../data/delete.approvalstatus.service.data")
const deleteApprovalStatusService = require("../../../../src/services/approval/delete.approvalstatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteApprovalStatusService = new deleteApprovalStatusService();
const DeleteApprovalStatusServiceData = new deleteApprovalStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.approvalstatus.ts.001] | FunctionPath : [src/services/approval/delete.approvalstatus.service.js/deleteOneApprovalStatus()]", () => {


	test(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC001.description, async () => {

        const output = await DeleteApprovalStatusService.deleteOneApprovalStatus(
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC001.input.databaseConnector,
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC001.input.apiID,
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC001.input.config,
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC001.output)[2])
	});



    test(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC002.description, async () => {

        const output = await DeleteApprovalStatusService.deleteOneApprovalStatus(
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC002.input.databaseConnector,
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC002.input.apiID,
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC002.input.config,
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC002.output.message)        
	});



    test(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC003.description, async () => {

        const output = await DeleteApprovalStatusService.deleteOneApprovalStatus(
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC003.input.databaseConnector,
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC003.input.apiID,
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC003.input.config,
            DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteApprovalStatusServiceData.DELETE_ONE_APPROVALSTATUS_TS001_TC003.output.message)        
	});

});
