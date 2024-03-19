import { IsEmail, Length } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @Length(8, 16)
  password: string;
}
