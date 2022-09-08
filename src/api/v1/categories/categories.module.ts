/*
 *system imports
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/*
 *module imports
 */
import { Category } from '../../../entities';

/*
 *local imports
 */
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategoriesService],
    exports: [CategoriesService],
    controllers: [CategoriesController],
})
export class CategoriesModule {}
