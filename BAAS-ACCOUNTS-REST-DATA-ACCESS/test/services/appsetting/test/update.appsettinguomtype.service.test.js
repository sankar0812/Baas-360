

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update appsettinguomtype service class
**/

/**
 * Importing all required modules here
 */

const updateAppSettingUomTypeServiceData = require("../data/update.appsettinguomtype.service.data")
const updateAppSettingUomTypeService = require("../../../../src/services/appsetting/update.appsettinguomtype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAppSettingUomTypeService = new updateAppSettingUomTypeService();
const UpdateAppSettingUomTypeServiceData = new updateAppSettingUomTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguomtype.ts.001] | FunctionPath : [src/services/appsetting/update.appsettinguomtype.service.js/updateAppSettingUomType()]", () => {

	test(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC001.description, async () => {

        const output = await UpdateAppSettingUomTypeService.updateAppSettingUomType(
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC001.input.databaseConnector,
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC001.input.apiID,
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC001.input.config,
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC001.output)[2])
	});

    test(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC002.description, async () => {

        const output = await UpdateAppSettingUomTypeService.updateAppSettingUomType(
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC002.input.databaseConnector,
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC002.input.apiID,
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC002.input.config,
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC002.output.message)        
	});

    test(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC003.description, async () => {

        const output = await UpdateAppSettingUomTypeService.updateAppSettingUomType(
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC003.input.databaseConnector,
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC003.input.apiID,
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC003.input.config,
            UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAppSettingUomTypeServiceData.UPDATE_APPSETTINGUOMTYPE_TS001_TC003.output.message)        
	});

});
