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

// check if user already exists
userDetailSchema.statics.isUserExistsByEmail = async function (email) {
  const isUserExists = await this.findOne({
    user: { $regex: email, $options: "i" },
  });

  return isUserExists;
};

export const UserDetail = model("UserDetail", userDetailSchema);
