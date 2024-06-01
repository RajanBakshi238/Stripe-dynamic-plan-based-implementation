import Product from "../../database/models/product.model.js";
import stripeInstance from "../../utils/stripe/stripeInstance.js";

const createProduct = async (request, response) => {
  try {
    const body = request.body;

    const stripeProduct = await stripeInstance.products.create({
      name: body.name,
      description: body.description,
      metadata: {},
      default_price_data: {
        currency: "usd", // @todo should be in constants,
        recurring: {
          interval: "month", // @future should be dynamic from api, @todo if not dynamic move to constants
        },
        unit_amount: body.price,
        // name: body.name,
      },
    });

    const product = await Product.create({
      ...body,
      stripeProductId: stripeProduct.id,
      stripeProductObject: stripeProduct,
    });

    return response.json({ data: product });
  } catch (error) {
    return response.status(500).json({
      messsage: "Something went wrong",
      error: error,
    });
  }
};

export default createProduct;
