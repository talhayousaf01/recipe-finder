async function loadCategories() {
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    let response = await fetch(url);
    let data = await response.json();

    let categories = document.getElementById("categories");

    for (let category of data.categories) {
        categories.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${category.strCategoryThumb}" class="card-img-top">

                    <div class="card-body text-center">
                        <h5>${category.strCategory}</h5>

                        <button class="btn btn-success" onclick="viewCategory('${category.strCategory}')">
                            View Meals
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

loadCategories();
async function viewCategory(category) {
    let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + encodeURIComponent(category);

    let response = await fetch(url);
    let data = await response.json();

    let categories = document.getElementById("categories");

    categories.innerHTML = "";

    if (data.meals == null) {
        categories.innerHTML = "<p>No meals found.</p>";
        return;
    }

    for (let meal of data.meals) {
        categories.innerHTML += `
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
