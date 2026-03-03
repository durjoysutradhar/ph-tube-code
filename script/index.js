function loadCatagories() {
  //fetching dara from api
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories));
}

function displayCatagories(categories) {
  //getting the container
  const categoryContainer = document.getElementById("category-container");

  //looping through the categories
  for (let category of categories) {
    //creating a div for each category
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>`;

    //appending the category div to the container
    categoryContainer.appendChild(categoryDiv);
  }
}

loadCatagories();

//fetching videos data from API

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
};

const displayVideos = (videos) => {
  //getting the container
  const videoContainer = document.getElementById("video-container");

  videos.forEach((video) => {
    //creating a div for each video
    const videoDiv = document.createElement("div");
    videoDiv.innerHTML = `

        <div class="card bg-base-100 ">
        <figure class="relative">
          <img class="w-full h-[180px] object-cover" src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-white text-sm bg-black rounded-md p-2"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex">
          <div class="w-30">
            <img
              class="rounded-full w-8/12 mx-2"
              src="${video.authors[0].profile_picture}"
              alt=""
            />
          </div>
          <div class="gap-0">
            <h3 class="text-xl font-bold">
              ${video.title}
            </h3>
            <div class="flex gap-2">
              <p class="text-[#171717B2]">${video.authors[0].profile_name}</p>
              <img
                class="w-5 h-5 mt-1"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
                alt=""
              />
            </div>
            <p class="text-[#171717B2]">${video.others.views} views</p>
          </div>
        </div>
      </div>
        
        `;
    videoContainer.appendChild(videoDiv);
  });
};

loadVideos();
