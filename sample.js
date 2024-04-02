const rowDiv = document.getElementsByClassName("row")[0];

//API based url
const BASE_URL = "https://moviesdatabase.p.rapidapi.com";

//get upcoming movies from API
const getUpcomingMovies = async () => {
    try {
      const response =   await fetch(`${BASE_URL}/titles/x/upcoming`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                'X-RapidAPI-Key': '72c2ac9d47mshc9a46104c4d44cfp11f852jsn8f0bed7e3a6c',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        })
       //convert json repsonse  to js object 
       const data = await response.json();
       if (!response.ok) {
        //throw new error
        
       }
       console.log(data?.results);
for (movie of data?.results) {
    const colDiv = document.createElement( "div" );
    colDiv.classList.add("col-md-4");
    colDiv.classList.add( "mt-3" );
    colDiv.innerHTML = `<div class="card" style="width: 18rem;">
    ${
        movie?.primaryImage?.url
        ? `<img src="${movie?.primaryImage?.url}" class="card-img-top" alt="...">`
        : `<h3>Image not available<h3>`
    }
    
    <div class="card-body">
      <h5 class="card-title">${movie?.originalTitleText.text}</h5>
      
    </div>
  </div>`;
  rowDiv.appendChild(colDiv);
}

    } catch (error) {
        console.log(error)
    }
}
window.addEventListener("load", getUpcomingMovies);