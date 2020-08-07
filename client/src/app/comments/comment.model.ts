import { UserModel } from './../users/user.model';
import { ArticleModel } from './../articles/article.model';

export interface CommentModel {
  id:number;
  commentText:string;
  article:ArticleModel;
  user:UserModel;
}