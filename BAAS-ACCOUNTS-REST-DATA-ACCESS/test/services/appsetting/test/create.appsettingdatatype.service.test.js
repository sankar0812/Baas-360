/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create appsettingdatatype service class
**/

/**
 * Importing all required modules here
 */

const createAppSettingDataTypeServiceData = require("../data/create.appsettingdatatype.service.data")
const createAppSettingDataTypeService = require("../../../../src/services/appsetting/create.appsettingdatatype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAppSettingDataTypeService = new createAppSettingDataTypeService();
const CreateAppSettingDataTypeServiceData = new createAppSettingDataTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingdatatype.ts.001] | FunctionPath : [src/services/appsetting/create.appsettingdatatype.service.js/createOneAppSettingDataType()]", () => {


	test(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC001.description, async () => {

        const output = await CreateAppSettingDataTypeService.createOneAppSettingDataType(
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC001.input.databaseConnector,
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC001.input.apiID,
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC001.input.config,
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC001.output)[2])
	});



    test(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC002.description, async () => {

        const output = await CreateAppSettingDataTypeService.createOneAppSettingDataType(
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC002.input.databaseConnector,
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC002.input.apiID,
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC002.input.config,
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC002.output.message)        
	});



    test(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC003.description, async () => {

        const output = await CreateAppSettingDataTypeService.createOneAppSettingDataType(
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC003.input.databaseConnector,
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC003.input.apiID,
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC003.input.config,
            CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAppSettingDataTypeServiceData.CREATE_ONE_APPSETTINGDATATYPE_TS001_TC003.output.message)        
	});

});