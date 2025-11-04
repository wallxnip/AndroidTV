// ===========================
// Configuração dinâmica
// ===========================
const config = {
  poster: "https://image.tmdb.org/t/p/original/6eGhkMobNuL3sh9KSpfhxBSryHh.jpg",
  logo: "https://image.tmdb.org/t/p/original/3hRYalezTWUScmsiBq9L2f0QHJe.png",
  episodes: [
    { title: "Episódio 1", url: "https://www.mediafire.com/file/qu1bs8hetxox473/TDO01.html" },
    { title: "Episódio 2", url: "#" },
    { title: "Episódio 3", url: "#" }
  ]
};


// ===========================
// Integração dinâmica de poster, logo e thumbs
// ===========================
const { poster, logo, episodes } = config;
const playerPoster = document.getElementById('player');
if (playerPoster) playerPoster.poster = poster;

const logoElement = document.getElementById('topLogoWrap');
if (logoElement) {
  logoElement.innerHTML = `<img src="${logo}"/>`;
}
episodes.forEach(ep => {
  if(!ep.thumb) {
    ep.thumb = poster;
  }
});