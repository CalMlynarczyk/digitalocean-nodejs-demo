import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { default as PassportAuth0Strategy } from "passport-auth0";
import { AuthService } from "./auth.service";
import { env } from "../lib/process";

@Injectable()
export class Auth0Strategy extends PassportStrategy(PassportAuth0Strategy) {
  constructor(private authService: AuthService) {
    super({
      domain: env.AUTH0_DOMAIN(),
      clientID: env.AUTH0_CLIENT_ID(),
      clientSecret: env.AUTH0_CLIENT_SECRET(),
      callbackURL: env.AUTH0_CALLBACK_URL(),
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
