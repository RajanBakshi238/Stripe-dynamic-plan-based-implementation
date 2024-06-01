import { Router } from "express";
import createProduct from "../controllers/product/createProduct.controller.js";
const productRoutes = Router();

productRoutes.post("", createProduct);

export default productRoutes;
