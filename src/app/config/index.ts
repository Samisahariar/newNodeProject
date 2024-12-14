import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  databaseUrl: process.env.DATA_BASE_URL,
  salt_rounds: process.env.SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASSWORD,
};
