import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class CategoriaDto {
    @IsNotBlank({ message: 'El nombre no puede estar vacío' })
    nombre?: string;


}