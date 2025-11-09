// ===========================
// Integração dinâmica + Envio pro App (MediaFire / Febbox)
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
const miniLogoEl = document.getElementById("miniLogo");

// Aplica o poster global no player (caso exista)
if (videoEl && poster) videoEl.poster = poster;

// Exibe a logo global no topo e na mini logo (caso existam)
if (logoElement && logo)
  logoElement.innerHTML = `<img id="topLogo" src="${logo}" />`;

if (miniLogoEl && logo)
  miniLogoEl.src = logo;

// Se não houver thumb no episódio, usa o poster global
episodes.forEach((ep) => {
  if (!ep.thumb) ep.thumb = poster || "";
});

// Função auxiliar: detectar tipo e enviar link pro app
async function handleEpisodeLink(url) {
  try {
    let finalLink = url;

    // Caso seja um link Febbox
    if (url.includes("febbox.com")) {
      const shareKey = url.split("/").pop().split("?")[0];
      const apiUrl = `https://www.febbox.com/file/share_download?share_key=${shareKey}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (data.download_url) {
        finalLink = data.download_url;
      } else {
        console.error("Falha ao obter link direto Febbox");
        return;
      }
    }

    // Envia para o app (Android bridge)
    if (window.Android && window.Android.onDirectLink) {
      window.Android.onDirectLink(finalLink);
    } else {
      // Caso o app não esteja disponível, apenas reproduz no player local (teste web)
      if (videoEl) {
        videoEl.src = finalLink;
        videoEl.play().catch(console.error);
      }
    }
  } catch (err) {
    console.error("Erro ao processar link:", err);
  }
}

// Exemplo de integração: clique no episódio
// (ajuste se você já tiver um evento próprio de seleção)
document.querySelectorAll(".episode-item").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const ep = episodes[index];
    if (ep && ep.url) handleEpisodeLink(ep.url);
  });
});