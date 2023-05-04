import { CategoriaService } from './categoria.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriaDto } from './dto/categoria.dto';

@Controller('categoria')
export class CategoriaController {

    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    async getAll() {
        return await this.categoriaService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.categoriaService.findById(id);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post()
    async create(@Body() dto: CategoriaDto) {
        return await this.categoriaService.create(dto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CategoriaDto) {
        return await this.categoriaService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.categoriaService.delete(id)
    }
}
