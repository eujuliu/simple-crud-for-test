import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

const User = mongoose.model("User", UserSchema);

export default User;
