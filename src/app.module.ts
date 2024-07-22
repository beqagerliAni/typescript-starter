import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port:3306,
    database: 'migrations',
    username: 'root',
    password: 'Newpassword123!',
    synchronize:false,
    autoLoadEntities:true,
  }), ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
