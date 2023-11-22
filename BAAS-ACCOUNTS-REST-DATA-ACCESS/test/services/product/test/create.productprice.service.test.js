/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create productprice service class
**/

/**
 * Importing all required modules here
 */

const createProductPriceServiceData = require("../data/create.productprice.service.data")
const createProductPriceService = require("../../../../src/services/product/create.productprice.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProductPriceService = new createProductPriceService();
const CreateProductPriceServiceData = new createProductPriceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productprice.ts.001] | FunctionPath : [src/services/product/create.productprice.service.js/createOneProductPrice()]", () => {


	test(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC001.description, async () => {

        const output = await CreateProductPriceService.createOneProductPrice(
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC001.input.databaseConnector,
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC001.input.apiID,
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC001.input.config,
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC001.output)[2])
	});



    test(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC002.description, async () => {

        const output = await CreateProductPriceService.createOneProductPrice(
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC002.input.databaseConnector,
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC002.input.apiID,
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC002.input.config,
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC002.output.message)        
	});



    test(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC003.description, async () => {

        const output = await CreateProductPriceService.createOneProductPrice(
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC003.input.databaseConnector,
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC003.input.apiID,
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC003.input.config,
            CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProductPriceServiceData.CREATE_ONE_PRODUCTPRICE_TS001_TC003.output.message)        
	});

});