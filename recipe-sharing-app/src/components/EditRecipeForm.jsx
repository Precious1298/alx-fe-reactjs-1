// EditRecipeForm.js
import React, { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
    const [title, setTitle] = useState(recipe?.title || '');
    const [description, setDescription] = useState(recipe?.description || '');
    
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
        }
    }, [recipe]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe(recipe.id, title, description);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default EditRecipeForm;
