# 🎬 MovieMind – Interactive Movie Recommendation System  


MovieMind is a dynamic and interactive web application that allows users to receive movie recommendations based on their preferred genres via TheMovieDB API. Users can discover movies according to their favorite genres, create watchlists, and save them in their browser.  

## 🔗 Live Demo  

[➡️ Live on GitHub Pages / Netlify / Vercel](https://movierecommendationwebsite.netlify.app/)  

---  

## 📌 Features  

- 🎯 Provides movie recommendations based on user-selected genres.  
- 📚 Real-time movie data integration with TheMovieDB API.  
- 📝 Create and delete watchlists (Watch List).  
- 💾 Save data in the browser using `localStorage`.  
- 📱 Responsive design: Compatible with mobile, tablet, and desktop.  
- 🔔 Instant user notifications with Toastify.js.  
- 🧭 Modern, user-friendly interface.  

---  

## 📂 Project Structure  

```
MovieMind/  
│  
├── home.html  
├── explore.html  
├── explore-2.html  
├── watchList.html  
│  
├── styles.css  
│  
├── js/  
│   ├── main.js  
│   ├── explore.js  
│   ├── explore-2.js  
│   └── watchList.js  
│  
├── images/  
│   ├── background.jpg  
│   ├── favicon-16x16.png  
│   ├── favicon-32x32.png  
│   ├── imagesthe_netflix_login_background_canada2024__by_logofeveryt_dh0w8qv-fullview.jpg  
│   └── LinkedIn_logo_initials.png  
│  
└── README.md  
```  

---  

## ⚙️ Installation & Setup  

1. Clone the project or download it as a ZIP:  
   ```bash  
   git clone https://github.com/oksuzdogukan/movie-recommendation-website  
   ```  

2. Get your own API key:  
   [TheMovieDB API Key](https://www.themoviedb.org/settings/api)  

3. Replace the `API_KEY` value in the following files:  
   - `js/explore-2.js`  
   - `js/watchList.js`  

   ```javascript  
   const API_KEY = 'YOUR_API_KEY_HERE';  
   ```  

4. Open `home.html` in your browser or run it with a live server.  

---  

## 🛠️ Technologies Used  

- **HTML5 & Semantic Tags** (`<header>`, `<main>`, `<section>`, `<footer>`)  
- **CSS3 + Flexbox & Grid** – Modern and responsive layout  
- **JavaScript (Vanilla JS)**  
  - `fetch()` for API data retrieval  
  - DOM Manipulation  
  - Data storage with localStorage  
- **Toastify.js** – For notifications  
- **TheMovieDB API** – For real-time movie data  

---  

## 🧪 Testing & Compatibility  

- ✅ Tested on Chrome, Firefox, and Edge.  
- ✅ Mobile device simulation performed with Chrome DevTools.  
- ✅ localStorage operations verified.  
- ✅ Handled duplicate list entries and empty list scenarios.  

---  

## 👨‍💻 Development Team  

| Name              | LinkedIn                                               |  
|-------------------|--------------------------------------------------------|  
| Ali Duman         | [LinkedIn](https://www.linkedin.com/in/ali-duman-062952293/)  |  
| Doğukan Öksüz     | [LinkedIn](https://www.linkedin.com/in/do%C4%9Fukan-%C3%B6ks%C3%BCz-144377237/) |  
| Melihcan Tokdemir | [LinkedIn](https://www.linkedin.com/in/melihcan-tokdemir-6a8905330/) |  
| Tunahan Aydın     | [LinkedIn](https://www.linkedin.com/in/tunahan-aydin-388628365/) |  

---  

## 📄 License  

This project is an educational project. Any kind of development, modification, and distribution is free, but attribution is recommended.
