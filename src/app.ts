import express, { Application } from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import { StudentRouters } from './modules/students/students.routers';

const app: Application = express();
app.use(express.text());
app.use(express.json());
app.use(cors());

/* const getthedata = (req: Request, res: Response) => {
  console.log(
    'the data is here and all of the data is here awe are all here and there !!',
  );
}; */

//application apis are all here and we are calling it through it
app.use('/api/v1/students', StudentRouters);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
