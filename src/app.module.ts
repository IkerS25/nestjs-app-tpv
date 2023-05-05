import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from './config/constants';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './database/categoria/categoria.module';
import { ProveedorModule } from './database/proveedor/proveedor.module';
import { ProductoModule } from './database/producto/producto.module';
import { EmpleadoModule } from './database/empleado/empleado.module';
import { VentaModule } from './database/venta/venta.module';
import { DetalleVentaModule } from './database/detalle_venta/detalle_venta.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/database/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: false,
        timezone: 'Europe/Madrid'
      }),
      inject: [ConfigService],
    }),
    CategoriaModule,
    ProveedorModule,
    EmpleadoModule,
    ProductoModule,
    VentaModule,
    DetalleVentaModule


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
