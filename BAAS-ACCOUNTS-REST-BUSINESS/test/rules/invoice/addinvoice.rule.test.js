/**
 * CreatedBy    : Kannan
 * CreatedTime  : OCT 25 2023
 **/

const addInvoiceRule = require("../../../src/rules/invoice/add.invoice.rule");
const commons = require("../../../src/utils/commons")
const configAPI=require("../../../api.config.json")


const AddInvoiceRule = new addInvoiceRule(); 


describe("TEST SUITE FOR [AddInvoice] FUNCTION", () => {
  test("TEST API-ID SHOULD HAVE THE VALUE", async () => {
    const apiID = "accounts.api.rest.business.invoice.addinvoice.v1";

    const ConfigAPI = configAPI
    expect(apiID).toBe(Object.keys(ConfigAPI)[1])
  });

  test("TEST API-CONFIG SHOULD HAVE THE VALUE", async () => {
    const apiConfig = {
        ID: 2,
        Name: "ADD INVOICE",
        Method: "POST",
        Endpoint: "/api/rest/accounts/business/1.0.0/invoice/v1/add",
        IsAvailable: true,
        IsMockEnabled: false
      };
      const ConfigAPI = configAPI;
    expect(apiConfig).toStrictEqual(Object.values(ConfigAPI)[1])
  })



  test("TESTING IF AVAILABILTY FLAG WORKS IF IT IS DISABLE", async () => {
    const apiID = "accounts.api.rest.business.invoice.addinvoice.v1";
    const apiConfig = {
        ID: 2,
        Name: "ADD INVOICE",
        Method: "POST",
        Endpoint: "/api/rest/accounts/business/1.0.0/invoice/v1/add",
        IsAvailable: false,
        IsMockEnabled: true
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

      AddInvoiceRule.addInvoice(apiID, apiConfig, headers, input);

    expect(
      mockGenerateServiceOutputForAvalibalityNotEnabled.mock.calls
    ).toHaveLength(1);
  });

  test("TESTING IF AVAILABILTY FLAG WORKS IF IT IS DISABLE", async () => {
    const apiID = "accounts.api.rest.business.invoice.addinvoice.v1";
    const apiConfig = {
        ID: 2,
        Name: "ADD INVOICE",
        Method: "POST",
        Endpoint: "/api/rest/accounts/business/1.0.0/invoice/v1/add",
        IsAvailable: false,
        IsMockEnabled: true
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

      AddInvoiceRule.addInvoice(apiID, apiConfig, headers, input);

    expect(
      mockGenerateServiceOutputForAvalibalityNotEnabled.mock.calls
    ).toHaveLength(1);
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












