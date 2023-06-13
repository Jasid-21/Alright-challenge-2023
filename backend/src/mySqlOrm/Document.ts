import { DocStatus } from 'src/helpers/types';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  filePath: string;

  @Column({
    type: 'int',
  })
  owner: number;

  @Column()
  status: DocStatus;

  @Column({
    type: 'int',
    nullable: true,
  })
  guest_id: number;
}
