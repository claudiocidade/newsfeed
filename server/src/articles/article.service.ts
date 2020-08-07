import { Injectable } from '@nestjs/common';

import { IArticleModel } from './article.model';

@Injectable()
export class ArticleService {
  async get(id:number):Promise<IArticleModel> {
    return {
      id : id,
      headline : 'Some news article headline',
      publishedDate : '12 feb 2019',
      postText: ''
    };
  }

  async list():Promise<IArticleModel[]> {
    return null;
  }
}
