import { StateCreator } from "zustand";
import { getCategories } from "../services/RecipeServices";
import type { Categories, SearchFilter } from "../types";

export type TRecipesSlice = {
  categories: Categories,
  fetchCategories: () => Promise<void>,
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>,
}

export const createRecipesSlice: StateCreator<TRecipesSlice> = (set) => ({
  categories: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories()
    set(() => ({
      categories,
    }))
  },
  searchRecipes: async (searchFilter) => {
    console.log("buscando recetas...", searchFilter);
  }
})