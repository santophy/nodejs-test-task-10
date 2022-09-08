/*
 *system imports
 */
import { Module } from '@nestjs/common';

/*
 *local imports
 */
import { modules } from './v1.routes';

@Module({
    imports: [...modules],
})
export class V1Module {}
