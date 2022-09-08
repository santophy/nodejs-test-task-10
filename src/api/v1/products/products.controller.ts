/* system imports */
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

/* module imports */
import { Product } from '../../../entities';

/* local imports */
import { ProductsService } from './products.service';

/* CRUD operations for Products module */
@Crud({
    model: {
        type: Product,
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
            category: {
                eager: true,
            },
        },
    },
})
@ApiTags('Products')
@Controller('products')
export class ProductsController implements CrudController<Product> {
    constructor(public service: ProductsService) {}
}
