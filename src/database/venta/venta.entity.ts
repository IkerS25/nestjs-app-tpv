import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DetalleVentaEntity } from "../detalle_venta/detalle_venta.entity";

@Entity({ name: 'venta' })
export class VentaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false, unique: false })
    codEmpleado: number;

    @Column({ type: 'varchar', length: 30, nullable: false, unique: false })
    metodo_pago: string;

    @Column({ type: 'varchar', length: 40 })
    fecha: string;

    @Column({ type: 'int', nullable: false, unique: false })
    total: number;

    @OneToMany(() => DetalleVentaEntity, detalleVenta => detalleVenta.venta, { cascade: true })
    detalleVenta: DetalleVentaEntity[];
}