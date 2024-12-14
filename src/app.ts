import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';

const app: Application = express();
app.use(express.text());
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.use(((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  const message = 'something went worng in the app.ts!';

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
}) as express.ErrorRequestHandler);

const test = (req: Request, res: Response) => {
  res.send('the appp is runnig on and on still now !');
};
app.get('/', test);

export default app;
