import { z } from "zod";
import { CategoriesAPIResponseScema } from "../schemas/Recipes-Schemas";
import { SearchFilterSchema } from "../schemas/Recipes-Schemas";

export type Categories = z.infer<typeof CategoriesAPIResponseScema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;