import { EnvConfig } from './env';
import { DataSource } from 'typeorm';

export class DatabaseConfig {
    public static async createConnectionDevelopment():Promise<DataSource> {
        const AppDataSource = new DataSource({
            type: "postgres",
            host: EnvConfig.getPostgresHost(),
            port: EnvConfig.getPostgresPort(),
            username: EnvConfig.getPostgresUser(),
            password: EnvConfig.getPostgresPassword(),
            database: "porpoise",
            synchronize: true,
            cache: true,
            logging: false,
            entities: ["src/infra/postgres/entities/**/*.{ts,js}"],
            migrations: [],
            subscribers: [],
        })

        return AppDataSource;
    }

    public static async createConnectionProduction():Promise<DataSource> {
        const AppDataSource = new DataSource({
            type: "postgres",
            host: EnvConfig.getPostgresHost(),
            port: EnvConfig.getPostgresPort(),
            username: EnvConfig.getPostgresUser(),
            password: EnvConfig.getPostgresPassword(),
            database: "porpoise",
            synchronize: true,
            cache: true,
            logging: false,
            entities: ["src/infra/postgres/entities/**/*.{ts,js}"],
            migrations: [],
            subscribers: [],
        })

        return AppDataSource;
    }
}