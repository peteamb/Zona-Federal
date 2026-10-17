/* =========================================================
   LINKS DOS FORMULÁRIOS DE INSCRIÇÃO  (edite só aqui!)
   ---------------------------------------------------------
   Cole entre as aspas o link de cada Google Forms.
   Enquanto estiver vazio, o botão aparece como
   "Inscrições em breve" e fica desativado.
   ========================================================= */
const FORMULARIOS = {
  mineracao:   "",  // Palestra 20/10 08h – Louhanne Milhomem
  residuos:    "",  // Palestra 20/10 10h30 – Lucas Schmitt
  mesaRedonda: "",  // Mesa-redonda 20/10 14h – Henrique Garcia e Wallace Lopes
  drones:      "",  // Minicurso 21/10 08h – Jorge Neto
};

/* Início do evento (para a contagem regressiva) — horário de Palmas (UTC-3) */
const INICIO_EVENTO = new Date("2026-10-20T08:00:00-03:00");
const FIM_EVENTO    = new Date("2026-10-21T17:30:00-03:00");

/* ---------- Botões de inscrição ---------- */
document.querySelectorAll("[data-form]").forEach((btn) => {
  const link = (FORMULARIOS[btn.dataset.form] || "").trim();
  if (link) {
    btn.href = link;
  } else {
    btn.removeAttribute("href");
    btn.classList.add("is-disabled");
    btn.setAttribute("aria-disabled", "true");
    btn.textContent = "Inscrições em breve";
  }
});

/* ---------- Abas da programação ---------- */
const tabs = document.querySelectorAll(".tabs__btn");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      const ativo = t === tab;
      t.classList.toggle("is-active", ativo);
      t.setAttribute("aria-selected", ativo);
      document.getElementById(t.getAttribute("aria-controls")).hidden = !ativo;
    });
  });
});

/* ---------- Menu no celular ---------- */
const toggle = document.querySelector(".topbar__toggle");
const nav = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", aberto);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Fundo do cabeçalho ao rolar ---------- */
const topbar = document.querySelector(".topbar");
const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Contagem regressiva ---------- */
const cd = document.getElementById("countdown");
const pad = (n) => String(n).padStart(2, "0");
function tick() {
  const agora = new Date();
  if (agora >= FIM_EVENTO) {
    cd.innerHTML = '<p class="countdown__msg">Obrigado a todos que participaram!</p>';
    return;
  }
  if (agora >= INICIO_EVENTO) {
    cd.innerHTML = '<p class="countdown__msg">O evento está acontecendo agora!</p>';
    return;
  }
  let s = Math.floor((INICIO_EVENTO - agora) / 1000);
  const d = Math.floor(s / 86400); s -= d * 86400;
  const h = Math.floor(s / 3600);  s -= h * 3600;
  const m = Math.floor(s / 60);    s -= m * 60;
  cd.querySelector('[data-cd="d"]').textContent = pad(d);
  cd.querySelector('[data-cd="h"]').textContent = pad(h);
  cd.querySelector('[data-cd="m"]').textContent = pad(m);
  cd.querySelector('[data-cd="s"]').textContent = pad(s);
  setTimeout(tick, 1000);
}
tick();

/* Se o evento já é amanhã/hoje no dia 21, abre direto a aba do dia 21 */
if (new Date() >= new Date("2026-10-21T00:00:00-03:00")) {
  document.getElementById("tab-21").click();
}
