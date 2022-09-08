/*
 *system imports
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

/*
 *module imports
 */
import { Category } from '../../../entities';

@Injectable()
export class CategoriesService extends TypeOrmCrudService<Category> {
    constructor(@InjectRepository(Category) repo) {
        super(repo);
    }

    getTree() {
        return this.repo.manager
            .getTreeRepository(Category)
            .findTrees({ relations: ['parent'] });
    }
}
