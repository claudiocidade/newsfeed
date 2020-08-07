import { IPostModel } from './../core/post.model';

export interface IArticleModel extends IPostModel {
  headline:string;
}