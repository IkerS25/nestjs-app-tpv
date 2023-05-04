import { DetalleVentaEntity } from './detalle_venta.entity';
import { Module } from '@nestjs/common';
import { DetalleVentaService } from './detalle_venta.service';
import { DetalleVentaController } from './detalle_venta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([DetalleVentaEntity])],
    providers: [DetalleVentaService],
    controllers: [DetalleVentaController]
})
export class DetalleVentaModule { }
