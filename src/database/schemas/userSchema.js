import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    stripeCustomerKey: String,
  },
  {
    timestamps: true,
  }
);

export default userSchema