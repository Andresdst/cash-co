import express from "express";
import {
  addMovements,
  getMovements,
  getMovementById,
} from "../services/movements";

const router = express.Router();

router.get("/", getMovements);
router.get("/:id", getMovementById);

router.post("/", addMovements);

export default router;
