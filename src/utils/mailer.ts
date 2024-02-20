import nodemailer, { SendMailOptions } from "nodemailer";
import log from "./logger";

// async function createTestCreds() {
//   const creds = await nodemailer.createTestAccount();
//   console.log({ creds });
// }

// createTestCreds();

const smtpConfig = {
  user: "ckrxjwo4zdlcqn25@ethereal.email",
  pass: "33vmEaXbJFPk9QAFYg",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
};

// creds: {
//   // imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//   // pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//   web: 'https://ethereal.email',
// }

const transporter = nodemailer.createTransport({
  ...smtpConfig,
  auth: {
    user: smtpConfig.user,
    pass: smtpConfig.pass,
  },
});

async function sendEmail(payload: SendMailOptions) {
  transporter.sendMail(payload, (err, info) => {
    if (err) {
      log.error(err, "Error sending email");
      return;
    }
    log.info(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  });
}

export default sendEmail;
