import { IsNotEmpty, IsNumber, IsNumberString, MaxLength, MinLength, isNotEmpty } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class ProveedorDto {

    @IsNotBlank({ message: 'La empresa no puede estar vacía' })
    empresa: string;

    @IsNotBlank({ message: 'El nombre no puede estar vacío' })
    nombre: string;

    @IsNotBlank({ message: 'La direccion no puede estar vacía' })
    direccion: string

    @IsNotBlank({ message: 'La ciudad no puede estar vacía' })
    ciudad: string

    @IsNotBlank({ message: 'El email no puede estar vacío' })
    email: string

    @IsNotEmpty({ message: 'El código postal no puede estar vacío' })
    codigoPostal: number;

    @IsNotEmpty({ message: 'El teléfono no puede estar vacío' })
    telefono: number;
}