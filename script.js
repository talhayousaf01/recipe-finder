async function searchMeals() {
    let meal = document.getElementById("mealName").value;

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(meal);
   let response = await fetch(url);
    let data = await response.json();

    console.log(data);
}

