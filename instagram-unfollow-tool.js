/**
 * Instagram Bulk Unfollow Tool v0.1.2
 * Repository: https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool
 * Created by: @psteczka (https://www.instagram.com/psteczka)
 * License: MIT
 */

(async function() {
  'use strict';

  // Show support message
  console.log(`
  🚀 Instagram Bulk Unfollow Tool v0.1.2
  ═══════════════════════════════════════
  
  👨‍💻 Created by: @psteczka
  📸 Instagram: https://www.instagram.com/psteczka
  ⭐ GitHub: https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool
  
  💝 If this tool helps you, please consider:
  🔸 Following me on Instagram: @psteczka
  🔸 Giving this repo a ⭐ star on GitHub
  
  ═══════════════════════════════════════
  `);

  // ===========================
  // KONFIGURACJA
  // ===========================
  
  const CONFIG = {
    TOTAL_LIMIT: 3000,           // Całkowity limit
    FIRST_HOUR_LIMIT: 60,        // Pierwsza godzina (świeży start)
    NORMAL_HOUR_LIMIT: 40,       // Kolejne godziny
    DAILY_LIMIT: 400,            // Dzienny limit
    
    // Opóźnienia (w ms)
    MIN_DELAY: 1500,             // Minimalne opóźnienie
    MAX_DELAY: 4000,             // Maksymalne opóźnienie
    MINI_BREAK_EVERY: 10,        // Co ile krótka przerwa
    LONG_BREAK_EVERY: 50,        // Co ile długa przerwa
    MINI_BREAK_TIME: [15000, 30000],   // 15-30 sekund
    LONG_BREAK_TIME: [60000, 120000],  // 1-2 minuty
    
    // Nowe opcje
    SHOW_GUI: true,              // Pokaż GUI
    DRY_RUN: false,              // Tryb testowy
  };
  
  // ===========================
  // FUNKCJE
  // ===========================
  
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const getTime = () => new Date().toLocaleTimeString();
  
  // STATYSTYKI
  let stats = {
    unfollowed: 0,
    hourlyCount: 0,
    sessionStart: Date.now(),
    lastHourReset: Date.now(),
    errors: 0,
    currentHourLimit: CONFIG.FIRST_HOUR_LIMIT,
    isRunning: false,
    isPaused: false
  };
  
  // FUNKCJA ZNAJDOWANIA PRZYCISKÓW
  const findButton = (texts) => {
    const buttons = document.querySelectorAll("button");
    for(let btn of buttons) {
      if(btn.textContent) {
        const btnText = btn.textContent.toLowerCase();
        for(let text of texts) {
          if(btnText.includes(text.toLowerCase())) {
            return btn;
          }
        }
      }
    }
    return null;
  };
  
  // ZACHOWANIA
  const humanBehavior = {
    mouseMove: (element) => {
      ['mouseenter', 'mouseover', 'mousemove'].forEach(eventType => {
        element.dispatchEvent(new MouseEvent(eventType, {
          view: window,
          bubbles: true,
          cancelable: true
        }));
      });
    },
    
    randomScroll: async () => {
      if(Math.random() < 0.3) {
        const direction = Math.random() < 0.7 ? 1 : -1; // 70% szans przewijania w dół
        const amount = random(50, 200) * direction;
        window.scrollBy({
          top: amount,
          behavior: 'smooth'
        });
        await delay(random(300, 700));
      }
    },
    
    hesitate: async () => {
      if(Math.random() < 0.1) { // 10% szans na wahanie
        console.log("💭 Moment wahania...");
        await delay(random(1000, 2500));
      }
    },
    
    misclick: async () => {
      if(Math.random() < 0.02) { // 2% szans na "missclick"
        console.log("👆 Oops, missclick!");
        document.body.click();
        await delay(random(500, 1000));
      }
    }
  };
  
  // FUNKCJA PROGRESYWNEGO SPOWALNIANIA
  const getProgressiveDelay = () => {
    const factor = Math.floor(stats.unfollowed / 100); // Co 100 unfollow zwiększ delay
    const additionalDelay = factor * 500; // +0.5s co 100 unfollow
    return [
      CONFIG.MIN_DELAY + additionalDelay,
      CONFIG.MAX_DELAY + additionalDelay
    ];
  };

  // ===========================
  // GUI
  // ===========================
  
  function createGUI() {
    if (!CONFIG.SHOW_GUI) return;
    
    const gui = document.createElement('div');
    gui.id = 'unfollow-gui';
    gui.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        width: 300px;
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 12px;
        padding: 20px;
        z-index: 999999;
        font-family: Arial, sans-serif;
        color: white;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      ">
        <div style="text-align: center; margin-bottom: 15px;">
          <h3 style="margin: 0; color: #E1306C;">🚀 Unfollow Tool</h3>
          <div style="font-size: 12px; color: #888;">v0.1.2 by @psteczka</div>
        </div>
        
        <div style="margin-bottom: 15px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Odobserwowano:</span>
            <span id="gui-unfollowed" style="color: #4CAF50; font-weight: bold;">0</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Godzinowo:</span>
            <span id="gui-hourly" style="color: #FF9800; font-weight: bold;">0/60</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Tempo:</span>
            <span id="gui-rate" style="color: #2196F3; font-weight: bold;">0/h</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>Czas:</span>
            <span id="gui-time" style="color: #9C27B0; font-weight: bold;">0m</span>
          </div>
        </div>
        
        <div style="text-align: center; margin-bottom: 15px;">
          <button id="gui-start" style="
            background: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            margin-right: 5px;
            font-weight: bold;
          ">▶ Start</button>
          <button id="gui-pause" style="
            background: #FF9800;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            margin-right: 5px;
            font-weight: bold;
          " disabled>⏸ Pauza</button>
          <button id="gui-stop" style="
            background: #F44336;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
          " disabled>⏹ Stop</button>
        </div>
        
        <div style="font-size: 11px; color: #666; text-align: center;">
          <div>💝 If this helps you:</div>
          <div>📸 Follow @psteczka on Instagram</div>
          <div>⭐ Star on GitHub</div>
        </div>
        
        <button onclick="this.parentElement.parentElement.remove()" style="
          position: absolute;
          top: 5px;
          right: 5px;
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          font-size: 16px;
        ">×</button>
      </div>
    `;
    
    document.body.appendChild(gui);
    
    // Event listeners
    document.getElementById('gui-start').onclick = () => {
      if (!stats.isRunning) {
        startUnfollow();
      }
    };
    
    document.getElementById('gui-pause').onclick = () => {
      stats.isPaused = !stats.isPaused;
      const pauseBtn = document.getElementById('gui-pause');
      pauseBtn.textContent = stats.isPaused ? '▶ Wznów' : '⏸ Pauza';
      console.log(stats.isPaused ? '⏸️ Pauza' : '▶️ Wznowiono');
    };
    
    document.getElementById('gui-stop').onclick = () => {
      stats.isRunning = false;
      updateGUIButtons(false);
      console.log('⏹️ Zatrzymano przez użytkownika');
    };
  }
  
  function updateGUI() {
    if (!CONFIG.SHOW_GUI) return;
    
    const elapsed = Math.round((Date.now() - stats.sessionStart) / 60000);
    const rate = elapsed > 0 ? (stats.unfollowed / (elapsed / 60)).toFixed(1) : '0';
    
    const unfollowedEl = document.getElementById('gui-unfollowed');
    const hourlyEl = document.getElementById('gui-hourly');
    const rateEl = document.getElementById('gui-rate');
    const timeEl = document.getElementById('gui-time');
    
    if (unfollowedEl) unfollowedEl.textContent = stats.unfollowed;
    if (hourlyEl) hourlyEl.textContent = `${stats.hourlyCount}/${stats.currentHourLimit}`;
    if (rateEl) rateEl.textContent = `${rate}/h`;
    if (timeEl) timeEl.textContent = `${elapsed}m`;
  }
  
  function updateGUIButtons(running) {
    if (!CONFIG.SHOW_GUI) return;
    
    const startBtn = document.getElementById('gui-start');
    const pauseBtn = document.getElementById('gui-pause');
    const stopBtn = document.getElementById('gui-stop');
    
    if (startBtn) startBtn.disabled = running;
    if (pauseBtn) pauseBtn.disabled = !running;
    if (stopBtn) stopBtn.disabled = !running;
  }

  // ===========================
  // GŁÓWNA FUNKCJA
  // ===========================
  
  async function startUnfollow() {
    stats.isRunning = true;
    stats.isPaused = false;
    stats.sessionStart = Date.now();
    stats.lastHourReset = Date.now();
    
    updateGUIButtons(true);
    
    console.log(`🚀 Start @ ${getTime()}`);
    console.log(`📊 Plan: ${CONFIG.FIRST_HOUR_LIMIT} w 1. godz, potem ${CONFIG.NORMAL_HOUR_LIMIT}/godz`);
    console.log(`🎯 Cel: ${CONFIG.TOTAL_LIMIT} unfollow\n`);
    
    if (CONFIG.DRY_RUN) {
      console.log('🔍 TRYB TESTOWY - Bez rzeczywistego unfollowingu');
    }
    
    while (stats.unfollowed < CONFIG.TOTAL_LIMIT && stats.isRunning) {
      // Pauza
      if (stats.isPaused) {
        await delay(1000);
        continue;
      }
      
      try {
        // RESET LICZNIKA GODZINOWEGO
        if (Date.now() - stats.lastHourReset > 3600000) {
          stats.hourlyCount = 0;
          stats.lastHourReset = Date.now();
          stats.currentHourLimit = CONFIG.NORMAL_HOUR_LIMIT;
          console.log(`\n⏰ [${getTime()}] Nowa godzina - limit: ${stats.currentHourLimit}`);
        }
        
        // SPRAWDŹ LIMITY
        if (stats.hourlyCount >= stats.currentHourLimit) {
          const waitTime = 3600000 - (Date.now() - stats.lastHourReset);
          const minutes = Math.ceil(waitTime / 60000);
          console.log(`⏸️ Limit godzinowy osiągnięty. Czekam ${minutes} min...`);
          
          // Co 5 minut pokazuj countdown
          for(let i = minutes; i > 0; i -= 5) {
            if (!stats.isRunning) return;
            await delay(Math.min(5, i) * 60000);
            if(i > 5) console.log(`⏳ Pozostało ${i-5} minut...`);
          }
          
          stats.hourlyCount = 0;
          stats.lastHourReset = Date.now();
          continue;
        }
        
        if (stats.unfollowed >= CONFIG.DAILY_LIMIT) {
          console.log(`\n✅ Osiągnięto dzienny limit (${CONFIG.DAILY_LIMIT})!`);
          console.log("💡 Uruchom skrypt ponownie jutro");
          break;
        }
        
        // LOSOWE ZACHOWANIA
        await humanBehavior.randomScroll();
        await humanBehavior.misclick();
        
        // ZNAJDŹ PRZYCISK FOLLOWING - LISTA
        const followingBtn = findButton([
          "Following", 
          "Obserwowanie", 
          "Obserwujesz",
          "Follow"
        ]);
        
        if (!followingBtn) {
          console.log("🔍 Szukam przycisków...");
          window.scrollBy(0, 300);
          await delay(random(2000, 3000));
          stats.errors++;
          
          if(stats.errors > 10) {
            console.log("⚠️ Zbyt wiele błędów, odświeżam stronę za 30s...");
            await delay(30000);
            location.reload();
          }
          continue;
        }
        
        stats.errors = 0;
        
        // LOSOWE POMIJANIE (bardziej ludzkie)
        if (Math.random() < 0.05) { // 5% szans
          console.log("⏭️ Pomijam to konto");
          followingBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
          await delay(random(500, 1500));
          window.scrollBy(0, 150);
          continue;
        }
        
        // INTERAKCJA Z PRZYCISKIEM
        humanBehavior.mouseMove(followingBtn);
        await delay(random(200, 500));
        
        followingBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        await delay(random(500, 1000));
        
        await humanBehavior.hesitate();
        
        followingBtn.click();
        await delay(random(800, 1500));
        
        // ZNAJDŹ POTWIERDZENIE - LISTA
        const confirmBtn = findButton([
          "Unfollow",
          "Przestań obserwować",
          "Anuluj obserwowanie",
          "Usuń"
        ]);
        
        if (confirmBtn) {
          humanBehavior.mouseMove(confirmBtn);
          await delay(random(300, 700));
          
          await humanBehavior.hesitate();
          
          if (!CONFIG.DRY_RUN) {
            confirmBtn.click();
            stats.unfollowed++;
            stats.hourlyCount++;
            
            // WYŚWIETL STATUS
            const elapsed = Math.round((Date.now() - stats.sessionStart) / 60000);
            const rate = elapsed > 0 ? (stats.unfollowed / (elapsed / 60)).toFixed(1) : '0';
            console.log(`✅ [${getTime()}] #${stats.unfollowed} | Godz: ${stats.hourlyCount}/${stats.currentHourLimit} | Tempo: ${rate}/h`);
          } else {
            // DRY RUN
            stats.unfollowed++;
            stats.hourlyCount++;
            console.log(`🔍 [${getTime()}] TRYB TESTOWY: Odobserwowano by #${stats.unfollowed}`);
          }
          
          updateGUI();
        }
        
        // PROGRESYWNE OPÓŹNIENIE
        const [minD, maxD] = getProgressiveDelay();
        await delay(random(minD, maxD));
        
        // PRZERWY
        if (stats.unfollowed % CONFIG.MINI_BREAK_EVERY === 0 && stats.unfollowed > 0) {
          const breakTime = random(...CONFIG.MINI_BREAK_TIME);
          console.log(`☕ Krótka przerwa ${Math.round(breakTime/1000)}s`);
          await delay(breakTime);
          await humanBehavior.randomScroll();
        }
        
        if (stats.unfollowed % CONFIG.LONG_BREAK_EVERY === 0 && stats.unfollowed > 0) {
          const breakTime = random(...CONFIG.LONG_BREAK_TIME);
          console.log(`🍔 Długa przerwa ${Math.round(breakTime/60000)} min`);
          console.log(`📈 Postęp: ${stats.unfollowed}/${CONFIG.TOTAL_LIMIT} (${(stats.unfollowed/CONFIG.TOTAL_LIMIT*100).toFixed(1)}%)`);
          await delay(breakTime);
          
          // Czasem odśwież stronę podczas długiej przerwy
          if(Math.random() < 0.3) {
            console.log("🔄 Odświeżam stronę...");
            location.reload();
            await delay(10000);
          }
        }
        
      } catch (error) {
        console.error("❌ Błąd:", error);
        stats.errors++;
        await delay(random(3000, 5000));
      }
    }
    
    // PODSUMOWANIE
    stats.isRunning = false;
    updateGUIButtons(false);
    
    const totalMinutes = Math.round((Date.now() - stats.sessionStart) / 60000);
    console.log("\n🏁 === ZAKOŃCZONO ===");
    console.log(`✅ Odobserwowano: ${stats.unfollowed} kont`);
    console.log(`⏱️ Czas: ${Math.floor(totalMinutes/60)}h ${totalMinutes%60}min`);
    console.log(`📊 Średnie tempo: ${(stats.unfollowed/(totalMinutes/60)).toFixed(1)}/h`);
    
    // Show support message
    console.log(`
    💝 Dzięki za użycie Instagram Unfollow Tool v0.1.3!
    
    Jeśli pomogło Ci:
    📸 Zaobserwuj @psteczka: https://www.instagram.com/psteczka
    ⭐ Daj gwiazdkę: https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool
    `);
  }

  // ===========================
  // INICJALIZACJA
  // ===========================
  
  if (!window.location.hostname.includes('instagram.com')) {
    alert('⚠️ Ten skrypt działa tylko na Instagram.com');
    return;
  }
  
  // Check if on following list
  const isOnFollowing = window.location.pathname.includes('/following') || 
                       document.querySelectorAll('button').length > 10;
  
  if (!isOnFollowing) {
    alert('⚠️ Przejdź najpierw do listy obserwowanych!\n\n1. Kliknij swój profil\n2. Kliknij "Obserwujesz"\n3. Uruchom skrypt ponownie');
    return;
  }
  
  console.log('✅ Gotowe! Jesteś na liście obserwowanych.');
  
  // Create GUI
  createGUI();
  
  // Auto-start if GUI disabled
  if (!CONFIG.SHOW_GUI) {
    setTimeout(startUnfollow, 2000);
  }
  
  // Global access
  window.unfollowTool = { stats, CONFIG, startUnfollow };
  
})();
