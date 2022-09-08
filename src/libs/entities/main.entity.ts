/*
 *system imports
 */
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
} from 'typeorm';

@Entity()
export abstract class MainEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    /*
     * Create and Update Date Columns
     */

    @CreateDateColumn({ type: 'timestamp' })
    public created_at!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updated_at!: Date;
}
