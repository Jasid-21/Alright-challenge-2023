import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/mySqlOrm/Document';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Comment } from 'src/mySqlOrm/Comment';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly docsRepo: Repository<Document>,
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
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
    const own = (await this.docsRepo.findBy({ owner: id })).map((d) => ({
      id: d.id,
      name: d.name,
      owner: d.owner,
      status: d.status,
      guest_id: d.guest_id,
    }));

    const guest = (await this.docsRepo.findBy({ guest_id: id })).map((d) => ({
      id: d.id,
      name: d.name,
      owner: d.owner,
      status: d.status,
      guest_id: d.guest_id,
    }));

    return [...own, ...guest];
  }

  async findOne(id: number, user_id: number) {
    return (await this.docsRepo.findOneBy({ id, owner: user_id })).filePath;
  }

  async remove(id: number, owner: number) {
    const doc = await this.docsRepo.findOneBy({ id, owner });
    return this.docsRepo.remove(doc);
  }

  async askReview(doc_id: number, guest_id: number) {
    try {
      this.docsRepo.update(doc_id, { status: 'reviewing', guest_id });

      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async commentDoc(doc_id: number, owner: number, comment: string) {
    try {
      const newComment = this.commentRepo.create({ doc_id, owner, comment });
      await this.commentRepo.save(newComment);

      return true;
    } catch (err) {
      console.log(err);
    }
  }
}
