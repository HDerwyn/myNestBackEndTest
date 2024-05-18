import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './database'; // Update with your actual path

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const dataSource = await AppDataSource.initialize();
        return dataSource.options; 
      },
      dataSourceFactory: async () => {
        return AppDataSource;
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
