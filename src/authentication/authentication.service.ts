import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthenticationService {
  async signIn(signInDto: SignInDto) {
    console.log(signInDto);
  }

  async signUp(signUpDto: SignUpDto) {
    console.log(signUpDto);
  }
}
