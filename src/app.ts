import express, { Application } from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
app.use(express.text());
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
