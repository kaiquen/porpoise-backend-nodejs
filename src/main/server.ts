import "reflect-metadata";

import { DataSource } from "typeorm";

import { DatabaseConfig } from "./config/database-config";
import { EnvConfig } from "./config/env";

import app from "./config/app";

let connection:DataSource;

(async () => {
    switch(EnvConfig.getApiAmbient()) {
        case 'development':
            connection = await DatabaseConfig.createConnectionDevelopment();
        break;    
        case 'production':
            connection = await DatabaseConfig.createConnectionProduction();
        break;    
    }  

    connection.initialize()
        .then(() => {
            app.listen(EnvConfig.getApiPort(), () => console.log(`Server running on port ${EnvConfig.getApiPort()}`));
        })
        .catch((error) => console.log(error));
})()

export { connection }
