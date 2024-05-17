import { z } from "zod";
import { CategoriesAPIResponseScema, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponse } from "../schemas/Recipes-Schemas";
import { SearchFilterSchema } from "../schemas/Recipes-Schemas";

export type Categories = z.infer<typeof CategoriesAPIResponseScema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponse>;