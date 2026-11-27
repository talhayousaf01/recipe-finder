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
                    </div>
                </div>
            </div>
        `;
    }
}
