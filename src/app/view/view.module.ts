import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { ViewController } from './view.controller';

@Module({
  imports: [UserModule],
  controllers: [ViewController],
})
export class ViewModule {}
