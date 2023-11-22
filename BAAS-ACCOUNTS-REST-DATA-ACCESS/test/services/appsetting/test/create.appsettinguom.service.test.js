/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create appsettinguom service class
**/

/**
 * Importing all required modules here
 */

const createAppSettingUomServiceData = require("../data/create.appsettinguom.service.data")
const createAppSettingUomService = require("../../../../src/services/appsetting/create.appsettinguom.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAppSettingUomService = new createAppSettingUomService();
const CreateAppSettingUomServiceData = new createAppSettingUomServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguom.ts.001] | FunctionPath : [src/services/appsetting/create.appsettinguom.service.js/createOneAppSettingUom()]", () => {


	test(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC001.description, async () => {

        const output = await CreateAppSettingUomService.createOneAppSettingUom(
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC001.input.databaseConnector,
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC001.input.apiID,
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC001.input.config,
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC001.output)[2])
	});



    test(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC002.description, async () => {

        const output = await CreateAppSettingUomService.createOneAppSettingUom(
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC002.input.databaseConnector,
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC002.input.apiID,
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC002.input.config,
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC002.output.message)        
	});



    test(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC003.description, async () => {

        const output = await CreateAppSettingUomService.createOneAppSettingUom(
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC003.input.databaseConnector,
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC003.input.apiID,
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC003.input.config,
            CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAppSettingUomServiceData.CREATE_ONE_APPSETTINGUOM_TS001_TC003.output.message)        
	});

});