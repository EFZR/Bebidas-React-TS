import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TRecipesSlice, createRecipesSlice } from "./recipeSlice";

export const useAppStore = create<TRecipesSlice>()(devtools((...a) => ({
  ...createRecipesSlice(...a)
})))