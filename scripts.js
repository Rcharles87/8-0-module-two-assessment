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
    let h3 = document.createElement("h3");
    let releaseYear = document.createElement("p");
    let movieDescription = document.createElement("p");
    let displayInfo = document.querySelector("#display-info")
    
    movieList.addEventListener("change", (event)=>{
        event.preventDefault()
        
        for (let info of data){
            if (info.title === event.target.value){
                
                h3.textContent = info.title;
                releaseYear.textContent = info.release_date;
                movieDescription.textContent =info.description;
                
            }
        }
        
        displayInfo.append(h3, releaseYear, movieDescription);
    })
    
    
    let form = document.querySelector("#user-review")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        let userInput = event.target["user-input"].value
        let ul = document.querySelector("ul")
        let li = document.createElement("li")
        let strong = document.createElement("strong")

        strong.textContent = `${movieList.value}: `
        console.log(strong.textContent)
        li.textContent =  userInput
        li.prepend(strong)
        ul.append(li)
        
        event.target.reset()
    })

    
})