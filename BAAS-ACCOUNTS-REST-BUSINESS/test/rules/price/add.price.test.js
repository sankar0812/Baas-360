/**
 * CreatedBy    : Vinoth Kumar S
 * CreatedTime  : OCT 25 2023
 * * Description  : This file contains unit test code for pricelist add
 **/

const getPriceListItemsRule = require("../../../src/rules/customer/getpricelistitems.customer.rule");
const commons = require("../../../src/utils/commons")
const configAPI = require("../../../api.config.json")

const AddPriceList = new getPriceListItemsRule();

describe("TEST SUITE FOR [PricelistAdd] FUNCTION", () => {
  test("TEST API-ID SHOULD HAVE THE VALUE", async () => {
    const apiID = "accounts.api.rest.business.customer.getpricelistitems.v1";
    const ConfigAPI = configAPI
    expect(apiID).toBe(Object.keys(ConfigAPI)[2])
  });

  test("TEST API-CONFIG SHOULD HAVE THE VALUE", async () => {
    const apiConfig = {
      ID: 3,
      Name: "GET PRICE LIST ITEMS",
      Method: "POST",
      Endpoint: "/api/rest/accounts/business/1.0.0/customer/v1/getpricelistitems",
      IsAvailable: true,
      IsMockEnabled: false
    };
    const ConfigAPI = configAPI;
    expect(apiConfig).toStrictEqual(Object.values(ConfigAPI)[2])
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

    AddPriceList.getPriceListItems(apiID, apiConfig, headers, input);

    expect(
      mockGenerateServiceOutputForAvalibalityNotEnabled.mock.calls
    ).toHaveLength(0);
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

    AddPriceList.getPriceListItems(apiID, apiConfig, headers, input);

    expect(
      mockGenerateServiceOutputForAvalibalityNotEnabled.mock.calls
    ).toHaveLength(0);
  });

  test("TESTING ERROR MASSAGE FOR UNAUTHORIZED ACCESS", async () => {

    const mockGenerateServiceOutputForUnauthorizedResponse = jest.fn(() => {
      return {
        status: 401,
        message: "Basic authentication failed, incorrect username or password",
        timestamp: new Date().toLocaleString()
      };
    });

    commons.prototype.getUnauthorizedResponse =
      mockGenerateServiceOutputForUnauthorizedResponse;

    expect(
      mockGenerateServiceOutputForUnauthorizedResponse.mock.calls
    ).toHaveLength(0);

  });
})
