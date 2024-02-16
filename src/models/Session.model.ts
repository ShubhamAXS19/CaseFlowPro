import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "./User.model";

export class Session {
  @prop({ ref: () => User })
  user!: Ref<User>;

  @prop({ default: true })
  valid!: boolean;

  constructor(user: Ref<User>) {
    this.user = user;
    this.valid = true;
  }
}

const SessionModel = getModelForClass(Session, {
  schemaOptions: {
    timestamps: true,
  },
});

export default SessionModel;
