/*
 *system imports
 */
import { NestApplicationOptions, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

/*
 *module imports
 */
import { HttpExceptionFilter } from './libs/filters';
import { initializeSwagger } from './config/initializers';

/*
 *local imports
 */
import { MainModule } from './main.module';

/*
 *Function to initialize the application
 */
async function bootstrap() {
    const appConfig: NestApplicationOptions = {
            bufferLogs: true,
            logger: ['log', 'error', 'warn', 'debug', 'verbose'],
        },
        app = await NestFactory.create<NestExpressApplication>(
            MainModule,
            appConfig,
        ),
        config: ConfigService = app.get(ConfigService),
        port: number = config.get<number>('PORT');

    app.useGlobalFilters(new HttpExceptionFilter());
    app.enableCors();
    app.enableVersioning({ type: VersioningType.URI });

    initializeSwagger(app);

    await app.listen(port, '127.0.0.1');

    console.clear();
}
bootstrap();
