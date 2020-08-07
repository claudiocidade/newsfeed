import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArticleModel } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private readonly http:HttpClient ) { }

  async get(id:number):Promise<ArticleModel> {
    return {
      id : 1234,
      headline : 'Some news article headline',
      publishedDate : '12 feb 2019'
    };
  }

  async list():Promise<ArticleModel> {
    return null;
  }
}
