import { Schema } from "mongoose";

const featureSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    //for storing lookup_key in stripe
    slug: {
      type: String,
      uique: true,
    },
    description: String,
    stripeFeatureId: String,
    stripeFeatureObject: Object,
  },
  {
    timestamps: true,
  }
);

export default featureSchema
