/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete packagetype service class
**/

/**
 * Importing all required modules here
 */

const deletePackageTypeServiceData = require("../data/delete.packagetype.service.data")
const deletePackageTypeService = require("../../../../src/services/package/delete.packagetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePackageTypeService = new deletePackageTypeService();
const DeletePackageTypeServiceData = new deletePackageTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.packagetype.ts.001] | FunctionPath : [src/services/package/delete.packagetype.service.js/deleteOnePackageType()]", () => {


	test(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC001.description, async () => {

        const output = await DeletePackageTypeService.deleteOnePackageType(
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC001.input.databaseConnector,
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC001.input.apiID,
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC001.input.config,
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC001.output)[2])
	});



    test(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC002.description, async () => {

        const output = await DeletePackageTypeService.deleteOnePackageType(
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC002.input.databaseConnector,
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC002.input.apiID,
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC002.input.config,
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC002.output.message)        
	});



    test(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC003.description, async () => {

        const output = await DeletePackageTypeService.deleteOnePackageType(
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC003.input.databaseConnector,
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC003.input.apiID,
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC003.input.config,
            DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePackageTypeServiceData.DELETE_ONE_PACKAGETYPE_TS001_TC003.output.message)        
	});

});
