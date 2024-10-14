import * as jwt from "jsonwebtoken";
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
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
      expiresIn: '1d',
      audience: 'example.com',
      issuer: 'example.com',
    });
  }

  verfiy(jwtString: string) {
    try{
      const payload = jwt.verify(jwtString, this.config.jwtSecret) as (jwt.JwtPayload | string) & IUser;

      const { UserId, email } = payload;
      return {
        UserId: UserId,
        email,
      };
    }catch (e){
      throw new UnauthorizedException();
    }
  }
}
