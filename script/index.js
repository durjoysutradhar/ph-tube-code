function loadCatagories() {
    //fetching dara from api
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>displayCatagories(data.categories));
}

function displayCatagories(categories) {
    //getting the container
    const categoryContainer = document.getElementById("category-container");

    //looping through the categories
    for(let category of categories){
        //creating a div for each category
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn">${category.category}</button>`

        //appending the category div to the container
        categoryContainer.appendChild(categoryDiv);
    }

    //
}

loadCatagories();