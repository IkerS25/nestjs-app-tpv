import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { VentaEntity } from "../venta/venta.entity";

@Entity({ name: 'empleado' })
export class EmpleadoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
    nombre: string;

    @Column({ type: 'int', nullable: false, unique: true })
    codEmpleado: number;
}