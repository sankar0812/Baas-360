

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update approvalstatus service class
**/

/**
 * Importing all required modules here
 */

const updateApprovalStatusServiceData = require("../data/update.approvalstatus.service.data")
const updateApprovalStatusService = require("../../../../src/services/approval/update.approvalstatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateApprovalStatusService = new updateApprovalStatusService();
const UpdateApprovalStatusServiceData = new updateApprovalStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.approvalstatus.ts.001] | FunctionPath : [src/services/approval/update.approvalstatus.service.js/updateApprovalStatus()]", () => {

	test(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC001.description, async () => {

        const output = await UpdateApprovalStatusService.updateApprovalStatus(
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC001.input.databaseConnector,
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC001.input.apiID,
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC001.input.config,
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC001.output)[2])
	});

    test(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC002.description, async () => {

        const output = await UpdateApprovalStatusService.updateApprovalStatus(
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC002.input.databaseConnector,
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC002.input.apiID,
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC002.input.config,
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC002.output.message)        
	});

    test(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC003.description, async () => {

        const output = await UpdateApprovalStatusService.updateApprovalStatus(
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC003.input.databaseConnector,
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC003.input.apiID,
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC003.input.config,
            UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateApprovalStatusServiceData.UPDATE_APPROVALSTATUS_TS001_TC003.output.message)        
	});

});
