import { EmpleadoEntity } from './empleado.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(EmpleadoEntity)
export class EmpleadoRepository extends Repository<EmpleadoEntity> { }