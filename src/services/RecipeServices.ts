import axios from "axios";
import { CategoriesAPIResponseScema } from "../schemas/Recipes-Schemas";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  const { data } = await axios.get(url)  
  const result = CategoriesAPIResponseScema.safeParse(data)
  
  if (result.success) {
    return result.data
  }
}