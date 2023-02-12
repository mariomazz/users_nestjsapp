import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  // @MinLength(5)
  name: string;

  @IsString()
  @IsNotEmpty()
  /* @MinLength(5)
  @MaxLength(300) */
  surname: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
