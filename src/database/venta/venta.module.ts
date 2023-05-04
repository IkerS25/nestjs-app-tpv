import { VentaEntity } from './venta.entity';
import { Module } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([VentaEntity])],
    providers: [VentaService],
    controllers: [VentaController]
})
export class VentaModule { }
