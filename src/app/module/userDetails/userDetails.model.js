import { model, Schema } from "mongoose";

const userDetailSchema = new Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  bio: { type: String, required: true },
  interests: { type: [String], required: true },
});

export const UserDetail = model("UserDetail", userDetailSchema);
