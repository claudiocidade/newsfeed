import { IArticleModel } from "../models/IArticleModel";
import { IPostModel } from "../models/IPostModel";
import { ICommentModel } from "../models/ICommentModel";

export class ArticleService {
  public async create(): Promise<boolean> {
    return true;
  }

  public async list(): Promise<IArticleModel[]> {
    let comments:ICommentModel[] = await this.getPostList();
    return (await this.getPostList()).map(post => { 
      return { 
        ...post,
        headline: 'Lorem Ipsum Dolor Sit Amet.',
        comments: comments
      } 
    });
  }

  private async getPostList(): Promise<IPostModel[]> {
    let results:IPostModel[] = [];
    let author:number = 1;
    for (let i = 0; i < 5; i++) {
      author = 1 + (1 - Math.abs(author - 1));
      let item:IPostModel = {
        id : i + 1,
        authorId : author,
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' + 
               'Donec non ex nec erat rutrum eleifend. Sed rhoncus molestie ' +
               'dapibus. Nullam non finibus felis. Curabitur feugiat, purus ' + 
               'quis maximus ullamcorper, leo libero dignissim nisl, ut porta ' + 
               'diam lacus eu urna. Maecenas laoreet sapien vitae nulla venenatis ' + 
               'pretium. Nulla dictum urna in ullamcorper lacinia. In hac habitasse ' + 
               'platea dictumst. Cras in egestas dui. Orci varius natoque penatibus ' +
               'et magnis dis parturient montes, nascetur ridiculus mus. Mauris eget ' +
               'ipsum id lectus sollicitudin efficitur id eu arcu.',
        postedDate: '12 Jan. 2019'
      };
      results.push(item);
    } 
    return results;
  }
}