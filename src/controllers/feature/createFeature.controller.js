//  ONLY @ADMIN CAN CREATE FEATURE

import Feature from "../../database/models/feature.model.js";
import createSlug from "../../utils/regx/createSlug.js";
import stripeInstance from "../../utils/stripe/stripeInstance.js";

const createFeature = async (request, response) => {
  try {
    const body = request.body;
    const featureSlug = createSlug(body.name);

    const featureExist = await Feature.findOne({ slug: featureSlug });
    if (featureExist) {
      return response.status(400).json({
        message: "Feature already existed with this name",
      });
    }

    const stripeFeature = await stripeInstance.entitlements.features.create({
      name: body.name,
      lookup_key: featureSlug,
      metadata: {
        description: body.description,
        // can have multiple key value pair
      },
    });

    const feature = await Feature.create({
      ...body,
      slug: featureSlug,
      stripeFeatureId: stripeFeature.id,
      stripeFeatureObject: stripeFeature,
    });
    return response.json({
      data: feature,
    });
  } catch (error) {
    console.log(error, "....")
    return response.status(500).json({
      messsage: "Something went wrong",
      error: error,
    });
  }
};

export default createFeature;
