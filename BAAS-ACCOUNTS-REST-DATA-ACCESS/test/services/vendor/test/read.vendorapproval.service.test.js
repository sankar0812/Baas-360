/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorApproval service class
**/

/**
 * Importing all required modules here
 */

const readVendorApprovalServiceData = require("../data/read.vendorapproval.service.data")
const readVendorApprovalService = require("../../../../src/services/vendor/read.vendorapproval.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorApprovalService = new readVendorApprovalService();
const ReadVendorApprovalServiceData = new readVendorApprovalServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapproval.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorApprovals()]", () => {


	test(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC001.description, async () => {

        const output = await ReadVendorApprovalService.readVendorApprovals(
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC001.input.databaseConnector,
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC001.input.apiID,
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC001.input.config,
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC001.output)[2])
	});



    test(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC002.description, async () => {

        const output = await ReadVendorApprovalService.readVendorApprovals(
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC002.input.databaseConnector,
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC002.input.apiID,
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC002.input.config,
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC002.output.message)        
	});



    test(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC003.description, async () => {

        const output = await ReadVendorApprovalService.readVendorApprovals(
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC003.input.databaseConnector,
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC003.input.apiID,
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC003.input.config,
            ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorApprovalServiceData.READ_VENDORAPPROVAL_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorapproval.ts.002] | FunctionPath : [src/services/vendor/read.vendorapproval.service.js/readOneVendorApproval()]", () => {


	test(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC001.description, async () => {

        const output = await ReadVendorApprovalService.readOneVendorApproval(
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC001.input.databaseConnector,
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC001.input.apiID,
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC001.input.config,
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC001.output)[2])
	});



    test(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC002.description, async () => {

        const output = await ReadVendorApprovalService.readOneVendorApproval(
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC002.input.databaseConnector,
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC002.input.apiID,
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC002.input.config,
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC002.output.message)        
	});



    test(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC003.description, async () => {

        const output = await ReadVendorApprovalService.readOneVendorApproval(
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC003.input.databaseConnector,
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC003.input.apiID,
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC003.input.config,
            ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorApprovalServiceData.READ_ONE_VENDORAPPROVAL_TS002_TC003.output.message)        
	});

});