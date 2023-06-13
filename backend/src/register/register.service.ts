import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/mySqlOrm/User';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RequestLoginDto } from './dto/request-login.dto';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async create(createRegisterDto: CreateRegisterDto) {
    console.log(createRegisterDto);
    const resp = await this.userRepo.findOneBy({
      email: createRegisterDto.email,
    });

    if (resp) {
      throw new HttpException('User alredy registered', HttpStatus.CONFLICT);
    }

    const { email, password } = createRegisterDto;
    createRegisterDto.password = bcrypt.hashSync(password, 10);

    const newUser = this.userRepo.create(createRegisterDto);
    const regUser = await this.userRepo.save(newUser);
    const token = this.jwtService.sign({ email, id: regUser.id });
    return { token, email, user_id: regUser.id };
  }

  async login(requestLoginDto: RequestLoginDto) {
    const { email, password } = requestLoginDto;
    const user = await this.userRepo.findOneBy({ email });

    if (!user) {
      throw new HttpException(
        'Incorrect email or password',
        HttpStatus.NOT_FOUND,
      );
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new HttpException(
        'Incorrect email or password',
        HttpStatus.NOT_FOUND,
      );
    }

    const token = this.jwtService.sign({ email, id: user.id });
    return { token, email, user_id: user.id };
  }
}
