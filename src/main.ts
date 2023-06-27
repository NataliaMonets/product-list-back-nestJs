import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createValidationPipe } from './shared/pipes/validation.pipe';

async function start() {
    const PORT = process.env.PORT || 7000;
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: 'http://localhost:4200',
        credentials: true,
    });
    app.useGlobalPipes(createValidationPipe());
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
start();