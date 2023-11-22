/**
* CreatedBy   : Dinesh
* CreatedTime : Dec 23 2022
* Description : This file contains create operation releated functions for assetusage schema
**/


/**
 * Importing all the required modules
 */
const {Prisma} = require("@prisma/client");
const commons = require("../../utils/commons");
const messages = require("../../utils/messages");

const assetMock = require("../../mocks/asset.mock.json");


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();


module.exports =  class createAssetUsageService{

	/**
    * CreatedBy    : Dinesh
    * CreatedTime  : Dec 23 2022
    * ModifiedBy   : Dinesh
    * ModifiedTime : Dec 23 2022
    * Description  : This function stores a record in assetusage table
    **/
	async createOneAssetUsage(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return assetMock[apiID] }
			else {
				let duplicateRecord = await databaseConnector.AssetUsage.findMany({
					where: input.filter || "null",
					select: { AssetUsageID: true }
				}).catch((error) => {
						if (error instanceof Prisma.PrismaClientValidationError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else if (error instanceof Prisma.PrismaClientKnownRequestError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else {
							throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
						}
				});

				var filters = input.filter
				
				if (duplicateRecord.length === 0 || Object.keys(filters).length === 0) {
					
					let output = await databaseConnector.AssetUsage.create({
						data: input.data,
					}).catch((error) => {
						if (error instanceof Prisma.PrismaClientValidationError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else if (error instanceof Prisma.PrismaClientKnownRequestError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else {
							throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
						}
					});
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_ASSET_USAGE_CREATED_SUCCESSFULLY);
				}
				else {
					throw Commons.generateServiceOutput(null, 409, Messages.MESSAGE_DUPLICATE_RECORD)
				}
			}
		} catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, error.message);
		}

	}
};