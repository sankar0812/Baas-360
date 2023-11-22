/**
 * CreatedBy    : Venugopal
 * CreatedTime  : Nov 1 2023
 * * Description  : This file contains unit test code for Customer add
 **/
const addCustomerAccount = require("../../../src/rules/customer/addcustomeraccount.customer.rule");
const configAPI = require("../../../api.config.json");
const customerMock = require("../../../src/mocks/customer.mock.json");
const config = require("../../../config");

const AddCustomerAccount = new addCustomerAccount();
const Config = new config();

describe("TEST SUITE FOR [addCustomerAccount] FUNCTION", () => {
  test("TEST API-ID SHOULD HAVE THE VALUE", async () => {
    const apiID = "accounts.api.rest.business.customer.addcustomeraccount.v1";
    const ConfigAPI = configAPI;
    expect(apiID).toBe(Object.keys(ConfigAPI)[4]);
  });
  test("TEST API-CONFIG SHOULD HAVE THE VALUE", async () => {
    const apiConfig = {
      ID: 5,
      Name: "ADD CUSTOMER ACCOUNT",
      Method: "POST",
      Endpoint:
        "/api/rest/accounts/business/1.0.0/customer/v1/addcustomeraccount",
      IsAvailable: true,
      IsMockEnabled: false,
    };
    const ConfigAPI = configAPI;
    expect(apiConfig).toStrictEqual(Object.values(ConfigAPI)[4]);
  });
  test("TESTING IF AVAILABILTY FLAG WORKS IF IT IS DISABLE", async () => {
    const apiID = "accounts.api.rest.business.customer.addcustomeraccount.v1";
    const apiConfig = {
      ID: 5,
      Name: "ADD CUSTOMER ACCOUNT",
      Method: "POST",
      Endpoint:
        "/api/rest/accounts/business/1.0.0/customer/v1/addcustomeraccount",
      IsAvailable: false,
      IsMockEnabled: true,
    };
    const headers = {};
    const input = {};
    const mockGenerateServiceOutputForAvalibalityNotEnabled = {
      data: null,
      message: "Avaliability flag has not been enabled",
      status: 400,
    };
    const Actualreturn = await AddCustomerAccount.addCustomerAccount(
      apiID,
      apiConfig,
      headers,
      input
    );
    expect(mockGenerateServiceOutputForAvalibalityNotEnabled).toEqual(
      Actualreturn
    );
  });
  test("TESTING IF MOCK RETURNS WORKS AS EXPECTED", async () => {
    const apiID = "accounts.api.rest.business.customer.addcustomeraccount.v1";
    const apiConfig = {
      ID: 5,
      Name: "ADD CUSTOMER ACCOUNT",
      Method: "POST",
      Endpoint:
        "/api/rest/accounts/business/1.0.0/customer/v1/addcustomeraccount",
      IsAvailable: true,
      IsMockEnabled: true,
    };
    const headers = {};
    const input = {};
    const mockGenerateServiceOutputForMockEnabled = customerMock[apiID];
    const Actualreturn = await AddCustomerAccount.addCustomerAccount(
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

  test("CHECK IF THE FUNCTION RETURNS WITH CORRECT REQUEST BODY FIELDS AND VALUE TYPE", async () => {
    const input = {
      UserInfo: {
        MerchantID: 1,
        TenantID: 1,
        CustomerID: 1,
        CurrencyID: 1,
        CreatedAuthID: 1,
        CreatedBy: "dinesh",
      },
      CustomerAccountInfo: {
        AccountNumber: "PENSKE-ALITA-016",
        AccountCode: "PNAL-08",
        DisplayName: "Penske Tolling",
        OpenedDate: "2020-04-23T00:54:16.000Z",
        Username: "Penske",
        Password: "PENSKE",
        AutoReplenishAmount: 0,
        LowBalanceThreshold: 0,
        CreatedAuthID: 1,
        CreatedBy: "Dinesh",
      },
    };
    expect(input).toEqual({
      UserInfo: expect.objectContaining({
        MerchantID: expect.any(Number),
        TenantID: expect.any(Number),
        CustomerID: expect.any(Number),
        CurrencyID: expect.any(Number),
        CreatedAuthID: expect.any(Number),
        CreatedBy: expect.any(String),
      }),
      CustomerAccountInfo: expect.objectContaining({
        AccountNumber: expect.any(String),
        AccountCode: expect.any(String),
        DisplayName: expect.any(String),
        OpenedDate: expect.any(String),
        Username: expect.any(String),
        Password: expect.any(String),
        AutoReplenishAmount: expect.any(Number),
        LowBalanceThreshold: expect.any(Number),
        CreatedAuthID: expect.any(Number),
        CreatedBy: expect.any(String),
      }),
    });
  });
});
