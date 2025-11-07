// ===========================
// CONFIG (mantém estrutura padrão)
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
// APLICAÇÃO DINÂMICA DE VISUAL
// ===========================
function applyEpisodeVisuals(ep) {
  const videoEl = document.getElementById("player");
  const topLogoWrap = document.getElementById("topLogoWrap");
  const miniLogo = document.getElementById("miniLogo");

  // Atualiza poster do player
  if (videoEl) {
    videoEl.poster = ep.poster || config.poster || "";
  }

  // Atualiza logo do topo (logo principal)
  if (topLogoWrap) {
    const logoSrc = ep.logo || config.logo || "";
    topLogoWrap.innerHTML = logoSrc
      ? `<img src="${logoSrc}" id="topLogo" style="width:auto;max-height:60px;object-fit:contain;" />`
      : "";
  }

  // Atualiza mini logo (exibida no overlay ou canto do player)
  if (miniLogo) {
    const miniSrc = ep.logo || config.logo || "";
    miniLogo.src = miniSrc;
    miniLogo.style.width = "auto";
    miniLogo.style.maxHeight = "40px";
    miniLogo.style.objectFit = "contain";
  }
}

// ===========================
// FUNÇÃO PRINCIPAL PARA TOCAR EPISÓDIO
// ===========================
function playEpisode(i) {
  const list = getCurrentEpisodes();
  if (!list || !list[i]) return;

  episodeIndex = i;
  selectedIndex = i;

  const ep = list[i];

  // Atualiza fonte de vídeo
  setVideoSource(ep.url);

  // Aplica visuais (poster + logos)
  applyEpisodeVisuals(ep);

  // Continua lógica do player
  pausedManually = false;
  updateActiveCard();
  hideNextButton();
}

// ===========================
// AJUSTE INICIAL (caso precise de poster/logo padrão)
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const firstEp = (config.seasons[0] && config.seasons[0].episodes[0]) || {};
  applyEpisodeVisuals(firstEp);
});