import { Schema, Types } from "mongoose";

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
      enum: ["day", "month", "week", "year"],
      default: "month",
    },
    isActive: {
      default: true,
      type: Boolean,
    },
    features: [Types.ObjectId],
    // productFeatures: [Types.ObjectId],
    stripeProductId: String,
    stripeProductObject: Object,
    stripeProductFeatureIds: [String], // this are the ids we get by entitling the feature to product.
    stripeProductFeaturesObjects: [Object], // @todo only keep it now, will remove it as this is object and and its difficult to remove object at the time of removing feature
  },
  {
    timestamps: true,
  }
);

export default productSchema;
