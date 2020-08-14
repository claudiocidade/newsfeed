import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article.domain';

@Module({
  imports: [
    ArticleModule, 
    TypeOrmModule.forRoot({
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS
    })
  ]
})
export class AppModule {}