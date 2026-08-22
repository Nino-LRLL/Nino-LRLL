<!-- ═══════════════════════════════════════════════════════════════════
     SKIN NINO·LRLL v2.0 — animé & interactif
     Tout est inline (SVG + CSS animations) : zéro repo, zéro token,
     zéro serveur. GitHub rend les animations SVG nativement.
     ─────────────────────────────────────────────────────────────────── -->
<div align="center">

<!-- ══════════ HERO : carte cosmique animée ══════════ -->
<svg viewBox="0 0 960 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nino-LRLL — l'IA qui ne dort jamais" style="width:100%;height:auto;max-width:960px">
  <defs>
    <linearGradient id="g-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0f1f"/>
      <stop offset="50%" stop-color="#101a38"/>
      <stop offset="100%" stop-color="#191242"/>
    </linearGradient>
    <linearGradient id="g-title" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#58a6ff"/>
      <stop offset="30%" stop-color="#22d3ee"/>
      <stop offset="70%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#e879f9"/>
      <animate attributeName="x2" values="0;1;0" dur="7s" repeatCount="indefinite"/>
    </linearGradient>
    <radialGradient id="g-nebula" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g-nebula2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="g-edge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2a3560"/>
      <stop offset="50%" stop-color="#3b2f6e"/>
      <stop offset="100%" stop-color="#2a3560"/>
    </linearGradient>
  </defs>

  <style>
    @keyframes twinkle{0%,100%{opacity:.12}50%{opacity:.95}}
    @keyframes drift{0%,100%{transform:translate(0,0)}50%{transform:translate(38px,-26px)}}
    @keyframes stream{to{stroke-dashoffset:-260}}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
    @keyframes glow{0%,100%{opacity:.35}50%{opacity:1}}
    @keyframes chipglow{0%,100%{stroke:#2a3a68}50%{stroke:#58a6ff}}
    .tw{animation:twinkle 3s ease-in-out infinite}
    .nb{animation:drift 18s ease-in-out infinite}
    .nb2{animation:drift 26s ease-in-out infinite reverse}
    .stream{animation:stream 7s linear infinite}
    .cursor{animation:blink 1.1s steps(1) infinite}
    .pulse{animation:glow 2s ease-in-out infinite}
    .chip{cursor:pointer}
    .chip:hover rect{stroke:#58a6ff;fill:#16264a}
    .chip:hover text{fill:#e2e9ff}
  </style>

  <!-- fond + bord -->
  <rect width="960" height="340" rx="18" fill="url(#g-bg)"/>
  <rect width="960" height="340" rx="18" fill="none" stroke="url(#g-edge)" stroke-width="1.5"/>

  <!-- nébuleuses -->
  <circle class="nb" cx="180" cy="80" r="150" fill="url(#g-nebula)"/>
  <circle class="nb2" cx="830" cy="270" r="180" fill="url(#g-nebula2)"/>

  <!-- étoiles -->
  <circle class="tw" cx="90" cy="60" r="1.6" fill="#c9d7f5" style="animation-delay:.2s"/>
  <circle class="tw" cx="200" cy="150" r="1.2" fill="#c9d7f5" style="animation-delay:1.4s"/>
  <circle class="tw" cx="320" cy="70" r="1.4" fill="#e2e9ff" style="animation-delay:.8s"/>
  <circle class="tw" cx="450" cy="45" r="1.8" fill="#c9d7f5" style="animation-delay:2s"/>
  <circle class="tw" cx="560" cy="120" r="1.2" fill="#c9d7f5" style="animation-delay:.5s"/>
  <circle class="tw" cx="680" cy="55" r="1.5" fill="#e2e9ff" style="animation-delay:1.8s"/>
  <circle class="tw" cx="760" cy="160" r="1.3" fill="#c9d7f5" style="animation-delay:2.6s"/>
  <circle class="tw" cx="900" cy="80" r="1.6" fill="#c9d7f5" style="animation-delay:1s"/>
  <circle class="tw" cx="120" cy="260" r="1.3" fill="#c9d7f5" style="animation-delay:3s"/>
  <circle class="tw" cx="420" cy="280" r="1.5" fill="#e2e9ff" style="animation-delay:2.2s"/>
  <circle class="tw" cx="640" cy="250" r="1.2" fill="#c9d7f5" style="animation-delay:1.1s"/>
  <circle class="tw" cx="290" cy="210" r="1.1" fill="#c9d7f5" style="animation-delay:3.4s"/>
  <circle class="tw" cx="540" cy="190" r="1.4" fill="#e2e9ff" style="animation-delay:.3s"/>

  <!-- orbite -->
  <g transform="translate(842 92)">
    <circle r="64" fill="none" stroke="#8b5cf6" stroke-opacity=".35" stroke-dasharray="5 10"/>
    <g>
      <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="24s" repeatCount="indefinite"/>
      <circle cx="64" cy="0" r="5" fill="#22d3ee">
        <animate attributeName="opacity" values="1;.35;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="-64" cy="0" r="3.4" fill="#e879f9">
        <animate attributeName="opacity" values=".45;1;.45" dur="3s" repeatCount="indefinite"/>
      </circle>
    </g>
  </g>

  <!-- streams de données -->
  <g stroke="#58a6ff" stroke-opacity=".18" stroke-width="1.6" fill="none">
    <path class="stream" d="M0 330 h320" stroke-dasharray="30 90"/>
    <path class="stream" d="M150 336 h380" stroke-dasharray="24 76" style="animation-delay:1.2s"/>
    <path class="stream" d="M330 342 h440" stroke-dasharray="36 84" style="animation-delay:2.4s"/>
  </g>

  <!-- coins -->
  <path d="M16 74 V24 Q16 16 24 16 H74" fill="none" stroke="#3b4a7a" stroke-width="2"/>
  <path d="M886 16 H936 Q944 16 944 24 V74" fill="none" stroke="#3b4a7a" stroke-width="2"/>
  <path d="M944 266 V316 Q944 324 936 324 H886" fill="none" stroke="#3b4a7a" stroke-width="2"/>
  <path d="M74 324 H24 Q16 324 16 316 V266" fill="none" stroke="#3b4a7a" stroke-width="2"/>

  <!-- statut -->
  <g font-family="'Courier New',monospace" font-size="13" fill="#7ee787">
    <circle cx="26" cy="28" r="4" fill="#7ee787" class="pulse"/>
    <text x="38" y="32">SYSTEM ONLINE</text>
  </g>
  <text x="934" y="32" text-anchor="end" font-family="'Courier New',monospace" font-size="13" fill="#5a6a92">v2.0 · SKIN ANIMÉ</text>

  <!-- titre -->
  <text x="480" y="168" text-anchor="middle" font-family="'Courier New',monospace" font-size="66" font-weight="700" letter-spacing="6" fill="url(#g-title)">
    NINO·LRLL
    <animate attributeName="letter-spacing" values="6;10;6" dur="5s" repeatCount="indefinite"/>
  </text>

  <!-- sous-titre + curseur -->
  <text x="480" y="222" text-anchor="middle" font-family="'Courier New',monospace" font-size="20" fill="#8fa3c8">
    <tspan>// l'IA qui ne dort jamais — 100% local · zéro cloud</tspan>
    <tspan class="cursor" fill="#58a6ff">▌</tspan>
  </text>

  <!-- chips -->
  <g font-family="'Courier New',monospace" font-size="13">
    <g class="chip"><rect x="228" y="286" width="74" height="24" rx="6" fill="#13203f" stroke="#2a3a68"/><text x="265" y="302" text-anchor="middle" fill="#58a6ff">RUST</text></g>
    <g class="chip"><rect x="314" y="286" width="74" height="24" rx="6" fill="#13203f" stroke="#2a3a68"/><text x="351" y="302" text-anchor="middle" fill="#22d3ee">PYTHON</text></g>
    <g class="chip"><rect x="400" y="286" width="74" height="24" rx="6" fill="#13203f" stroke="#2a3a68"/><text x="437" y="302" text-anchor="middle" fill="#8b5cf6">OLLAMA</text></g>
    <g class="chip"><rect x="486" y="286" width="74" height="24" rx="6" fill="#13203f" stroke="#2a3a68"/><text x="523" y="302" text-anchor="middle" fill="#e879f9">WINDOWS</text></g>
    <g class="chip"><rect x="572" y="286" width="74" height="24" rx="6" fill="#13203f" stroke="#2a3a68"/><text x="609" y="302" text-anchor="middle" fill="#7ee787">LINUX</text></g>
    <g class="chip"><rect x="658" y="286" width="74" height="24" rx="6" fill="#13203f" stroke="#2a3a68"/><text x="695" y="302" text-anchor="middle" fill="#fbbf24">LOCAL-FIRST</text></g>
  </g>
</svg>

</div>

<p align="center">
  <a href="https://github.com/Nino-LRLL">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3200&pause=700&color=58A6FF&center=true&vCenter=true&multiline=true&width=640&height=80&lines=Assistants+IA+locaux+%C2%B7+Windows+%26+Linux;Keep-alive+%C2%B7+Rust+%C2%B7+Ollama;Capot+ferm%C3%A9+%C2%B7+%C3%A9cran+allum%C3%A9+%C2%B7+IA+qui+travaille" alt="Typing SVG"/>
  </a>
</p>

<div align="center">

[![Statut](https://img.shields.io/badge/Statut-%F0%9F%9A%80%20toujours%20en%20train%20de%20construire-58A6FF?style=for-the-badge&labelColor=0d1117)](https://github.com/Nino-LRLL)
[![Suivre](https://img.shields.io/github/followers/Nino-LRLL?label=Followers&style=for-the-badge&color=58A6FF&labelColor=0d1117)](https://github.com/Nino-LRLL?tab=followers)
[![Étoiles](https://img.shields.io/github/stars/Nino-LRLL/meth-keepalive?label=%C3%89toiles%20(meth-keepalive)&style=for-the-badge&color=8b5cf6&labelColor=0d1117)](https://github.com/Nino-LRLL/meth-keepalive)
[![Visiteurs](https://komarev.com/ghpvc/?username=Nino-LRLL&style=for-the-badge&color=22d3ee&labelColor=0d1117)](https://github.com/Nino-LRLL)

</div>

---

<!-- ══════════ STACK : orbite interactive (survole les nœuds) ══════════ -->
<div align="center">

### 🧰 Ma stack — *survole les nœuds*

<svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ma stack technique" style="width:100%;height:auto;max-width:760px">
  <defs>
    <radialGradient id="g-core" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1c2c5e"/>
      <stop offset="100%" stop-color="#101a38"/>
    </radialGradient>
  </defs>
  <style>
    @keyframes rot{to{transform:rotate(360deg)}}
    @keyframes ringp{0%,100%{transform:scale(1);opacity:.45}50%{transform:scale(1.28);opacity:.12}}
    @keyframes corep{0%,100%{opacity:.35}50%{opacity:1}}
    .rotor{animation:rot 26s linear infinite;transform-box:fill-box;transform-origin:center}
    .ringp{animation:ringp 2.6s ease-out infinite;transform-box:fill-box;transform-origin:center}
    .corep{animation:corep 2.4s ease-in-out infinite}
    .node{cursor:pointer}
    .node:hover circle.node-bg{fill:#16264a;stroke:#58a6ff}
    .node:hover text.node-txt{fill:#ffffff}
    .node:hover circle.node-halo{opacity:1}
    .node-halo{opacity:0;transition:opacity .25s}
  </style>

  <!-- anneaux -->
  <circle class="ringp" cx="380" cy="120" r="86" fill="none" stroke="#22d3ee"/>
  <g class="rotor">
    <circle cx="380" cy="120" r="86" fill="none" stroke="#8b5cf6" stroke-opacity=".4" stroke-dasharray="8 14" stroke-width="2"/>
  </g>
  <circle cx="380" cy="120" r="120" fill="none" stroke="#2a3560" stroke-width="1"/>

  <!-- nœuds -->
  <g font-family="'Courier New',monospace" font-size="14">
    <g class="node">
      <circle class="node-halo" cx="466" cy="120" r="34" fill="#22d3ee" fill-opacity=".12"/>
      <circle class="node-bg" cx="466" cy="120" r="30" fill="#101a38" stroke="#2a3a68"/>
      <text class="node-txt" x="466" y="126" text-anchor="middle" fill="#8fa3c8">Rust</text>
    </g>
    <g class="node">
      <circle class="node-halo" cx="423" cy="175" r="34" fill="#22d3ee" fill-opacity=".12"/>
      <circle class="node-bg" cx="423" cy="175" r="30" fill="#101a38" stroke="#2a3a68"/>
      <text class="node-txt" x="423" y="181" text-anchor="middle" fill="#8fa3c8">Python</text>
    </g>
    <g class="node">
      <circle class="node-halo" cx="337" cy="175" r="34" fill="#22d3ee" fill-opacity=".12"/>
      <circle class="node-bg" cx="337" cy="175" r="30" fill="#101a38" stroke="#2a3a68"/>
      <text class="node-txt" x="337" y="181" text-anchor="middle" fill="#8fa3c8">C</text>
    </g>
    <g class="node">
      <circle class="node-halo" cx="294" cy="120" r="34" fill="#22d3ee" fill-opacity=".12"/>
      <circle class="node-bg" cx="294" cy="120" r="30" fill="#101a38" stroke="#2a3a68"/>
      <text class="node-txt" x="294" y="126" text-anchor="middle" fill="#8fa3c8">TS/JS</text>
    </g>
    <g class="node">
      <circle class="node-halo" cx="337" cy="65" r="34" fill="#22d3ee" fill-opacity=".12"/>
      <circle class="node-bg" cx="337" cy="65" r="30" fill="#101a38" stroke="#2a3a68"/>
      <text class="node-txt" x="337" y="71" text-anchor="middle" fill="#8fa3c8">Ollama</text>
    </g>
    <g class="node">
      <circle class="node-halo" cx="423" cy="65" r="34" fill="#22d3ee" fill-opacity=".12"/>
      <circle class="node-bg" cx="423" cy="65" r="30" fill="#101a38" stroke="#2a3a68"/>
      <text class="node-txt" x="423" y="71" text-anchor="middle" fill="#8fa3c8">Linux</text>
    </g>
  </g>

  <!-- cœur -->
  <g>
    <circle class="corep" cx="380" cy="120" r="46" fill="url(#g-core)" stroke="#58a6ff" stroke-width="2"/>
    <text x="380" y="133" text-anchor="middle" font-family="'Courier New',monospace" font-weight="700" font-size="36" fill="#e2e9ff">N</text>
  </g>

  <text x="380" y="232" text-anchor="middle" font-family="'Courier New',monospace" font-size="12" fill="#5a6a92">RUST · PYTHON · C · TS/JS · OLLAMA · LINUX — hover pour allumer</text>
</svg>

</div>

---

## 📊 Mon tableau de bord — *en direct*

<div align="center">

<a href="https://github.com/Nino-LRLL">
  <img height="180em" src="https://github-readme-stats-phi-vert.vercel.app/api?username=Nino-LRLL&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true" alt="Stats GitHub"/>
  <img height="180em" src="https://github-readme-stats-phi-vert.vercel.app/api/top-langs/?username=Nino-LRLL&layout=compact&langs_count=8&theme=tokyonight&hide_border=true" alt="Langages"/>
</a>

<br/><br/>

<img height="180em" src="https://streak-stats.demolab.com/?user=Nino-LRLL&theme=tokyonight&hide_border=true" alt="Streak"/>
<img height="180em" src="https://github-readme-activity-graph.vercel.app/graph?username=Nino-LRLL&theme=tokyonight&hide_border=true&bg_color=0d1117&color=58a6ff&line=58a6ff&point=8b5cf6" alt="Graphe d'activité"/>

</div>

---

## 🚀 Projet phare

<div align="center">

<a href="https://github.com/Nino-LRLL/meth-keepalive">
  <img src="https://github-readme-stats-phi-vert.vercel.app/api/pin/?username=Nino-LRLL&repo=meth-keepalive&theme=tokyonight&hide_border=true" alt="meth-keepalive"/>
</a>

</div>

### ⚡ [meth-keepalive](https://github.com/Nino-LRLL/meth-keepalive) — l'IA qui ne dort jamais
`Rust · Windows · Linux · systemd · egui`

> Un binaire natif qui garde le PC éveillé **avec l'écran allumé** pendant
> que ton IA travaille — capot fermé, aucune veille, aucun verrouillage.
> Fail-safe natif : si Meth meurt, le système revient à la normale tout seul.
> **100 % local, zéro cloud, zéro admin.**

---

<!-- ══════════ SECTIONS INTERACTIVES (accordéons) ══════════ -->
<details>
<summary><b>🕹️ Explorer mes domaines</b> <i>(clique pour déplier)</i></summary>

<br/>

| 🔋 Keep-alive | 🧠 IA locale | 🎮 Créatif |
|:---:|:---:|:---:|
| PC éveillé, écran allumé, capot fermé | Agents autonomes (Ollama, multi-modèles) | Villes 3D, WebGL, UI animées |
| Fail-safe natif (crash = état normal) | Orchestration, mémoire, skills | Homebrew DS/3DS, rétro-dev |
| `ES_SYSTEM_REQUIRED` + `ES_DISPLAY_REQUIRED` | Personas, voix, vision | Prototypes rapides, outils utiles |

</details>

<br/>

<details>
<summary><b>🔨 En chantier</b> <i>(clique pour déplier)</i></summary>

<br/>

> ⏳ *Mes autres projets arrivent bientôt sur GitHub :*
> **StudyOS** — assistant d'études IA 100 % local (PDF → flashcards/quiz,
> Notion, voix, +250 agents orchestrés) · **Meth** — prototype keep-alive en
> Python. Dès qu'ils sont publics, leurs cartes apparaissent ici.

</details>

<br/>

<details>
<summary><b>🏠 Le principe</b> <i>(clique pour déplier)</i></summary>

<br/>

> **« Quand je ferme le capot, mon IA continue. Quand j'ouvre GitHub, mes projets parlent. »**

Mon code tourne **chez moi**, pas dans un cloud. Keep-alive, assistants,
vision, voix — tout est local, tout est à moi.

</details>

---

## 🌊 Ma grille de contribution

<div align="center">

![Snake](https://github.com/Nino-LRLL/Nino-LRLL/blob/output/github-contribution-grid-snake-dark.svg)

</div>

### 🛸 Bonus gitskins : mes contributions en Space Shooter

<div align="center">

![Space Shooter](https://raw.githubusercontent.com/Nino-LRLL/Nino-LRLL/main/contribution-game.gif)

</div>

---

<!-- ══════════ DIVIDER : pulsation animée ══════════ -->
<svg viewBox="0 0 480 24" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto">
  <style>
    @keyframes eq{0%,100%{opacity:.15;transform:scaleY(.5)}50%{opacity:1;transform:scaleY(1)}}
    .eq{animation:eq 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
  </style>
  <g fill="#58a6ff">
    <rect class="eq" x="180" y="4" width="6" height="16" rx="3"/>
    <rect class="eq" x="196" y="4" width="6" height="16" rx="3" style="animation-delay:.1s"/>
    <rect class="eq" x="212" y="4" width="6" height="16" rx="3" style="animation-delay:.2s"/>
    <rect class="eq" x="228" y="4" width="6" height="16" rx="3" style="animation-delay:.3s"/>
    <rect class="eq" x="244" y="4" width="6" height="16" rx="3" style="animation-delay:.4s"/>
    <rect class="eq" x="260" y="4" width="6" height="16" rx="3" style="animation-delay:.5s"/>
    <rect class="eq" x="276" y="4" width="6" height="16" rx="3" style="animation-delay:.6s"/>
    <rect class="eq" x="292" y="4" width="6" height="16" rx="3" style="animation-delay:.7s"/>
  </g>
</svg>

<div align="center">

<p align="center">
  <a href="https://github.com/Nino-LRLL?tab=repositories">🗂️ Tous mes repos</a> ·
  <a href="https://github.com/Nino-LRLL/meth-keepalive">⚡ meth-keepalive</a>
</p>

</div>
