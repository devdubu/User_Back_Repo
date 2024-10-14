import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { DataSource, Repository } from "typeorm";
import { AuthService } from "src/auth/auth.service";
import {
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from "@nestjs/common";
import { IUser } from "src/type/user.type";

@Injectable()
export class UsersService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private authService: AuthService
  ) {}
  async getUserInfo(UserId: string): Promise<IUser> {
    const user = await this.userRepository.findOne({
      where: { UserId: UserId },
    });

    if (!user) {
      throw new NotFoundException("유저가 존재하지 않습니다");
    }

    return {
      UserId: user.UserId,
      name: user.name,
      email: user.email,
      number: user.number,
    };
  }
}
