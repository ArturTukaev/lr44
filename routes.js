import express from "express";
import { getProducts, addProduct } from "./controllers/productController.js";
import { getCategories, addCategory } from "./controllers/categoryController.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", addProduct);

router.get("/categories", getCategories);
router.post("/categories", addCategory);

export default router;