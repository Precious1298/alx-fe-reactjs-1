import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App (){
    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <>
                        <SearchBar />
                        <AddRecipeForm />
                        <RecipeList />
                        <Link to="/favorites">Favorites</Link>
                        <Link to='/recommendations'>Recommendations</Link>
                    </>
                } />
                <Route path='/recipe/:recipeId' element={<RecipeDetails />} />
                <Route path='/favorites' element={<FavoritesList />} />
                <Route path='/recommendations' element={<RecommendationsList />} />
            </Routes>
        </Router>
  )
}

export default App;