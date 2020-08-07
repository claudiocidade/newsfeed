import { IPostModel } from './../core/post.model';
import { IUserModel } from './../users/user.model';

export interface ICommentModel extends IPostModel {
  author:IUserModel;
}