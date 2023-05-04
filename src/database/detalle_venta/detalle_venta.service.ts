import { DetalleVentaDto } from './dto/detalle_venta.dto';
import { DetalleVentaRepository } from './detalle_venta.repository';
import { DetalleVentaEntity } from './detalle_venta.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class DetalleVentaService {

    constructor(
        @InjectRepository(DetalleVentaEntity)
        private detalleVentaRepository: DetalleVentaRepository
    ) { }

    async getAll(): Promise<DetalleVentaEntity[]> {
        const list = await this.detalleVentaRepository.find();
        if (!list.length) {
            throw new NotFoundException(new MessageDto('No hay ninguna venta registrada'));
        }
        return list;
    }

    async findById(id: number): Promise<DetalleVentaEntity> {
        const detalle_venta = await this.detalleVentaRepository.findOne(id);
        if (!detalle_venta) {
            throw new NotFoundException(new MessageDto('La venta no existe'));
        }
        return detalle_venta;
    }

    async create(dto: DetalleVentaDto): Promise<any> {
        const detalle_venta = this.detalleVentaRepository.create(dto);
        await this.detalleVentaRepository.save(detalle_venta);
        return new MessageDto(`La venta se ha realizado correctamente`);
    }

    async update(id: number, dto: DetalleVentaDto): Promise<any> {
        const detalle_venta = await this.findById(id);
        dto.idProducto ? detalle_venta.idProducto = dto.idProducto : detalle_venta.idProducto = detalle_venta.idProducto;
        dto.cantidad ? detalle_venta.cantidad = dto.cantidad : detalle_venta.cantidad = detalle_venta.cantidad;
        dto.precio_unitario ? detalle_venta.precio_unitario = dto.precio_unitario : detalle_venta.precio_unitario = detalle_venta.precio_unitario;
        dto.total_linea ? detalle_venta.total_linea = dto.total_linea : detalle_venta.total_linea = detalle_venta.total_linea;


        await this.detalleVentaRepository.save(detalle_venta);
        return new MessageDto("La venta ha sido actualizada");
    }

    async delete(id: number): Promise<any> {
        const detalle_venta = await this.findById(id);
        await this.detalleVentaRepository.delete(detalle_venta);
        return new MessageDto(`La venta ha sido eliminada`);
    }
}
