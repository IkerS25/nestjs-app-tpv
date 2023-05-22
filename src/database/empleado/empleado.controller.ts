import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmpleadoDto } from './dto/empleado.dto';
import { EmpleadoService } from './empleado.service';

@Controller('empleado')
export class EmpleadoController {

    constructor(private readonly empleadoService: EmpleadoService) { }

    @Get()
    async getAll() {
        return await this.empleadoService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) cod: number) {
        return await this.empleadoService.findByCod(cod);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post()
    async create(@Body() dto: EmpleadoDto) {
        return await this.empleadoService.create(dto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: EmpleadoDto) {
        return await this.empleadoService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) cod: number) {
        return await this.empleadoService.delete(cod)
    }
}
