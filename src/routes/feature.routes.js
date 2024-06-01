import { Router } from "express";
import createFeature from "../controllers/feature/createFeature.controller.js";

const featureRoutes = Router();

featureRoutes.post("", createFeature);

export default featureRoutes;
