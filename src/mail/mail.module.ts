import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory() {
        return {
          transport: {
            host: 'smtp.ukr.net',
            secure: true,
            port: 465,
            auth: {
              user: 'my_mail@ukr.net',
              pass: 'my_password',
            },
          },
          defaults: {
            from: `"No Reply" <my_mail@ukr.net>`,
          },
          template: {
            dir: 'src/mail/templates',
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          },
        };
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
