

async function fetchAndDisplayData() {
    try {
      
      const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
  

      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
      }
  
      
      const data = await response.json();
  
      
      createAndAppendRecipeElements(data.meals);
    } catch (error) {
     
      console.error(`Error: ${error.message}`);
    }
  }


function createAndAppendRecipeElements(meals) {
  
    const recipesContainer = document.querySelector('.contenedor_recetas');
    let i=0;
  
    meals.forEach(meal => {
      if(i<9){
        const recipeElement = document.createElement('div');
      recipeElement.classList.add('receta');
  
      recipeElement.innerHTML = `
      <h3 class='nombre_receta' >${meal.strMeal}</h3>
      <img class='imagen_receta' src="${meal.strMealThumb}" alt="${meal.strMeal}" style="height: 12rem;">
      
      
    `;
    
  
      
      
      recipesContainer.appendChild(recipeElement);
      i++;
      }
    });
  }
  
   fetchAndDisplayData();
  

  