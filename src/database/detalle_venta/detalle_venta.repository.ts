import { DetalleVentaEntity } from './detalle_venta.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(DetalleVentaEntity)
export class DetalleVentaRepository extends Repository<DetalleVentaEntity> { }