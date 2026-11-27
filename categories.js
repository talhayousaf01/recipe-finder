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
