/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create packagetype service class
**/

/**
 * Importing all required modules here
 */

const createPackageTypeServiceData = require("../data/create.packagetype.service.data")
const createPackageTypeService = require("../../../../src/services/package/create.packagetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePackageTypeService = new createPackageTypeService();
const CreatePackageTypeServiceData = new createPackageTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.packagetype.ts.001] | FunctionPath : [src/services/package/create.packagetype.service.js/createOnePackageType()]", () => {


	test(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC001.description, async () => {

        const output = await CreatePackageTypeService.createOnePackageType(
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC001.input.databaseConnector,
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC001.input.apiID,
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC001.input.config,
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC001.output)[2])
	});



    test(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC002.description, async () => {

        const output = await CreatePackageTypeService.createOnePackageType(
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC002.input.databaseConnector,
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC002.input.apiID,
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC002.input.config,
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC002.output.message)        
	});



    test(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC003.description, async () => {

        const output = await CreatePackageTypeService.createOnePackageType(
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC003.input.databaseConnector,
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC003.input.apiID,
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC003.input.config,
            CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePackageTypeServiceData.CREATE_ONE_PACKAGETYPE_TS001_TC003.output.message)        
	});

});