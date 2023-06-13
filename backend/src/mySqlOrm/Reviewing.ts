import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reviewing {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'int',
  })
  doc_id: number;

  @Column({
    type: 'int',
  })
  owner: number;

  @Column({
    type: 'int',
  })
  guest_id: number;
}
