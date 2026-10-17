# Site do XIII Zona Federal

Página de apresentação do evento (HTML, CSS e JavaScript puros, sem instalar nada).

## Estrutura

```
index.html                 → a página
css/style.css              → cores, fontes e layout (identidade visual do evento)
js/main.js                 → LINKS DOS FORMULÁRIOS + contagem regressiva + abas + menu
assets/img/                → logo, favicon, fotos dos palestrantes e logos de realização/apoio
.nojekyll                  → arquivo vazio exigido pelo GitHub Pages (não apague)
```

Para ver no seu computador: dê dois cliques no `index.html`.

## 1. Colocar os links do Google Forms

Abra `js/main.js` e cole os links nas primeiras linhas:

```js
const FORMULARIOS = {
  mineracao:   "https://forms.gle/...",  // Palestra 20/10 08h – Louhanne Milhomem
  residuos:    "https://forms.gle/...",  // Palestra 20/10 10h30 – Lucas Schmitt
  mesaRedonda: "https://forms.gle/...",  // Mesa-redonda 20/10 14h
  drones:      "https://forms.gle/...",  // Minicurso 21/10 – Jorge Neto
};
```

Enquanto um link estiver vazio, o botão daquela atividade aparece como "Inscrições em breve".
Quando quiser encerrar as inscrições de uma atividade, é só apagar o link dela.

## 2. Publicar no GitHub Pages (grátis)

1. Crie uma conta em github.com (se ainda não tiver).
2. Clique em **New repository**, dê um nome (ex.: `zona-federal`), marque **Public** e crie.
3. Na página do repositório, clique em **uploading an existing file** e arraste **todo o conteúdo desta pasta**
   (o `index.html` precisa ficar na raiz, não dentro de outra pasta). Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Source* escolha **Deploy from a branch**, branch **main**, pasta **/(root)** e salve.
5. Em 1–2 minutos o site estará em: `https://SEU-USUARIO.github.io/zona-federal/`

Para atualizar depois (ex.: colocar os links dos formulários): abra o arquivo no GitHub, clique no lápis ✏️, edite e faça *Commit*. O site atualiza sozinho em ~1 minuto.

## Alternativas gratuitas sem GitHub

- **Netlify Drop** (app.netlify.com/drop): arraste a pasta e o site já fica no ar em segundos (`algum-nome.netlify.app`, dá para renomear). É o caminho mais rápido.
- **Cloudflare Pages** ou **Vercel**: também gratuitos, com upload direto da pasta.
