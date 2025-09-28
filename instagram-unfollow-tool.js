/**
 * Instagram Bulk Unfollow Tool v1.2 (Multilingual + Beautiful GUI)
 * 100% FREE. If this helps you:
 *  - 📸 Follow: https://www.instagram.com/psteczka  (@psteczka)
 *  - ⭐ Star:   https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool
 *
 * Paste this entire script into the browser console on your Instagram "Following" list.
 */

(async function () {
  'use strict';

  // ===========================
  // BASIC VALIDATION
  // ===========================
  if (!location.hostname.includes('instagram.com')) {
    alert('⚠️ This script works only on instagram.com');
    return;
  }

  // ===========================
  // CONFIG
  // ===========================
  const VERSION = '1.2';
  const CONFIG = {
    // Modes
    MODES: {
      SAFE:   { hourly: 30, daily: 200, delay: [2800, 5200] },
      NORMAL: { hourly: 50, daily: 350, delay: [1800, 3600] },
      FAST:   { hourly: 70, daily: 450, delay: [1200, 2400] },
    },
    mode: 'NORMAL',
    // Delays progression
    PROGRESSIVE_STEP_PER_100: 400, // +ms per 100 unfollows
    // Breaks
    MINI_BREAK_EVERY: 10,
    LONG_BREAK_EVERY: 50,
    MINI_BREAK_TIME: [15000, 30000],
    LONG_BREAK_TIME: [60000, 120000],
    // Behavior
    HESITATION_CHANCE: 0.1,
    MISCLICK_CHANCE: 0.02,
    RANDOM_SCROLL_CHANCE: 0.3,
    // UI
    SHOW_GUI: true,
    THEME: 'AUTO', // AUTO | DARK | LIGHT
    // Misc
    DEBUG: false
  };

  // ===========================
  // LANGUAGE PACKS (UI + Texts)
  // ===========================
  const LANGS = {
    EN: {
      ui: {
        title: 'Instagram Unfollow Tool',
        start: 'Start',
        pause: 'Pause',
        resume: 'Resume',
        stop: 'Stop',
        mode: 'Mode',
        stats: 'Statistics',
        unfollowed: 'Unfollowed',
        hourly: 'Hourly',
        rate: 'Rate',
        time: 'Time',
        notFollowingList: 'Open your Following list (Profile → Following), then press Start',
        ready: 'Ready. Press Start to begin.',
        supportBox: 'This tool is 100% FREE. If it helps you:',
        supportIG: '📸 Follow @psteczka on Instagram',
        supportGH: '⭐ Star the GitHub repo',
        safe: 'Safe',
        normal: 'Normal',
        fast: 'Fast',
      },
      messages: {
        welcome: '🚀 Instagram Bulk Unfollow Tool v' + VERSION,
        needFollowing: '⚠️ Please open your Following list (Profile → Following) first.',
        hourlyLimitWait: '⏸️ Hourly limit reached. Waiting',
        searchButtons: '🔍 Searching for accounts…',
        shortBreak: '☕ Short break',
        longBreak: '🍔 Long break',
        progress: '📈 Progress',
        finished: '🏁 Completed',
      },
      texts: {
        following: [
          'following','abonné','abonnements','abonniert','seguiti','seguidos','seguintes','подписки','подписаны',
          'obserwowanie','obserwujesz'
        ],
        followState: [
          'follow','suivre','folgen','segui','seguir','seguir','подписаться','obserwuj'
        ],
        confirm: [
          'unfollow','ne plus suivre','nicht mehr folgen','non seguire più',
          'dejar de seguir','deixar de seguir','отписаться','przestań obserwować'
        ],
        cancel: ['cancel','anuluj','annuler','abbrechen','annulla','cancelar','отмена']
      }
    },
    PL: {
      ui: {
        title: 'Narzędzie Unfollow Instagram',
        start: 'Start',
        pause: 'Pauza',
        resume: 'Wznów',
        stop: 'Stop',
        mode: 'Tryb',
        stats: 'Statystyki',
        unfollowed: 'Odobserwowano',
        hourly: 'Na godzinę',
        rate: 'Tempo',
        time: 'Czas',
        notFollowingList: 'Otwórz listę Obserwowanych (Profil → Obserwujesz), potem kliknij Start',
        ready: 'Gotowe. Kliknij Start aby zacząć.',
        supportBox: 'To narzędzie jest w 100% DARMOWE. Jeśli Ci pomaga:',
        supportIG: '📸 Zaobserwuj @psteczka na Instagramie',
        supportGH: '⭐ Daj gwiazdkę repo na GitHub',
        safe: 'Bezpieczny',
        normal: 'Normalny',
        fast: 'Szybki',
      },
      messages: {
        welcome: '🚀 Instagram Bulk Unfollow Tool v' + VERSION,
        needFollowing: '⚠️ Otwórz najpierw listę Obserwowanych (Profil → Obserwujesz).',
        hourlyLimitWait: '⏸️ Limit godzinowy osiągnięty. Czekam',
        searchButtons: '🔍 Szukam kont…',
        shortBreak: '☕ Krótka przerwa',
        longBreak: '🍔 Długa przerwa',
        progress: '📈 Postęp',
        finished: '🏁 Zakończono',
      },
      texts: {
        following: [
          'obserwowanie','obserwujesz','following','abonné','abonniert','seguiti','seguidos','seguintes','подписки','подписаны'
        ],
        followState: [
          'obserwuj','follow','suivre','folgen','segui','seguir','подписаться'
        ],
        confirm: [
          'przestań obserwować','unfollow','ne plus suivre','nicht mehr folgen',
          'non seguire più','dejar de seguir','deixar de seguir','отписаться'
        ],
        cancel: ['anuluj','cancel','annuler','abbrechen','annulla','cancelar','отмена']
      }
    },
    ES: {
      ui: { title:'Herramienta Unfollow Instagram', start:'Iniciar', pause:'Pausar', resume:'Reanudar', stop:'Detener', mode:'Modo', stats:'Estadísticas', unfollowed:'Dejados', hourly:'Por hora', rate:'Velocidad', time:'Tiempo', notFollowingList:'Abre tu lista de Siguiendo (Perfil → Siguiendo) y pulsa Iniciar', ready:'Listo. Pulsa Iniciar.', supportBox:'Esta herramienta es 100% GRATIS. Si te ayuda:', supportIG:'📸 Sigue a @psteczka en Instagram', supportGH:'⭐ Da estrella al repo en GitHub', safe:'Seguro', normal:'Normal', fast:'Rápido' },
      messages: { welcome:'🚀 Instagram Bulk Unfollow Tool v'+VERSION, needFollowing:'⚠️ Abre primero tu lista de Siguiendo (Perfil → Siguiendo).', hourlyLimitWait:'⏸️ Límite horario alcanzado. Esperando', searchButtons:'🔍 Buscando cuentas…', shortBreak:'☕ Pausa corta', longBreak:'🍔 Pausa larga', progress:'📈 Progreso', finished:'🏁 Completado' },
      texts: { following:['siguiendo','following','abonné','abonniert','seguiti','seguidos','seguintes','подписки','подписаны','obserwowanie','obserwujesz'], followState:['seguir','follow','suivre','folgen','segui','подписаться','obserwuj'], confirm:['dejar de seguir','unfollow','ne plus suivre','nicht mehr folgen','non seguire più','deixar de seguir','отписаться','przestań obserwować'], cancel:['cancelar','cancel','annuler','abbrechen','annulla','anuluj','отмена'] }
    },
    FR: {
      ui: { title:'Outil Unfollow Instagram', start:'Démarrer', pause:'Pause', resume:'Reprendre', stop:'Arrêter', mode:'Mode', stats:'Statistiques', unfollowed:'Désabonnés', hourly:'Par heure', rate:'Vitesse', time:'Temps', notFollowingList:'Ouvrez votre liste Abonnements (Profil → Abonnements), puis Démarrer', ready:'Prêt. Cliquez Démarrer.', supportBox:'Cet outil est 100% GRATUIT. Si cela aide :', supportIG:'📸 Suivez @psteczka sur Instagram', supportGH:'⭐ Étoilez le repo GitHub', safe:'Sûr', normal:'Normal', fast:'Rapide' },
      messages: { welcome:'🚀 Instagram Bulk Unfollow Tool v'+VERSION, needFollowing:'⚠️ Ouvrez d’abord votre liste d’Abonnements.', hourlyLimitWait:'⏸️ Limite horaire atteinte. Attente', searchButtons:'🔍 Recherche de comptes…', shortBreak:'☕ Pause courte', longBreak:'🍔 Pause longue', progress:'📈 Progression', finished:'🏁 Terminé' },
      texts: { following:['abonné','abonnements','following','abonniert','seguiti','seguidos','seguintes','подписки','подписаны','obserwowanie','obserwujesz'], followState:['suivre','follow','folgen','segui','seguir','подписаться','obserwuj'], confirm:['ne plus suivre','unfollow','nicht mehr folgen','non seguire più','dejar de seguir','deixar de seguir','отписаться','przestań obserwować'], cancel:['annuler','cancel','abbrechen','annulla','cancelar','anuluj','отмена'] }
    },
    DE: {
      ui: { title:'Instagram Unfollow Tool', start:'Starten', pause:'Pause', resume:'Fortsetzen', stop:'Stoppen', mode:'Modus', stats:'Statistiken', unfollowed:'Entfolgt', hourly:'Stündlich', rate:'Rate', time:'Zeit', notFollowingList:'Öffne deine Abonniert-Liste (Profil → Abonniert), dann Starten', ready:'Bereit. Klicke Starten.', supportBox:'Dieses Tool ist 100% KOSTENLOS. Wenn es hilft:', supportIG:'📸 Folge @psteczka auf Instagram', supportGH:'⭐ Sterne das GitHub-Repo', safe:'Sicher', normal:'Normal', fast:'Schnell' },
      messages: { welcome:'🚀 Instagram Bulk Unfollow Tool v'+VERSION, needFollowing:'⚠️ Öffne zuerst deine Abonniert-Liste.', hourlyLimitWait:'⏸️ Stündliches Limit erreicht. Warte', searchButtons:'🔍 Suche Konten…', shortBreak:'☕ Kurze Pause', longBreak:'🍔 Lange Pause', progress:'📈 Fortschritt', finished:'🏁 Abgeschlossen' },
      texts: { following:['abonniert','following','abonné','abonnements','seguiti','seguidos','seguintes','подписки','подписаны','obserwowanie','obserwujesz'], followState:['folgen','follow','suivre','segui','seguir','подписаться','obserwuj'], confirm:['nicht mehr folgen','unfollow','ne plus suivre','non seguire più','dejar de seguir','deixar de seguir','отписаться','przestań obserwować'], cancel:['abbrechen','cancel','annuler','annulla','cancelar','anuluj','отмена'] }
    },
    PT: {
      ui: { title:'Ferramenta Unfollow Instagram', start:'Iniciar', pause:'Pausar', resume:'Retomar', stop:'Parar', mode:'Modo', stats:'Estatísticas', unfollowed:'Deixou de seguir', hourly:'Por hora', rate:'Taxa', time:'Tempo', notFollowingList:'Abra sua lista de Seguindo (Perfil → Seguindo) e Iniciar', ready:'Pronto. Clique Iniciar.', supportBox:'Esta ferramenta é 100% GRÁTIS. Se ajudar:', supportIG:'📸 Siga @psteczka no Instagram', supportGH:'⭐ Dê estrela no GitHub', safe:'Seguro', normal:'Normal', fast:'Rápido' },
      messages: { welcome:'🚀 Instagram Bulk Unfollow Tool v'+VERSION, needFollowing:'⚠️ Abra primeiro sua lista de Seguindo.', hourlyLimitWait:'⏸️ Limite por hora atingido. Aguardando', searchButtons:'🔍 Procurando contas…', shortBreak:'☕ Pausa curta', longBreak:'🍔 Pausa longa', progress:'📈 Progresso', finished:'🏁 Concluído' },
      texts: { following:['seguintes','seguindo','following','abonné','abonniert','seguiti','seguidos','подписки','подписаны','obserwowanie','obserwujesz'], followState:['seguir','follow','suivre','folgen','segui','подписаться','obserwuj'], confirm:['deixar de seguir','unfollow','ne plus suivre','nicht mehr folgen','non seguire più','dejar de seguir','отписаться','przestań obserwować'], cancel:['cancelar','cancel','annuler','abbrechen','annulla','anuluj','отмена'] }
    },
    RU: {
      ui: { title:'Инструмент Unfollow Instagram', start:'Старт', pause:'Пауза', resume:'Продолжить', stop:'Стоп', mode:'Режим', stats:'Статистика', unfollowed:'Отписался', hourly:'В час', rate:'Скорость', time:'Время', notFollowingList:'Откройте список Подписок (Профиль → Подписки), затем Старт', ready:'Готово. Нажмите Старт.', supportBox:'Инструмент 100% БЕСПЛАТНЫЙ. Если помогает:', supportIG:'📸 Подпишитесь на @psteczka', supportGH:'⭐ Поставьте звезду на GitHub', safe:'Безопасный', normal:'Обычный', fast:'Быстрый' },
      messages: { welcome:'🚀 Instagram Bulk Unfollow Tool v'+VERSION, needFollowing:'⚠️ Сначала откройте список Подписок.', hourlyLimitWait:'⏸️ Почасовой лимит достигнут. Ожидание', searchButtons:'🔍 Поиск аккаунтов…', shortBreak:'☕ Короткий перерыв', longBreak:'🍔 Долгий перерыв', progress:'📈 Прогресс', finished:'🏁 Завершено' },
      texts: { following:['подписки','подписаны','following','abonné','abonniert','seguiti','seguidos','seguintes','obserwowanie','obserwujesz'], followState:['подписаться','follow','suivre','folgen','segui','seguir','obserwuj'], confirm:['отписаться','unfollow','ne plus suivre','nicht mehr folgen','non seguire più','dejar de seguir','deixar de seguir','przestań obserwować'], cancel:['отмена','cancel','annuler','abbrechen','annulla','cancelar','anuluj'] }
    },
    IT: {
      ui: { title:'Strumento Unfollow Instagram', start:'Inizia', pause:'Pausa', resume:'Riprendi', stop:'Ferma', mode:'Modalità', stats:'Statistiche', unfollowed:'Non segui più', hourly:'Orario', rate:'Velocità', time:'Tempo', notFollowingList:'Apri la lista Seguiti (Profilo → Seguiti), poi Inizia', ready:'Pronto. Clicca Inizia.', supportBox:'Questo strumento è 100% GRATUITO. Se aiuta:', supportIG:'📸 Segui @psteczka su Instagram', supportGH:'⭐ Metti stella al repo su GitHub', safe:'Sicuro', normal:'Normale', fast:'Veloce' },
      messages: { welcome:'🚀 Instagram Bulk Unfollow Tool v'+VERSION, needFollowing:'⚠️ Vai prima alla lista Seguiti.', hourlyLimitWait:'⏸️ Limite orario raggiunto. In attesa', searchButtons:'🔍 Cerco account…', shortBreak:'☕ Pausa breve', longBreak:'🍔 Pausa lunga', progress:'📈 Progresso', finished:'🏁 Completato' },
      texts: { following:['seguiti','following','abonné','abonniert','seguidos','seguintes','подписки','подписаны','obserwowanie','obserwujesz'], followState:['segui','follow','suivre','folgen','seguir','подписаться','obserwuj'], confirm:['non seguire più','unfollow','ne plus suivre','nicht mehr folgen','dejar de seguir','deixar de seguir','отписаться','przestań obserwować'], cancel:['annulla','cancel','annuler','abbrechen','cancelar','anuluj','отмена'] }
    }
  };

  function detectLang() {
    const code = (document.documentElement.lang || 'en').slice(0,2).toUpperCase();
    return LANGS[code] ? LANGS[code] : LANGS.EN;
  }
  const L = detectLang();

  // ===========================
  // HELPERS
  // ===========================
  const rand = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
  const delay = (ms) => new Promise(r=>setTimeout(r,ms));
  const now = () => new Date().toLocaleTimeString();
  const norm = (s) => (s||'').toString().trim().toLowerCase();

  // EXACT match against array
  const textEqualsAny = (el, arr) => arr.some(t => norm(el.innerText||el.textContent) === norm(t));
  // Includes against array
  const textIncludesAny = (el, arr) => arr.some(t => (el.innerText||el.textContent||'').toLowerCase().includes(t.toLowerCase()));

  const waitFor = async (fn, timeout=5000, step=100) => {
    const t0 = Date.now();
    let out;
    while (Date.now()-t0 < timeout) {
      out = fn();
      if (out) return out;
      await delay(step);
    }
    return null;
  };

  // ===========================
  // CORE: Row / Buttons
  // ===========================
  function extractUsername(scope) {
    const anchors = Array.from(scope.querySelectorAll('a[href^="/"]'));
    for (const a of anchors) {
      const href = a.getAttribute('href')||'';
      const m = href.match(/^\/([^\/?#]+)\/?$/);
      if (!m) continue;
      const candidate = m[1];
      if (['p','reel','explore','stories','accounts','direct','about','graphql'].includes(candidate)) continue;
      return candidate;
    }
    return null;
  }

  function findRow(el) {
    let cur = el;
    for (let i=0;i<12 && cur;i++) {
      if (cur.matches('li,[role="listitem"]')) return cur;
      if (extractUsername(cur)) return cur;
      cur = cur.parentElement;
    }
    return el?.closest('div')||el?.parentElement||null;
  }

  const processedRows = new WeakSet();
  const processedUsers = new Set();

  function findNextFollowing() {
    const btns = Array.from(document.querySelectorAll('button'));
    for (const b of btns) {
      const t = norm(b.innerText||b.textContent);
      if (!t) continue;
      // Only "following" states, never "follow"
      const isFollowingState = L.texts.following.some(x => t === norm(x));
      if (!isFollowingState) continue;
      const row = findRow(b);
      if (!row) continue;
      if (processedRows.has(row)) continue;
      if (row.dataset.processed === '1') continue;
      return {btn:b, row};
    }
    return null;
  }

  function topDialog() {
    const list = Array.from(document.querySelectorAll('div[role="dialog"],div[role="alertdialog"],div[aria-modal="true"]'));
    return list.length ? list[list.length-1] : null;
  }

  function findConfirmBtn() {
    const layer = topDialog() || document.body;
    const btns = Array.from(layer.querySelectorAll('button'));
    // exact match preferred
    for (const b of btns) if (textEqualsAny(b, L.texts.confirm)) return b;
    // fallback: includes (safer with more languages)
    for (const b of btns) if (textIncludesAny(b, L.texts.confirm)) return b;
    return null;
  }

  async function waitRowBecameUnfollowed(row, timeout=6000) {
    return await waitFor(() => {
      const btn = row.querySelector('button');
      if (!btn) return false;
      // Check it became "Follow" state
      return textIncludesAny(btn, L.texts.followState);
    }, timeout);
  }

  // ===========================
  // HUMAN BEHAVIOR
  // ===========================
  const human = {
    scroll: async () => {
      if (Math.random() < CONFIG.RANDOM_SCROLL_CHANCE) {
        window.scrollBy({ top: rand(100, 260), behavior: 'smooth' });
        await delay(rand(300,700));
      }
    },
    hesitate: async () => {
      if (Math.random() < CONFIG.HESITATION_CHANCE) {
        console.log('💭', now());
        await delay(rand(700,1600));
      }
    },
    misclick: async () => {
      if (Math.random() < CONFIG.MISCLICK_CHANCE) {
        document.body.click();
        await delay(rand(200,600));
      }
    },
  };

  // ===========================
  // STATS
  // ===========================
  const stats = {
    unfollowed: 0,
    hourly: 0,
    lastHourReset: Date.now(),
    start: Date.now(),
    running: false,
    paused: false,
    errors: 0,
  };

  function currentLimits() {
    return CONFIG.MODES[CONFIG.mode];
  }

  function progressiveDelayBase() {
    const factor = Math.floor(stats.unfollowed / 100) * CONFIG.PROGRESSIVE_STEP_PER_100;
    const base = currentLimits().delay;
    return [base[0]+factor, base[1]+factor];
  }

  // ===========================
  // GUI
  // ===========================
  let GUI = null;
  function buildGUI() {
    if (!CONFIG.SHOW_GUI) return;

    const themeDark = (() => {
      if (CONFIG.THEME === 'DARK') return true;
      if (CONFIG.THEME === 'LIGHT') return false;
      // AUTO: detect background
      try {
        const bg = getComputedStyle(document.body).backgroundColor || '';
        // crude detect
        return !bg || bg.includes('rgb(0, 0, 0)') || bg.includes('rgba(0, 0, 0') || document.documentElement.classList.contains('dark');
      } catch { return true; }
    })();

    const wrap = document.createElement('div');
    wrap.id = 'ig-unfollow-gui';
    wrap.innerHTML = `
      <div class="iguf-window">
        <div class="iguf-header">
          <div class="iguf-title">
            <span class="iguf-logo">📱</span>
            <span>${L.ui.title} · v${VERSION}</span>
          </div>
          <div class="iguf-actions">
            <button class="iguf-min">−</button>
            <button class="iguf-close">×</button>
          </div>
        </div>
        <div class="iguf-body">
          <div class="iguf-status" id="iguf-status">${L.ui.notFollowingList}</div>

          <div class="iguf-controls">
            <div class="iguf-select">
              <label>${L.ui.mode}</label>
              <select id="iguf-mode">
                <option value="SAFE">🛡️ ${L.ui.safe} (30/h)</option>
                <option value="NORMAL" selected>⚖️ ${L.ui.normal} (50/h)</option>
                <option value="FAST">🚀 ${L.ui.fast} (70/h)</option>
              </select>
            </div>
            <div class="iguf-buttons">
              <button id="iguf-start" class="primary">${L.ui.start}</button>
              <button id="iguf-pause" disabled>${L.ui.pause}</button>
              <button id="iguf-stop" disabled>${L.ui.stop}</button>
            </div>
          </div>

          <div class="iguf-panel">
            <div class="iguf-panel-title">📊 ${L.ui.stats}</div>
            <div class="iguf-stats">
              <div class="iguf-stat">
                <div class="label">${L.ui.unfollowed}</div>
                <div class="value" id="iguf-unf">0</div>
              </div>
              <div class="iguf-stat">
                <div class="label">${L.ui.hourly}</div>
                <div class="value" id="iguf-hour">0/${currentLimits().hourly}</div>
              </div>
              <div class="iguf-stat">
                <div class="label">${L.ui.rate}</div>
                <div class="value" id="iguf-rate">0/h</div>
              </div>
              <div class="iguf-stat">
                <div class="label">${L.ui.time}</div>
                <div class="value" id="iguf-time">0m</div>
              </div>
            </div>
            <div class="iguf-progress">
              <div class="bar"><div class="fill" id="iguf-bar" style="width:0%"></div></div>
              <div class="pct" id="iguf-pct">0%</div>
            </div>
          </div>

          <div class="iguf-support">
            <div>${L.ui.supportBox}</div>
            <a href="https://www.instagram.com/psteczka" target="_blank">${L.ui.supportIG}</a>
            <a href="https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool" target="_blank">${L.ui.supportGH}</a>
          </div>
        </div>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      #ig-unfollow-gui { position:fixed; top:20px; right:20px; z-index:999999; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; }
      #ig-unfollow-gui * { box-sizing: border-box; }
      .iguf-window{
        width: 360px;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 16px 40px rgba(0,0,0,.35);
        background:${themeDark ? '#121212' : '#ffffff'};
        color:${themeDark ? '#fff' : '#222'};
        border: 1px solid ${themeDark ? '#2b2b2b' : '#eaeaea'};
      }
      .iguf-header{
        background: linear-gradient(135deg,#E1306C,#FD1D1D,#FCAF45);
        padding: 12px 14px;
        color:#fff;
        display:flex;align-items:center;justify-content:space-between;
      }
      .iguf-title{ display:flex; align-items:center; gap:8px; font-weight:700; }
      .iguf-actions button{
        background: rgba(255,255,255,.2); color:#fff;border:0; border-radius:6px; padding:2px 8px; cursor:pointer; margin-left:6px;
      }
      .iguf-body{ padding:14px; }
      .iguf-status{
        padding:10px 12px; border-radius:10px; background:${themeDark?'#1d1d1d':'#fafafa'}; border:1px solid ${themeDark?'#2b2b2b':'#eaeaea'};
        font-size:13px; margin-bottom:12px;
      }
      .iguf-controls{ display:flex; gap:10px; align-items:flex-end; margin-bottom:12px; }
      .iguf-select{ flex:1; }
      .iguf-select label{ display:block; font-size:12px; opacity:.7; margin-bottom:6px; }
      .iguf-select select{
        width:100%; padding:8px 10px; border-radius:8px; border:1px solid ${themeDark?'#2b2b2b':'#e0e0e0'};
        background:${themeDark?'#1a1a1a':'#fff'}; color:inherit;
      }
      .iguf-buttons button{
        padding:9px 12px; border-radius:8px; border:1px solid ${themeDark?'#2b2b2b':'#e0e0e0'}; background:${themeDark?'#1a1a1a':'#fff'};
        color:inherit; cursor:pointer; font-weight:700; margin-left:6px; min-width:70px;
      }
      .iguf-buttons button.primary{
        background: linear-gradient(135deg,#E1306C,#FD1D1D); color:#fff; border:0;
      }
      .iguf-buttons button:disabled{ opacity:.5; cursor:not-allowed; }
      .iguf-panel{ border:1px solid ${themeDark?'#2b2b2b':'#eaeaea'}; border-radius:12px; overflow:hidden; }
      .iguf-panel-title{ padding:10px 12px; font-weight:700; background:${themeDark?'#1a1a1a':'#fafafa'}; border-bottom:1px solid ${themeDark?'#2b2b2b':'#eaeaea'}; }
      .iguf-stats{ display:grid; grid-template-columns: repeat(2,1fr); gap:8px; padding:12px; }
      .iguf-stat{ background:${themeDark?'#161616':'#fff'}; border:1px solid ${themeDark?'#2b2b2b':'#eaeaea'}; border-radius:10px; padding:10px; }
      .iguf-stat .label{ font-size:12px; opacity:.7; margin-bottom:4px; }
      .iguf-stat .value{ font-size:16px; font-weight:800; }
      .iguf-progress{ display:flex; align-items:center; gap:8px; padding:0 12px 12px; }
      .iguf-progress .bar{ flex:1; height:10px; border-radius:10px; background:${themeDark?'#1a1a1a':'#f1f1f1'}; overflow:hidden; }
      .iguf-progress .fill{ height:100%; width:0%; background: linear-gradient(135deg,#E1306C,#FD1D1D,#FCAF45); transition:width .3s; }
      .iguf-progress .pct{ width:40px; text-align:right; font-weight:700; font-size:12px; }
      .iguf-support{
        margin-top:12px; font-size:12px; opacity:.9; text-align:center; border-top:1px solid ${themeDark?'#2b2b2b':'#eaeaea'}; padding-top:10px;
      }
      .iguf-support a{ display:block; color:${themeDark?'#ffd1dc':'#E1306C'}; text-decoration:none; margin-top:4px; font-weight:700;}
      .iguf-min, .iguf-close{ font-weight:900; }
      .iguf-min:hover, .iguf-close:hover{ transform: translateY(-1px); }
    `;
    document.head.appendChild(style);
    document.body.appendChild(wrap);

    // Dragging
    (function makeDraggable(){
      const win = wrap.querySelector('.iguf-window');
      const header = wrap.querySelector('.iguf-header');
      let sx, sy, ox, oy, dragging=false;
      header.addEventListener('mousedown', (e)=>{
        if (e.target.closest('.iguf-actions')) return;
        dragging=true; sx=e.clientX; sy=e.clientY;
        const rect = win.getBoundingClientRect(); ox=rect.left; oy=rect.top;
        document.addEventListener('mousemove', move); document.addEventListener('mouseup', up);
      });
      function move(e){ if(!dragging) return; const dx=e.clientX-sx, dy=e.clientY-sy; win.style.position='fixed'; win.style.left=(ox+dx)+'px'; win.style.top=(oy+dy)+'px'; win.style.right='auto'; }
      function up(){ dragging=false; document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); }
    })();

    // Actions
    wrap.querySelector('.iguf-min').onclick = () => {
      const body = wrap.querySelector('.iguf-body');
      body.style.display = (body.style.display==='none')?'block':'none';
    };
    wrap.querySelector('.iguf-close').onclick = () => wrap.remove();

    // Controls
    const status = wrap.querySelector('#iguf-status');
    const modeSel = wrap.querySelector('#iguf-mode');
    const startBtn = wrap.querySelector('#iguf-start');
    const pauseBtn = wrap.querySelector('#iguf-pause');
    const stopBtn  = wrap.querySelector('#iguf-stop');

    modeSel.value = CONFIG.mode;
    modeSel.onchange = () => {
      CONFIG.mode = modeSel.value;
      updateStatsGUI();
    };

    startBtn.onclick = async () => {
      if (!isOnFollowingList()) {
        alert(L.messages.needFollowing);
        return;
      }
      status.textContent = '✅ ' + L.ui.ready;
      startBtn.disabled = true; pauseBtn.disabled = false; stopBtn.disabled = false;
      stats.running = true; stats.paused = false; stats.start = Date.now(); stats.lastHourReset = Date.now();
      await mainLoop();
    };
    pauseBtn.onclick = () => {
      stats.paused = !stats.paused;
      pauseBtn.textContent = stats.paused ? L.ui.resume : L.ui.pause;
    };
    stopBtn.onclick = () => {
      stats.running = false; stats.paused = false;
      startBtn.disabled = false; pauseBtn.disabled = true; stopBtn.disabled = true;
    };

    GUI = { wrap, status, startBtn, pauseBtn, stopBtn, modeSel };
    updateStatusByLocation();
    updateStatsGUI();
  }

  function isOnFollowingList() {
    if (location.pathname.includes('/following')) return true;
    // heuristic: multiple "Following" buttons present
    const btns = Array.from(document.querySelectorAll('button')).map(b=>norm(b.innerText||b.textContent));
    const count = btns.filter(t=>L.texts.following.some(x=>t===norm(x))).length;
    return count >= 3;
  }

  function updateStatusByLocation() {
    if (!GUI) return;
    GUI.status.textContent = isOnFollowingList() ? ('✅ ' + L.ui.ready) : L.ui.notFollowingList;
  }

  function updateStatsGUI() {
    if (!GUI) return;
    const limits = currentLimits();
    const unfEl = GUI.wrap.querySelector('#iguf-unf');
    const hourEl= GUI.wrap.querySelector('#iguf-hour');
    const rateEl= GUI.wrap.querySelector('#iguf-rate');
    const timeEl= GUI.wrap.querySelector('#iguf-time');
    const bar   = GUI.wrap.querySelector('#iguf-bar');
    const pct   = GUI.wrap.querySelector('#iguf-pct');

    const minutes = Math.max(0, Math.round((Date.now()-stats.start)/60000));
    const rate = minutes>0 ? (stats.unfollowed/(minutes/60)).toFixed(1) : '0';
    const dayPct = Math.min(100, Math.round( (stats.unfollowed / limits.daily) * 100 ));

    if (unfEl) unfEl.textContent = String(stats.unfollowed);
    if (hourEl) hourEl.textContent = `${stats.hourly}/${limits.hourly}`;
    if (rateEl) rateEl.textContent = `${rate}/h`;
    if (timeEl) timeEl.textContent = `${minutes}m`;
    if (bar) bar.style.width = `${dayPct}%`;
    if (pct) pct.textContent = `${dayPct}%`;
  }

  // ===========================
  // MAIN LOOP
  // ===========================
  async function mainLoop() {
    console.log(`${L.messages.welcome} · Mode: ${CONFIG.mode} · ${now()}`);
    console.log('💝 100% FREE · IG: @psteczka · GH: legolasek/Instagram-Bulk-Unfollow-Tool');

    while (stats.running) {
      try {
        if (stats.paused) { await delay(600); continue; }

        const limits = currentLimits();

        // Hourly reset
        if (Date.now()-stats.lastHourReset > 3600000) {
          stats.hourly = 0;
          stats.lastHourReset = Date.now();
          if (CONFIG.DEBUG) console.log('⏰ Hour reset', now());
        }

        // Check limits
        if (stats.hourly >= limits.hourly) {
          const wait = 3600000 - (Date.now()-stats.lastHourReset);
          const mins = Math.ceil(wait/60000);
          console.log(`${L.messages.hourlyLimitWait} ${mins} min…`);
          for (let m=mins; m>0 && stats.running; m-=5) {
            await delay(Math.min(5,m)*60000);
          }
          stats.hourly = 0;
          stats.lastHourReset = Date.now();
          continue;
        }
        if (stats.unfollowed >= limits.daily) {
          console.log(`✅ ${L.messages.finished}. ${L.messages.progress}: ${stats.unfollowed}/${limits.daily}`);
          break;
        }

        // Behavior
        await human.scroll();
        await human.misclick();

        // Find next "Following"
        let found = findNextFollowing();
        if (!found) {
          if (CONFIG.DEBUG) console.log(L.messages.searchButtons);
          window.scrollBy(0, 340);
          stats.errors++;
          if (stats.errors > 10) {
            console.log('🔄 Too many misses, small refresh of viewport scroll');
            stats.errors = 0;
          }
          await delay(rand(900,1500));
          continue;
        }
        stats.errors = 0;

        const {btn: followingBtn, row} = found;

        // Avoid clicking "Follow" (safety)
        if (textIncludesAny(followingBtn, L.texts.followState)) {
          processedRows.add(row); row.dataset.processed='1';
          continue;
        }

        const username = extractUsername(row) || 'Account_'+(stats.unfollowed+1);

        // Scroll into view and click
        followingBtn.scrollIntoView({ behavior:'smooth', block:'center' });
        await delay(rand(350,700));
        await human.hesitate();
        followingBtn.click();

        // Confirm dialog (exact matching preferred)
        const confirmBtn = await waitFor(()=>findConfirmBtn(), 4000, 80);
        if (!confirmBtn) {
          // No dialog found: mark and move on
          processedRows.add(row); row.dataset.processed='1';
          window.scrollBy(0, (row.getBoundingClientRect().height||120)+20);
          await delay(rand(300,700));
          continue;
        }

        await delay(rand(220,480));
        confirmBtn.click();

        // Wait row state becomes "Follow"
        const ok = await waitRowBecameUnfollowed(row, 6000);
        if (!ok && CONFIG.DEBUG) console.log('⚠️ State did not switch to Follow for', username);

        // Mark processed
        processedRows.add(row); row.dataset.processed='1';
        processedUsers.add(username);

        stats.unfollowed++;
        stats.hourly++;

        const minutes = Math.max(1, Math.round((Date.now()-stats.start)/60000));
        const rate = (stats.unfollowed/(minutes/60)).toFixed(1);
        console.log(`✅ [${now()}] ${username} | #${stats.unfollowed} | Hour: ${stats.hourly}/${limits.hourly} | Rate: ${rate}/h`);
        updateStatsGUI();

        // Scroll one row down
        const h = row.getBoundingClientRect().height || 120;
        window.scrollBy({ top: h+22, behavior:'smooth' });
        await delay(rand(260,620));

        // Progressive delay
        const [minD,maxD] = progressiveDelayBase();
        await delay(rand(minD,maxD));

        // Breaks
        if (stats.unfollowed>0 && stats.unfollowed % CONFIG.MINI_BREAK_EVERY === 0) {
          const t = rand(...CONFIG.MINI_BREAK_TIME);
          console.log(`${L.messages.shortBreak} ${Math.round(t/1000)}s`);
          await delay(t);
        }
        if (stats.unfollowed>0 && stats.unfollowed % CONFIG.LONG_BREAK_EVERY === 0) {
          const t = rand(...CONFIG.LONG_BREAK_TIME);
          console.log(`${L.messages.longBreak} ${Math.round(t/60000)}m · ${L.messages.progress}: ${stats.unfollowed}/${limits.daily}`);
          await delay(t);
        }

      } catch (e) {
        console.error('❌ Error:', e);
        stats.errors++;
        await delay(rand(1200,2200));
      }
    }

    // Finish
    const totalMinutes = Math.max(1, Math.round((Date.now()-stats.start)/60000));
    console.log(`\n${L.messages.finished}`);
    console.log(`✅ ${L.ui.unfollowed}: ${stats.unfollowed}`);
    console.log(`⏱️ ${L.ui.time}: ${Math.floor(totalMinutes/60)}h ${totalMinutes%60}m`);
    console.log(`📊 ${L.ui.rate}: ${(stats.unfollowed/(totalMinutes/60)).toFixed(1)}/h`);
    console.log('💝 This tool is 100% FREE. If it helped you:');
    console.log('   📸 Follow: https://www.instagram.com/psteczka');
    console.log('   ⭐ Star:  https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool');

    if (GUI) {
      GUI.startBtn.disabled = false;
      GUI.pauseBtn.disabled = true;
      GUI.stopBtn.disabled  = true;
    }
  }

  // ===========================
  // INIT
  // ===========================
  if (CONFIG.SHOW_GUI) buildGUI();
  else {
    // No GUI: run if already on following list
    if (!isOnFollowingList()) {
      alert(L.messages.needFollowing);
      return;
    }
    stats.running = true;
    await mainLoop();
  }

  // Expose for console tweaks
  window.igUnfollowTool = { VERSION, CONFIG, stats, LANG: L };
  // Keep status updated if user opens following later
  setInterval(updateStatusByLocation, 1500);
})();
