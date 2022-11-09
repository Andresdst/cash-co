import { Request, Response } from "express";
import Movement from "../models/movement";

export const getMovements = async (_req: Request, res: Response) => {
  const results = await Movement.find({});

  res.json(results);
};
export const getMovementById = async (req: Request, res: Response) => {
  const results = await Movement.findOne({ id: req.params.id });

  res.json(results);
};
export const addMovements = async (req: Request, res: Response) => {
  console.log(req.body);

  const newMovement = new Movement(req.body);
  await newMovement.save();
  return res.status(201).json(newMovement);
};
