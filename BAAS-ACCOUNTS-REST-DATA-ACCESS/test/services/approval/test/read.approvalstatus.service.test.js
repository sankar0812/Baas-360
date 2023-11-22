/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ApprovalStatus service class
**/

/**
 * Importing all required modules here
 */

const readApprovalStatusServiceData = require("../data/read.approvalstatus.service.data")
const readApprovalStatusService = require("../../../../src/services/approval/read.approvalstatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadApprovalStatusService = new readApprovalStatusService();
const ReadApprovalStatusServiceData = new readApprovalStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.approvalstatus.ts.001] | FunctionPath : [src/services/approval/read.contianer.service.js/readApprovalStatuss()]", () => {


	test(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC001.description, async () => {

        const output = await ReadApprovalStatusService.readApprovalStatuses(
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC001.input.databaseConnector,
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC001.input.apiID,
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC001.input.config,
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC001.output)[2])
	});



    test(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC002.description, async () => {

        const output = await ReadApprovalStatusService.readApprovalStatuses(
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC002.input.databaseConnector,
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC002.input.apiID,
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC002.input.config,
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC002.output.message)        
	});



    test(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC003.description, async () => {

        const output = await ReadApprovalStatusService.readApprovalStatuses(
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC003.input.databaseConnector,
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC003.input.apiID,
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC003.input.config,
            ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(ReadApprovalStatusServiceData.READ_APPROVALSTATUS_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.approvalstatus.ts.002] | FunctionPath : [src/services/approval/read.approvalstatus.service.js/readOneApprovalStatus()]", () => {


	test(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC001.description, async () => {

        const output = await ReadApprovalStatusService.readOneApprovalStatus(
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC001.input.databaseConnector,
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC001.input.apiID,
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC001.input.config,
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC001.output)[2])
	});



    test(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC002.description, async () => {

        const output = await ReadApprovalStatusService.readOneApprovalStatus(
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC002.input.databaseConnector,
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC002.input.apiID,
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC002.input.config,
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC002.output.data)
        expect(output.status).toBe(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC002.output.status)
        expect(output.message).toBe(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC002.output.message)        
	});



    test(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC003.description, async () => {

        const output = await ReadApprovalStatusService.readOneApprovalStatus(
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC003.input.databaseConnector,
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC003.input.apiID,
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC003.input.config,
            ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC003.output.status)
        expect(output.message).toBe(ReadApprovalStatusServiceData.READ_ONE_APPROVALSTATUS_TS002_TC003.output.message)        
	});

});