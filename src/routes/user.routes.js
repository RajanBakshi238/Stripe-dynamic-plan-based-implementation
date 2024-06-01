import { Router } from "express";
import createUser from "../controllers/user/createUser.controller.js";

const userRoutes = Router();

userRoutes.post("/", createUser);

export default userRoutes;
