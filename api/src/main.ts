import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new IoAdapter(app));
  app.enableCors({ origin: 'http://localhost:8000', credentials: true }); // This allows CORS for the frontend; can be deleted later
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0')
}
bootstrap();