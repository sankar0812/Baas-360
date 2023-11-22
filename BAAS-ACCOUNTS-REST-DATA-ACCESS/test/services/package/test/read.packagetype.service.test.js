/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PackageType service class
**/

/**
 * Importing all required modules here
 */

const readPackageTypeServiceData = require("../data/read.packagetype.service.data")
const readPackageTypeService = require("../../../../src/services/package/read.packagetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPackageTypeService = new readPackageTypeService();
const ReadPackageTypeServiceData = new readPackageTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.packagetype.ts.001] | FunctionPath : [src/services/package/read.contianer.service.js/readPackageTypes()]", () => {


	test(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC001.description, async () => {

        const output = await ReadPackageTypeService.readPackageTypes(
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC001.input.databaseConnector,
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC001.input.apiID,
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC001.input.config,
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC001.output)[2])
	});



    test(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC002.description, async () => {

        const output = await ReadPackageTypeService.readPackageTypes(
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC002.input.databaseConnector,
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC002.input.apiID,
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC002.input.config,
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC002.output.message)        
	});



    test(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC003.description, async () => {

        const output = await ReadPackageTypeService.readPackageTypes(
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC003.input.databaseConnector,
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC003.input.apiID,
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC003.input.config,
            ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPackageTypeServiceData.READ_PACKAGETYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.packagetype.ts.002] | FunctionPath : [src/services/package/read.packagetype.service.js/readOnePackageType()]", () => {


	test(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC001.description, async () => {

        const output = await ReadPackageTypeService.readOnePackageType(
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC001.input.databaseConnector,
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC001.input.apiID,
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC001.input.config,
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC001.output)[2])
	});



    test(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC002.description, async () => {

        const output = await ReadPackageTypeService.readOnePackageType(
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC002.input.databaseConnector,
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC002.input.apiID,
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC002.input.config,
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC002.output.message)        
	});



    test(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC003.description, async () => {

        const output = await ReadPackageTypeService.readOnePackageType(
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC003.input.databaseConnector,
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC003.input.apiID,
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC003.input.config,
            ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPackageTypeServiceData.READ_ONE_PACKAGETYPE_TS002_TC003.output.message)        
	});

});