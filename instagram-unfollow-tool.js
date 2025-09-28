(async function(){
  // KONFIGURACJA - MOŻESZ DOSTOSOWAĆ
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
  };
  
  // FUNKCJE POMOCNICZE
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
    currentHourLimit: CONFIG.FIRST_HOUR_LIMIT
  };
  
  // ZNAJDOWANIE PRZYCISKÓW
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
  
  // SYMULACJA LUDZKIEGO ZACHOWANIA
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
  
  // PROGRESYWNE SPOWALNIANIE
  const getProgressiveDelay = () => {
    const factor = Math.floor(stats.unfollowed / 100); // Co 100 unfollow zwiększ delay
    const additionalDelay = factor * 500; // +0.5s co 100 unfollow
    return [
      CONFIG.MIN_DELAY + additionalDelay,
      CONFIG.MAX_DELAY + additionalDelay
    ];
  };
  
  // GŁÓWNA FUNKCJA
  console.log(`🚀 Start @ ${getTime()}`);
  console.log(`📊 Plan: ${CONFIG.FIRST_HOUR_LIMIT} w 1. godz, potem ${CONFIG.NORMAL_HOUR_LIMIT}/godz`);
  console.log(`🎯 Cel: ${CONFIG.TOTAL_LIMIT} unfollow\n`);
  
  while (stats.unfollowed < CONFIG.TOTAL_LIMIT) {
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
      
      // ZNAJDŹ PRZYCISK FOLLOWING
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
      
      // ZNAJDŹ POTWIERDZENIE
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
        
        confirmBtn.click();
        stats.unfollowed++;
        stats.hourlyCount++;
        
        // WYŚWIETL STATUS
        const elapsed = Math.round((Date.now() - stats.sessionStart) / 60000);
        const rate = (stats.unfollowed / (elapsed / 60)).toFixed(1);
        console.log(`✅ [${getTime()}] #${stats.unfollowed} | Godz: ${stats.hourlyCount}/${stats.currentHourLimit} | Tempo: ${rate}/h`);
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
  const totalMinutes = Math.round((Date.now() - stats.sessionStart) / 60000);
  console.log("\n🏁 === ZAKOŃCZONO ===");
  console.log(`✅ Odobserwowano: ${stats.unfollowed} kont`);
  console.log(`⏱️ Czas: ${Math.floor(totalMinutes/60)}h ${totalMinutes%60}min`);
  console.log(`📊 Średnie tempo: ${(stats.unfollowed/(totalMinutes/60)).toFixed(1)}/h`);
})();
