import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {ItemsModule} from './items/items.module'

@Module({
  imports: [ItemsModule,MongooseModule.forRoot('mongodb://testuser:a1b2c3d4@ds129090.mlab.com:29090/items')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
