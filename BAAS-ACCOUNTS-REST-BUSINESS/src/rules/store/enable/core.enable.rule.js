/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : NOV 09 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : NOV 09 2023
 * Description  : This file contains the all api endpoint to function mapping for all invoice module
 **/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const storeMock = require("../../../mocks/store.mock.json");
const messages = require("../../../utils/messages.js")
const getPriceListStoreRule = require("./1.getPriceListStore.store.rule")
const getPriceListRule = require("./2.getPriceList.store")
const enableStoreRule = require("./3.enable.store.rule")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const GetPriceListStoreRule = new getPriceListStoreRule();
const GetPriceListRule = new getPriceListRule();
const EnableStoreRule = new enableStoreRule();

module.exports = class enableStoreCoreRule {

    /**
     * CreatedBy    : RaviBalan
     * CreatedTime  : NOV 09 2023
     * ModifiedBy   : RaviBalan
     * ModifiedTime : NOV 09 2023
     * Description  : This file contains the all api endpoint to function mapping for all invoice module
     **/

    async enableCore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
            if (config?.IsMockEnabled) { return storeMock[apiID] }
            else {
                let GetPriceListStoreRuleData = await GetPriceListStoreRule.getPriceListStore(headers, input)
                let GetPriceListRuleData = await GetPriceListRule.getPriceList(headers, GetPriceListStoreRuleData)
                let EnableStoreRuleData = await EnableStoreRule.enableStore(headers, GetPriceListRuleData)

                let output =
                {
                    GetPriceListStoreRuleDataInfo: GetPriceListStoreRuleData.data,
                    GetPriceListRuleDataInfo: GetPriceListRuleData,
                    EnableStoreRuleDataInfo: EnableStoreRuleData.data
                }
                return Commons.generateServiceOutput(output.data, 200, Messages.MESSAGE_STORE_ENABLE)
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}