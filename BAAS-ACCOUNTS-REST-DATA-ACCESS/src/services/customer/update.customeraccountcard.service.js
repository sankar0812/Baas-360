/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains update operation releated functions for customeraccountcard schema
**/


/**
 * Importing all the required modules
 */

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const customerMock = require("../../mocks/customer.mock.json");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();


module.exports = class updateCustomerAccountCardService {

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : jan 09 2023
	* ModifiedBy   : Dinesh
	* ModifiedTime : jan 10 2023
	* Description  : This function update customeraccountcard
	**/
	async updateCustomerAccountCard(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return customerMock[apiID] }
			else {
				let output = await databaseConnector.CustomerAccountCard.updateMany({
					where: input.filter,
					data: input.fields
				}).catch((error) => {
					Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if(output.count==0){
					return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_CUSTOMERACCOUNTCARD_NOT_FOUND);
				}
				else{
				return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_CUSTOMERACCOUNTCARD_UPDATED_SUCCESSFULLY);
				}
			}
		} catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}
	}
}