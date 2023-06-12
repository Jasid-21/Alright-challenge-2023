import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/mySqlOrm/Document';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly docsRepo: Repository<Document>,
  ) {}

  async create(createDocumentDto: CreateDocumentDto) {
    const newDoc = this.docsRepo.create(createDocumentDto);

    if (!newDoc) {
      throw new HttpException(
        'Invalid document parameters',
        HttpStatus.BAD_REQUEST,
      );
    }

    const regDoc = await this.docsRepo.save(newDoc);
    return {
      id: regDoc.id,
      name: regDoc.name,
      status: regDoc.status,
      owner: regDoc.owner,
    };
  }

  async findAll(id: number) {
    return (await this.docsRepo.findBy({ owner: id })).map((d) => ({
      id: d.id,
      name: d.name,
      owner: d.owner,
      status: d.status,
    }));
  }

  async findOne(id: number, user_id: number) {
    return (await this.docsRepo.findOneBy({ id, owner: user_id })).filePath;
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return `This action updates a #${id} document`;
  }

  async remove(id: number, owner: number) {
    const doc = await this.docsRepo.findOneBy({ id, owner });
    return this.docsRepo.remove(doc);
  }
}
