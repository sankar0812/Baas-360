/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 11 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 11 2023
* Description : This file contains all the business rules for create Product Package
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const productMock = require("../../../mocks/product.mock.json");
const addPackageRule = require("../addpackage/1.add.package.rule");
const transformOutputRule = require("../addpackage/2.transform.output.rule")

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const AddPackageRule = new addPackageRule();
const TransformOutputRule = new transformOutputRule();



module.exports = class addPackageCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 11 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 11 2023
    * Description  : This function add the information for product 
    **/
    async addPackageCore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                let addPackage = await AddPackageRule.addPackage(headers, input)
                let PackageOutput = await TransformOutputRule.addOutput(addPackage)
                return PackageOutput
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}