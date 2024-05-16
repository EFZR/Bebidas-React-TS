import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"
import type { SearchFilter } from "../types"

export default function Header() {
  //#region state

  // Location
  const { pathname } = useLocation()
  const isHome = useMemo(() => pathname === "/", [pathname])

  // Form
  const [searchFilter, setSearchFilters] = useState<SearchFilter>({
    ingredient: "",
    categoria: "",
  })

  // Categories
  const fetchCategories = useAppStore(state => state.fetchCategories)
  const categories = useAppStore(state => state.categories)

  useEffect(() => {
    fetchCategories()
  }, [])

  // Recetas
  const searchRecipes = useAppStore(state => state.searchRecipes)

  //#endregion

  //#region Functions

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setSearchFilters({
      ...searchFilter, [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // TODO: Validar
    if (Object.values(searchFilter).includes("")) {
      console.log("Todos los campos son requeridos.");
      return
    }

    // Consultar las recetas
    await searchRecipes(searchFilter)
  }

  //#endregion

  return (
    <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800 "}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>
          <nav className="flex gap-9">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold hover:text-orange-500"}
            >
              Inicio
            </NavLink>

            <NavLink
              to="/favoritos"
              className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold hover:text-orange-500"}
            >
              Favoritos
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                className="block text-white uppercase font-extrabold text-lg"
                htmlFor="ingredient"
              >
                Nombre o Ingrediente
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe..."
                autoComplete="off"
                value={searchFilter.ingredient}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="block text-white uppercase font-extrabold text-lg"
                htmlFor="categoria"
              >
                Categoria
              </label>
              <select
                id="categoria"
                name="categoria"
                value={searchFilter.categoria}
                onChange={handleChange}
                className="p-3 w-full rounded-lg focus:outline-none"

              >
                <option value="">-- Seleccione --</option>
                {
                  categories.drinks.map((category => (
                    <option value={category.strCategory} key={category.strCategory}>{category.strCategory}</option>
                  )))
                }
              </select>
            </div>

            <input
              type="submit"
              value="Buscar Recetas"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  )
}
