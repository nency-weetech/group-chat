import * as winston from 'winston';
import { WinstonModule, utilities as nestWinstonModuleUtilities } from 'nest-winston';

const isProduction = process.env.NODE_ENV === 'production';

export const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      format: isProduction
        ? winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          )
        : winston.format.combine(
            winston.format.timestamp({ format: 'HH:mm:ss' }),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('ChatApp', {
              colors: true,
              prettyPrint: true,
            }),
          ),
    }),
  ],
});