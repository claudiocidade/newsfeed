import { Controller, Get, Injectable } from '@nestjs/common';
import { ArticleService } from './article.service';

@Injectable()
@Controller('articles')
export class ArticleController {
  constructor(private readonly service:ArticleService) {}

  @Get('/hello')
  getHello(): string {
    return this.service.getHello();
  }
}
