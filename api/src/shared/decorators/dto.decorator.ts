import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

interface DTOClass<T extends object> {
  new (): T;
}

export function DTO<T extends object>(dtoClass: DTOClass<T>): MethodDecorator {
  return function (
    target: any,
    key: string | symbol,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = async function (
      req: Request,
      res: Response,
      next: NextFunction,
    ): Promise<void> {
      try {
        const dtoInstance = plainToClass(dtoClass, req.query);
        const errors = await validate(dtoInstance);

        if (errors.length > 0) {
          res.status(400).json({ error: 'Validation error', details: errors });
        } else {
          req.dto = dtoInstance;
          originalMethod.apply(this, [req, res, next]);
        }
      } catch (error) {
        res.status(400).json({ error: 'Failed to deserialize DTO' });
      }
    };

    return descriptor;
  };
}
