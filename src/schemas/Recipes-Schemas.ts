import { z } from "zod";

export const CategoriesAPIResponseScema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string()
    })
  )
})

export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  categoria: z.string()
})