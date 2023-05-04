import { CategoriaDto } from './dto/categoria.dto';
import { CategoriaRepository } from './categoria.repository';
import { CategoriaEntity } from './categoria.entity';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CategoriaService {

    constructor(
        @InjectRepository(CategoriaEntity)
        private categoriaRepository: CategoriaRepository
    ) { }

    async getAll(): Promise<CategoriaEntity[]> {
        const list = await this.categoriaRepository.find();
        if (!list.length) {
            throw new NotFoundException(new MessageDto('No hay ninguna categoria registrada'));
        }
        return list;
    }

    async findById(id: number): Promise<CategoriaEntity> {
        const categoria = await this.categoriaRepository.findOne(id);
        if (!categoria) {
            throw new NotFoundException(new MessageDto('La categoria no existe'));
        }
        return categoria;
    }

    async findByNombre(nombre: string): Promise<CategoriaEntity> {
        const categoria = await this.categoriaRepository.findOne({ nombre: nombre });
        return categoria;
    }

    async create(dto: CategoriaDto): Promise<any> {
        const exists = await this.findByNombre(dto.nombre);
        if (exists) throw new BadRequestException(new MessageDto('El nombre de la categoria ya existe'));
        const categoria = this.categoriaRepository.create(dto);
        await this.categoriaRepository.save(categoria);
        return new MessageDto(`La categoria ${categoria.nombre} ha sido creada`);
    }

    async update(id: number, dto: CategoriaDto): Promise<any> {
        const categoria = await this.findById(id);
        if (!categoria)
            throw new NotFoundException(new MessageDto('La categoria no existe'));
        const exists = await this.findByNombre(dto.nombre);
        if (exists && exists.id !== id) throw new BadRequestException(new MessageDto('La categoria ya existe'));
        dto.nombre ? categoria.nombre = dto.nombre : categoria.nombre = categoria.nombre;

        await this.categoriaRepository.save(categoria);
        return new MessageDto(`La categoria ${categoria.nombre} ha sido actualizada`);
    }

    async delete(id: number): Promise<any> {
        const categoria = await this.findById(id);
        await this.categoriaRepository.delete(categoria);
        return new MessageDto(`La categoria ${categoria.nombre} ha sido eliminada`);
    }
}
