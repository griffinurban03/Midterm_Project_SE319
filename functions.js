function showAllMovies() {
    fetch("./Movies.json")
    .then(response => response.json())
    .then(data => loadMovies(data, 0))
    .catch(error => console.log("Error: " + error))
}

function showAllActions() {

}

function showAllThrillers() {

}

function showAllAnimateds() {

}

function showAllComedies() {

}

function loadMovies(myMovies, option) {
    const arrayMovies = [];

    for(let i = 0; i < myMovies.movies.length; i++) {
        arrayMovies.push(myMovies.movies[i]);
    }

    let arrayCatagories = [];
    let sortedMovies = [];

    if(option === 0) {
        console.log("All movies");
        for (let i = 0; i < myMovies.movies.length; i++) {
            let category = myMovies.movies[i];  // Access the category object
            let genre = Object.keys(category)[0]; // Get the genre name (e.g., 'action', 'thriller')
            let movies = category[genre];         // Get the array of movies in this genre
        
            // Loop through each movie in the genre and add it to allMovies array
            for (let j = 0; j < movies.length; j++) {
                sortedMovies.push(movies[j]);
            }
        }
        console.log(sortedMovies);
    }

    // if(option === 1) {
    //     //sort 
    //     console.log("Sorting"); //debugging
    //     sortedMovies = arrayMovies.sort((p1,p2) => (p1.price>p2.price) ? 1 : (p1.price<p2.price) ? -1 : 0);
    // }

    // if(option === 2) {
    //     //sort 
    //     console.log("Sorting"); //debugging
    //     sortedMovies = arrayMovies.sort((p1,p2) => (p1.price>p2.price) ? -1 : (p1.price<p2.price) ? 1 : 0);
    // }

    // let color = "none";
    // if (option === 4){
    //     // input description
    //     const inputDescription = document.getElementById("descriptionInput").value;
    //     for (let movie of arrayMovies){
    //         sortedMovies.push(movie);
    //     }
    //     color = prompt("Enter a color");
    // }

    var CardMovie = document.getElementById("col");

    CardMovie.innerHTML = "";
    console.log("loadMovies"); //debugging
    for(let i = 0; i < sortedMovies.length; i++) {
        console.log(sortedMovies[i]); //debugging
        console.log("equal"); //debugging
        let title = sortedMovies[i].title;
        let year = sortedMovies[i].year;
        let url = sortedMovies[i].url;
        // let price = sortedMovies[i].price;

        console.log(title);
        let AddCardMovie = document.createElement("div");
        AddCardMovie.classList.add("col");

        AddCardMovie.innerHTML = `
        <div class="card shadow-sm">
            <img src=${url} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text"> <strong>${title}</string>, ${year}</p>
            </div>
        </div>`;
        CardMovie.appendChild(AddCardMovie);
    }
}