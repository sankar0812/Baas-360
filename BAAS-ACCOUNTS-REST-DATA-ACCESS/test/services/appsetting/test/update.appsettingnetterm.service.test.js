

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update appsettingnetterm service class
**/

/**
 * Importing all required modules here
 */

const updateAppSettingNetTermServiceData = require("../data/update.appsettingnetterm.service.data")
const updateAppSettingNetTermService = require("../../../../src/services/appsetting/update.appsettingnetterm.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAppSettingNetTermService = new updateAppSettingNetTermService();
const UpdateAppSettingNetTermServiceData = new updateAppSettingNetTermServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingnetterm.ts.001] | FunctionPath : [src/services/appsetting/update.appsettingnetterm.service.js/updateAppSettingNetTerm()]", () => {

	test(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC001.description, async () => {

        const output = await UpdateAppSettingNetTermService.updateAppSettingNetTerm(
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC001.input.databaseConnector,
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC001.input.apiID,
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC001.input.config,
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC001.output)[2])
	});

    test(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC002.description, async () => {

        const output = await UpdateAppSettingNetTermService.updateAppSettingNetTerm(
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC002.input.databaseConnector,
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC002.input.apiID,
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC002.input.config,
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC002.output.message)        
	});

    test(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC003.description, async () => {

        const output = await UpdateAppSettingNetTermService.updateAppSettingNetTerm(
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC003.input.databaseConnector,
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC003.input.apiID,
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC003.input.config,
            UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAppSettingNetTermServiceData.UPDATE_APPSETTINGNETTERM_TS001_TC003.output.message)        
	});

});
