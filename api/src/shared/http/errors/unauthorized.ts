import { AppError } from './app-error';

export class Unauthorized extends AppError {
  constructor(public readonly message: string) {
    super(message, 401);
  }
}
