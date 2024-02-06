const mongoose = require("mongoose");

interface UserDocument extends mongoose.Document {
  username: string;
  password: string;
  role: "user" | "doctor" | "lawyer";
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["user", "doctor", "lawyer"] },
});

export const User = mongoose.model<UserDocument>("User", userSchema);
