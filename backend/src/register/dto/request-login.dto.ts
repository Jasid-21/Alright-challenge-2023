import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RequestLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}