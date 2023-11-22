/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create approvalstatus service class
**/

/**
 * Importing all required modules here
 */

const createApprovalStatusServiceData = require("../data/create.approvalstatus.service.data")
const createApprovalStatusService = require("../../../../src/services/approval/create.approvalstatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateApprovalStatusService = new createApprovalStatusService();
const CreateApprovalStatusServiceData = new createApprovalStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.approvalstatus.ts.001] | FunctionPath : [src/services/approval/create.approvalstatus.service.js/createOneApprovalStatus()]", () => {


	test(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC001.description, async () => {

        const output = await CreateApprovalStatusService.createOneApprovalStatus(
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC001.input.databaseConnector,
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC001.input.apiID,
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC001.input.config,
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC001.output)[2])
	});



    test(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC002.description, async () => {

        const output = await CreateApprovalStatusService.createOneApprovalStatus(
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC002.input.databaseConnector,
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC002.input.apiID,
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC002.input.config,
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC002.output.message)        
	});



    test(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC003.description, async () => {

        const output = await CreateApprovalStatusService.createOneApprovalStatus(
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC003.input.databaseConnector,
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC003.input.apiID,
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC003.input.config,
            CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(CreateApprovalStatusServiceData.CREATE_ONE_APPROVALSTATUS_TS001_TC003.output.message)        
	});

});