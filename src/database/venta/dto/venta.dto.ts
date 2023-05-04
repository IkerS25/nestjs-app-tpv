import { IsNotEmpty, IsNumber, IsNumberString, MaxLength, MinLength, isNotEmpty } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class VentaDto {

    @IsNotEmpty()
    codEmpleado: number;

    @IsNotBlank({ message: 'El metodo de pago no puede estar vacio' })
    metodo_pago: string;

    @IsNotBlank({ message: 'La fecha no puede estar vacia' })
    fecha: string;

    @IsNotEmpty()
    total: number


}