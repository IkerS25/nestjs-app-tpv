import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { VentaEntity } from "../venta/venta.entity";

@Entity({ name: 'empleado' })
export class EmpleadoEntity {

    @PrimaryColumn({ type: 'int', nullable: false, unique: true })
    codEmpleado: number;

    @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
    nombre: string;

    @OneToMany(() => VentaEntity, venta => venta.empleado)
    ventas: VentaEntity[];
}