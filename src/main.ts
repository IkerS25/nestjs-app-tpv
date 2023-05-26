import { SERVER_PORT } from './config/constants';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';


// const httpsOptions: HttpsOptions = {
//   key: fs.readFileSync('/etc/letsencrypt/live/mycloudtpv.hopto.org/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/mycloudtpv.hopto.org/fullchain.pem')
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const configService = app.get(ConfigService);

  Date.prototype.toISOString = function () {
    const timezoneOffset = -120; // La zona horaria de Europa/Madrid es UTC+2
    const timezoneOffsetInMilliseconds = timezoneOffset * 60 * 1000;
    const adjustedTimestamp = this.getTime() - timezoneOffsetInMilliseconds;
    const adjustedDate = new Date(adjustedTimestamp);
    return adjustedDate.toISOString();
  };

  // server port
  const port = +configService.get<number>(SERVER_PORT) || 3050;
  await app.listen(port);
  console.log(`listening on port ${await app.getUrl()}`)
}
bootstrap();
