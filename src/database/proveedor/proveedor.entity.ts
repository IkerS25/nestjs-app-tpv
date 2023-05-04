import { ProductoEntity } from "src/database/producto/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'proveedor' })

export class ProveedorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 40, nullable: false, unique: true })
    nombre: string;

    @Column({ type: 'varchar', length: 40, nullable: false, unique: true })
    empresa: string;

    @Column({ type: 'varchar', length: 40, nullable: false, unique: true })
    email: string;

    @Column({ type: 'int', nullable: false, unique: true })
    telefono: number;

    @Column({ type: 'varchar', length: 20, nullable: false })
    ciudad: string;

    @Column({ type: 'varchar', length: 30, nullable: false })
    direccion: string

    @Column({ type: 'int', nullable: false })
    codigoPostal: number;

    @OneToMany(() => ProductoEntity, producto => producto.proveedor, { cascade: true })
    productos: ProductoEntity[];
}
