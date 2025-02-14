import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const favorites = useRecipeStore((state) => state.favorites);

  // Trigger recommendation generation only when favorites change
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations, favorites]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
