import { ProveedorDto } from './dto/proveedor.dto';
import { ProveedorRepository } from './proveedor.repository';
import { ProveedorEntity } from './proveedor.entity';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class ProveedorService {

    constructor(
        @InjectRepository(ProveedorEntity)
        private ProveedorRepository: ProveedorRepository
    ) { }

    async getAll(): Promise<ProveedorEntity[]> {
        const list = await this.ProveedorRepository.find();
        if (!list.length) {
            throw new NotFoundException(new MessageDto('La lista esta vacia'));
        }
        return list;
    }

    async findById(id: number): Promise<ProveedorEntity> {
        const proveedor = await this.ProveedorRepository.findOne(id);
        if (!proveedor) {
            throw new NotFoundException(new MessageDto('El proveedor no existe'));
        }
        return proveedor;
    }

    async findByNombre(nombre: string): Promise<ProveedorEntity> {
        const proveedor = await this.ProveedorRepository.findOne({ nombre: nombre });
        return proveedor;
    }

    async create(dto: ProveedorDto): Promise<any> {
        const exists = await this.findByNombre(dto.nombre);
        if (exists) throw new BadRequestException(new MessageDto('El nombre ya existe'));
        const proveedor = this.ProveedorRepository.create(dto);
        await this.ProveedorRepository.save(proveedor);
        return new MessageDto(`Proveedor ${proveedor.nombre} creado`);
    }

    async update(id: number, dto: ProveedorDto): Promise<any> {
        const proveedor = await this.findById(id);
        if (!proveedor)
            throw new NotFoundException(new MessageDto('El proveedor no existe'));
        const exists = await this.findByNombre(dto.nombre);
        if (exists && exists.id !== id) throw new BadRequestException(new MessageDto('El proveedor ya existe'));
        dto.nombre ? proveedor.nombre = dto.nombre : proveedor.nombre = proveedor.nombre;
        dto.empresa ? proveedor.empresa = dto.empresa : proveedor.empresa = proveedor.empresa;
        dto.email ? proveedor.email = dto.email : proveedor.email = proveedor.email;
        dto.telefono ? proveedor.telefono = dto.telefono : proveedor.telefono = proveedor.telefono;
        dto.direccion ? proveedor.direccion = dto.direccion : proveedor.direccion = proveedor.direccion;
        dto.ciudad ? proveedor.ciudad = dto.ciudad : proveedor.ciudad = proveedor.ciudad;
        dto.codigoPostal ? proveedor.codigoPostal = dto.codigoPostal : proveedor.codigoPostal = proveedor.codigoPostal;


        await this.ProveedorRepository.save(proveedor);
        return new MessageDto(`Proveedor ${proveedor.nombre} actualizado`);
    }

    async delete(id: number): Promise<any> {
        const proveedor = await this.findById(id);
        await this.ProveedorRepository.delete(proveedor);
        return new MessageDto(`Proveedor ${proveedor.nombre} eliminado`);
    }

    async obtenerProveedores(): Promise<ProveedorDto[]> {
        return this.ProveedorRepository.find(); // Proveedor es la entidad de la tabla proveedores
    }
}
