

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update packagetype service class
**/

/**
 * Importing all required modules here
 */

const updatePackageTypeServiceData = require("../data/update.packagetype.service.data")
const updatePackageTypeService = require("../../../../src/services/package/update.packagetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePackageTypeService = new updatePackageTypeService();
const UpdatePackageTypeServiceData = new updatePackageTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.packagetype.ts.001] | FunctionPath : [src/services/package/update.packagetype.service.js/updatePackageType()]", () => {

	test(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC001.description, async () => {

        const output = await UpdatePackageTypeService.updatePackageType(
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC001.input.databaseConnector,
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC001.input.apiID,
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC001.input.config,
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC001.output)[2])
	});

    test(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC002.description, async () => {

        const output = await UpdatePackageTypeService.updatePackageType(
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC002.input.databaseConnector,
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC002.input.apiID,
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC002.input.config,
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC002.output.message)        
	});

    test(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC003.description, async () => {

        const output = await UpdatePackageTypeService.updatePackageType(
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC003.input.databaseConnector,
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC003.input.apiID,
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC003.input.config,
            UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePackageTypeServiceData.UPDATE_PACKAGETYPE_TS001_TC003.output.message)        
	});

});
