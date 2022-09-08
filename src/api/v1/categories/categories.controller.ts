/* system imports */
import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

/* module imports */
import { Category } from '../../../entities';

/* local imports */
import { CategoriesService } from './categories.service';

/* CRUD operations for categories module */
@Crud({
    model: {
        type: Category,
    },
    params: {
        id: {
            field: 'id',
            type: 'string',
            primary: true,
        },
    },
    routes: {
        only: ['getManyBase', 'createOneBase'],
    },
    query: {
        join: {
            children: {
                eager: true,
            },
            parent: {},
        },
    },
})
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController implements CrudController<Category> {
    constructor(public service: CategoriesService) {}

    get base(): CrudController<Category> {
        return this;
    }

    @Get('tree')
    getTree() {
        return this.service.getTree();
    }
}
