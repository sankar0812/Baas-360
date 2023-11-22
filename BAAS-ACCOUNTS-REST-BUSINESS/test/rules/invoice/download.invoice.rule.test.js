/**
 * CreatedBy    : Venugopal
 * CreatedTime  : OCT 7 2023
 **/

const downloadInvoiceRule = require("../../../src/rules/invoice/download.invoice.rule");
const commons = require("../../../src/utils/commons")
const configAPI = require("../../../api.config.json")

const DownloadInvoiceRule = new downloadInvoiceRule();

describe("TEST SUITE FOR [downloadInvoice] FUNCTION", () => {
  test("TEST API-ID SHOULD HAVE THE VALUE", async () => {
    const apiID = "accounts.api.rest.business.invoice.downloadinvoice.v1";
    const ConfigAPI = configAPI
    expect(apiID).toBe(Object.keys(ConfigAPI)[0])
  });
  test("TEST API-CONFIG SHOULD HAVE THE VALUE", async () => {
    const apiConfig = {
      ID: 1,
      Name: "DOWNLOAD INVOICE",
      Method: "POST",
      Endpoint: "/api/rest/accounts/business/1.0.0/invoice/v1/download",
      IsAvailable: true,
      IsMockEnabled: false,
    };
    const ConfigAPI = configAPI;
    expect(apiConfig).toStrictEqual(Object.values(ConfigAPI)[0])
  })
  test("TESTING IF AVAILABILTY FLAG WORKS IF IT IS DISABLE", async () => {
    const apiID = "accounts.api.rest.business.invoice.downloadinvoice.v1";
    const apiConfig = {
      ID: 1,
      Name: "DOWNLOAD INVOICE",
      Method: "POST",
      Endpoint: "/api/rest/accounts/business/1.0.0/invoice/v1/download",
      IsAvailable: false,
      IsMockEnabled: true,
    };
    const headers = {};
    const input = {};
    const mockGenerateServiceOutputForAvalibalityNotEnabled ={
        data: null,
        status: 400,
        message: "Avaliability flag has not been enabled",
      };

    const Actualreturn = await DownloadInvoiceRule.downloadInvoice(apiID, apiConfig, headers, input);

    expect(
      mockGenerateServiceOutputForAvalibalityNotEnabled
    ).toEqual(Actualreturn);
  });

  test("TESTING IF AVAILABILTY FLAG WORKS IF IT IS DISABLE", async () => {
    const apiID = "accounts.api.rest.business.invoice.downloadinvoice.v1";
    const apiConfig = {
      ID: 1,
      Name: "DOWNLOAD INVOICE",
      Method: "POST",
      Endpoint: "/api/rest/accounts/business/1.0.0/invoice/v1/download",
      IsAvailable: true,
      IsMockEnabled: false,
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

    DownloadInvoiceRule.downloadInvoice(apiID, apiConfig, headers, input);

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
});












