import express, { json, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

app.use((_: Request, res: Response): void => {
  res.status(404).json({
    message: 'Not found',
  });
});

app.use((err: Error, _: Request, res: Response, __: NextFunction): void => {
  res.status(500).json({
    message: err.message,
  });
});

export default app;
