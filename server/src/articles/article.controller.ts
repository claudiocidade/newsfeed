import { Controller, Get, Delete } from '@nestjs/common';

import { ArticleService } from 'src/articles/article.service';
import { IArticleModel } from './article.model';

@Controller()
export class ArticleController {
  constructor(private readonly service: ArticleService) {}

  @Get()
  async list():Promise<IArticleModel[]> {
    return this.service.list();
  }

  @Get(':id')
  async get(id:number):Promise<IArticleModel> {
    return this.service.get(id);
  }

  @Delete('comments/:id')
  async deleteComment(id:number):Promise<boolean> {
    return false;
  }
}
