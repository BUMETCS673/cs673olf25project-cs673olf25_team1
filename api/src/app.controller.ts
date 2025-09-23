import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('ai')
  async chatWithAi(@Body() body: { message: string }) {
    const reply = await this.appService.getLlmAnswer(body.message);
    return { reply };
  }
}
