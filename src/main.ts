import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
=======
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configurações da documentação Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Usuários')
    .setDescription('Documentação da API de usuários com NestJS + Prisma + Swagger')
    .setVersion('1.0')
    .addTag('users') // Tag opcional para categorizar as rotas
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Acessível em http://localhost:3000/api
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remova propriedades não decoradas no DTO
      forbidNonWhitelisted: true, // Retorna erro se enviar propriedades não permitidas
      transform: true, // Transforma os tipos automaticamente. ex: (string -> number)
      
    })
  )
  await app.listen(3000);
>>>>>>> 2e948c68ca15c33fa0f29835454cdfe5d783a808
}
bootstrap();
