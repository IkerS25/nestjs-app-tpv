import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductoEntity } from "../producto/producto.entity";

@Entity({ name: 'categoria' })
export class CategoriaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
    nombre: string;

    @OneToMany(() => ProductoEntity, producto => producto.categoria, { cascade: true })
    productos: ProductoEntity[];
}