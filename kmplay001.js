// ===========================
// CONFIG (mantém estrutura original)
// ===========================
const config = {
  poster: "",
  logo: "",
  seasons: [
    {
      title: "",
      thumb: "",
      episodes: [
        {
          url: "https://www.mediafire.com/file/jxj6g81r36pg885/%25282002%2529_O_H%25C3%25B3spede_M%2Ald%2At%2A_-_1080p_5.1_Dual_%25C3%2581udio.mp4",
          thumb: "https://image.tmdb.org/t/p/original/1qmqIdPOX2aFfT9BSAfJr5rAbt6.jpg"
        },
        {
          url: "https://www.mediafire.com/file/4u7tb14ezp9obd7/%25282004%2529_Apocalipse_-_1080P_5.1_Dual_%25C3%2581udio.mp4",
          thumb: "posts/re2.png",
          logo: "posts/re2_logo.webp",
          poster: "posts/re2.png"
        }
      ]
    }
  ]
};

// ===========================
// Integração dinâmica
// ===========================
const { poster, logo } = config;
let episodes =
  (config.seasons && config.seasons[0] && config.seasons[0].episodes) || [];

// Referências do player
const videoEl = document.getElementById("player");
const topLogoWrap = document.getElementById("topLogoWrap");
const miniLogo = document.getElementById("miniLogo");

// Define poster e logo padrão (globais)
if (videoEl && poster) videoEl.poster = poster;

if (topLogoWrap && logo) {
  topLogoWrap.innerHTML = `<img id="topLogo" src="${logo}" alt="Logo principal">`;
}

if (miniLogo && logo) miniLogo.src = logo;

// Se não houver thumb, usa o poster padrão
episodes.forEach(ep => {
  if (!ep.thumb) ep.thumb = poster || "";
});

// ===========================
// Função principal: tocar episódio
// ===========================
function playEpisode(i) {
  const list = getCurrentEpisodes();
  if (!list || !list[i]) return;

  episodeIndex = i;
  selectedIndex = i;
  const ep = list[i];

  // Atualiza a fonte do vídeo
  setVideoSource(ep.url);
  videoEl.load();

  // ====== POSTER ======
  videoEl.poster = ep.poster || config.poster || "";

  // ====== LOGO DO TOPO ======
  if (topLogoWrap) {
    const logoSrc = ep.logo || config.logo || "";
    topLogoWrap.innerHTML = logoSrc
      ? `<img id="topLogo" src="${logoSrc}" alt="Logo do episódio">`
      : "";
  }

  // ====== MINI LOGO ======
  if (miniLogo) {
    miniLogo.src = ep.logo || config.logo || "";
  }

  // Continua execução do player normalmente
  pausedManually = false;
  updateActiveCard();
  hideNextButton();
}