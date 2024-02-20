"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
function createTestCreds() {
    return __awaiter(this, void 0, void 0, function* () {
        const creds = yield nodemailer_1.default.createTestAccount();
        console.log({ creds });
    });
}
createTestCreds();
// const smtp = config.get<{
//   user: string;
//   pass: string;
//   host: string;
//   port: number;
//   secure: boolean;
// }>("smtp");
// const transporter = nodemailer.createTransport({
//   ...smtp,
//   auth: { user: smtp.user, pass: smtp.pass },
// });
function sendEmail(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        //   transporter.sendMail(payload, (err, info) => {
        //     if (err) {
        //       log.error(err, "Error sending email");
        //       return;
        //     }
        //     log.info(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
        //   });
    });
}
exports.default = sendEmail;
