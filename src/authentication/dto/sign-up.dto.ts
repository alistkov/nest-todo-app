import { IsEmail, Length } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  @Length(8, 16)
  password: string;
}
