// models/Message.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  sender: string;
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema = new Schema({
  sender: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IMessage>('Message', MessageSchema);
