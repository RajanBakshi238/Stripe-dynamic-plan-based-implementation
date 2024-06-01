import Feature from "../../database/models/feature.model.js";
import Product from "../../database/models/product.model.js";
import stripeInstance from "../../utils/stripe/stripeInstance.js";

const addFeatureToProduct = async (request, response) => {
  try {
    const productId = request.params.productId;
    const body = request.body;

    const product = await Product.findById(productId);
    if (!product) {
      return response.status(400).json({
        message: "Product not found",
      });
    }

    const feature = await Feature.findOne({ stripeFeatureId: body.featureId });
    if (!feature) {
      return response.status(400).json({
        message: "Feature not found",
      });
    }

    // Associating feature to product in stripe
    const productFeature = await stripeInstance.products.createFeature(
      product.stripeProductId,
      {
        entitlement_feature: body.featureId,
      }
    );

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $addToSet: {
          features: feature.id,
          stripeProductFeatureIds: productFeature.id,
        },
        $push: { stripeProductFeaturesObjects: productFeature },
      },
      { new: true }
    );

    return response.json({ data: updatedProduct });
  } catch (error) {
    return response.status(500).json({
      messsage: "Something went wrong",
      error: error,
    });
  }
};

export default addFeatureToProduct;
