/*
 *system imports
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

/*
 *module imports
 */
import { Product } from '../../../entities';

@Injectable()
export class ProductsService extends TypeOrmCrudService<Product> {
    constructor(@InjectRepository(Product) repo) {
        super(repo);
    }
}
