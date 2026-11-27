async function searchMeals() {
    let meal = document.getElementById("mealName").value;

    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(meal);

    let response = await fetch(url);
    let data = await response.json();

    let results = document.getElementById("results");
    results.innerHTML = "";

    if (data.meals == null) {
        results.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    for (let meal of data.meals) {
        results.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top">
                    <div class="card-body">
                        <h5>${meal.strMeal}</h5>
                        <button class="btn btn-success" onclick="viewRecipe('${meal.idMeal}')">
    View Recipe
</button>
                    </div>
                </div>
            </div>
        `;
    }
}
    async function viewRecipe(id) {
    let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;

    let response = await fetch(url);
    let data = await response.json();

   let meal = data.meals[0];
let ingredients = "";

for (let i = 1; i <= 20; i++) {
    let ingredient = meal["strIngredient" + i];
    let measure = meal["strMeasure" + i];

    if (ingredient && ingredient.trim() != "") {
        ingredients += `<li>${measure || ""} ${ingredient}</li>`;
    }
}
let results = document.getElementById("results");

results.innerHTML = `
    <div class="col-12">
        <h2>${meal.strMeal}</h2>

        <img src="${meal.strMealThumb}" width="300"
             class="img-fluid rounded mb-3">

        <p>Category: ${meal.strCategory}</p>
        <p>Cuisine: ${meal.strArea}</p>
        <h4>Ingredients</h4>
<ul>
    ${ingredients}
</ul>
        <h4>Cooking Instructions</h4>
        <p>${meal.strInstructions}</p>
    </div>
`;
}

