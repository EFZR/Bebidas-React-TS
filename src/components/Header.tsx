import { NavLink, useLocation } from "react-router-dom"

export default function Header() {
  const { pathname } = useLocation()
  console.log(pathname);

  return (
    <header className='bg-slate-800'>
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
      </div>
    </header>
  )
}
