(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();function J(e){let o=e%2147483647;return o<=0&&(o+=2147483646),function(){return o=o*16807%2147483647,(o-1)/2147483646}}const Y=[{id:"p1",name:"🎛️ Studio Session",type:"Solo",difficulty:"Fácil",format:"Short"},{id:"p2",name:"🎹 Before/After Sound",type:"Solo",difficulty:"Fácil",format:"Short"},{id:"p3",name:"📚 Tutorial Rápido",type:"Solo",difficulty:"Medio",format:"Short"},{id:"p4",name:"🎧 Track Preview",type:"Solo",difficulty:"Fácil",format:"Short"},{id:"p5",name:"🤝 Collab Session",type:"Collab",difficulty:"Medio",format:"Short"},{id:"p6",name:"😂 Humor de Productor",type:"Solo",difficulty:"Fácil",format:"Short"},{id:"p7",name:"💬 Storytelling",type:"Solo",difficulty:"Medio",format:"Short"},{id:"p8",name:"🧠 Psy/Lifestyle",type:"Solo",difficulty:"Medio",format:"Short"},{id:"p9",name:"🔥 Live Performance",type:"Solo/Collab",difficulty:"Difícil",format:"Short"},{id:"p10",name:"📸 Photo Mode",type:"Solo",difficulty:"Fácil",format:"Carousel"},{id:"p11",name:"🎬 Deep Dive (YouTube)",type:"Solo",difficulty:"Difícil",format:"Long"},{id:"p12",name:"🎤 Freestyle/Jam",type:"Collab",difficulty:"Difícil",format:"Short"}],D={reflexion:["Muchos confunden el silencio con arrogancia...","Nadie te dice esto cuando empiezas a crear...","Hay un punto donde dejas de hacer música para gustar...","La energía propia se volvió la prioridad.","Lo que no se nombra, igual te mueve."],curiosity:["No vas a creer lo que pasa cuando le quito todo menos una capa...","Esto empezó como un error a las 3am...","Le puse el sax encima sin pensarlo y mira...","POV: encontraste EL sonido y ya no lo sueltas..."],comparison:["Lo que imaginé vs lo que salió.","5 minutos vs 5 horas en el mismo loop.","Mi primera idea vs el último bounce."],challenge:["Intenta no mover la cabeza con esto...","A que no adivinas qué instrumento es...","Dime si esto te suena a un solo género."],educational:["El truco en Ableton que me ahorra horas...","Cómo hago que un loop respire en vivo...","Deja de cuantizar todo. Prueba esto."],story:["La historia de cómo casi borro este proyecto...","Cómo un mal día en el estudio terminó en esto...","El camino del sax a la pista, en 15 segundos..."]};function K(e=null,o){const t=Object.keys(D),a=e||t[Math.floor(o()*t.length)],n=D[a];return n[Math.floor(o()*n.length)]}const N=["Transición: Whip pan rápido","Toma: Close-up manos en Push/Teclado","Edición: Cortes rápidos al ritmo (Beat sync cut)","Efecto visual: Glitch en el drop","Toma: POV estilo primera persona produciendo","Efecto post: Color grading cálido/analógico (Film Noir)","Transición: Zoom punch agresivo","Toma: Timelapse del estudio organizándose","Efecto visual: Speed ramp (lento a rápido) justo antes del drop","Toma: Pantalla dividida (cara reaccionando + Ableton screen)"];function W(e){return N[Math.floor(e()*N.length)]}const H={Short:`ESTRUCTURA SUGERIDA (15-30s):
1. HOOK (0-3s): [hook]
   - Visual: Texto grande en pantalla. Captar atención.
2. SETUP (3-8s): 
   - Visual: [effect]
   - Acción: Mostrar contexto rápido (ej. DAW, Push, cara de concentración).
3. BUILD (8-15s): 
   - Acción: Mostrar proceso o subir energía.
4. PAYOFF/DROP (15-25s):
   - Acción: Resultado final, drop explosivo, reacción.
5. CTA (25-30s):
   - Acción: "Sígueme para más" o "Link in bio" text.`,Long:`ESTRUCTURA SUGERIDA (1-3 min YouTube/Reel):
1. HOOK: [hook] (Primeros 5 segundos cruciales).
2. INTRO: Quién eres y qué vas a lograr en este video.
3. CONTEXTO: La historia detrás del track o la técnica.
4. BODY: 
   - Paso 1 o Parte 1 del proceso.
   - [effect]
   - Paso 2 o Parte 2.
5. RESULTADO FINAL: Escucha completa de la sección.
6. OUTRO: Suscríbete, deja un comentario con qué género quieres ver.`,Carousel:`ESTRUCTURA SUGERIDA (Photo Mode):
- Slide 1 (Portada): Título llamativo + Imagen clean del estudio/hardware.
- Slide 2: [hook]
- Slide 3-4: Valor educativo o fotos estéticas.
- Slide 5: CTA visual a seguir o comentar.`};function Q(e){return H[e]||H.Short}const F=[{name:"Tilin",topics:["Jam session Guitarra+Push","Freestyle / Improv","Reacción a nuevo drop Tech House","Psy/Lifestyle chat"]},{name:"Codex (Ian)",topics:["Beat battle: Mismo sample","Freestyle sobre beat nuevo","Trap vs Tech House crossover"]},{name:"Ridd (Mau)",topics:["Reacción cantando","Legal tips para productores","Abogado vs Productor"]},{name:"Vytruz (Allan)",topics:["DJ Set Back-to-Back","Bass vs Techhouse debate","Studio tour: Comparando equipo"]}];function X(e){const o=F[Math.floor(e()*F.length)],t=o.topics[Math.floor(e()*o.topics.length)];return{person:o.name,topic:t}}function Z(e,o){const t=e*1e3+o,a=J(t),n=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],i=[],r=[...Y].sort(()=>a()-.5);return n.forEach((s,l)=>{const d=r[l%r.length],m=K(null,a),y=W(a),c=Q(d.format).replace("[hook]",m).replace("[effect]",y);let u=null;d.type.includes("Collab")&&(u=X(a)),i.push({dayName:s,dateOffset:l,pillar:d,hook:m,effect:y,script:c,collabData:u,time:l<5?"18:00 - 20:00":"12:00 - 14:00",tags:[d.type,d.difficulty,d.format]})}),i}function ee(e,o){o.innerHTML="",e.forEach(t=>{const a=document.createElement("div");a.className="day-card";const n=t.tags.map(i=>`<span class="tag ${i.includes("Collab")?"collab":""}">${i}</span>`).join("");a.innerHTML=`
      <div class="day-header">
        <span class="day-name">${t.dayName}</span>
        <span class="day-time">${t.time}</span>
      </div>
      <div class="content-type">${t.pillar.name}</div>
      <div class="hook-preview">"${t.hook}"</div>
      <div class="tags">${n}</div>
    `,a.addEventListener("click",()=>te(t)),o.appendChild(a)})}function te(e){const o=document.getElementById("content-detail-modal"),t=document.getElementById("modal-body");let a="";e.collabData&&(a=`
      <div class="detail-section">
        <h3>🤝 Colaboración con ${e.collabData.person}</h3>
        <p><strong>Tema:</strong> ${e.collabData.topic}</p>
      </div>
    `),t.innerHTML=`
    <h2 style="margin-bottom: 24px; font-size: 24px;">${e.dayName} - ${e.pillar.name}</h2>
    
    <div class="detail-section">
      <h3>🎣 Hook Principal</h3>
      <p>"${e.hook}"</p>
    </div>

    ${a}

    <div class="detail-section">
      <h3>🎬 Guión & Estructura</h3>
      <div class="script-box">${e.script}</div>
    </div>

    <div class="detail-section">
      <h3>✨ Efectos y Edición recomendados</h3>
      <ul>
        <li>${e.effect}</li>
        <li>Format: ${e.pillar.format}</li>
        <li>Difficulty: ${e.pillar.difficulty}</li>
      </ul>
    </div>

    <div class="detail-section" style="margin-top: 32px; display: flex; gap: 16px;">
      <button id="btn-modal-to-editor" style="background: var(--accent-cyan); color: var(--bg-color); border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;">📝 Desarrollar en Editor</button>
    </div>
  `,document.getElementById("btn-modal-to-editor").addEventListener("click",()=>{window.phantoBridge&&typeof window.phantoBridge.loadIntoEditor=="function"&&window.phantoBridge.loadIntoEditor({hook:e.hook,script:e.script,effect:e.effect,format:e.pillar.format,hashtags:e.pillar.hashtags||[]}),o.classList.add("hidden")}),o.classList.remove("hidden")}const oe=[{id:"m1",title:"Shi (Tráiler Sync)",artist:"Chino Valderrama",lyrics:`[Instrumental / Cinematic Synths & Heavy Bass]

(0:00 - 0:15) Intro con pads misteriosos y saxofón reverberado.
(0:15 - 0:30) Entrada de sub-bajos y arpegio progresivo en TouchDesigner.
(0:30 - 0:45) Clímax con percusión cinematográfica y solos de saxo alto desgarrador.
(0:45 - 1:00) Outro minimalista con eco.`,status:"En Progreso (Demo 1)",releaseDate:"Mayo 2026",genre:"Cinematic Electronic / Bass House",link:"#"},{id:"m2",title:"Ruido de Ciudad",artist:"Codex (Ian)",lyrics:`(Coro)
Ruido de ciudad, luces que se van,
siendo de Ecatepec pero buscando el plan.
Mecatrónica en la mente, música en las manos,
Phantom en el pecho, todos somos hermanos.

(Verso 1)
Entre cables y beats yo me paso la noche,
sin importarme el precio ni la marca del coche.
Programando un sensor, modificando el kick,
freestyle crudo en el mic, construyendo el hit.`,status:"Grabado (Mezcla)",releaseDate:"Junio 2026",genre:"Trap / Reggaeton Urbano",link:"#"},{id:"m3",title:"Sombras del Recuerdo",artist:"Ridd (Mau) x Vytruz",lyrics:`(Verso 1)
Tanto tiempo ha pasado y sigo aquí,
buscando en el derecho lo que perdí.
Pero en la cabina encuentro el perdón,
con un bajo potente y esta canción.

(Coro)
Sombras del recuerdo que no me dejan ver,
otro trago de vida antes de amanecer.
Vytruz en el beat diseñando el Serum,
Phantom en el aire rompiendo el volumen.`,status:"Escrita (Entrenamiento vocal)",releaseDate:"Julio 2026",genre:"Tech House / Deep Vocals",link:"#"},{id:"m4",title:"Felix Groove",artist:"Alfredo Felix (Prod. Chino & Tilin)",lyrics:`[Instrumental / Afrohouse Groove]

(Intro)
Percusión afrocubana orgánica con Shaker y Congas.

(Drop)
Bajo Fretless de Tilin modulado con filtros.
Solo de Saxo Alto por Chino Valderrama ejecutado en vivo en Ableton Push 2.
LFO modula el color visual en TouchDesigner.`,status:"Pre-producción",releaseDate:"Agosto 2026",genre:"Afrohouse / Live Sax & Guitar",link:"#"}],ae=[{id:"v1",title:"Grabando el solo de Saxo para el Tráiler de Shi",artist:"Chino Valderrama",platform:"TikTok",status:"Publicado",views:12500,likes:2400,date:"2026-05-18",link:"https://tiktok.com/@chino_valderrama"},{id:"v2",title:"POV: Cuando el abogado de la productora suelta barras",artist:"Ridd (Mau)",platform:"TikTok",status:"Grabado",views:0,likes:0,date:"2026-05-19",link:"#"},{id:"v3",title:"Construyendo un controlador MIDI con microcontrolador ESP32",artist:"Codex (Ian)",platform:"Instagram",status:"En Edición",views:0,likes:0,date:"2026-05-20",link:"#"},{id:"v4",title:"Live Set Setup: Ableton Push + TouchDesigner Visuals reactivos",artist:"Chino Valderrama",platform:"TikTok",status:"Idea",views:0,likes:0,date:"2026-05-21",link:"#"},{id:"v5",title:"Diseño de Bajos pesados desde cero en Serum",artist:"Vytruz (Allan)",platform:"YouTube",status:"Idea",views:0,likes:0,date:"2026-05-22",link:"#"}],w={global:{tiktokViews:98e3,spotifyStreams:15400},artists:[{id:"chino",name:"ElChinoVALDRM",followers:1850,monthlyListeners:820,engagement:"8.5%",growthRate:"+12%"},{id:"codex",name:"Codex (Ian)",followers:950,monthlyListeners:340,engagement:"6.2%",growthRate:"+8%"},{id:"ridd",name:"Ridd (Mau)",followers:680,monthlyListeners:150,engagement:"9.1%",growthRate:"+15%"},{id:"vytruz",name:"Vytruz (Allan)",followers:770,monthlyListeners:410,engagement:"5.4%",growthRate:"+5%"}]},ne=[{id:"rec1",title:"Losing It",artist:"FISHER",genre:"Tech House",recommendedBy:"Chino Valderrama",focusPoints:"Dinámica del drop, sub-bajo pesado y el uso icónico de la bocina (horn) como gancho principal.",rating:5,link:"https://open.spotify.com/track/6ho0GqW4w6LyAlN64gY359",dateAdded:"2026-05-20"},{id:"rec2",title:"Turn On The Lights again..",artist:"Fred again.. x Swedish House Mafia",genre:"Bass House",recommendedBy:"Vytruz (Allan)",focusPoints:"Diseño de sonido analógico en sintetizadores, modulación de filtros en tiempo real y transiciones de energía limpias.",rating:5,link:"https://open.spotify.com/track/1t9K19KlaeHj9V7vFa2xuo",dateAdded:"2026-05-20"},{id:"rec3",title:"Move",artist:"Adam Port, Stryv, Keinemusik",genre:"Afrohouse",recommendedBy:"Tilin",focusPoints:"Percusiones orgánicas sutiles, progresión de piano muy emotiva y voces etéreas integradas perfectamente en el groove.",rating:4,link:"https://open.spotify.com/track/0U97fV8zE7j3f69K3n1Kae",dateAdded:"2026-05-20"},{id:"rec4",title:"FE!N",artist:"Travis Scott ft. Playboi Carti",genre:"Trap",recommendedBy:"Codex (Ian)",focusPoints:"Bajo 808 extremadamente distorsionado pero limpio, repetición minimalista de voces y estructura de tensión oscura.",rating:5,link:"https://open.spotify.com/track/429tbgJ6Hj7LL45XIEbHsp",dateAdded:"2026-05-20"}],ie=[{id:"tb-001",tipo:"onscreen",texto:"Muchos confunden el silencio con arrogancia o misterio, pero la verdad es que da una hueva enorme desgastarse en conversaciones vacías con personas que solo escuchan para responder y no para entender. Prefiero mantener el perfil bajo, observar los movimientos de los demás desde la distancia y dejar que asuman lo que quieran. Proteger la energía propia se volvió la prioridad; que piensen lo que gusten mientras la mente sigue en lo suyo.",porque:"Relatable + introvertido-orgulloso. La gente lo GUARDA y COMPARTE porque se identifica (métrica EVA). Mood estético frena el scroll.",tags:["reflexion","energia","silencio","ganador"],fuente:"Reel DZL7PzQKrcO (2026-06-05)",fecha:"2026-06-05"},{id:"tb-002",tipo:"onscreen",texto:"No estoy desaparecido, estoy en el proceso. Hay cosas que solo crecen en lo oscuro.",porque:'Frase corta, misteriosa, deja gancho. Funciona para etapas de "modo cueva"/creación.',tags:["reflexion","proceso","corto"],fuente:"semilla",fecha:"2026-06-05"},{id:"tb-003",tipo:"hook",texto:"Hay un punto donde dejas de hacer música para gustar... y empiezas a hacerla para sentir.",porque:"Gancho de identidad artística; abre historia. Cierra invitando a opinar.",tags:["musica","identidad","hook"],fuente:"semilla",fecha:"2026-06-05"},{id:"tb-004",tipo:"caption",texto:"Esta rola va a cobrar el IEPS por todas las embarazadas que voy a mantener.",porque:"Humor irreverente mexicano + flex. Choca, da risa y se comparte/comenta (métrica EVA). Voz cruda, memeable.",tags:["humor","flex","irreverente","mexicano"],fuente:"Mau",fecha:"2026-06-05"},{id:"tb-005",tipo:"onscreen",texto:"Aprendí que la gente no se va cuando dejas de buscarla; solo deja de fingir que estaba.",porque:"Verdad incómoda, alta identificación → se guarda y se comparte.",tags:["reflexion","energia"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-006",tipo:"onscreen",texto:'Hay silencios que dicen más que mil "¿cómo estás?".',porque:"Corto, citable, melancólico. Loopea bien con POV.",tags:["reflexion","corto"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-007",tipo:"onscreen",texto:"Madurar fue entender que no necesito que me entiendan, solo que me respeten el espacio.",porque:"Bandera de límites/energía; el público se identifica y opina.",tags:["reflexion","limites"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-008",tipo:"onscreen",texto:"Lo que no sanas en privado, lo gritas en público sin darte cuenta.",porque:"Filo psicológico; tu lado terapeuta del medio. Muy compartible.",tags:["reflexion","psicologia"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-009",tipo:"caption",texto:"Hago música que no cabe en tu Spotify Wrapped porque no cabe en ninguna caja.",porque:'Flex + chiste sobre no-género (regla de marca). Comparte quien se siente "raro".',tags:["humor","flex","identidad"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-010",tipo:"caption",texto:"Mi terapeuta y yo coincidimos: el estudio sale más barato.",porque:"Humor honesto + tu mundo (psicología/música). Relatable, se comenta.",tags:["humor","estudio"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-011",tipo:"onscreen",texto:"Un sigilo es solo una intención que aprendió a callarse hasta cumplirse.",porque:"Define tu movimiento sin explicarlo de más. Intriga + estética.",tags:["neomagia","sigilo"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-012",tipo:"onscreen",texto:"La magia no es creer en lo imposible; es dejar de pedirle permiso a lo posible.",porque:"Cita fuerte, citable, propia del movimiento. Se comparte como mantra.",tags:["neomagia","filosofia"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-013",tipo:"onscreen",texto:"Antes le decían brujería; hoy le dicen neurociencia. Es el mismo fuego.",porque:"Une magia + ciencia (tu cruce). Provoca debate → comentarios.",tags:["neomagia","neurociencia"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-014",tipo:"onscreen",texto:"Los psicodélicos no te muestran otro mundo; te quitan el filtro de este.",porque:"Tu lado psicodélico, sin apología. Citable, identitario.",tags:["psicodelia","conciencia"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-015",tipo:"onscreen",texto:"El caos no es desorden: es un orden que todavía no entiendes.",porque:"Caoísmo en una frase. Mantra del movimiento.",tags:["neomagia","caos"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-016",tipo:"onscreen",texto:"Curarte también es un acto de rebeldía.",porque:"Corto, potente, social. Une terapia + actitud. Muy compartible.",tags:["terapia","social","corto"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-017",tipo:"hook",texto:"Le metí sax a algo que no debía y ahora no lo puedo soltar...",porque:"Gancho de proceso + tu instrumento. Abre curiosidad.",tags:["musica","sax","hook"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-018",tipo:"hook",texto:"No te voy a decir el género porque ni yo lo sé todavía...",porque:"Convierte el no-género en gancho (regla de marca). Intriga.",tags:["musica","identidad","hook"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-019",tipo:"hook",texto:"Toqué esto a las 3am y me asustó lo bien que quedó...",porque:"POV + misterio + humildad. Clásico que retiene.",tags:["musica","proceso","hook"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-020",tipo:"onscreen",texto:"Perfil bajo, frecuencia alta.",porque:"Lema. Cabe en cualquier pieza. Memeable, citable, tatuable.",tags:["lema","corto","energia"],fuente:"generado",fecha:"2026-06-05"},{id:"tb-021",tipo:"onscreen",texto:"El que sabe, calla. El que calla, observa. El que observa, gana.",porque:"Ritmo de tres, cierra fuerte, invita a guardar. Combina con POV silencio.",tags:["reflexion","cierre"],fuente:"generado",fecha:"2026-06-05"}],G="phanto_textbank";function L(){try{const e=JSON.parse(localStorage.getItem(G));if(Array.isArray(e)&&e.length)return e}catch{}return[...ie]}function re({texto:e,tipo:o="onscreen",porque:t="",tags:a=[],fuente:n="manual"}){const i=L(),r="tb-"+String(i.length+1).padStart(3,"0");return i.unshift({id:r,tipo:o,texto:e,porque:t,tags:a,fuente:n,fecha:new Date().toISOString().slice(0,10)}),localStorage.setItem(G,JSON.stringify(i)),i}let v=0,B=null,S=null,b=0,$=!1,C="all",P="all",x=JSON.parse(localStorage.getItem("phanto_videos"))||ae,g=JSON.parse(localStorage.getItem("phanto_recommendations"))||ne,se=JSON.parse(localStorage.getItem("phanto_stats"))||w,f=JSON.parse(localStorage.getItem("phanto_accounts"))||[{platform:"TikTok @phantomstudio",followers:2450,target:5e3},{platform:"Spotify Phantom Records",followers:1100,target:3e3},{platform:"Instagram @phantom.studio",followers:700,target:2e3}];function le(){de(),A(v),z(),U(),q(),R(),I(),ge(),fe(),me(),pe(),k(),ve(),E(),he(),window.phantoBridge={loadIntoEditor:e=>{document.getElementById("editor-hook").value=e.hook||"",document.getElementById("editor-body").value=e.script||"",document.getElementById("editor-effect").value=e.effect||"",document.getElementById("editor-format").value=e.format||"Short",document.getElementById("editor-hashtags").value=(e.hashtags||[]).join(" "),h();const o=document.getElementById("btn-editor");o&&O("editor-view",o)}}}function de(){document.querySelectorAll(".nav-btn").forEach(o=>{o.addEventListener("click",t=>{const a=o.id.replace("btn-","")+"-view";O(a,o)})}),document.getElementById("prev-week").addEventListener("click",()=>{v--,A(v)}),document.getElementById("next-week").addEventListener("click",()=>{v++,A(v)}),document.getElementById("close-modal").addEventListener("click",()=>{document.getElementById("content-detail-modal").classList.add("hidden")}),document.getElementById("content-detail-modal").addEventListener("click",o=>{o.target.id==="content-detail-modal"&&document.getElementById("content-detail-modal").classList.add("hidden")})}function O(e,o){document.querySelectorAll(".view-section").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".nav-btn").forEach(a=>a.classList.remove("active"));const t=document.getElementById(e);t&&t.classList.add("active"),o&&o.classList.add("active"),window.scrollTo(0,0)}function A(e){const o=new Date;o.setDate(o.getDate()+e*7);const t=new Date(o.getFullYear(),0,1),a=Math.floor((o-t)/(24*60*60*1e3)),n=Math.ceil(a/7);document.getElementById("week-title").innerText=`Semana ${n}, ${o.getFullYear()}`+(e===0?" (Actual)":"");const i=Z(o.getFullYear(),n);ee(i,document.getElementById("calendar-grid"))}function z(){const e=f.reduce((a,n)=>a+n.followers,0),o=1e4;document.getElementById("global-followers").innerText=e.toLocaleString();const t=Math.min(e/o*100,100);document.getElementById("global-progress").style.width=`${t}%`,localStorage.setItem("phanto_accounts",JSON.stringify(f)),localStorage.setItem("phanto_videos",JSON.stringify(x))}function U(){const e=document.getElementById("song-list");e&&(e.innerHTML="",oe.forEach(o=>{const t=document.createElement("div");t.className="song-item",B&&B.id===o.id&&t.classList.add("active"),t.innerHTML=`
      <div>
        <div class="song-title-row">${o.title}</div>
        <div class="song-artist-row">${o.artist} | ${o.genre}</div>
      </div>
      <span class="song-badge">${o.status}</span>
    `,t.addEventListener("click",()=>ce(o)),e.appendChild(t)}))}function ce(e){B=e,U(),M(),document.getElementById("lyrics-detail-empty").classList.add("hidden"),document.getElementById("lyrics-detail-content").classList.remove("hidden"),document.getElementById("song-detail-title").innerText=e.title,document.getElementById("song-detail-meta").innerText=`${e.artist} | ${e.genre} | Release: ${e.releaseDate}`,document.getElementById("song-detail-lyrics").innerHTML=e.lyrics.replace(/\n/g,"<br>");const t=document.getElementById("waveform-mock");t.innerHTML="";for(let n=0;n<40;n++){const i=document.createElement("div");i.className="waveform-bar";const r=Math.floor(Math.random()*80)+10;i.style.height=`${r}%`,t.appendChild(i)}const a=document.getElementById("btn-play-mock");a.onclick=ue}function ue(){const e=document.getElementById("btn-play-mock"),o=document.querySelectorAll(".waveform-bar");$?M():($=!0,e.innerText="⏸",o.forEach(t=>t.classList.add("active")),S=setInterval(()=>{b++;const t=Math.floor(b/60),a=b%60;document.getElementById("player-time").innerText=`${t}:${a<10?"0":""}${a} / 1:00`,b>=60&&M()},1e3))}function M(){$=!1;const e=document.getElementById("btn-play-mock");e&&(e.innerText="▶");const o=document.getElementById("player-time");o&&(o.innerText="0:00 / 1:00"),document.querySelectorAll(".waveform-bar").forEach(a=>a.classList.remove("active")),S&&(clearInterval(S),S=null),b=0}function pe(){const e=document.getElementById("add-video-form");if(!e)return;e.onsubmit=t=>{t.preventDefault();const a=document.getElementById("v-title").value,n=document.getElementById("v-artist").value,i=document.getElementById("v-platform").value,r=document.getElementById("v-status").value,s={id:"v_"+Date.now(),title:a,artist:n,platform:i,status:r,views:0,likes:0,date:new Date().toISOString().split("T")[0],link:"#"};x.unshift(s),localStorage.setItem("phanto_videos",JSON.stringify(x)),e.reset(),q(),I()};const o=document.querySelectorAll(".filter-btn");o.forEach(t=>{t.addEventListener("click",()=>{o.forEach(a=>a.classList.remove("active")),t.classList.add("active"),C=t.dataset.filter,q()})})}function q(){const e=document.getElementById("video-grid");if(!e)return;e.innerHTML="";const o=x.filter(t=>C==="all"||t.status===C);if(o.length===0){e.innerHTML='<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No hay videos grabados en esta categoría.</div>';return}o.forEach(t=>{const a=document.createElement("div"),n="status-"+t.status.toLowerCase().replace(/\s+/g,"");a.className=`day-card video-card ${n}`;let i="var(--accent-cyan)";t.status==="Grabado"&&(i="var(--accent-amber)"),t.status==="En Edición"&&(i="var(--accent-magenta)"),t.status==="Publicado"&&(i="#00ff66"),a.innerHTML=`
      <div class="day-header">
        <span class="day-name" style="font-size: 15px;">${t.platform}</span>
        <span class="day-date">${t.date}</span>
      </div>
      <div style="font-size: 16px; font-weight: 700; color: white;">${t.title}</div>
      <div style="font-size: 13px; color: var(--text-secondary); display: flex; justify-content: space-between;">
        <span>Artista: <strong>${t.artist}</strong></span>
        <span style="color: ${i}; font-weight: bold;">${t.status}</span>
      </div>
      <div style="display: flex; gap: 16px; border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: auto; font-family: var(--font-mono); font-size: 12px; color: var(--text-secondary);">
        <span>👁️ ${t.views.toLocaleString()} Views</span>
        <span>❤️ ${t.likes.toLocaleString()} Likes</span>
      </div>
    `,e.appendChild(a)})}function R(){const e=document.getElementById("account-list");e&&(e.innerHTML="",f.forEach((o,t)=>{const a=document.createElement("div");a.className="day-card",a.style.cursor="default";const n=Math.min(o.followers/o.target*100,100);a.innerHTML=`
      <div class="day-header">
        <span class="day-name" style="color: var(--accent-cyan); font-size: 16px;">${o.platform}</span>
        <button class="week-nav" style="padding: 4px 8px; font-size: 11px;" id="btn-update-acc-${t}">Actualizar</button>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 14px; margin-top: 8px;">
        <span>Seguidores: <strong>${o.followers.toLocaleString()}</strong></span>
        <span>Target: <strong>${o.target.toLocaleString()}</strong></span>
      </div>
      <div class="progress-bar" style="margin-top: 8px;">
        <div class="progress-fill" style="width: ${n}%;"></div>
      </div>
    `,e.appendChild(a),document.getElementById(`btn-update-acc-${t}`).onclick=()=>{const i=prompt(`Ingresa seguidores actuales para ${o.platform}:`,o.followers);i!==null&&!isNaN(i)&&i.trim()!==""&&(f[t].followers=parseInt(i,10),z(),R(),I())}}))}const V=document.getElementById("btn-add-account");V&&(V.onclick=()=>{const e=prompt("Ingresa el nombre de la red/plataforma (Ej: TikTok @miusuario):");if(!e)return;const o=prompt("Seguidores actuales:");if(o===null||isNaN(o))return;const t=prompt("Target a alcanzar:");t===null||isNaN(t)||(f.push({platform:e,followers:parseInt(o,10),target:parseInt(t,10)}),z(),R(),I())});function I(){const e=x.reduce((n,i)=>n+i.views,0)+w.global.tiktokViews,o=w.global.spotifyStreams,t=f.reduce((n,i)=>n+i.followers,0);document.getElementById("stat-total-views").innerText=e.toLocaleString(),document.getElementById("stat-total-streams").innerText=o.toLocaleString(),document.getElementById("stat-total-followers").innerText=t.toLocaleString();const a=document.getElementById("stats-artists-rows");a&&(a.innerHTML="",se.artists.forEach(n=>{const i=document.createElement("tr");i.innerHTML=`
      <td style="padding: 12px; font-weight: bold; color: white;">${n.name}</td>
      <td style="padding: 12px; font-family: var(--font-mono);">${n.followers.toLocaleString()}</td>
      <td style="padding: 12px; font-family: var(--font-mono);">${n.monthlyListeners.toLocaleString()}</td>
      <td style="padding: 12px; color: var(--accent-magenta); font-weight: bold;">${n.engagement}</td>
      <td style="padding: 12px; color: #00ff66; font-weight: bold;">${n.growthRate}</td>
    `,a.appendChild(i)}))}function me(){const e=document.getElementById("editor-hook"),o=document.getElementById("editor-format"),t=document.getElementById("editor-effect"),a=document.getElementById("editor-body"),n=document.getElementById("editor-hashtags");if(!e)return;[e,o,t,a,n].forEach(c=>{c.addEventListener("input",h)}),a.value=`1. GANCHO / POV:

2. REVELACIÓN / VALOR:

3. RESULTADO / CTA:`,n.value="#musicproduction #studiolife #beatmaking",h();const i=document.getElementById("btn-copy-post");i.onclick=()=>{const c=document.getElementById("post-preview-box").innerText;navigator.clipboard.writeText(c).then(()=>{const u=i.innerHTML;i.innerHTML="<span>✓ ¡Post Copiado al Portapapeles!</span>",i.style.background="#00ff66",i.style.color="#000000",setTimeout(()=>{i.innerHTML=u,i.style.background="var(--accent-cyan)",i.style.color="var(--bg-color)"},2e3)})};const r=document.getElementById("bank-count"),s=document.getElementById("bank-hint"),l=document.getElementById("btn-bank-pull"),d=document.getElementById("btn-bank-save");let m=0;const y=()=>{r&&(r.textContent=`(${L().length})`)};y(),l&&(l.onclick=()=>{const c=L();if(!c.length)return;const u=c[m%c.length];m++,u.tipo==="hook"?e.value=u.texto:a.value=u.texto,s&&(s.textContent=`${u.tipo} · ${u.porque||""} (fuente: ${u.fuente})`),h()}),d&&(d.onclick=()=>{const c=(a.value||"").trim();if(!c){s&&(s.textContent="Escribe algo en el cuerpo para guardarlo.");return}re({texto:c,tipo:"onscreen",porque:"Guardado desde el editor",fuente:"editor"}),y(),s&&(s.textContent="⭐ Guardado al banco.")})}function h(){const e=document.getElementById("editor-hook").value||"[Hook llamativo]",o=document.getElementById("editor-format").value,t=document.getElementById("editor-effect").value||"[Ninguno]",a=document.getElementById("editor-body").value,n=document.getElementById("editor-hashtags").value,i=document.getElementById("post-preview-box");i&&(i.innerText=`🎬 [FORMATO: ${o.toUpperCase()}]
🔥 HOOK: "${e}"

───────────────────────────────
📝 GUION / CONTENIDO:
${a}
───────────────────────────────

⚡ EFECTOS SUGERIDOS: ${t}

✨ GENERADO POR PHANTOM COMMAND CENTER
${n} #phantomstudio`)}function ge(){const e=document.getElementById("member-grid");if(!e)return;e.innerHTML="",[{id:"chino",name:"ElChinoVALDRM",role:"Fundador / Productor",avatar:"👻",color:"tilin",topics:["Live setup (Ableton Push)","Tech House / Afrohouse","Piano & Sax en vivo","Visión Phantom Studio"]},{id:"tilin",name:"Tilin",role:"Artista / Jazz Spirit",avatar:"🎷",color:"tilin",topics:["Jazz fusion armonía","Psicodelia con pedales","Guitarra eléctrica en beats","Mentalidad creativa"]},{id:"codex",name:"Codex (Ian)",role:"Productor / Mechatronics",avatar:"🤖",color:"codex",topics:["Controladores custom (Mecatrónica)","Reggaetón & Guaracha pesada","Storytelling urbano Ecatepec","Freestyle crudo"]},{id:"ridd",name:"Ridd (Mau)",role:"Cantante / Legal",avatar:"⚖️",color:"ridd",topics:["Derechos de autor / Copyright","Registro de obras en México","Entrenamiento vocal","Composición de letras"]},{id:"vytruz",name:"Vytruz (Allan)",role:"Productor / Finance",avatar:"📉",color:"vytruz",topics:["Finanzas y ROI para artistas","Workflow Mac Studio / SM7B","Bass Music & Serum Design","Optimización de CPU/Serum"]}].forEach(t=>{const a=document.createElement("div");a.className=`member-card ${t.color}`,a.style.background="var(--glass-bg)",a.style.border="1px solid var(--border-color)",a.style.padding="20px",a.style.borderRadius="12px",a.innerHTML=`
      <div class="member-header" style="display: flex; gap: 12px; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 12px;">
        <div class="member-avatar" style="font-size: 24px;">${t.avatar}</div>
        <div>
          <h3 style="color: var(--accent-cyan); font-size: 16px;">${t.name}</h3>
          <p style="font-size:12px; color: var(--text-secondary);">${t.role}</p>
        </div>
      </div>
      <div class="member-topics">
        <h5 style="color: var(--accent-magenta); margin-bottom: 8px; font-size: 12px; font-family: var(--font-mono);">TEMAS DE ENFOQUE</h5>
        <div style="background: rgba(102, 252, 241, 0.05); padding: 10px; border-radius: 8px; margin-bottom: 10px; border-left: 3px solid var(--accent-cyan); font-size: 13px;">
          <strong>🎯 Foco:</strong> ${t.topics[0]}
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${t.topics.slice(1).map(n=>`<span class="topic-tag" style="background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 4px; font-size: 11px; color: var(--text-secondary);">${n}</span>`).join("")}
        </div>
      </div>
    `,e.appendChild(a)})}function fe(){if(!document.getElementById("ideas-container"))return;const o=document.getElementById("btn-refresh-ideas");o&&(o.onclick=()=>_()),_()}function _(){const e=document.getElementById("ideas-container");if(!e)return;e.innerHTML="";const o=["Descubrí un truco en Ableton que cambió por completo mi forma de mezclar...","El secreto que nadie te dice sobre cobrar regalías como artista independiente...","¿Qué pasa si aplicas distorsión armónica a un kick de Tech House?","POV: Construiste tu propio controlador MIDI y suena así...","La técnica de ecualización que hace que tu voz corte cualquier mezcla...","Un beat genérico vs Un beat con sound design avanzado","Grabar en tu cuarto vs Grabar con un Shure SM7B en Phantom Studio","Cómo registrar tu nombre artístico en México en 3 simples pasos...","Por qué decidí mezclar ingeniería mecatrónica con producción musical...","Lo que aprendí negociando mi primer split de regalías..."];for(let t=0;t<3;t++){const a=document.createElement("div");a.className="idea-card",a.style.background="var(--glass-bg)",a.style.border="1px solid var(--border-color)",a.style.padding="20px",a.style.borderRadius="12px",a.style.cursor="pointer",a.style.transition="all 0.3s ease";const n=o[Math.floor(Math.random()*o.length)];a.innerHTML=`
      <div class="idea-content">
        <h4 style="color: var(--accent-cyan); margin-bottom: 8px;">Idea #${t+1}</h4>
        <p style="font-style: italic; font-size: 14px; color: var(--text-secondary);">"${n}"</p>
      </div>
      <div style="margin-top: 16px; font-size: 11px; color: var(--accent-magenta); font-family: var(--font-mono);">⚡ Haz clic para editar esta idea</div>
    `,a.addEventListener("click",()=>{document.getElementById("editor-hook").value=n,h();const i=document.getElementById("btn-editor");i&&O("editor-view",i)}),a.onmouseover=()=>{a.style.borderColor="var(--accent-magenta)"},a.onmouseout=()=>{a.style.borderColor="var(--border-color)"},e.appendChild(a)}}function k(){const e=document.getElementById("recommendations-grid");if(!e)return;e.innerHTML="";const o=g.filter(t=>P==="all"||t.genre===P);if(o.length===0){e.innerHTML='<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No hay recomendaciones musicales registradas en esta categoría.</div>';return}o.forEach(t=>{const a=document.createElement("div"),n="genre-"+t.genre.toLowerCase().replace(/\s+/g,"");a.className=`day-card rec-card ${n}`;const i="⭐".repeat(t.rating);a.innerHTML=`
      <div class="day-header">
        <span class="day-name" style="font-size: 15px;">${t.genre}</span>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="rating-stars">${i}</span>
          <button class="btn-delete-rec" title="Eliminar recomendación" data-id="${t.id}">×</button>
        </div>
      </div>
      <div style="font-size: 16px; font-weight: 700; color: white; margin-top: 4px;">${t.title}</div>
      <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 6px;">
        Artista: <strong>${t.artist}</strong>
      </div>
      <div class="hook-preview" style="font-size: 13px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; margin-bottom: 8px; min-height: auto; border-left: 2px solid var(--accent-cyan-dim);">
        <strong>Foco:</strong> ${t.focusPoints}
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 10px; margin-top: auto; font-size: 11px; color: var(--text-secondary);">
        <span>Por: <strong>${t.recommendedBy}</strong></span>
        <a href="${t.link}" target="_blank" class="btn-listen">🎧 Escuchar</a>
      </div>
    `,a.querySelector(".btn-delete-rec").addEventListener("click",s=>{s.stopPropagation(),ye(t.id)}),e.appendChild(a)})}function ye(e){confirm("¿Estás seguro de que deseas eliminar esta recomendación?")&&(g=g.filter(o=>o.id!==e),localStorage.setItem("phanto_recommendations",JSON.stringify(g)),k())}function ve(){const e=document.getElementById("add-rec-form");if(!e)return;e.onsubmit=t=>{t.preventDefault();const a=document.getElementById("r-title").value,n=document.getElementById("r-artist").value,i=document.getElementById("r-genre").value,r=document.getElementById("r-by").value,s=parseInt(document.getElementById("r-rating").value,10),l=document.getElementById("r-link").value,d=document.getElementById("r-focus").value,m={id:"rec_"+Date.now(),title:a,artist:n,genre:i,recommendedBy:r,rating:s,link:l,focusPoints:d,dateAdded:new Date().toISOString().split("T")[0]};g.unshift(m),localStorage.setItem("phanto_recommendations",JSON.stringify(g)),e.reset(),k()};const o=document.querySelectorAll(".filter-rec-btn");o.forEach(t=>{t.addEventListener("click",()=>{o.forEach(a=>a.classList.remove("active")),t.classList.add("active"),P=t.dataset.filter,k()})})}const be=[{id:1,title:"Tráiler Shi",artist:"Shi",type:"Sync / Scoring",status:"en-produccion",priority:!0,deadline:"2026-06-30",notes:"Prioridad máxima. Música para tráiler de cine. Pendiente: definir mood/duración con Shi."},{id:2,title:"Album Felix",artist:"Alfredo Felix",type:"Álbum",status:"pre-produccion",priority:!1,deadline:"",notes:"Demo en progreso. Estilo por definir."},{id:3,title:"Album Valentina",artist:"Valentina",type:"Álbum",status:"idea",priority:!1,deadline:"",notes:"Concepto: estilo Belanova. Sin fecha."},{id:4,title:"Proyectos Codex",artist:"Codex (Ian)",type:"EP/Singles",status:"en-produccion",priority:!1,deadline:"",notes:"En desarrollo activo."},{id:5,title:"Live Set Chino",artist:"ElChinoVALDRM",type:"Performance",status:"en-produccion",priority:!1,deadline:"",notes:"Live set para shows. Ableton + TouchDesigner."},{id:6,title:"Proyectos Ridd",artist:"Ridd (Mauricio)",type:"Singles",status:"pre-produccion",priority:!1,deadline:"",notes:"Entrenamiento vocal en curso."}],j={idea:{label:"Idea",color:"#888",bg:"rgba(136,136,136,0.15)"},"pre-produccion":{label:"Pre-producción",color:"#ffb000",bg:"rgba(255,176,0,0.15)"},"en-produccion":{label:"En Producción",color:"#66fcf1",bg:"rgba(102,252,241,0.15)"},mezcla:{label:"Mezcla/Master",color:"#a78bfa",bg:"rgba(167,139,250,0.15)"},distribucion:{label:"Distribución",color:"#ff00ff",bg:"rgba(255,0,255,0.15)"},publicado:{label:"Publicado ✓",color:"#4ade80",bg:"rgba(74,222,128,0.15)"}};let p=JSON.parse(localStorage.getItem("phanto_releases"))||be;function T(){localStorage.setItem("phanto_releases",JSON.stringify(p))}function E(){const e=document.getElementById("releases-container");if(!e)return;const o=["en-produccion","pre-produccion","mezcla","distribucion","idea","publicado"],t={};o.forEach(r=>t[r]=[]),p.forEach(r=>{t[r.status]||(t[r.status]=[]),t[r.status].push(r)});const a=p.length,n=p.filter(r=>r.status==="en-produccion").length,i=p.filter(r=>r.status==="publicado").length;e.innerHTML=`
    <div style="display:flex; gap:16px; margin-bottom:24px; flex-wrap:wrap;">
      <div class="stat-card"><div class="stat-value">${a}</div><div class="stat-label">Total Releases</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--accent-cyan)">${n}</div><div class="stat-label">En Producción</div></div>
      <div class="stat-card"><div class="stat-value" style="color:#4ade80">${i}</div><div class="stat-label">Publicados</div></div>
      <div class="stat-card" style="margin-left:auto;">
        <button onclick="addRelease()" style="background:var(--accent-cyan);color:var(--bg-color);border:none;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:700;font-size:12px;letter-spacing:1px;">+ NUEVO RELEASE</button>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px,1fr)); gap:16px;">
      ${o.filter(r=>t[r].length>0).map(r=>{const s=j[r];return`
          <div style="background:var(--bg-panel);border:1px solid ${s.color}33;border-radius:12px;padding:20px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
              <div style="width:8px;height:8px;border-radius:50%;background:${s.color}"></div>
              <span style="font-size:11px;letter-spacing:2px;color:${s.color};font-family:var(--font-mono);font-weight:700;">${s.label.toUpperCase()}</span>
              <span style="margin-left:auto;font-size:11px;color:#666;">${t[r].length}</span>
            </div>
            ${t[r].map(l=>`
              <div style="background:${s.bg};border:1px solid ${s.color}22;border-radius:8px;padding:14px;margin-bottom:10px;position:relative;">
                ${l.priority?'<span style="position:absolute;top:10px;right:10px;font-size:9px;background:#ff000033;color:#ff6666;border:1px solid #ff666633;padding:2px 6px;border-radius:4px;letter-spacing:1px;">PRIO</span>':""}
                <div style="font-weight:700;font-size:14px;margin-bottom:4px;">${l.title}</div>
                <div style="font-size:12px;color:#888;margin-bottom:6px;">${l.artist} · <span style="color:#666">${l.type}</span></div>
                ${l.deadline?`<div style="font-size:11px;color:#ffb000;margin-bottom:6px;">📅 ${l.deadline}</div>`:""}
                ${l.notes?`<div style="font-size:11px;color:#aaa;line-height:1.5;margin-bottom:10px;">${l.notes}</div>`:""}
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                  <select onchange="updateReleaseStatus(${l.id}, this.value)" style="background:#111;border:1px solid #333;color:#ccc;padding:4px 8px;border-radius:6px;font-size:11px;font-family:var(--font-mono);cursor:pointer;flex:1;">
                    ${Object.entries(j).map(([d,m])=>`<option value="${d}" ${d===l.status?"selected":""}>${m.label}</option>`).join("")}
                  </select>
                  <button onclick="editRelease(${l.id})" style="background:transparent;border:1px solid #333;color:#888;padding:4px 8px;border-radius:6px;font-size:11px;cursor:pointer;">✏️</button>
                  <button onclick="deleteRelease(${l.id})" style="background:transparent;border:1px solid #333;color:#666;padding:4px 8px;border-radius:6px;font-size:11px;cursor:pointer;">×</button>
                </div>
              </div>
            `).join("")}
          </div>`}).join("")}
    </div>`}window.updateReleaseStatus=function(e,o){const t=p.find(a=>a.id===e);t&&(t.status=o,T(),E())};window.deleteRelease=function(e){confirm("Eliminar release?")&&(p=p.filter(o=>o.id!==e),T(),E())};window.addRelease=function(){const e=prompt("Nombre del release:");if(!e)return;const o=prompt("Artista:")||"",t=prompt("Tipo (Álbum, Single, EP, Sync...):")||"Single";p.push({id:Date.now(),title:e,artist:o,type:t,status:"idea",priority:!1,deadline:"",notes:""}),T(),E()};window.editRelease=function(e){const o=p.find(n=>n.id===e);if(!o)return;const t=prompt("Notas:",o.notes)??o.notes,a=prompt("Deadline (YYYY-MM-DD):",o.deadline)??o.deadline;o.notes=t,o.deadline=a,T(),E()};function he(){const e=document.getElementById("brandkit-container");if(!e)return;const o=[{hex:"#0b0c10",name:"BG Base",role:"Fondo principal"},{hex:"#1f2833",name:"Panel",role:"Fondos de tarjetas y sidebar"},{hex:"#66fcf1",name:"Cyan",role:"Acento principal, titulos, CTAs"},{hex:"#45a29e",name:"Cyan Dim",role:"Acento secundario, texto auxiliar"},{hex:"#ff00ff",name:"Magenta",role:"Contraste secundario, drops"},{hex:"#ffb000",name:"Amber",role:"Alertas, deadlines, detalles dorados"},{hex:"#c5c6c7",name:"Text Primary",role:"Texto principal sobre fondos oscuros"},{hex:"#ffffff",name:"White",role:"Texto sobre color, watermarks"}],t=[{name:"Inter ExtraBold 800",use:"Títulos, branding, subtítulos grandes",sample:"PHANTOM STUDIO"},{name:"JetBrains Mono 400/700",use:"Código, metadatos, fechas, etiquetas",sample:"// 2026-06-01"}],a=[{file:"logo_phantom_cyan_darkbg.png",desc:"Logo principal — cyan sobre negro",use:"Posts, thumbnails, portadas"},{file:"logo_phantom_magenta_darkbg.png",desc:"Variante magenta — fondo negro",use:"Lanzamientos especiales"},{file:"ig_square_phantom_cyan.png",desc:"Feed Instagram 1080×1080",use:"Posts cuadrados IG"},{file:"ig_square_phantom_magenta.png",desc:"Feed Instagram 1080×1080 magenta",use:"Posts cuadrados IG variante"},{file:"tiktok_cover_phantom_cyan.png",desc:"TikTok/Story 1080×1920",use:"Portadas TikTok, Stories"},{file:"tiktok_cover_phantom_magenta.png",desc:"TikTok/Story 1080×1920 magenta",use:"Stories variante"},{file:"logo_phantom_cyan_transparent.png",desc:"Logo PNG transparente (cyan)",use:"Overlay en videos, watermark"},{file:"logo_phantom_white_transparent.png",desc:"Logo PNG transparente (blanco)",use:"Watermark sobre fondos claros"},{file:"logo_phantom_negro.png",desc:"Logo original negro sobre blanco",use:"Impresión, documentos formales"},{file:"PHANTOM OK.ai",desc:"Fuente vectorial (Adobe Illustrator)",use:"Edición de alta calidad"},{file:"PHANTOM_Logo_P6_Instagram.af",desc:"Fuente Affinity Designer",use:"Recolorar y exportar variantes"}];e.innerHTML=`
    <!-- COLORES -->
    <div style="margin-bottom:32px;">
      <h2 style="font-family:var(--font-mono);font-size:11px;letter-spacing:3px;color:var(--accent-cyan);margin-bottom:16px;">// PALETA OFICIAL</h2>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        ${o.map(n=>{const i=["#0b0c10","#1f2833"].includes(n.hex)?"#66fcf1":"#0b0c10";return`
            <div onclick="navigator.clipboard.writeText('${n.hex}').then(()=>alert('Copiado: ${n.hex}')" style="background:${n.hex};border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:16px 14px;min-width:120px;cursor:pointer;transition:transform 0.15s;" title="Click para copiar">
              <div style="font-family:var(--font-mono);font-size:12px;font-weight:700;color:${i};margin-bottom:4px;">${n.hex}</div>
              <div style="font-size:11px;font-weight:700;color:${i};opacity:0.9;">${n.name}</div>
              <div style="font-size:10px;color:${i};opacity:0.6;margin-top:3px;line-height:1.3;">${n.role}</div>
            </div>`}).join("")}
      </div>
    </div>

    <!-- TIPOGRAFÍAS -->
    <div style="margin-bottom:32px;">
      <h2 style="font-family:var(--font-mono);font-size:11px;letter-spacing:3px;color:var(--accent-cyan);margin-bottom:16px;">// TIPOGRAFÍAS</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;">
        ${t.map(n=>`
          <div style="background:var(--bg-panel);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:20px;">
            <div style="font-size:22px;color:var(--accent-cyan);margin-bottom:8px;">${n.sample}</div>
            <div style="font-family:var(--font-mono);font-size:11px;color:#66fcf1;margin-bottom:4px;">${n.name}</div>
            <div style="font-size:11px;color:#888;">${n.use}</div>
          </div>`).join("")}
      </div>
    </div>

    <!-- LOGO ASSETS -->
    <div>
      <h2 style="font-family:var(--font-mono);font-size:11px;letter-spacing:3px;color:var(--accent-cyan);margin-bottom:16px;">// LOGO ASSETS — <span style="color:#888">07_MEDIA/ en vault Obsidian</span></h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;">
        ${a.map(n=>`
          <div style="background:var(--bg-panel);border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:14px;display:flex;flex-direction:column;gap:6px;">
            <div style="font-family:var(--font-mono);font-size:11px;color:var(--accent-cyan);word-break:break-all;">${n.file}</div>
            <div style="font-size:12px;color:#ccc;">${n.desc}</div>
            <div style="font-size:11px;color:#666;font-style:italic;">${n.use}</div>
          </div>`).join("")}
      </div>
    </div>`}window.onload=le;
