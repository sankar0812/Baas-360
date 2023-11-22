/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete appsettingnetterm service class
**/

/**
 * Importing all required modules here
 */

const deleteAppSettingNetTermServiceData = require("../data/delete.appsettingnetterm.service.data")
const deleteAppSettingNetTermService = require("../../../../src/services/appsetting/delete.appsettingnetterm.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAppSettingNetTermService = new deleteAppSettingNetTermService();
const DeleteAppSettingNetTermServiceData = new deleteAppSettingNetTermServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingnetterm.ts.001] | FunctionPath : [src/services/appsetting/delete.appsettingnetterm.service.js/deleteOneAppSettingNetTerm()]", () => {


	test(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC001.description, async () => {

        const output = await DeleteAppSettingNetTermService.deleteOneAppSettingNetTerm(
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC001.input.databaseConnector,
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC001.input.apiID,
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC001.input.config,
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC001.output)[2])
	});



    test(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC002.description, async () => {

        const output = await DeleteAppSettingNetTermService.deleteOneAppSettingNetTerm(
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC002.input.databaseConnector,
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC002.input.apiID,
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC002.input.config,
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC002.output.message)        
	});



    test(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC003.description, async () => {

        const output = await DeleteAppSettingNetTermService.deleteOneAppSettingNetTerm(
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC003.input.databaseConnector,
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC003.input.apiID,
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC003.input.config,
            DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAppSettingNetTermServiceData.DELETE_ONE_APPSETTINGNETTERM_TS001_TC003.output.message)        
	});

});
