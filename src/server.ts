import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';
import config from './config';
import dotenv from 'dotenv';

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    console.log('successfully connect moongoose');
    app.listen(config.port, () => {
      console.log(`this port is runnig on the ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
