import { IsNotEmpty } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class EmpleadoDto {
    @IsNotBlank({ message: 'El nombre no puede estar vacío' })
    nombre?: string;

    @IsNotEmpty()
    codEmpleado?: number;

}