import { NextFunction, Request, Response } from 'express';
import { Unauthorized } from '../errors/';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authorization = request.headers.authorization;
  if (!authorization) {
    throw new Unauthorized('Authorization Token is missing');
  }

  const token = authorization.replace('Authorization ', '');

  try {
    if (!verifyToken(token)) {
      throw new Unauthorized('Invalid token');
    }
    return next();
  } catch {
    throw new Unauthorized('Invalid Token');
  }
}

function verifyToken(token: string): boolean {
  return token === (process.env.AUTHORIZATION as string);
}
