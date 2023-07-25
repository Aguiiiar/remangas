import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from './errors/AppError';
import isAuthenticated from '@shared/http/middlewares/auth';

const app = express();

app.use(express.json());
app.use(cors());
app.use(isAuthenticated);
app.use('/api/v1', routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

export default app;
