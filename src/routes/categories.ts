import express from "express";
import {
  addCategories,
  getCategories,
  getCategoryById,
} from "../services/categories";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);

router.post("/", addCategories);

export default router;
