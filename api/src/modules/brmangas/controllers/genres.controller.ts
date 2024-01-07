import { Request, Response } from 'express';
import { GenresService } from '@mangas/brmangas/services';
import { DTO } from '@shared/decorators';
import { GenresDto } from './dtos';

export class GenresController {
  @DTO(GenresDto)
  public async genres(request: Request, response: Response): Promise<Response> {
    const adult: boolean = request.query.adult === 'true';
    const genres = await new GenresService().handle(adult);

    const dto: GenresDto = request.dto;

    console.log(dto);

    return response.status(200).json({ genres });
  }
}
