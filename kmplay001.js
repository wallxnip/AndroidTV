// ===========================
// CONFIG (mantém a estrutura original)
// ===========================
const config = {
  poster: "posts/re2.png",
  logo: "posts/re2_logo.webp",
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
        },
        { title: "", url: "", thumb: "" },
        { title: "", url: "", thumb: "" },
        { title: "", url: "", thumb: "" }
      ]
    }
  ]
};

// ===========================
// Integração dinâmica
// ===========================

// Obter poster e logo globais (caso existam)
const { poster, logo } = config;

// Pegar a lista atual de episódios da temporada ativa
let episodes =
  (config.seasons &&
    config.seasons[0] &&
    config.seasons[0].episodes) || [];

// Referências dos elementos do player
const videoEl = document.getElementById("player");
const logoElement = document.getElementById("topLogoWrap");

// Aplica o poster global no player (caso exista)
if (videoEl && poster) videoEl.poster = poster;

// Exibe a logo global no topo (caso exista)
if (logoElement && logo) {
  logoElement.innerHTML = `<img id="topLogo" src="${logo}" />`;
}

// Se não houver thumb no episódio, usa o poster global
episodes.forEach((ep) => {
  if (!ep.thumb) ep.thumb = poster || "";
});