import { VentaEntity } from './venta.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(VentaEntity)
export class VentaRepository extends Repository<VentaEntity> { }