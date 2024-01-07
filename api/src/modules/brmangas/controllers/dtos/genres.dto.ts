import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean } from 'class-validator';

export class GenresDto {
  @Transform(({ value }) => value === 'true' || value === '1')
  @Expose({ name: 'adult' })
  adult: boolean;
}
