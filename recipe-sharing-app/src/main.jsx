import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'

const router = createBrowserRouter( ( createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} ></Route>
    </Route>
)))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
