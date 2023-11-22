# Application Name

Baas Accounts

# Service Name

Rest Business

# Application Version

1.0.0

# Description

Baas Accounts is a Built In Application of Baas 360 framework.

# Features
>
> Current development features:

* Invoice Management
* Product Management
* Customer Management

# Commands

Please use this below commands to clone the code
> Make sure to replace the develop branch with your feature branch name

```yml
git clone https://goveindia@dev.azure.com/goveindia/Baas-360/_git/BAAS-ACCOUNTS-REST-BUSINESS -b develop
```

To install the required NPM packages run the following command

```yml
npm install
```

To run the application run the following command

```yml
npm start
```

To build the application use the following command

```yml
npm run build
```

# Usage

Baas Accounts will be used to manage their organization's accounts details.

# Configuration

* Add `config.js` to the root directory of your next js project and place the following contents in it.
  This contains all the configuration which identifies the service in the platform

```yml
BAAS_ACCOUNTS:
    # Binding the platform on top of which service is going to run

  DEVELOPMENT_SERVER :
    BAAS_ACCOUNTS_REST_DATA_ACCESS: "http://dev1.baas360.alitasys.com:6001"

  TEST_SERVER : 
      BAAS_ACCOUNTS_REST_DATA_ACCESS: "http://qa1.baas360.alitasys.com:6001"

    # Credentials to access that specific instance
    BAAS_ACCOUNTS_REST_DATA_ACCESS_USERNAME: "QP0192923232LD"
    BAAS_ACCOUNTS_REST_DATA_ACCESS_PASSWORD: "927NBGJJ0283HKA74782"

CONNECTOR:
    # Unique code provided for connector type which is used by this service
    CONNECTOR_TYPE: "POSTGRES-SERVER-DATABASE"

SERVICE:
    # Unique key which was generated and provided to the service
    SERVICE_KEY: "a0054e28-4dcd-4ac3-b2a8-d32a2375a470"
    # Currently available launchers 'NODEMON' / 'DOCKER'
    SERVICE_LAUNCHER: "NODEMON"
```

# Contributing
>
> The major contribution to this project is follows.

* Javascript
* ExpressJS
* Node
* Jest for Unit Testing

# Contact

| Name | Role  | Email  |
| ---- | ----- | ------ |
| Dinesh | Architect | <dineshpandian@gove.co> |
| RaviBalan | Developer | <ravibalan.chithamparavel@gove.co> |
| Ayerathammal | Developer | <ayerathammal.paramasivan@gove.co> |
| Venu Gopal | Developer | <venugopal.annamalai@gove.co> |
| Kannan | Developer | <kannan.sundaramoorthy@gove.co> |
| Vinoth Kumar | Developer | <vinoth.kumar@gove.co> |

# Release History

| Release Version | Sprint | Module  | Features | Date  | Environment  |
| ---- | ----- | ------ |------ | ------- | --------|
| 1.0.0 | Sprint6 | Invoice | Download Invoice | 10 Oct, 2023 | QA  |
| 2.0.0 | Sprint7 | Invoice, Customer, Price | Invoice - Invoice Add , Generate Number for Invoice and Invoice Status,  Customer - Add Customer Accounts, get PriceList items based on Customer and Customer Payment, Price -  Add Price | 25 Oct, 2023 | QA   |
