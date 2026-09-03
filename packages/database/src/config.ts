import 'reflect-metadata';
import {config} from 'dotenv';;
import {DataSourceOptions} from 'typeorm'
import path from 'path';

config({path: path.resolve(__dirname, '../../../.env')});
export const dataSourceOptions : DataSourceOptions =  {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities:[__dirname + '/entities/**/*.{js,ts}'],
    migrations:[__dirname + '/migrations/**/*.{js,ts}'],
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production',
};