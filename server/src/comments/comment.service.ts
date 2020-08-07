import { Injectable } from '@nestjs/common';

import { ICommentModel } from './comment.model';

@Injectable()
export class CommentService {
  async create(model:ICommentModel):Promise<ICommentModel> {
    return model;
  }

  async delete(id:number):Promise<boolean> {
    return true;
  }

  async list(articleId:number):Promise<ICommentModel> {
    return null;
  }
}
