/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create appsettinguomtype service class
**/

/**
 * Importing all required modules here
 */

const createAppSettingUomTypeServiceData = require("../data/create.appsettinguomtype.service.data")
const createAppSettingUomTypeService = require("../../../../src/services/appsetting/create.appsettinguomtype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAppSettingUomTypeService = new createAppSettingUomTypeService();
const CreateAppSettingUomTypeServiceData = new createAppSettingUomTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguomtype.ts.001] | FunctionPath : [src/services/appsetting/create.appsettinguomtype.service.js/createOneAppSettingUomType()]", () => {


	test(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC001.description, async () => {

        const output = await CreateAppSettingUomTypeService.createOneAppSettingUomType(
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC001.input.databaseConnector,
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC001.input.apiID,
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC001.input.config,
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC001.output)[2])
	});



    test(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC002.description, async () => {

        const output = await CreateAppSettingUomTypeService.createOneAppSettingUomType(
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC002.input.databaseConnector,
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC002.input.apiID,
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC002.input.config,
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC002.output.message)        
	});



    test(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC003.description, async () => {

        const output = await CreateAppSettingUomTypeService.createOneAppSettingUomType(
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC003.input.databaseConnector,
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC003.input.apiID,
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC003.input.config,
            CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAppSettingUomTypeServiceData.CREATE_ONE_APPSETTINGUOMTYPE_TS001_TC003.output.message)        
	});

});