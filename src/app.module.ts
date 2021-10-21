import { Module } from "@nestjs/common";
import { SentryModule } from "@ntegral/nestjs-sentry";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import { LogLevel } from "@sentry/types";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { env } from "./lib/process";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    SentryModule.forRoot({
      dsn: env.SENTRY_DSN(),
      debug: true,
      environment: "dev",
      // release: null, // must create a release in sentry.io dashboard
      logLevel: LogLevel.Debug, //based on sentry.io loglevel //
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        // new Tracing.Integrations.Express(),
        // new Tracing.Integrations.Postgres(),
      ],
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
