import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getUser(): string {
    return "Secret User";
  }

  addUser(name: string): void {
    console.log("User:", name);
  }
}
