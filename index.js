window.onload = function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const genre = urlParams.get('genre');
    
    // Check if the genre exists and call the function
    if (genre) {
        showMovies(genre);
    }
}

function showMovies(genre) {
    fetch("./data.json")
    .then(response => response.json())
    .then(data => loadMovies(data, genre))
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

function getReview(title) {
    var CardMovieOld = document.getElementById("col");
    var CardMovie = document.getElementById("col2");

    CardMovieOld.innerHTML = "";
    CardMovie.innerHTML = "";
    console.log("loadMovie"); //debugging
    console.log(title);
    let AddCardMovie = document.createElement("div");
    AddCardMovie.classList.add("col2");

    AddCardMovie.innerHTML = `
    <div class="row mb-3 center"  style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
        <div class="col-8 themed-grid-par" style="border-radius: 2%;">
          <h3><strong>${title}</strong></h3>
          <p id="aboutMovie"></p>
        </div>
    </div>`;
    CardMovie.appendChild(AddCardMovie);
    
    let path = './Reviews/' + title + '.txt';

    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById('aboutMovie').innerText = data;
        })
        .catch(error => console.error('Error loading text file:', error));
}

function loadMovies(myMovies, gen) {
    const arrayMovies = [];

    for(let i = 0; i < myMovies.movies.length; i++) {
        arrayMovies.push(myMovies.movies[i]);
    }

    let arrayCatagories = [];
    let sortedMovies = [];

    if(gen === "all") {
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

    if(gen === "action") {
        console.log("action movies");
        for (let i = 0; i < myMovies.movies.length; i++) {
            let category = myMovies.movies[i];  // Access the category object
            let genre = Object.keys(category)[0]; // Get the genre name (e.g., 'action', 'thriller')
            if(gen === genre) {
                let movies = category[genre];         // Get the array of movies in this genre
            
                // Loop through each movie in the genre and add it to allMovies array
                for (let j = 0; j < movies.length; j++) {
                    sortedMovies.push(movies[j]);
                }
            }
        }
        console.log(sortedMovies);
    }

    if(gen === "thriller") {
        console.log("thriller movies");
        for (let i = 0; i < myMovies.movies.length; i++) {
            let category = myMovies.movies[i];  // Access the category object
            let genre = Object.keys(category)[0]; // Get the genre name (e.g., 'action', 'thriller')
            if(gen === genre) {
                let movies = category[genre];         // Get the array of movies in this genre
            
                // Loop through each movie in the genre and add it to allMovies array
                for (let j = 0; j < movies.length; j++) {
                    sortedMovies.push(movies[j]);
                }
            }
        }
        console.log(sortedMovies);
    }

    if(gen === "animated") {
        console.log("animated movies");
        for (let i = 0; i < myMovies.movies.length; i++) {
            let category = myMovies.movies[i];  // Access the category object
            let genre = Object.keys(category)[0]; // Get the genre name (e.g., 'action', 'thriller')
            if(gen === genre) {
                let movies = category[genre];         // Get the array of movies in this genre
            
                // Loop through each movie in the genre and add it to allMovies array
                for (let j = 0; j < movies.length; j++) {
                    sortedMovies.push(movies[j]);
                }
            }
        }
        console.log(sortedMovies);
    }

    if(gen === "comedy") {
        console.log("comedy movies");
        for (let i = 0; i < myMovies.movies.length; i++) {
            let category = myMovies.movies[i];  // Access the category object
            let genre = Object.keys(category)[0]; // Get the genre name (e.g., 'action', 'thriller')
            if(gen === genre) {
                let movies = category[genre];         // Get the array of movies in this genre
            
                // Loop through each movie in the genre and add it to allMovies array
                for (let j = 0; j < movies.length; j++) {
                    sortedMovies.push(movies[j]);
                }
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
        <div class="card shadow-sm themed-movie-card" onclick="getReview('${title}')">
            <img src=${url} class="card-img-top" style="height: 450px; object-fit: cover; border-radius: 5%;" alt="..."></img>
            <div class="card-body">
                <p class="card-text"> <strong>${title}</string>, ${year}</p>
            </div>
        </div>`;
        CardMovie.appendChild(AddCardMovie);
    }
}
