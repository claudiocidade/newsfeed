import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './articles/article.controller';
import { ArticleService } from './articles/article.service';
import { CommentService } from './comments/comment.service';
import { UserService } from './users/user.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ArticleController
  ],
  providers: [
    AppService, 
    ArticleService,
    CommentService,
    UserService
  ],
})
export class AppModule {}
