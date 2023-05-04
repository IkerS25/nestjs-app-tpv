import { VentaDto } from './dto/venta.dto';
import { VentaRepository } from './venta.repository';
import { VentaEntity } from './venta.entity';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class VentaService {

    constructor(
        @InjectRepository(VentaEntity)
        private ventaRepository: VentaRepository
    ) { }

    async getAll(): Promise<VentaEntity[]> {
        const list = await this.ventaRepository.find();
        if (!list.length) {
            throw new NotFoundException(new MessageDto('No hay ninguna venta registrada'));
        }
        return list;
    }

    async findById(id: number): Promise<VentaEntity> {
        const venta = await this.ventaRepository.findOne(id);
        if (!venta) {
            throw new NotFoundException(new MessageDto('La venta no existe'));
        }
        return venta;
    }

    async create(dto: VentaDto): Promise<any> {
        const venta = this.ventaRepository.create(dto);
        await this.ventaRepository.save(venta);
        return new MessageDto(`Venta realizada correctamente`);
    }

    async update(id: number, dto: VentaDto): Promise<any> {
        const venta = await this.findById(id);
        if (!venta)
            throw new NotFoundException(new MessageDto('La venta no existe'));
        dto.codEmpleado ? venta.codEmpleado = dto.codEmpleado : venta.codEmpleado = venta.codEmpleado;
        dto.metodo_pago ? venta.metodo_pago = dto.metodo_pago : venta.metodo_pago = venta.metodo_pago;
        dto.fecha ? venta.fecha = dto.fecha : venta.fecha = venta.fecha;
        dto.total ? venta.total = dto.total : venta.total = venta.total;



        await this.ventaRepository.save(venta);
        return new MessageDto(`Venta actualizada`);
    }

    async delete(id: number): Promise<any> {
        const venta = await this.findById(id);
        await this.ventaRepository.delete(venta);
        return new MessageDto('La venta se ha eliminado');
    }

    async obtenerVentas(): Promise<VentaDto[]> {
        return this.ventaRepository.find();
    }
}
