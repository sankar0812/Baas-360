/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProposalVendorProduct service class
**/

/**
 * Importing all required modules here
 */

const readProposalVendorProductServiceData = require("../data/read.proposalvendorproduct.service.data")
const readProposalVendorProductService = require("../../../../src/services/proposal/read.proposalvendorproduct.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProposalVendorProductService = new readProposalVendorProductService();
const ReadProposalVendorProductServiceData = new readProposalVendorProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001] | FunctionPath : [src/services/proposal/read.contianer.service.js/readProposalVendorProducts()]", () => {


	test(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC001.description, async () => {

        const output = await ReadProposalVendorProductService.readProposalVendorProducts(
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC001.input.databaseConnector,
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC001.input.apiID,
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC001.input.config,
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC001.output)[2])
	});



    test(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC002.description, async () => {

        const output = await ReadProposalVendorProductService.readProposalVendorProducts(
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC002.input.databaseConnector,
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC002.input.apiID,
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC002.input.config,
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC002.output.message)        
	});



    test(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC003.description, async () => {

        const output = await ReadProposalVendorProductService.readProposalVendorProducts(
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC003.input.databaseConnector,
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC003.input.apiID,
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC003.input.config,
            ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProposalVendorProductServiceData.READ_PROPOSALVENDORPRODUCT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.proposalvendorproduct.ts.002] | FunctionPath : [src/services/proposal/read.proposalvendorproduct.service.js/readOneProposalVendorProduct()]", () => {


	test(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC001.description, async () => {

        const output = await ReadProposalVendorProductService.readOneProposalVendorProduct(
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC001.input.databaseConnector,
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC001.input.apiID,
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC001.input.config,
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC001.output)[2])
	});



    test(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC002.description, async () => {

        const output = await ReadProposalVendorProductService.readOneProposalVendorProduct(
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC002.input.databaseConnector,
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC002.input.apiID,
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC002.input.config,
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC002.output.message)        
	});



    test(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC003.description, async () => {

        const output = await ReadProposalVendorProductService.readOneProposalVendorProduct(
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC003.input.databaseConnector,
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC003.input.apiID,
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC003.input.config,
            ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProposalVendorProductServiceData.READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC003.output.message)        
	});

});