import { StateCreator } from "zustand";
import { getCategories, getRecipes, selectRecipe } from "../services/RecipeServices";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";
import { FavoriteSliceType } from "./favoritesSlice";

export type RecipesSliceType = {
  categories: Categories,
  drinks: Drinks,
  recipe: Recipe,
  modal: boolean,
  fetchCategories: () => Promise<void>,
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>,
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>,
  closeModal: () => void,
}

export const createRecipesSlice: StateCreator<RecipesSliceType & FavoriteSliceType, [], [], RecipesSliceType> = (set) => ({
  categories: { drinks: [] },
  drinks: { drinks: [] },
  recipe: {} as Recipe,
  modal: false,

  // Obtiene Categorias de bebidas.
  fetchCategories: async () => {
    const categories = await getCategories()
    set(() => ({
      categories,
    }))
  },

  // Busca recetas de bebidas.
  searchRecipes: async (searchFilter) => {
    const drinks = await getRecipes(searchFilter)
    set(() => ({
      drinks
    }))
  },

  // Busca una receta de bebida en particular.
  selectRecipe: async (id: Drink["idDrink"]) => {
    const recipe = await selectRecipe(id)
    set(() => ({
      recipe,
      modal: true,
    }))
  },

  // Abre modal de recetas.
  closeModal: () => {
    set(() => ({
      modal: false,
      recipe: {} as Recipe,
    }))
  }
})