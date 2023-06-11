import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateRegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
