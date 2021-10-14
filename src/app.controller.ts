import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async root(): Promise<string> {
    console.log('Request received');
    return 'Hello World!';
  }
}
