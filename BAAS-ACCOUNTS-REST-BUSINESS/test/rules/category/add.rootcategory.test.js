/**
 * CreatedBy    : Ayerathammal
 * CreatedTime  : Nov 20 2023
 * * Description  : This file contains unit test code for root category add
 **/
const addRootCategory = require("../../../src/rules/category/addrootcategory/core.rule");
const configAPI = require("../../../api.config.json");
const categoryMock = require("../../../src/mocks/category.mock.json");
const config = require("../../../config");

const AddRootCategory = new addRootCategory();
const Config = new config();

describe("TEST SUITE FOR [ADD CATEGORY] FUNCTION", () => {

  test("TEST API-ID SHOULD HAVE THE VALUE", async () => {

    const apiID = "accounts.api.rest.business.category.addrootcategory.v1";
    const ConfigAPI = configAPI;
    expect(apiID).toBe(Object.keys(ConfigAPI)[12]);
  });
  test("TEST API-CONFIG SHOULD HAVE THE VALUE", async () => {
    const apiConfig = {
      "ID": 13,
      "Name": "ADD ROOT CATEGORY",
      "Method": "POST",
      "Endpoint": "/api/rest/accounts/business/1.0.0/category/v1/addrootcategory",
      "IsAvailable": true,
      "IsMockEnabled": false
    };
    const ConfigAPI = configAPI;
    expect(apiConfig).toStrictEqual(Object.values(ConfigAPI)[12]);
  });

  test("TESTING IF MOCK RETURNS WORKS AS EXPECTED", async () => {
    const apiID = "accounts.api.rest.business.category.addrootcategory.v1";
    const apiConfig = {
      "ID": 13,
      "Name": "ADD ROOT CATEGORY",
      "Method": "POST",
      "Endpoint": "/api/rest/accounts/business/1.0.0/category/v1/addrootcategory",
      "IsAvailable": true,
      "IsMockEnabled": true
    };
    const headers = {};
    const input = {};
    const mockGenerateServiceOutputForMockEnabled = categoryMock[apiID];
    const Actualreturn = await AddRootCategory.coreAddRootCategory(
      apiID,
      apiConfig,
      headers,
      input
    );
    expect(mockGenerateServiceOutputForMockEnabled).toEqual(Actualreturn);
  });

  test("CHECK IF FUNCTION SHOWS THE ERROR MESSAGE FOR UNAUTHORIZED ACCESS", () => {
    const SERVICE_AUTH = {
      AUTH_USERNAME: "QP0192923232LD",
      AUTH_PASSWORD: "927NBGJJ0283HKA74782",
    };

    expect(SERVICE_AUTH).toEqual(Config.SERVICE_AUTH);
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
