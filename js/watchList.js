const API_KEY = 'e1bc947a2e4d2cc75b47d223ad80b8da';
const filmContainer = document.querySelector(".films-container");

// LocalStorage'dan watchlist'i al
let movies = JSON.parse(localStorage.getItem("watchlist")) || [];
// console.log(movies);

// Tür ID'lerini isimle eşleyeceğiz
let genreMap = {};

// TMDB'den tüm türleri çek
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
  .then(res => res.json())
  .then(data => {
    data.genres.forEach(genre => {
      genreMap[genre.id] = genre.name;
    });

    if (movies.length > 0) {
      // Tüm filmleri gez
      movies.forEach((movie) => {
        // Kart oluştur
        const filmCard = document.createElement("div");
        filmCard.className = "film-card";

        const filmCardTitle = document.createElement("h3");
        filmCardTitle.innerHTML = movie.title;

        const filmCardUl = document.createElement("ul");
        filmCardUl.className = "film-details";

        const filmImg = document.createElement("img");
        filmImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        // Türleri isimle yazdır
        const genreNames = movie.genre_ids.map(id => genreMap[id]).join(", ");
        const filmGenres = document.createElement("li");
        filmGenres.innerHTML = `Genres: ${genreNames}`;

        const filmReleasedTime = document.createElement("li");
        filmReleasedTime.innerHTML = `Released: ${movie.release_date}`;

        const filmVote = document.createElement("li");
        filmVote.innerHTML = `Film Vote: ${movie.vote_average}`;

        // Silme butonu
        const watchListBtn = document.createElement("button");
        watchListBtn.innerHTML = "Remove Watch List";
        watchListBtn.className = "add-watch-later-btn";

        // Butona tıklayınca
        watchListBtn.addEventListener("click", function () {
          // Alert
          Toastify({
              text: `Removed From Watchlist!!`,
              duration: 1500,
              gravity: "top", // "top" or "bottom"
              position: "right", // "left", "center" or "right"
              backgroundColor: "#ed4545",
          }).showToast();

          // DOM'dan sil
          filmCard.remove();

          // Watchlist array'inden sil
          movies = movies.filter(item => item.id !== movie.id);

          // localStorage'ı güncelle
          localStorage.setItem("watchlist", JSON.stringify(movies));
        });

        // Listeye elemanları ekle
        filmCardUl.appendChild(filmImg);
        filmCardUl.appendChild(filmGenres);
        filmCardUl.appendChild(filmReleasedTime);
        filmCardUl.appendChild(filmVote);

        filmCard.appendChild(filmCardTitle);
        filmCard.appendChild(filmCardUl);
        filmCard.appendChild(watchListBtn);
        filmContainer.appendChild(filmCard);
      });

    } else {
      // Hiç film yoksa mesaj göster
      const watchlistNotFound = document.createElement("div");
      watchlistNotFound.className = "movie-not-found";

      const watchlistNotFoundTitle = document.createElement("h1");
      watchlistNotFoundTitle.innerHTML = "Watch List Movies Not Found";

      watchlistNotFound.appendChild(watchlistNotFoundTitle);
      filmContainer.appendChild(watchlistNotFound);
    }
  });
