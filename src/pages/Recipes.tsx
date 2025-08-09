import React from 'react';

const Recipes = () => {
  const recipes = [
    {
      name: 'Traditional Dal Tadka',
      oil: 'Mustard Oil',
      time: '30 mins',
      difficulty: 'Easy',
      image: '🥘'
    },
    {
      name: 'Crispy Vegetable Stir Fry',
      oil: 'Sunflower Oil',
      time: '20 mins',
      difficulty: 'Easy',
      image: '🥬'
    },
    {
      name: 'Bengali Fish Curry',
      oil: 'Mustard Oil',
      time: '45 mins',
      difficulty: 'Medium',
      image: '🐟'
    },
    {
      name: 'Golden Fried Rice',
      oil: 'Rice Bran Oil',
      time: '25 mins',
      difficulty: 'Easy',
      image: '🍚'
    },
    {
      name: 'Spiced Potato Curry',
      oil: 'Soyabean Oil',
      time: '35 mins',
      difficulty: 'Medium',
      image: '🥔'
    },
    {
      name: 'Healthy Salad Dressing',
      oil: 'Sunflower Oil',
      time: '5 mins',
      difficulty: 'Easy',
      image: '🥗'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Recipes</h1>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover delicious recipes that bring out the best flavors using our premium cooking oils. 
            From traditional dishes to modern cuisine, find the perfect recipe for every occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-6xl">
                {recipe.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{recipe.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                    {recipe.oil}
                  </span>
                  <span className="text-sm text-gray-600">{recipe.time}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {recipe.difficulty}
                  </span>
                  
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors duration-200">
            View All Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;