import User from "../../database/models/user.model.js";
import stripeInstance from "../../utils/stripe/stripeInstance.js";

export const createUser = async (request, response) => {
  try {
    const body = request.body;

    // create customer on stripe
    const stripeCustomer = await stripeInstance.customers.create({
      name: body.name,
      email: body.email,
    });

    console.log(stripeCustomer, "..... stripe customer");

    const user = await User.create({
      ...body,
      stripeCustomerKey: stripeCustomer.id,
      stripeCustomerObj: stripeCustomer,
    });

    return response.json({ data: user });
  } catch (error) {
    return response.status(500).json({
      messsage: "Something went wrong",
      error: error,
    });
  }
};

export default createUser;
