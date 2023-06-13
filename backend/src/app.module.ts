import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './mySqlOrm/Entities';
import { DocumentsModule } from './documents/documents.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: process.env.TOKEN_EXP,
      },
    }),
    RegisterModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      entities,
      synchronize: true,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
    }),
    DocumentsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
