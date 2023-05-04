import { VentaService } from './venta.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { VentaDto } from './dto/venta.dto';

@Controller('venta')
export class VentaController {

    constructor(private readonly VentaService: VentaService) { }

    @Get()
    async getAll() {
        return await this.VentaService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.VentaService.findById(id);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post()
    async create(@Body() dto: VentaDto) {
        return await this.VentaService.create(dto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: VentaDto) {
        return await this.VentaService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.VentaService.delete(id)
    }
}
