/* system imports */
import { Column, Entity, ManyToOne } from 'typeorm';

/* module imports */
import { MainEntity } from '../libs/entities';

/* local imports */
import { Category } from './category.entity';

@Entity({ name: 'products' })
export class Product extends MainEntity {
    /* attributes */
    @Column({ type: 'varchar', length: 160 })
    public name: string;

    @Column({ type: 'text' })
    public description: string;

    /* associations */
    @ManyToOne(() => Category, (category) => category.products)
    category: Category;
}
