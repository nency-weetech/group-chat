"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.dataSourceOptions = void 0;
require("reflect-metadata");
const dotenv_1 = require("dotenv");
;
const path_1 = __importDefault(require("path"));
const browser_1 = require("typeorm/browser");
(0, dotenv_1.config)({ path: path_1.default.resolve(__dirname, '../../../.env') });
exports.dataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/entities/**/*.{js,ts}'],
    migrations: [__dirname + '/migrations/**/*.{js,ts}'],
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production',
};
exports.AppDataSource = new browser_1.DataSource(exports.dataSourceOptions);
