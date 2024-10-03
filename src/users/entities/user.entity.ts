import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  UserId: string;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  level: number;

  @Column()
  platform: string;
}
