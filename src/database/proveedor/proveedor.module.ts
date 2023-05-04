import { ProveedorEntity } from './proveedor.entity';
import { Module } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ProveedorEntity])],
    providers: [ProveedorService],
    controllers: [ProveedorController]
})
export class ProveedorModule { }
