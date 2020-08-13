import { IPostModel } from "./IPostModel";
import { ICommentModel } from "./ICommentModel";

export interface IArticleModel extends IPostModel {
  headline:string;
  comments:ICommentModel[];
}