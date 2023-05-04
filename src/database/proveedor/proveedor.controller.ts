import { ProveedorService } from './proveedor.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProveedorDto } from './dto/proveedor.dto';

@Controller('proveedor')
export class ProveedorController {

    constructor(private readonly ProveedorService: ProveedorService) { }

    @Get()
    async getAll() {
        return await this.ProveedorService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.ProveedorService.findById(id);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post()
    async create(@Body() dto: ProveedorDto) {
        return await this.ProveedorService.create(dto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: ProveedorDto) {
        return await this.ProveedorService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.ProveedorService.delete(id)
    }
}
