import { Router } from "express";
import createProduct from "../controllers/product/createProduct.controller.js";
import addFeatureToProduct from "../controllers/product/addFeatureToProduct.js";
import getProductAndPrice from "../controllers/product/getProductAndPrice.js";

const productRoutes = Router();

productRoutes.post("", createProduct);
productRoutes.post("/add-feature/:productId", addFeatureToProduct);
productRoutes.get("/:productId", getProductAndPrice);

export default productRoutes;
