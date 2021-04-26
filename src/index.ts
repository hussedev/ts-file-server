import express, { Application, Request, Response, NextFunction } from 'express';
import { port, host } from './config';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    data: "Hey There!! I'm your Typescript server ;) What's cooking?"
  });
});

app.listen(port, host, () => {
  console.log(`[server]: Server is running at http://${host}:${port} ⚡️⚡️⚡️`);
});
