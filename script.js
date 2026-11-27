async function testAPI() {
    let response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
    );

    let data = await response.json();

    console.log(data);
}

testAPI();
