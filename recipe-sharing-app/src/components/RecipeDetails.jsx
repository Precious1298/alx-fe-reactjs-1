  // RecipeDetails component
import {useParams} from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';
import useRecipeStore from './recipeStore';

const RecipeDetails = ( ) => {
    const {recipeId} = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === parseInt(recipeId))
    );

    return (
        <div>
            <h1>{recipe?.title}</h1>
            <p>{recipe?.description}</p>
            {/* Render EditRecipeForm and DeleteRecipeButton here */}
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipeId} />
        </div>
    );
};

export default RecipeDetails