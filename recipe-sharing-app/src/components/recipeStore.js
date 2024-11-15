import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const useRecipeStore = create( persist(
    ( set ) => ( {
    recipes: [],
    addRecipe: ( newRecipe ) => set( ( state ) => ( {recipes: [...state.recipes, newRecipe]} ) ),
    setRecipes: ( recipes ) => set( {recipes} ),
    deleteRecipe: (recipeId) => set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)})),
    updateRecipe: ( recipeId, title, description ) => set( ( state ) => ( {
        recipes: state.recipes.map( ( recipe ) =>
            recipe.id === recipeId
                ? {...recipe, title, description} : recipe )
    } ) ),
    } ), {
     name: 'recipe-storage',
    }
));



export default useRecipeStore;