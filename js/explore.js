// Seçilen türlerin id'lerini tutmak için bir Set oluşturuyoruz (aynı id birden fazla eklenmesin diye)
const selectedGenres = new Set();

// Tüm sayfa tıklamalarını dinle
document.addEventListener("click", (e) => {

    // Tıklanan eleman bir genre butonuysa
    if(e.target.classList.contains("genre-btn")){
        // Butonun data-id attribute'unu al (yani genre ID)
        const genreId = e.target.getAttribute('data-id');

        // Daha önce seçilmişse tekrar seçildiyse: kaldır listeden ve görsel olarak seçimi kaldır
        if(selectedGenres.has(genreId)){
            selectedGenres.delete(genreId);  // set'ten çıkar
            e.target.classList.remove("selected");  // butondaki "selected" class'ını kaldır
        } 
        // Daha önce seçilmemişse: ekle ve görünümünü değiştir
        else {
            selectedGenres.add(genreId);  // set'e ekle
            e.target.classList.add("selected");  // butona "selected" class'ı ekle
        }

        // Set'i diziye çeviriyoruz çünkü localStorage diziyi daha rahat saklar
        const selectedArray = Array.from(selectedGenres);
        
        // Seçilen türleri localStorage'a JSON formatında kaydediyoruz
        localStorage.setItem("selectedGenres", JSON.stringify(selectedArray));
    }

});
