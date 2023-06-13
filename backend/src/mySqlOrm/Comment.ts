import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'int',
  })
  owner: number;

  @Column()
  comment: string;

  @Column({
    type: 'int',
  })
  doc_id: number;
}
