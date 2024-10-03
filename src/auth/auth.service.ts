import * as jwt from "jsonwebtoken";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import authConfig from "src/config/authConfig";
import { IUser } from "src/type/user.type";

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>
  ) {}

  login(user: IUser) {
    const payload = { ...user };

    return jwt.sign(payload, this.config.jwtSecret, {
      expireln: "1d",
      audience: "localhost:3000",
      issuer: "localhost:3000",
    });
  }
}
