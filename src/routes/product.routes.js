import { Router } from "express";
import createProduct from "../controllers/product/createProduct.controller.js";
import addFeatureToProduct from "../controllers/product/addFeatureToProduct.js";

const productRoutes = Router();

productRoutes.post("", createProduct);
productRoutes.post("/add-feature/:productId", addFeatureToProduct);

export default productRoutes;
