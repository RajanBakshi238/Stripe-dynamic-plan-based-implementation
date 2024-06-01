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
    stripeCustomerObj: Object,
  },
  {
    timestamps: true,
  }
);

export default userSchema;
