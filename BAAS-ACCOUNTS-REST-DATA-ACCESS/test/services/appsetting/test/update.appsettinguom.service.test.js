

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update appsettinguom service class
**/

/**
 * Importing all required modules here
 */

const updateAppSettingUomServiceData = require("../data/update.appsettinguom.service.data")
const updateAppSettingUomService = require("../../../../src/services/appsetting/update.appsettinguom.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAppSettingUomService = new updateAppSettingUomService();
const UpdateAppSettingUomServiceData = new updateAppSettingUomServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguom.ts.001] | FunctionPath : [src/services/appsetting/update.appsettinguom.service.js/updateAppSettingUom()]", () => {

	test(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC001.description, async () => {

        const output = await UpdateAppSettingUomService.updateAppSettingUom(
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC001.input.databaseConnector,
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC001.input.apiID,
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC001.input.config,
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC001.output)[2])
	});

    test(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC002.description, async () => {

        const output = await UpdateAppSettingUomService.updateAppSettingUom(
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC002.input.databaseConnector,
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC002.input.apiID,
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC002.input.config,
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC002.output.message)        
	});

    test(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC003.description, async () => {

        const output = await UpdateAppSettingUomService.updateAppSettingUom(
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC003.input.databaseConnector,
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC003.input.apiID,
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC003.input.config,
            UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAppSettingUomServiceData.UPDATE_APPSETTINGUOM_TS001_TC003.output.message)        
	});

});
