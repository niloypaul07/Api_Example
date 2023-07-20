const LoadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    //console.log(meals);
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;

    meals.forEach(meal => {
        // console.log(meal);

        const mealDiv = document.createElement('div');

        mealDiv.classList.add('col');
        mealDiv.innerHTML = ` 
        <div onclick="LoadMealDetail(${meal.idMeal})" class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
  </div>`;
        mealsContainer.appendChild(mealDiv);


    });

}

const SearchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    LoadMeals(searchText);
    searchField.value = '';

}
const LoadMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealDetail(data.meals[0]))

}

const mealDetail = (meal) => {
    //console.log(meal);
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    //detailContainer.innerHTML = ``;
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('card');
    detailDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    
  </div>`;

    detailContainer.appendChild(detailDiv);


}




LoadMeals('');

