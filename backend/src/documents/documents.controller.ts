import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  UseGuards,
  Req,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { getNewDocPath } from 'src/helpers/Functions';
import { Response } from 'express';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Req() request,
    @Body() body,
  ) {
    const filePath = getNewDocPath(file);

    const userData = request.userData;
    const documentDto: CreateDocumentDto = {
      name: body.name,
      filePath: filePath,
      owner: userData.id,
      status: 'pending',
    };
    return this.documentsService.create(documentDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Req() request) {
    return await this.documentsService.findAll(request.userData.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(
    @Param('id') id: string,
    @Req() request,
    @Res() response: Response,
  ) {
    try {
      const owner = request.userData.id;
      const filePath = await this.documentsService.findOne(+id, owner);
      if (!filePath) {
        throw new HttpException('File not found', HttpStatus.NOT_FOUND);
      }

      response.sendFile(filePath);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @Req() request) {
    return this.documentsService.remove(+id, request.userData.id);
  }

  @Post('askReview')
  @UseGuards(JwtAuthGuard)
  askReview(@Req() request, @Body() body: any) {
    try {
      const owner = request.userData.id;
      const guest_id = body.guest_id;
      const doc_id = body.doc_id;
      console.log(owner);
      console.log(doc_id);
      return this.documentsService.askReview(doc_id, guest_id);
    } catch (err) {
      console.log(err);
    }
  }

  @Post('comment')
  @UseGuards(JwtAuthGuard)
  commentDoc(@Req() request, @Body() body: any) {
    try {
      const owner = request.userData.id;
      const doc_id = body.doc_id;
      const comment = body.comment;
      return this.documentsService.commentDoc(doc_id, owner, comment);
    } catch (err) {
      console.log(err);
    }
  }
}
