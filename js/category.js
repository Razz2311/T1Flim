document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const genre = urlParams.get("genre");

    if (!genre) {
        document.getElementById("category-title").innerText = "Không tìm thấy thể loại";
        return;
    }

    document.getElementById("category-title").innerText = `Phim thể loại: ${genre}`;
    const moviesList = document.getElementById("movies-list");
    moviesList.innerHTML = "";

    let count = 0;
    for (let id in movies) {
        if (movies[id].genres.includes(genre)) {
            count++;
            let movieHTML = `
                <div class="movie-box">
                    <img src="${movies[id].poster}" alt="${movies[id].title}" class="movie-box-img">
                    <div class="box-text">
                        <h2 class="movie-title">${movies[id].title}</h2>
                        <span class="movie-type">${movies[id].genres.join(", ")}</span>
                        <a href="play.html?id=${id}" class="watch-btn play-btn">
                            <i class='bx bx-right-arrow'></i>
                        </a>
                    </div>
                </div>
            `;
            moviesList.innerHTML += movieHTML;
        }
    }

    if (count === 0) {
        moviesList.innerHTML = "<h3>Không có phim nào thuộc thể loại này</h3>";
    }
});