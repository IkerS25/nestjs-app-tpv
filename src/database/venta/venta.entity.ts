import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DetalleVentaEntity } from "../detalle_venta/detalle_venta.entity";
import { EmpleadoEntity } from "../empleado/empleado.entity";

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

    @Column({ type: 'double', nullable: false, unique: false })
    total: number;

    @OneToMany(() => DetalleVentaEntity, detalleVenta => detalleVenta.venta, { cascade: true })
    detalleVenta: DetalleVentaEntity[];

    @ManyToOne(() => EmpleadoEntity, empleado => empleado.ventas)
    @JoinColumn({ name: 'codEmpleado' })
    empleado: EmpleadoEntity;
}