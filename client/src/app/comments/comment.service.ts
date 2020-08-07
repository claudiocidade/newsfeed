import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CommentModel } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private readonly http:HttpClient ) { }

  async create(model:CommentModel):Promise<CommentModel> {
    return null;
  }

  async delete(id:number):Promise<CommentModel> {
    return null;
  }

  async list(commentId:number):Promise<CommentModel> {
    return null;
  }
}
