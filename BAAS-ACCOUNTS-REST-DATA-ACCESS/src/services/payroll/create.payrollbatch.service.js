/**
* CreatedBy   : Dinesh
* CreatedTime : Dec 23 2022
* Description : This file contains create operation releated functions for payrollbatch schema
**/


/**
 * Importing all the required modules
 */
const {Prisma} = require("@prisma/client");
const commons = require("../../utils/commons");
const messages = require("../../utils/messages");

const payRollMock = require("../../mocks/payroll.mock.json");


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();


module.exports =  class createPayrollBatchService{

	/**
    * CreatedBy    : Dinesh
    * CreatedTime  : Dec 23 2022
    * ModifiedBy   : Dinesh
    * ModifiedTime : Dec 23 2022
    * Description  : This function stores a record in payrollbatch table
    **/
	async createOnePayrollBatch(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return payRollMock[apiID] }
			else {
				let duplicateRecord = await databaseConnector.PayrollBatch.findMany({
					where: input.filter || "null",
					select: { PayrollBatchID: true }
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
					
					let output = await databaseConnector.PayrollBatch.create({
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
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_PAYROLL_BATCH_CREATED_SUCCESSFULLY);
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