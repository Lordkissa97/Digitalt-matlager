import React, { useState } from 'react';
import './RecipesPage.css';

interface Recipe {
  id: number;
  title: string;
  description: string;
  cookTime: number;
  servings: number;
  difficulty: 'Lett' | 'Middels' | 'Vanskelig';
  ingredients: string[];
  missingIngredients: string[];
  image?: string;
}

const RecipesPage: React.FC = () => {
  const [recipes] = useState<Recipe[]>([
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      description: 'Klassisk italiensk pastarett med egg, bacon og parmesan',
      cookTime: 20,
      servings: 4,
      difficulty: 'Middels',
      ingredients: ['Spaghetti', 'Bacon', 'Egg', 'Parmesan', 'Svart pepper'],
      missingIngredients: ['Bacon', 'Parmesan'],
      image: '🍝'
    },
    {
      id: 2,
      title: 'Kylling Teriyaki',
      description: 'Saftig kylling i søt og salt teriyakisaus',
      cookTime: 25,
      servings: 2,
      difficulty: 'Lett',
      ingredients: ['Kyllingfilet', 'Teriyakisaus', 'Ris', 'Brokkoli'],
      missingIngredients: ['Teriyakisaus', 'Brokkoli'],
      image: '🍗'
    },
    {
      id: 3,
      title: 'Eplekake',
      description: 'Hjemmelaget eplekake med kanel og smør',
      cookTime: 60,
      servings: 8,
      difficulty: 'Middels',
      ingredients: ['Epler', 'Mel', 'Smør', 'Sukker', 'Kanel', 'Egg'],
      missingIngredients: ['Mel', 'Smør', 'Sukker', 'Kanel'],
      image: '🥧'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'available' | 'missing'>('all');

  const filteredRecipes = recipes.filter(recipe => {
    if (selectedCategory === 'available') {
      return recipe.missingIngredients.length === 0;
    }
    if (selectedCategory === 'missing') {
      return recipe.missingIngredients.length > 0;
    }
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Lett': return '#28a745';
      case 'Middels': return '#ffc107';
      case 'Vanskelig': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <div className="recipes-page">
      <div className="recipes-header">
        <h1>🧾 Oppskrifter !Standard opprettet template!</h1>
        <button className="ai-suggest-btn">🤖 Få AI-forslag</button>
      </div>

      <div className="recipes-filters">
        <button
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          Alle oppskrifter ({recipes.length})
        </button>
        <button
          className={`filter-btn ${selectedCategory === 'available' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('available')}
        >
          Kan lages nå ({recipes.filter(r => r.missingIngredients.length === 0).length})
        </button>
        <button
          className={`filter-btn ${selectedCategory === 'missing' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('missing')}
        >
          Mangler ingredienser ({recipes.filter(r => r.missingIngredients.length > 0).length})
        </button>
      </div>

      <div className="recipes-grid">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <span className="recipe-emoji">{recipe.image}</span>
              {recipe.missingIngredients.length === 0 && (
                <div className="available-badge">✅ Kan lages</div>
              )}
            </div>
            
            <div className="recipe-content">
              <h3>{recipe.title}</h3>
              <p className="recipe-description">{recipe.description}</p>
              
              <div className="recipe-meta">
                <span className="recipe-time">⏱️ {recipe.cookTime} min</span>
                <span className="recipe-servings">👥 {recipe.servings} porsjoner</span>
                <span 
                  className="recipe-difficulty"
                  style={{ color: getDifficultyColor(recipe.difficulty) }}
                >
                  📊 {recipe.difficulty}
                </span>
              </div>

              <div className="recipe-ingredients">
                <h4>Ingredienser:</h4>
                <div className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <span 
                      key={index}
                      className={`ingredient ${
                        recipe.missingIngredients.includes(ingredient) ? 'missing' : 'available'
                      }`}
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {recipe.missingIngredients.length > 0 && (
                <div className="missing-ingredients">
                  <p>❌ Mangler: {recipe.missingIngredients.join(', ')}</p>
                  <button className="add-to-shopping-btn">
                    🛒 Legg til i handleliste
                  </button>
                </div>
              )}
            </div>

            <div className="recipe-actions">
              <button className="view-recipe-btn">👀 Se oppskrift</button>
              <button className="favorite-btn">❤️</button>
            </div>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="no-recipes">
          <p>Ingen oppskrifter funnet for valgt filter.</p>
        </div>
      )}
    </div>
  );
};

export default RecipesPage;