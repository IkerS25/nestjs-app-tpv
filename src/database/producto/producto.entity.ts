import { ProveedorEntity } from "src/database/proveedor/proveedor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoriaEntity } from "../categoria/categoria.entity";
import { DetalleVentaEntity } from "../detalle_venta/detalle_venta.entity";

@Entity({ name: 'producto' })
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
    nombre: string;

    @Column({ type: 'double', nullable: false })
    precio: number;

    @Column({ type: 'int', nullable: false, default: 1 })
    cantidad: number;

    @Column({ type: 'int', nullable: false })
    idProveedor?: number;

    @Column({ type: 'int', nullable: false })
    idCategoria?: number;

    @ManyToOne(() => ProveedorEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idProveedor' })
    proveedor: ProveedorEntity;

    @ManyToOne(() => CategoriaEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idCategoria' })
    categoria: CategoriaEntity;

    @OneToMany(() => DetalleVentaEntity, detalleVenta => detalleVenta.producto)
    detalleVenta: DetalleVentaEntity[];
}