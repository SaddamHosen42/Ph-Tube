function loadCategories(){
    //fetch data from api
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    //convert data to json
    .then(response => response.json())
    //send data to displayCategories function
    .then(data => displayCategories(data.categories))
}

function displayCategories(categories){
    //get the parent element
    const categoryContainer = document.getElementById('categories-container');
    //loop through all the categories
    for(let item of categories){
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML=`
            <button class="btn btn-md">${item.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv);

    }
}
loadCategories();