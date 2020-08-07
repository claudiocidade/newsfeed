import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArticleModel } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private readonly http:HttpClient ) { }

  async get(id:number):Promise<ArticleModel> {
    return null;
  }

  async list():Promise<ArticleModel> {
    return null;
  }
}
