import { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number, // in cents
    currency: {
      type: String,
      default: "usd",
    },
    recurring: {
      type: String,
      enum: ['day', 'month', 'week', 'year'],
      default: "month",
    },
    isActive: {
      default: true,
      type: Boolean,
    },
    
    stripeProductId: String,
    stripeProductObject: Object,
  },
  {
    timestamps: true,
  }
);

export default productSchema;
