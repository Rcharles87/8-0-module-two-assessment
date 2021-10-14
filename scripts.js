fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>{
    return res.json();
}).then((data)=>{

   
    let movieList = document.querySelector("#movie-selection")
    for (let movie of data){
        // console.log(movie)
        let option = document.createElement("option");
        option.textContent = movie.title
        movieList.append(option)

    }
    
    movieList.addEventListener("change", (event)=>{
        event.preventDefault()
        
        for (let info of data){
            if (info.title === event.target.value){
        let displayInfo = document.querySelector("#display-info")
        let h3 = document.createElement("h3");
        let releaseYear = document.createElement("p");
        let movieDescription = document.createElement("p");

            h3.textContent = info.title;
            releaseYear.textContent = info.release_date;
            movieDescription.textContent =info.description;

            displayInfo.append(h3, releaseYear, movieDescription);
            }
        }
    })


    
    
})