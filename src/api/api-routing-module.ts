/*
 *system imports
 */
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

/*
 *module imports
 */
import { v1Routes } from './v1/v1.routes';

/*
 *local imports
 */

@Module({
    imports: [
        RouterModule.register([
            {
                path: 'api',
                children: v1Routes,
            },
        ]),
    ],
})
export class ApiRoutingsModule {}
