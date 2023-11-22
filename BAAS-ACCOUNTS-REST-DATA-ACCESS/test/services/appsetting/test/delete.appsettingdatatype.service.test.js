/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete appsettingdatatype service class
**/

/**
 * Importing all required modules here
 */

const deleteAppSettingDataTypeServiceData = require("../data/delete.appsettingdatatype.service.data")
const deleteAppSettingDataTypeService = require("../../../../src/services/appsetting/delete.appsettingdatatype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAppSettingDataTypeService = new deleteAppSettingDataTypeService();
const DeleteAppSettingDataTypeServiceData = new deleteAppSettingDataTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingdatatype.ts.001] | FunctionPath : [src/services/appsetting/delete.appsettingdatatype.service.js/deleteOneAppSettingDataType()]", () => {


	test(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC001.description, async () => {

        const output = await DeleteAppSettingDataTypeService.deleteOneAppSettingDataType(
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC001.input.databaseConnector,
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC001.input.apiID,
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC001.input.config,
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC001.output)[2])
	});



    test(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC002.description, async () => {

        const output = await DeleteAppSettingDataTypeService.deleteOneAppSettingDataType(
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC002.input.databaseConnector,
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC002.input.apiID,
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC002.input.config,
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC002.output.message)        
	});



    test(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC003.description, async () => {

        const output = await DeleteAppSettingDataTypeService.deleteOneAppSettingDataType(
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC003.input.databaseConnector,
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC003.input.apiID,
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC003.input.config,
            DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAppSettingDataTypeServiceData.DELETE_ONE_APPSETTINGDATATYPE_TS001_TC003.output.message)        
	});

});
