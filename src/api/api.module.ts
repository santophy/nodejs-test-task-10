/*
 *system imports
 */
import { Module } from '@nestjs/common';

/*
 *module imports
 */
import { V1Module } from './v1/v1.module';

/*
 *local imports
 */
import { ApiRoutingsModule } from './api-routing-module';

@Module({
    imports: [ApiRoutingsModule, V1Module],
})
export class ApiModule {}
