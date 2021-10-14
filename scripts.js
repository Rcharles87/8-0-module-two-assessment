fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>{
    return res.json();
}).then((data)=>{
   
    let movieList = document.querySelector("#movie-selection")
    for (let movie of data){
        let option = document.createElement("option");
        option.textContent = movie.title
        movieList.append(option)
    }

})