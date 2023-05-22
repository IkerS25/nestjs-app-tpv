import { IsNotEmpty } from "class-validator";

export class DetalleVentaDto {
    idVenta: number;
    @IsNotEmpty()
    idProducto?: number;

    cantidad?: number
    @IsNotEmpty()
    precio_unitario: number;

    @IsNotEmpty()
    total_linea: number;
}