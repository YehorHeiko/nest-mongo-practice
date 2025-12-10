import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { ItemsModule } from './items/items.module';
import { helloService } from './hello/hello.service';

@Module({
  imports: [ItemsModule],
  controllers: [AppController, HelloController],
  providers: [AppService, helloService],
})
export class AppModule {}
