import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Auth0Strategy } from "./auth0.strategy";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, Auth0Strategy],
})
export class AuthModule {}
