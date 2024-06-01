import mongoose from "mongoose";
import featureSchema from "../schemas/feature.schema.js";

const Feature = mongoose.model("Feature", featureSchema);

export default Feature;
