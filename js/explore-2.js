// TMDB API key'in
const API_KEY = 'e1bc947a2e4d2cc75b47d223ad80b8da';

// LocalStorage'dan seçilen türleri çekiyoruz (önceki sayfadan kaydedilmişti)
const selectedGenres = localStorage.getItem("selectedGenres");

// Filmleri basacağımız container
const filmContainer = document.querySelector(".films-container");

// Tür ID -> Tür İsmi eşlemesi yapacağız burada
let genreMap = {}

// API'den tüm film türlerini çekiyoruz
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
  .then(res => res.json())
  .then(data => {
    data.genres.forEach(genre => {
      genreMap[genre.id] = genre.name; // ID ile ismi eşleştiriyoruz
    });
})

// Eğer localStorage'dan tür seçilmişse, devam et
if(selectedGenres){
    // Seçilen türleri al ve virgülle birleştir
    const storedGenres = JSON.parse(selectedGenres);
    const genreString = storedGenres.join(",");

    // Filmleri getiren fonksiyon
    const getFilms = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreString}`)
        .then(res => res.json())
        .then(data => {
            // API'den dönen her film için...
            data.results.forEach(result => {
                
                // Film kartı oluştur
                const filmCard = document.createElement("div");
                filmCard.className = "film-card";

                // Başlık
                const filmCardTitle = document.createElement("h3");
                filmCardTitle.innerHTML = result.title;

                // Detaylar için liste
                const filmCardUl = document.createElement("ul");
                filmCardUl.className = "film-details";

                // Poster resmi
                const filmImg = document.createElement("img");
                filmImg.src = `https://image.tmdb.org/t/p/w500${result.poster_path}`;

                // Türleri yazdır
                const genreNames = result.genre_ids.map(id => genreMap[id]).join(', ');
                const filmGenres = document.createElement("li");
                filmGenres.innerHTML = `Genres: ${genreNames}`;

                // Yayın tarihi
                const filmReleasedTime = document.createElement("li");
                filmReleasedTime.innerHTML = `Released: ${result.release_date}`;

                // Oy ortalaması
                const filmVote = document.createElement("li");
                filmVote.innerHTML = `Film Vote: ${result.vote_average}`;

                // Watch list butonu
                const watchListBtn = document.createElement("button");
                watchListBtn.innerHTML = "Add Watch List";
                watchListBtn.className = "add-watch-later-btn";

                // Listeye detayları ekle
                filmCardUl.appendChild(filmImg);
                filmCardUl.appendChild(filmGenres);
                filmCardUl.appendChild(filmReleasedTime);
                filmCardUl.appendChild(filmVote);

                // Kartın tamamını birleştir
                filmCard.appendChild(filmCardTitle);
                filmCard.appendChild(filmCardUl);
                filmCard.appendChild(watchListBtn);
                filmContainer.appendChild(filmCard);
                
                // Butona tıklanınca filmi watchlist'e ekle
                watchListBtn.addEventListener("click", () => {
                    
                    

                    // Watchlist varsa çek, yoksa boş array
                    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

                    // Daha önce eklenmiş mi kontrol et
                    const alreadyExists = watchlist.some(film => film.id === result.id);
                    if (!alreadyExists) {
                        watchlist.push(result);
                        localStorage.setItem("watchlist", JSON.stringify(watchlist));
                        console.log(`${result.title} watchlist'e eklendi`);
                        
                        // Alert
                        Toastify({
                            text: `${result.title} Added To Wathclist!!`,
                            duration: 1500,
                            gravity: "top", // "top" or "bottom"
                            position: "right", // "left", "center" or "right"
                            backgroundColor: "#28a745",
                        }).showToast();
                    } else {
                        console.log(`${result.title} zaten eklenmiş`);
                        alert(`${result.title} Zaten Eklenmis !!!`);
                    }
                });

            })
        })
        .catch(err => {
            console.log(err); // Hata olursa konsola yaz
        })
    }

    // Filmleri getir fonksiyonunu çağır
    getFilms();
}
