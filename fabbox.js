// ===========================
// CONFIG (mantém a estrutura original)
// ===========================
const config = {
  poster: "posts/re.png", // Poster padrão
  logo: "posts/re_logo.webp", // Logo padrão
  seasons: [
    {
      title: "",
      thumb: "",
      episodes: [
        {
          url: "https://www.febbox.com/share/fImj44is",
          thumb: "https://i.postimg.cc/hGdMs99c/re.webp",
          logo: "https://i.postimg.cc/gkrzgD2h/relogo.webp",
          poster: "https://i.postimg.cc/Pr6LxJCn/re.webp"
        },
        {
          url: "https://www.febbox.com/share/fImj44is",
          thumb: "posts/re2.png",
          logo: "posts/re2_logo.webp",
          poster: "posts/re2.png"
        }
        // Adicione mais episódios aqui se quiser
        // {
        //   url: "https://link-do-video.mp4",
        //   thumb: "posts/thumb3.png",
        //   logo: "posts/logo3.webp",
        //   poster: "posts/poster3.webp"
        // }
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

// ---------- clique nos episódios ----------
$$('.ep a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault(); // evita navegação padrão
        const poster = a.dataset.poster || '';
        const logo = a.dataset.logo || '';
        const href = a.href;

        // Mostra feedback no overlay
        overlay.textContent = 'Preparando… entre no app para extrair link.';

        // Atualiza poster e logos locais
        if (poster) player.poster = poster;
        if (logo) { topLogo.src = logo; miniLogo.src = logo; }

        // Debug / banner
        logDebug('Clique no episódio -> href: ' + href);
        showBanner('Link enviado ao app: ' + href, 3000);

        // O app deve interceptar o href e chamar setVideoSource(url_real)
    }, { passive: true });
});

// ---------- função chamada pelo app ----------
window.setVideoSource = function(url) {
    if (!url) { showBanner('URL inválida'); return; }
    overlay.textContent = 'Carregando...';
    showBanner('Link recebido: ' + url, 6000);
    logDebug('setVideoSource -> ' + url);
    player.src = url;
    player.load();
    player.play().catch(() => { logDebug('Autoplay bloqueado'); });
    setTimeout(() => overlay.textContent = 'Tocando: ' + (url.split('/').pop() || ''), 1200);
};