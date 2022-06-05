import * as dotenv from 'dotenv';
dotenv.config();

export class EnvConfig {
    public static getApiPort():string | undefined {
        return process.env.API_PORT;
    }
    public static getApiAmbient():string | undefined {
        return process.env.API_AMBIENT;
    }
    public static getPostgresUser():string | undefined {
        return process.env.POSTGRES_USER;
    }
    public static getPostgresPort():number | undefined {
        return Number(process.env.POSTGRES_PORT);
    }
    public static getPostgresHost():string | undefined {
        return process.env.POSTGRES_HOST;
    }
    public static getPostgresPassword():string | undefined {
        return process.env.POSTGRES_PASSWORD;
    }
}