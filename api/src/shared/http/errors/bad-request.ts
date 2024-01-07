import { AppError } from './app-error';

export class BadRequest extends AppError {
  constructor(public readonly message: string) {
    super(message, 400);
  }
}
