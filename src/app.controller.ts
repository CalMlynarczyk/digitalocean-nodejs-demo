import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    console.log("Request received");
    return this.appService.getHello();
  }

  @Post('user')
  addUser(@Body('name') name: string): void {
    this.appService.addUser(name);
  }
}
