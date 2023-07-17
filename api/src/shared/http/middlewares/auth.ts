import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authorization = request.headers.authorization;
  if (!authorization) {
    throw new AppError('Authorization Token is missing', 401);
  }

  const token = authorization.replace('Authorization ', '');

  try {
    if (!verifyToken(token)) {
      throw new AppError('Invalid token', 401);
    }
    return next();
  } catch {
    throw new AppError('Invalid Token', 401);
  }
}

function verifyToken(token: string): boolean {
  return token === (process.env.AUTHORIZATION as string);
}
