import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class ProductoDto {
    @IsNotBlank({ message: 'El nombre no puede estar vacío' })
    nombre?: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1, { message: 'El producto debe de tener un precio minimo de 1 euro.' })
    precio?: number;

    @IsNumber()
    cantidad?: number;

    @IsNotEmpty()
    idProveedor?: number;

    @IsNotEmpty()
    idCategoria?: number;
}