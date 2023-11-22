/**
 * CreatedBy    : Vinoth Kumar S
 * CreatedTime  : OCT 25 2023
 * * Description  : This file contains unit test code for pricelist add
 **/

const commons = require("../../../src/utils/commons")
const configAPI = require("../../../api.config.json")


describe("TEST SUITE FOR [Paymentadd] FUNCTION", () => {
    test("TEST API-ID SHOULD HAVE THE VALUE", async () => {
        const apiID = "accounts.api.rest.business.customer.payment.v1";
        const ConfigAPI = configAPI
        expect(apiID).toBe(Object.keys(ConfigAPI)[5])
    });

    test("TEST API-CONFIG SHOULD HAVE THE VALUE", async () => {
        const apiConfig = {
            ID: 6,
            Name: "CREATE CUSTOMER PAYMENT",
            Method: "POST",
            Endpoint: "/api/rest/accounts/business/1.0.0/customer/v1/payment",
            IsAvailable: true,
            IsMockEnabled: false
        };
        const ConfigAPI = configAPI;
        expect(apiConfig).toStrictEqual(Object.values(ConfigAPI)[5])
    });

  test("TESTING ERROR MASSAGE FOR UNAUTHORIZED ACCESS", async () => {
    
    const mockgenerateServiceOutputForAvalibalityNotEnabled = jest.fn(() => {
      return {
        status: 401,
        message: "Basic authentication failed, incorrect username or password",
        timestamp: new Date().toLocaleString()
      };
    });
 
    commons.prototype.getUnauthorizedResponse = mockgenerateServiceOutputForAvalibalityNotEnabled;    
    expect(
        mockgenerateServiceOutputForAvalibalityNotEnabled.mock.calls
    ).toHaveLength(0);
 
  });

  test("TESTING THE INTERNAL IMPLEMENTATION OF THE FUNCTION", async ()=>{
 

    // Mocking Internal function
    const mockGenerateServiceOutputForAvalibalityNotEnabled = jest.fn(() =>{
        return {
          data: null, 
          status: 400, 
          message: "Avaliability flag has not been enabled"}
    })

    commons.prototype.generateServiceOutputForAvalibalityNotEnabled = mockGenerateServiceOutputForAvalibalityNotEnabled

    // Test Assertions
    expect(mockGenerateServiceOutputForAvalibalityNotEnabled.mock.calls).toHaveLength(0);
})


})