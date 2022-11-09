import { Request, Response } from "express";
import Category from "../models/category";

export const getCategories = async (_req: Request, res: Response) => {
  const results = await Category.find({});

  res.json(results);
};
export const getCategoryById = async (req: Request, res: Response) => {
  const results = await Category.findOne({ id: req.params.id });

  res.json(results);
};
export const addCategories = async (req: Request, res: Response) => {
  console.log(req.body);

  const newCategory = new Category(req.body);
  await newCategory.save();
  return res.status(201).json(newCategory);
};
