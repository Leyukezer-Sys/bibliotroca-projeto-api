import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  default(): any {
    return { message: 'api-bibliotroca' };
  }
}
