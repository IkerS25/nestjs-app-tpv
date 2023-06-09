import { CategoriaEntity } from './categoria.entity';
import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CategoriaEntity])],
    providers: [CategoriaService],
    controllers: [CategoriaController]
})
export class CategoriaModule { }
