import { Module } from '@nestjs/common';
import { UserModule } from './app/user/user.module';
import { ViewModule } from './app/view/view.module';

@Module({
  imports: [UserModule, ViewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
