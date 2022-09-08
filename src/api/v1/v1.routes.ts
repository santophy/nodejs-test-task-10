/*
 *system imports
 */
import { Routes } from '@nestjs/core';

/*
 *module imports
 */
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

/*
 *local imports
 */

export const modules = [CategoriesModule, ProductsModule];

export const v1Routes: Routes = [
    {
        path: 'v1',
        children: [...modules],
    },
];
