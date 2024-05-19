import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"

const Home = lazy(() => import("./pages/Home"))
const Favorites = lazy(() => import("./pages/Favorites"))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={
            <Suspense>
              <Home />
            </Suspense>
          } index />

          <Route path="/favoritos" element={
            <Suspense>
              <Favorites />
            </Suspense>
          } />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
