/*
 *system imports
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/*
 *module imports
 */
import { Product } from '../../../entities';
/*
 *local imports
 */
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductsService],
    exports: [ProductsService],
    controllers: [ProductsController],
})
export class ProductsModule {}
