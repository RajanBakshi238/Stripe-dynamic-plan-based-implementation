import Product from "../../database/models/product.model.js";
import stripeInstance from "../../utils/stripe/stripeInstance.js";

const getProductAndPrice = async (request, response) => {
  try {
    const productId = request.params.productId;

    const product = await Product.findById(productId);
    if (!product) {
      return response.status(400).json({
        message: "Feature not found",
      });
    }

    // fetching product from stripe  ----------> it is giving error that search functionality is temporary unavailable in your region
    // const stripeProduct = await stripeInstance.products.search({
    //   query: `id: ${product.stripeProductId}`,
    // });

    // same issue i m getting while running serach as above search not available
    const stripeProductPricing = await stripeInstance.prices.search({
    //   query: `id: ${product.stripeProductObject.default_price}`,
        query:  'active:\'true\' AND metadata[\'order_id\']:\'6735\''
    });

    return response.json({
      data: product,
      //   stripeProduct: stripeProduct,
      stripeProductPricing,
    });
  } catch (error) {
    return response.status(500).json({
      messsage: "Something went wrong",
      error: error,
    });
  }
};

export default getProductAndPrice;
