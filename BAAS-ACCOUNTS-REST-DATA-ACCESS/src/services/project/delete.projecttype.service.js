/**
@CreatedBy : Dinesh
@CreatedDate : Jan 12 2023
@Description : This File Contains Delete Operation Related Function For projecttype Schema
 */

/**
 * Importing all the required modules
 */

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const projectMock = require("../../mocks/project.mock.json");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

module.exports = class deleteProjectTypeService {

	/** */
	async deleteOneProjectType(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return projectMock[apiID] }
			else {
				let output = await databaseConnector.ProjectType.deleteMany({
					where: {
						ProjectTypeID: parseInt(input.projecttypeid)
					},
				}).catch((error) => {
					throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if(output.count==0){
					return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_PROJECTTYPE_NOT_FOUND);
				}
				else{
				return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_PROJECTTYPE_DELETED_SUCCESSFULLY);
			}
			}
		}
		catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}

	}

}