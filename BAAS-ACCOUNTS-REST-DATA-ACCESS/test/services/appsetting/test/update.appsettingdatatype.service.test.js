

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update appsettingdatatype service class
**/

/**
 * Importing all required modules here
 */

const updateAppSettingDataTypeServiceData = require("../data/update.appsettingdatatype.service.data")
const updateAppSettingDataTypeService = require("../../../../src/services/appsetting/update.appsettingdatatype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAppSettingDataTypeService = new updateAppSettingDataTypeService();
const UpdateAppSettingDataTypeServiceData = new updateAppSettingDataTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingdatatype.ts.001] | FunctionPath : [src/services/appsetting/update.appsettingdatatype.service.js/updateAppSettingDataType()]", () => {

	test(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC001.description, async () => {

        const output = await UpdateAppSettingDataTypeService.updateAppSettingDataType(
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC001.input.databaseConnector,
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC001.input.apiID,
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC001.input.config,
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC001.output)[2])
	});

    test(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC002.description, async () => {

        const output = await UpdateAppSettingDataTypeService.updateAppSettingDataType(
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC002.input.databaseConnector,
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC002.input.apiID,
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC002.input.config,
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC002.output.message)        
	});

    test(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC003.description, async () => {

        const output = await UpdateAppSettingDataTypeService.updateAppSettingDataType(
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC003.input.databaseConnector,
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC003.input.apiID,
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC003.input.config,
            UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAppSettingDataTypeServiceData.UPDATE_APPSETTINGDATATYPE_TS001_TC003.output.message)        
	});

});
