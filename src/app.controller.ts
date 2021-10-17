import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    console.log("Request received");
    return this.appService.getHello();
  }

  @Post("user")
  addUser(@Body("name") name: string): void {
    this.appService.addUser(name);
  }

  @UseGuards(AuthGuard("auth0"))
  @Post("auth/login")
  async login(@Request() req: any) {
    return req.user;
  }
}
