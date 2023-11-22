
/**
* CreatedBy    : Dinesh
* CreatedTime  : Jan 05 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 05 2022
* Description  : This file contains all the configurations needed for the service
**/

module.exports = class config{

	// Basic Configuration
	ACCOUNTS_REST_DATA_ACCESS_NAME = "Accounts-Rest-Data-Access!";
	ACCOUNTS_REST_DATA_ACCESS_HOST = "localhost";
	ACCOUNTS_REST_DATA_ACCESS_PORT = "3000";

	ACCOUNTS_REST_DATA_ACCESS_USERNAME = "QP0192923232LD";
	ACCOUNTS_REST_DATA_ACCESS_PASSWORD = "927NBGJJ0283HKA74782";

	// Accounts-Rest-Data-Access datatabase Connection Configurations
	ACCOUNTS_REST_DATA_ACCESS_DEFAULT_DATABASE_CONNECTION_ENABLED = true;

	ACCOUNTS_REST_DATA_ACCESS_DATABASE_CONNECTIONS = {
			isDefault    : true,
			databaseURL  : "postgresql://postgres-dev:PosTgrEs@23@dev1.baas360.alitasys.com:7000/Baas-Accounts-BBOS-03NOV2023",
			databaseName : "Baas-Accounts-BBOS-03NOV2023"
	};
};