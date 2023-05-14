import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne } from "typeorm";
import { VentaEntity } from "../venta/venta.entity";
import { ProductoEntity } from "../producto/producto.entity";

@Entity({ name: 'detalleVenta' })
export class DetalleVentaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false, unique: false })
    idVenta: number;

    @Column({ type: 'int', nullable: false, unique: false })
    idProducto?: string;

    @Column({ type: 'int', nullable: false, unique: false })
    cantidad?: string;

    @Column({ type: 'int', nullable: false, unique: false })
    precio_unitario: number;

    @Column({ type: 'int', nullable: true, unique: false })
    total_linea: number;

    @OneToOne(() => VentaEntity, venta => venta.detalleVenta, { primary: true })
    @JoinColumn({ name: 'idVenta' })
    venta: VentaEntity;

    @ManyToOne(() => ProductoEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idProducto' })
    producto: ProductoEntity;
}