import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Controller()
export class ViewController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Render('index')
  home() {
    return {};
  }

  @Get('usuarios')
  @Render('users')
  async users() {
    const users = await this.userService.findAll();
    return { users };
  }
}
