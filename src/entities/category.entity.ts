/* system imports */
import {
    Column,
    Entity,
    Tree,
    TreeParent,
    TreeChildren,
    OneToMany,
} from 'typeorm';

/* module imports */
import { MainEntity } from '../libs/entities';

/* local imports */
import { Product } from './product.entity';

@Entity({ name: 'categories' })
@Tree('closure-table')
export class Category extends MainEntity {
    /* attributes */
    @Column({ type: 'varchar', length: 160 })
    public name: string;

    /* Relations */
    @TreeChildren()
    children: Category[];

    @TreeParent()
    parent: Category;

    @OneToMany(() => Product, (product) => product.category, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    products?: Product[];
}
