/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete appsettinguom service class
**/

/**
 * Importing all required modules here
 */

const deleteAppSettingUomServiceData = require("../data/delete.appsettinguom.service.data")
const deleteAppSettingUomService = require("../../../../src/services/appsetting/delete.appsettinguom.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAppSettingUomService = new deleteAppSettingUomService();
const DeleteAppSettingUomServiceData = new deleteAppSettingUomServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguom.ts.001] | FunctionPath : [src/services/appsetting/delete.appsettinguom.service.js/deleteOneAppSettingUom()]", () => {


	test(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC001.description, async () => {

        const output = await DeleteAppSettingUomService.deleteOneAppSettingUom(
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC001.input.databaseConnector,
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC001.input.apiID,
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC001.input.config,
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC001.output)[2])
	});



    test(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC002.description, async () => {

        const output = await DeleteAppSettingUomService.deleteOneAppSettingUom(
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC002.input.databaseConnector,
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC002.input.apiID,
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC002.input.config,
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC002.output.message)        
	});



    test(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC003.description, async () => {

        const output = await DeleteAppSettingUomService.deleteOneAppSettingUom(
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC003.input.databaseConnector,
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC003.input.apiID,
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC003.input.config,
            DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAppSettingUomServiceData.DELETE_ONE_APPSETTINGUOM_TS001_TC003.output.message)        
	});

});
