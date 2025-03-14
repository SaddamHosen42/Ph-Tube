function loadCategories() {
    //fetch data from api
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        //convert data to json
        .then(response => response.json())
        //send data to displayCategories function
        .then(data => displayCategories(data.categories))
}
function loadVideos() {
    //fetch data from api
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        //convert data to json
        .then(response => response.json())
        //send data to displayCategories function 
        .then(data => displayVideos(data.videos))
}
const loadCategoriesVideos = (id) => {
    //console.log(id);
    const URL=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    //console.log(URL);
    fetch(URL)
        .then(response => response.json())
        .then(data => displayVideos(data.category));
        
}

//normal function
function displayCategories(categories) {
    //get the parent element
    const categoryContainer = document.getElementById('categories-container');
    //loop through all the categories
    for (let item of categories) {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
            <button onclick="loadCategoriesVideos(${item.category_id})" class="btn btn-md hover:bg-red-500 hover:text-white">${item.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv);

    }
}

//arrow function
const displayVideos = (videos) => {
    //get the parent element
    const videoContainer = document.getElementById('videos-container');
    videoContainer.innerHTML = '';
    //loop through all the videos
    videos.forEach(video => {             //for of loop use o kora jayto
        // console.log(video);

        const videoDiv = document.createElement('div');
        videoDiv.innerHTML = `
                        <div class="card bg-base-100">
                <figure class="h-[180px] relative">
                    <img src="${video.thumbnail}" alt="" />
                    <span class="bg-[#171717] text-white rounded-sm px-3 absolute bottom-3 right-4">3hrs 56 min ago</span>
                </figure>
                <div class="flex gap-3  px-0 py-4 ">
                    <div class="profile">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                              <img src="${video.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>

                    <div class="info space-y-1">
                        <h2 class="card-title">${video.title}</h2>
                        <p class="text-sm flex gap-1 text-gray-500">${video.authors[0].profile_name}
                            <img class="w-5" src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" alt="">
                        </p>
                        <p class="text-sm text-gray-500">${video.others.views}</p>
                    </div>

                </div>
            </div>
        `;
        videoContainer.appendChild(videoDiv);

    });



}

loadCategories();
