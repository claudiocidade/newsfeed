import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article.domain';

@Module({
  imports: [
    ArticleModule, 
    TypeOrmModule.forRoot()
  ]
})
export class AppModule {}