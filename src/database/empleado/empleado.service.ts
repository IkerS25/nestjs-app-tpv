import { EmpleadoDto } from './dto/empleado.dto';
import { EmpleadoRepository } from './empleado.repository';
import { EmpleadoEntity } from './empleado.entity';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class EmpleadoService {

    constructor(
        @InjectRepository(EmpleadoEntity)
        private empleadoRepository: EmpleadoRepository
    ) { }

    async getAll(): Promise<EmpleadoEntity[]> {
        const list = await this.empleadoRepository.find();
        if (!list.length) {
            throw new NotFoundException(new MessageDto('No hay ningun empleado registrado'));
        }
        return list;
    }

    async findById(id: number): Promise<EmpleadoEntity> {
        const empleado = await this.empleadoRepository.findOne(id);
        if (!empleado) {
            throw new NotFoundException(new MessageDto('El empleado no existe'));
        }
        return empleado;
    }

    async findByNombre(nombre: string): Promise<EmpleadoEntity> {
        const empleado = await this.empleadoRepository.findOne({ nombre: nombre });
        return empleado;
    }

    async create(dto: EmpleadoDto): Promise<any> {
        const exists = await this.findByNombre(dto.nombre);
        if (exists) throw new BadRequestException(new MessageDto('El nombre del empleado ya existe'));
        const empleado = this.empleadoRepository.create(dto);
        await this.empleadoRepository.save(empleado);
        return new MessageDto(`El empleado ${empleado.nombre} creado`);
    }

    async update(id: number, dto: EmpleadoDto): Promise<any> {
        const empleado = await this.findById(id);
        if (!empleado)
            throw new NotFoundException(new MessageDto('El empleado no existe'));
        const exists = await this.findByNombre(dto.nombre);
        if (exists && exists.id !== id) throw new BadRequestException(new MessageDto('El empleado ya existe'));
        dto.nombre ? empleado.nombre = dto.nombre : empleado.nombre = empleado.nombre;
        dto.codEmpleado ? empleado.codEmpleado = dto.codEmpleado : empleado.codEmpleado = empleado.codEmpleado;


        await this.empleadoRepository.save(empleado);
        return new MessageDto(`El empleado  ${empleado.nombre} ha sido actualizado`);
    }

    async delete(id: number): Promise<any> {
        const empleado = await this.findById(id);
        await this.empleadoRepository.delete(empleado);
        return new MessageDto(`El empleado ${empleado.nombre} ha sido eliminado`);
    }
}
