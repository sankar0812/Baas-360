/**
@CreatedBy : Dinesh
@CreatedDate : Jan 12 2023
@Description : This File Contains Delete Operation Related Function For department Schema
 */

/**
 * Importing all the required modules
 */

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const departmentMock = require("../../mocks/department.mock.json");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

module.exports = class deleteDepartmentService {

	/** */
	async deleteOneDepartment(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return departmentMock[apiID] }
			else {
				let output = await databaseConnector.Department.deleteMany({
					where: {
						DepartmentID: parseInt(input.departmentid)
					},
				}).catch((error) => {
					throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if(output.count==0){
					return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_DEPARTMENT_NOT_FOUND);
				}
				else{
				return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_DEPARTMENT_DELETED_SUCCESSFULLY);
			}
			}
		}
		catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}

	}

}