import React from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import {Outlet} from 'react-router-dom'

function App (){
    return (
        <div>
            <AddRecipeForm />
            <RecipeList />
            <Outlet />
        </div>
  )
}

export default App