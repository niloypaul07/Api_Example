const LoadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    console.log(meals);
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        //console.log(meal);

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `<div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div onclick="LoadmealDetail(${meal.idMeal})" class="card-body">
            <h5 class="card-title">${meal.strIngredient1}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            
        </div>`;
        mealsContainer.appendChild(mealDiv);

    });
}
const searchFood = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    LoadMeals(searchText);
    searchField.value = '';
}
const LoadmealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        //console.log(url);
        .then(res => res.json())
        .then(data => DisplayMealDetails(data.meals[0]));

}

const DisplayMealDetails = meal => {

    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card')
    mealDiv.innerHTML = `<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strIngredient1}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      
    </div>`;
    detailContainer.appendChild(mealDiv);


}

LoadMeals('');