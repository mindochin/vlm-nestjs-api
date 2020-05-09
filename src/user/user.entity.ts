import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column()
  login: string;

  @Column()
  fullName: string;

  @Column()
  password: string;

  @Index({ unique: true })
  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;
}