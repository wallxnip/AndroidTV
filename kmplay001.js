// ===========================
// Configuração dinâmica
// ===========================
const config = {
poster: "https://image.tmdb.org/t/p/original/14g5B3sqDLH6ldDBJLcRBvzh2kc.jpg",
logo: "https://image.tmdb.org/t/p/original/tQsNL1ULG7NsE6Hrzxtg2hFNIxA.png",
episodes: [
{ title: "Episódio 1", url: "https://www.mediafire.com/file/tfzr1kndokyvny1/TH01.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/OlDsjMI8DkoEkaUXgnaMwA/1920x1080.webp" },

{ title: "Episódio 2", url: "https://www.mediafire.com/file/77o8u2yoh4wa64t/TH02.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/Q6xG679rsvztbi3_rrQ0fA/1920x1080.webp" },

{ title: "Episódio 3", url: "https://www.mediafire.com/file/4xqa0j7m3mti7f9/TH03.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/vpcNMjkp5LBACQjjk3_8FA/1920x1080.webp" },

]};


// ===========================
// Integração dinâmica de poster, logo e thumbs
// ===========================
const { poster, logo, episodes } = config;
const playerPoster = document.getElementById('player');
if (playerPoster) playerPoster.poster = poster;

const logoElement = document.getElementById('topLogoWrap');
if (logoElement) {
  logoElement.innerHTML = `<img id="topLogo" src="${logo}"/>`;
} episodes.forEach(ep => { if(!ep.thumb) {ep.thumb = thumb;}});