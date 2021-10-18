import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import jwksRsa from "jwks-rsa";
import { ExtractJwt, Strategy as PassportJwtStrategy } from "passport-jwt";
import { env } from "../lib/process";

@Injectable()
export class JwtStrategy extends PassportStrategy(PassportJwtStrategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${env.AUTH0_DOMAIN()}/.well-known/jwks.json`,
      }),
      issuer: `https://${env.AUTH0_DOMAIN()}/`, // Must include trailing slash
      audience: "http://localhost:5000",
      algorithms: ["RS256"],
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
