

// Helper function to load movie cards
function loadMovies(genreMovies) {
    var CardMovie = document.getElementById("col");
    CardMovie.innerHTML = ""; // Clear previous content

    // Loop through the genre-specific movies and create cards
    genreMovies.forEach(movie => {
        let { title, year, duration, url } = movie;

        let AddCardMovie = document.createElement("div");
        AddCardMovie.classList.add("col");
        AddCardMovie.innerHTML = `
            <div class="card shadow-sm">
                <img src="${url}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <p class="card-text"> <strong>${title}</strong>, ${year}, ${duration} mins</p>
                </div>
            </div>
        `;
        CardMovie.appendChild(AddCardMovie);
    });
}

// Function to fetch and display movies based on genre
function showCardsByGenre(genre) {
    fetch("./Movies.json")
        .then(response => response.json())
        .then(myMovies => {
    
            // TODO
            // Filter the movies array to find the genre's array


            // Load the movies and add the cards
            loadMovies(genreMovies);
        })
        .catch(err => console.log("Error: " + err));
}

// Separate functions to display each genre
function showCardsAction() {
    showCardsByGenre("action");
}

function showCardsThriller() {
    showCardsByGenre("thriller");
}

function showCardsAnimated() {
    showCardsByGenre("animated");
}

function showCardsComedy() {
    showCardsByGenre("comedy");
}

