import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
=======
import { UserModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PlaceModule } from './place/place.module';


@Module({
  imports: [UserModule, PrismaModule, AuthModule, PlaceModule],
  controllers: [],
  providers: [],
})

>>>>>>> 2e948c68ca15c33fa0f29835454cdfe5d783a808
export class AppModule {}
