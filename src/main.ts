import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import session from "express-session";
import { AppModule } from "./app.module";
import { env } from "./lib/process";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.use(
    session({
      secret: env.SESSION_SECRET() || "",
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(parseInt(env.PORT() || "5000"));
}

bootstrap();
