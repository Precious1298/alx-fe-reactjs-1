import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App (){
    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <>
                        <AddRecipeForm />
                        <RecipeList />
                    </>
                } />
                <Route path='/recipe/:recipeId' element={<RecipeDetails />} />
            </Routes>
        </Router>
  )
}

export default App;