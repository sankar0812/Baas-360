/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : NOV 09 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : NOV 09 2023
 * Description  : This File contain rule for Category Table
 **/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const categoryInternal = require("../../../internals/dataaccess/category.internal");
/**
 * Initializing objects for all the imported classes
 */

const CategoryInternal = new categoryInternal();
const Commons = new commons();

module.exports = class addRootCategory {

        async addRootCategory(headers, input) {
            try{    

                const userInfo = {
                    ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                    ModifiedBy: input.UserInfo.ModifiedBy,
                    ModifiedDate : input.UserInfo.ModifiedDate                     
                };
                
                const categoryFilter ={
                    CategoryID  : input.CategoryInfo.CategoryID,
                    IsDeleted: false
                }
                const categoryFields ={
                    ...userInfo,
                    ParentCategoryID : input.CategoryInfo.ParentCategoryID,
                    Description     :input.CategoryInfo.Description

                }                
                const updatedCategory = await CategoryInternal.updateCategory(headers, categoryFilter, categoryFields)
                return updatedCategory.data
            }        
    catch (error) {
        console.log(error);
        throw Commons.generateServiceOutput(null, error.status, error.message);
    }

        }
}