import * as dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: () => process.env.PORT,
  DATABASE_URL: () => process.env.DATABASE_URL,
  SESSION_SECRET: () => process.env.SESSION_SECRET,
  AUTH0_DOMAIN: () => process.env.AUTH0_DOMAIN,
  AUTH0_CLIENT_ID: () => process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: () => process.env.AUTH0_CLIENT_SECRET,
  AUTH0_CALLBACK_URL: () => process.env.AUTH0_CALLBACK_URL,
  AUTH0_JWT_SECRET: () => process.env.AUTH0_JWT_SECRET,
  SENTRY_DSN: () => process.env.SENTRY_DSN,
};
