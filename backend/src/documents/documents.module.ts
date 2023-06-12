import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { Document } from 'src/mySqlOrm/Document';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Document]),
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: process.env.TOKEN_EXP,
      },
    }),
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService, JwtAuthGuard],
})
export class DocumentsModule {}
