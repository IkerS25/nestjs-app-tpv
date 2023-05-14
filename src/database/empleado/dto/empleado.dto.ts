import { IsNotEmpty } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class EmpleadoDto {
    @IsNotEmpty({ message: 'El codigo de empleado no puede estar vacío' })
    codEmpleado?: number;

    @IsNotBlank({ message: 'El nombre no puede estar vacío' })
    nombre?: string;

}