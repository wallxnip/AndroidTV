 // ===========================
// CONFIG (exemplo com 3 temporadas e 3 episódios cada)
// Substitua/ajuste as URLs/thumbs conforme precisar
// ===========================
const config = {
poster: "https://i.postimg.cc/LXb3d2Cq/ht.webp",
logo: "https://is1-ssl.mzstatic.com/image/thumb/Features123/v4/b4/97/0e/b4970e04-2716-215e-fb6f-1ad8c6ceab57/nvf4238825919995546474.png/432x162.png",
seasons: [
{
title: "Temporada 1",
thumb: "https://i.postimg.cc/0NHwjZpX/z-Xz-Bqb-Xieq-Rem290H5HZxt-XXc-Zl.webp",
episodes: [
{ title: "Episódio 1", url: "https://www.mediafire.com/file/tfzr1kndokyvny1/TH01.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/OlDsjMI8DkoEkaUXgnaMwA/1920x1080.webp" },
{ title: "Episódio 2", url: "https://www.mediafire.com/file/77o8u2yoh4wa64t/TH02.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/Q6xG679rsvztbi3_rrQ0fA/1920x1080.webp" },
{ title: "Episódio 3", url: "https://www.mediafire.com/file/4xqa0j7m3mti7f9/TH03.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/vpcNMjkp5LBACQjjk3_8FA/1920x1080.webp" },
{ title: "Episódio 4", url: "https://www.mediafire.com/file/eodzwg9u39harsc/TH04.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/UzepkXKnvAjwKkBEmrCjSA/1920x1080.webp" },
{ title: "Episódio 5", url: "https://www.mediafire.com/file/9dytv522ioxcwq7/TH05.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/814HMtrEg2n18P_ZT2jAJg/1920x1080.webp" },
{ title: "Episódio 6", url: "https://www.mediafire.com/file/tqxatkdp3vnoe21/TH06.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/5N38twmwgRIE2zPVL3zE4g/1920x1080.webp" },
{ title: "Episódio 7", url: "https://www.mediafire.com/file/cd7jzdo85dukwhr/TH07.mp4", thumb: "https://is1-ssl.mzstatic.com/image/thumb/v3CQneBAwh6qV1cfIa_UiQ/1920x1080.webp" }
]
},




{title: "Temporada 2",
thumb: "https://image.tmdb.org/t/p/original/zvZeHqaN1QH43qM622oDQF10VTi.jpg",
episodes: [
{ title: "Episódio 1", url: "#", thumb: "#" }
]
},

{title: "Temporada 3",
thumb: "https://image.tmdb.org/t/p/original/pQv6UGs32vJElkK51x0n9vuhCNa.jpg",
episodes: [
{ title: "Episódio 1", url: "#", thumb: "#" }
]
}
};


// ===========================
// Integração dinâmica (mantive nomes originais)
// ===========================
const { poster, logo } = config;
let episodes = config.episodes || []; // mantém compatibilidade com seu código original

const playerPoster = document.getElementById('player');
if (playerPoster && poster) playerPoster.poster = poster;

const logoElement = document.getElementById('topLogoWrap');
if (logoElement && logo) {
logoElement.innerHTML = `<img id="topLogo" src="${logo}"/>`;
}
// Se não houver thumb em episódios fallback, use poster
if(Array.isArray(episodes)) episodes.forEach(ep => { if(!ep.thumb) ep.thumb = poster || ''; });