 // ===========================
// CONFIG (exemplo com 3 temporadas e 3 episódios cada)
// Substitua/ajuste as URLs/thumbs conforme precisar
// ===========================
const config = {
poster: "",
logo: "",
seasons: [
{
title: "",
thumb: "",
episodes: [
{ title: "Resident Evil: O Hóspede Maldito (2002)", url: "https://www.mediafire.com/file/jxj6g81r36pg885/%25282002%2529_O_H%25C3%25B3spede_M%2Ald%2At%2A_-_1080p_5.1_Dual_%25C3%2581udio.mp4", thumb: "https://image.tmdb.org/t/p/original/1qmqIdPOX2aFfT9BSAfJr5rAbt6.jpg" },
{ title: "Resident Evil 2: Apocalipse (2004)", url: "https://www.mediafire.com/file/4u7tb14ezp9obd7/%25282004%2529_Apocalipse_-_1080P_5.1_Dual_%25C3%2581udio.mp4", thumb: "posts/re2.png", logo: "posts/re2_logo.webp", poster: "posts/re2.png"},
{ title: "", url: "", thumb: "" },
{ title: "", url: "", thumb: "" },
{ title: "", url: "", thumb: "" }
]
}
],
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


function playEpisode(i) {
  const list = getCurrentEpisodes();
  if (!list || !list[i]) return;
  episodeIndex = i;
  selectedIndex = i;

  const ep = list[i];

  // atualiza o vídeo
  setVideoSource(ep.url);

  // atualiza o poster do player
  if (playerPoster) playerPoster.poster = ep.poster || config.poster || '';

  // atualiza a logo no player
  if (miniLogo) miniLogo.src = ep.logo || config.logo || '';

  pausedManually = false;
  updateActiveCard();
  hideNextButton();
}