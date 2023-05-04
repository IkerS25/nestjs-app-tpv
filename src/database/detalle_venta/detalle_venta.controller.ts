import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { DetalleVentaDto } from './dto/detalle_venta.dto';
import { DetalleVentaService } from './detalle_venta.service';

@Controller('detalleVenta')
export class DetalleVentaController {

    constructor(private readonly detalleVentaService: DetalleVentaService) { }

    @Get()
    async getAll() {
        return await this.detalleVentaService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.detalleVentaService.findById(id);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post()
    async create(@Body() dto: DetalleVentaDto) {
        return await this.detalleVentaService.create(dto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: DetalleVentaDto) {
        return await this.detalleVentaService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.detalleVentaService.delete(id)
    }
}
