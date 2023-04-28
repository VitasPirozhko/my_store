import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendInviteLink(email: string) {
    console.log(email);
    await this.mailerService
      .sendMail({
        to: email,
        subject: 'succes mail',
        template: 'invite.hbs',
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
