/*
 *system imports
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

/*
 *module imports
 */
import { TypeOrmConfigService } from './libs/services';
import { getEnvPath } from './config/initializers';

/*
 *local imports
 */
import { ApiModule } from './api/api.module';

const envFilePath: string = getEnvPath(`${__dirname}/config/envs`);

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath,
        }),
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigService,
        }),
        ApiModule,
    ],
    controllers: [],
    providers: [],
})
export class MainModule {}
