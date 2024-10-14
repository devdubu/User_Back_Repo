import { UsersService } from "./users.service";
import { AuthService } from "src/auth/auth.service";
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Headers,
  UseGuards,
} from "@nestjs/common";
import { IUser } from "src/type/user.type";

@Controller("users")
export class UsersController {
  constructor(
    private usersServie: UsersService,
    private authService: AuthService
  ) {}

  @Get(":id")
  async getUserInfo(
    @Headers() headers: any,
    @Param("id") UserId: string
  ): Promise<IUser> {
    const jwtString = headers.authorization.split('Bearer ')[1];
    this.authService.verfiy(jwtString);
    return this.usersServie.getUserInfo(UserId);
  }
}
