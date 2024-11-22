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
  } catch {}
}

const bootloader = () => {
  const mainServer: Server = app.listen(config.port, () => {
    console.log(`this port is runnig on the ${config.port}`);
  });
};

main();
bootloader();
