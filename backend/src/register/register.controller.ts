import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { RequestLoginDto } from './dto/request-login.dto';

@Controller('auth')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async create(@Body() createRegisterDto: CreateRegisterDto) {
    try {
      const resp = await this.registerService.create(createRegisterDto);
      return resp;
    } catch (err) {
      throw err;
    }
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() requestLoginDto: RequestLoginDto) {
    try {
      const resp = await this.registerService.login(requestLoginDto);
      return resp;
    } catch (err) {
      throw err;
    }
  }
}
