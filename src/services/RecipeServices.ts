import axios from "axios";
import { CategoriesAPIResponseScema, DrinksAPIResponse, RecipeAPIResponse } from "../schemas/Recipes-Schemas";
import { Drink, SearchFilter } from "../types";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  const { data } = await axios.get(url)
  const result = CategoriesAPIResponseScema.safeParse(data)

  if (result.success) {
    return result.data
  }
}

export async function getRecipes(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filters.ingredient}&c=${filters.categoria}`
  const { data } = await axios.get(url)
  const result = DrinksAPIResponse.safeParse(data);

  if (result.success) {
    return result.data
  }
}

export async function selectRecipe(id: Drink["idDrink"]) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const { data } = await axios.get(url)
  const result = RecipeAPIResponse.safeParse(data.drinks[0])

  if (result.success) {
    return result.data
  }
}
