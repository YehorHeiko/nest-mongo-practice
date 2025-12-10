import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { helloService } from './hello.service';

@Controller('hello') // маршрут
export class HelloController {
  constructor(private readonly helloService: helloService) {}

  @Get()
  getHello(): string | number[] {
    // return 'Hello Nest! Это мой первый запросик! Иуууу! МикроЕндпоинтиик! :3';

    return this.helloService.returnTest();
  }
  @Post()
  postHello(@Body() body): string {
    // return 'Post endpoint Yehor';

    return this.helloService.addInDataBase(body);
  }
  @Post('inside')
  @UseInterceptors(FileInterceptor('file'))
  inside(@Body() body: { name: string }): string {
    return `Hello, ${body.name}!`;
  }
}
