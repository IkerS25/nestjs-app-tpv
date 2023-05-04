import { IsNotEmpty } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class DetalleVentaDto {
    @IsNotBlank({ message: 'El id del producto no puede estar vacío' })
    idProducto?: string;

    @IsNotBlank({ message: 'La cantidad no puede estar vacía' })
    cantidad?: string
    @IsNotEmpty()
    precio_unitario: number;

    @IsNotEmpty()
    total_linea: number;
}