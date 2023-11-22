/**
 * CreatedBy    : Kannan
 * CreatedTime  : Nov 1 2023
 * * Description  : This file contains unit test code for Getpricelistitems
 **/
 
const getPriceListItemsRule=require("../../../src/rules/customer/getpricelistitems.customer.rule");
const commons = require("../../../src/utils/commons");
const configAPI = require("../../../api.config.json");
const config = require("../../../config");
const GetPriceListItemsRule = new getPriceListItemsRule(); 

const Config = new config();
describe("TEST SUITE FOR [Getpricelistitems] FUNCTION", () => {
    test("TEST API-ID SHOULD HAVE THE VALUE", () => {
        const apiID = "accounts.api.rest.business.customer.getpricelistitems.v1";
        const ConfigAPI = configAPI;
        expect(apiID).toBe(Object.keys(ConfigAPI)[2]);
    });

    test("TEST API-CONFIG SHOULD HAVE THE VALUE", () => {
        const apiConfig = {
        ID: 3,
        Name: "GET PRICE LIST ITEMS",
        Method: "POST",
        Endpoint: "/api/rest/accounts/business/1.0.0/customer/v1/getpricelistitems",
        IsAvailable: true,
        IsMockEnabled: false
        };
        const ConfigAPI = configAPI;
        expect(apiConfig).toStrictEqual(Object.values(ConfigAPI)[2]);
    });

    
  test("TESTING IF AVAILABILTY FLAG WORKS IF IT IS DISABLE", async () => {
    const apiID = "accounts.api.rest.business.customer.getpricelistitems.v1";
    const apiConfig = {
        ID: 3,
        Name: "GET PRICE LIST ITEMS",
        Method: "POST",
        Endpoint: "/api/rest/accounts/business/1.0.0/customer/v1/getpricelistitems",
        IsAvailable: true,
        IsMockEnabled: false
    };
    const headers = {};
    const input = {};
    const mockGenerateServiceOutputForAvalibalityNotEnabled = jest.fn(() => {
      return {
        data: null,
        status: 400,
        message: "Avaliability flag has not been enabled",
      };
    });
    

    commons.prototype.generateServiceOutputForAvalibalityNotEnabled =
      mockGenerateServiceOutputForAvalibalityNotEnabled;

      GetPriceListItemsRule.getPriceListItems(apiID, apiConfig, headers, input);

    expect(
      mockGenerateServiceOutputForAvalibalityNotEnabled.mock.calls
    ).toHaveLength(0);
  });
  test("CHECK IF FUNCTION SHOWS THE ERROR MESSAGE FOR UNAUTHORIZED ACCESS", () => {
    const SERVICE_AUTH = {
	AUTH_USERNAME : "QP0192923232LD",
    AUTH_PASSWORD : "927NBGJJ0283HKA74782"
	}

    expect(SERVICE_AUTH).toEqual(Config?.SERVICE_AUTH)
  });
  test("CHECK IF FUNCTION SERVICE KEY,HOST,PORT AND NAME", () => {
    const serviceKey = "SER-KEY-006";
    const serviceName = "Baas Accounts Rest Businesss";
    const serviceHost = "localhost";
    const servicePort = "5005";
 
    expect(serviceKey).toEqual(Config.SERVICE_KEY);
    expect(serviceName).toEqual(Config.SERVICE_NAME);
    expect(serviceHost).toEqual(Config.SERVICE_HOST);
    expect(servicePort).toEqual(Config.SERVICE_PORT);
  });
  test("CHECK IF FUNCTION SERVICE_REMOTE", () => {
    const SERVICE_REMOTE = {
      "ACCOUNTS-REST-DATA-ACCESS": {
        REMOTE_SERVICE_NAME: "Accounts Data Access Layer",
        REMOTE_SERVICE_URL: "http://dev1.baas360.alitasys.com:6001",
        REMOTE_SERVICE_AUTH_API_KEY: "0232KLa123cse23423",
        REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
        REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
      },
    };
 
    expect(SERVICE_REMOTE).toEqual(Config.SERVICE_REMOTE);
  });

  
 
     
});


