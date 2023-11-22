/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete appsettinguomtype service class
**/

/**
 * Importing all required modules here
 */

const deleteAppSettingUomTypeServiceData = require("../data/delete.appsettinguomtype.service.data")
const deleteAppSettingUomTypeService = require("../../../../src/services/appsetting/delete.appsettinguomtype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAppSettingUomTypeService = new deleteAppSettingUomTypeService();
const DeleteAppSettingUomTypeServiceData = new deleteAppSettingUomTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguomtype.ts.001] | FunctionPath : [src/services/appsetting/delete.appsettinguomtype.service.js/deleteOneAppSettingUomType()]", () => {


	test(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC001.description, async () => {

        const output = await DeleteAppSettingUomTypeService.deleteOneAppSettingUomType(
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC001.input.databaseConnector,
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC001.input.apiID,
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC001.input.config,
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC001.output)[2])
	});



    test(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC002.description, async () => {

        const output = await DeleteAppSettingUomTypeService.deleteOneAppSettingUomType(
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC002.input.databaseConnector,
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC002.input.apiID,
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC002.input.config,
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC002.output.message)        
	});



    test(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC003.description, async () => {

        const output = await DeleteAppSettingUomTypeService.deleteOneAppSettingUomType(
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC003.input.databaseConnector,
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC003.input.apiID,
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC003.input.config,
            DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAppSettingUomTypeServiceData.DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC003.output.message)        
	});

});
