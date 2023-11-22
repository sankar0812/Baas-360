/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create appsettingnetterm service class
**/

/**
 * Importing all required modules here
 */

const createAppSettingNetTermServiceData = require("../data/create.appsettingnetterm.service.data")
const createAppSettingNetTermService = require("../../../../src/services/appsetting/create.appsettingnetterm.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAppSettingNetTermService = new createAppSettingNetTermService();
const CreateAppSettingNetTermServiceData = new createAppSettingNetTermServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingnetterm.ts.001] | FunctionPath : [src/services/appsetting/create.appsettingnetterm.service.js/createOneAppSettingNetTerm()]", () => {


	test(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC001.description, async () => {

        const output = await CreateAppSettingNetTermService.createOneAppSettingNetTerm(
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC001.input.databaseConnector,
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC001.input.apiID,
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC001.input.config,
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC001.output)[2])
	});



    test(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC002.description, async () => {

        const output = await CreateAppSettingNetTermService.createOneAppSettingNetTerm(
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC002.input.databaseConnector,
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC002.input.apiID,
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC002.input.config,
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC002.output.message)        
	});



    test(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC003.description, async () => {

        const output = await CreateAppSettingNetTermService.createOneAppSettingNetTerm(
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC003.input.databaseConnector,
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC003.input.apiID,
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC003.input.config,
            CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAppSettingNetTermServiceData.CREATE_ONE_APPSETTINGNETTERM_TS001_TC003.output.message)        
	});

});