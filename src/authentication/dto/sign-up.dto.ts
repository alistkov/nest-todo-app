import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(16)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/, {
    message:
      'At least 1 capital letter, 1 lowercase letter, 1 special character, 1 numeric character',
  })
  password: string;
}
