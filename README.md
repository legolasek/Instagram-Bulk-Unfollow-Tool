---

# Instagram Bulk Unfollow Tool 🚀

[![Version](https://img.shields.io/badge/version-1.2-blue.svg)](https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Free](https://img.shields.io/badge/price-100%25%20FREE-brightgreen.svg)](https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool)
[![Languages](https://img.shields.io/badge/languages-8-success.svg)](#languages)
[![GUI](https://img.shields.io/badge/GUI-Instagram%20styled-ff69b4.svg)](#features)

Instagram‑styled GUI tool to safely bulk unfollow. Built for cleanup after account compromise or follow‑spam. Loop‑safe, multilingual, single‑file script you paste into the console.

This tool is 100% FREE. If it saves you time:
- 📸 Follow on Instagram: @psteczka → https://www.instagram.com/psteczka
- ⭐ Star this repo: https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool

---

## Languages | Idiomas | Langues | Sprachen | Idiomas | Języki | Языки | Lingue
- [English](#english)
- [Polski](#polski)
- [Español](#español)
- [Français](#français)
- [Deutsch](#deutsch)
- [Português](#português)
- [Русский](#русский)
- [Italiano](#italiano)

---

## English

### Overview
- Instagram‑styled GUI, works entirely in your browser (no API, no installs).
- Loop‑safe: never re‑follows the same account.
- Multilingual UI (auto‑detect): EN, ES, FR, DE, PT, PL, RU, IT.
- 100% FREE. Please consider a follow/star if it helps you.

### Quick Start
1) Open your profile → click “Following” → wait for the list to load.  
2) Press F12 (Console), paste the full script from instagram‑unfollow‑tool.js, press Enter.  
3) Choose a mode (Safe/Normal/Fast) → Start.

Tip: Console scripts die on page reload. Keep the tab open.

### Features
- 🎛️ GUI (Start/Pause/Stop), live stats, progress bar.
- 🔄 Loop‑safe algorithm: click “Following” → confirm in dialog → wait row becomes “Follow” → mark processed → scroll.
- 🧠 Human‑like pacing: randomized delays, hesitation/misclicks, gentle scroll.
- 🛡️ Smart limits per mode + progressive slowdown (+400 ms per 100 unfollows).
- 📈 Stats: unfollowed count, hourly usage, rate/h, elapsed time, daily progress.

### Modes & Limits
| Mode   | Hourly | Daily | Base delay (ms) |
|--------|--------|-------|-----------------|
| Safe   | 30/h   | 200   | 2800–5200       |
| Normal | 50/h   | 350   | 1800–3600       |
| Fast   | 70/h   | 450   | 1200–2400       |

Breaks: short every 10, long every 50 (randomized). Progressive slowdown prevents spikes.

### Safety Guidelines
- Start with 10–20 to test; prefer Safe/Normal if you had recent blocks.
- Mix with normal activity; avoid marathon sessions.
- Stop immediately if you see “Action Blocked” and wait 24–48h.

### Troubleshooting
- “Nothing happens”: Ensure you’re on the “Following” list, let it fully load.
- “Searching for accounts…” repeatedly: switch Instagram language or scroll a bit; then Start.
- Mobile: use Desktop Mode; console support varies by browser.
- Still stuck? Open an Issue with your browser/OS/IG language and console logs.

### FAQ
- Auto‑navigate? No, to keep the script alive (console scripts stop on navigation).  
- Can it run after reload? No. Keep the page open.  
- Will I get banned? No guarantees. The tool minimizes risk (limits/delays), but you’re responsible for usage.  

### Support & License
- 100% FREE. If it helps:  
  → 📸 Follow @psteczka · ⭐ Star the repo  
- License: MIT (free to use/modify/share)

---

## Polski

### Opis
- GUI w stylu Instagrama, działa w przeglądarce (bez API, bez instalacji).
- Bez pętli: nie odobserwuje/zaobserwowuje tego samego konta w kółko.
- Wielojęzyczny interfejs (auto‑wykrywanie).
- 100% DARMOWE – jeśli pomogło, rozważ obserwację i gwiazdkę.

### Szybki start
1) Profil → “Obserwujesz” → zaczekaj aż lista się załaduje.  
2) F12 (Konsola), wklej cały skrypt z instagram‑unfollow‑tool.js, Enter.  
3) Wybierz tryb (Safe/Normal/Fast) → Start.

Uwaga: przeładowanie strony kończy działanie skryptu – trzymaj kartę otwartą.

### Funkcje
- 🎛️ GUI (Start/Pauza/Stop), statystyki na żywo, pasek postępu.
- 🔄 Algorytm bez pętli: klik “Obserwowanie/Following” → potwierdzenie w oknie → czekanie aż wiersz zmieni się na “Obserwuj/Follow” → oznaczenie → przewinięcie.
- 🧠 Naturalne tempo: opóźnienia, wahanie, scroll.
- 🛡️ Limity per tryb + progresywne spowalnianie (+400 ms co 100 unfollow).
- 📈 Statystyki: licznik, godzinowy, tempo/h, czas, progres dzienny.

### Tryby i limity
| Tryb   | Godzinowo | Dziennie | Bazowy delay (ms) |
|--------|-----------|----------|-------------------|
| Safe   | 30/h      | 200      | 2800–5200         |
| Normal | 50/h      | 350      | 1800–3600         |
| Fast   | 70/h      | 450      | 1200–2400         |

Przerwy: krótka co 10, długa co 50 (losowe). Progresywne spowalnianie zmniejsza ryzyko blokad.

### Bezpieczeństwo
- Zacznij od 10–20 testowo; jeśli były blokady – tryb Safe/Normal.
- Mieszaj z normalną aktywnością; unikaj maratonów.
- “Action Blocked” → natychmiast przerwij, odczekaj 24–48h.

### Rozwiązywanie problemów
- “Nic się nie dzieje”: upewnij się, że masz otwartą listę “Obserwujesz”.
- “Szukam kont…” w kółko: zmień język Instagrama albo przewiń i naciśnij Start.
- Mobile: tryb Desktop; konsola zależy od przeglądarki.
- Dalej nie działa? Zgłoś Issue z informacją o przeglądarce/OS/języku IG i logami z konsoli.

### FAQ
- Auto‑nawigacja? Nie – skrypt by przestał działać po przejściu strony.  
- Po odświeżeniu działa dalej? Nie. Trzymaj stronę otwartą.  
- Ban? Nie da się zagwarantować. Skrypt minimalizuje ryzyko, ale używasz na własną odpowiedzialność.  

### Wsparcie i licencja
- 100% DARMOWE. Jeśli pomogło:  
  → 📸 Obserwuj @psteczka · ⭐ Daj gwiazdkę repo  
- Licencja: MIT

---

## Español

### Descripción
GUI al estilo Instagram, funciona en el navegador (sin API/instalaciones), a prueba de bucles y multilingüe. 100% GRATIS.

### Inicio rápido
1) Perfil → “Siguiendo” → espera a que cargue.  
2) F12 (Consola), pega el script completo, Enter.  
3) Elige modo → Iniciar.

### Funciones
- GUI con estadísticas en vivo, barra de progreso
- Algoritmo sin bucles
- Comportamiento humano
- Límites inteligentes por modo + desaceleración progresiva
- Estadísticas: dejados de seguir, por hora, velocidad, tiempo, progreso diario

### Modos y límites
| Modo   | Por hora | Diario | Delay base (ms) |
|--------|----------|--------|-----------------|
| Safe   | 30/h     | 200    | 2800–5200       |
| Normal | 50/h     | 350    | 1800–3600       |
| Fast   | 70/h     | 450    | 1200–2400       |

Seguridad: empieza con 10–20; si hay bloqueos, usa Safe/Normal. Detente si ves “Action Blocked”.

Soporte: 100% GRATIS → 📸 @psteczka · ⭐ Estrella el repo.  
Licencia: MIT

---

## Français

### Présentation
Interface type Instagram, 100% navigateur (sans API/installation), anti‑boucle, multilingue. 100% GRATUIT.

### Démarrage rapide
1) Profil → “Abonnements” → attendre le chargement.  
2) F12 (Console), collez le script, Entrée.  
3) Choisissez un mode → Démarrer.

### Fonctionnalités
- GUI avec stats en direct et barre de progression
- Algorithme anti‑boucle
- Comportement humain
- Limites intelligentes + ralentissement progressif
- Stats: désabonnés, par heure, vitesse, temps, progression

### Modes & limites
| Mode   | Par heure | Jour | Délai de base (ms) |
|--------|-----------|------|--------------------|
| Safe   | 30/h      | 200  | 2800–5200          |
| Normal | 50/h      | 350  | 1800–3600          |
| Fast   | 70/h      | 450  | 1200–2400          |

Sécurité: commencez petit; stop si “Action Blocked”.  
Support: 100% GRATUIT → 📸 @psteczka · ⭐ Repo GitHub.  
Licence: MIT

---

## Deutsch

### Übersicht
Instagram‑ähnliches GUI, im Browser (ohne API/Install), loop‑sicher, mehrsprachig. 100% KOSTENLOS.

### Schnellstart
1) Profil → „Abonniert“ → warten bis geladen.  
2) F12 (Konsole), Script einfügen, Enter.  
3) Modus wählen → Starten.

### Funktionen
- GUI mit Live‑Statistiken, Fortschrittsbalken
- Loop‑sicherer Algorithmus
- Menschliches Verhalten
- Intelligente Limits + progressive Verlangsamung
- Stats: entfolgt, stündlich, Rate, Zeit, Tagesfortschritt

### Modi & Limits
| Modus  | Stündlich | Täglich | Basis‑Delay (ms) |
|--------|-----------|---------|------------------|
| Safe   | 30/h      | 200     | 2800–5200        |
| Normal | 50/h      | 350     | 1800–3600        |
| Fast   | 70/h      | 450     | 1200–2400        |

Sicherheit: klein anfangen; bei “Action Blocked” stoppen.  
Support: 100% KOSTENLOS → 📸 @psteczka · ⭐ Stern.  
Lizenz: MIT

---

## Português

### Visão geral
GUI estilo Instagram, no navegador (sem API/instalação), sem loops, multilíngue. 100% GRÁTIS.

### Início rápido
1) Perfil → “Seguindo” → aguarde carregar.  
2) F12 (Console), cole o script, Enter.  
3) Escolha o modo → Iniciar.

### Recursos
- GUI com estatísticas ao vivo, barra de progresso
- Algoritmo anti‑loop
- Comportamento humano
- Limites por modo + desaceleração progressiva
- Stats: deixados, por hora, taxa, tempo, progresso diário

### Modos & Limites
| Modo   | Por hora | Diário | Delay base (ms) |
|--------|----------|--------|-----------------|
| Safe   | 30/h     | 200    | 2800–5200       |
| Normal | 50/h     | 350    | 1800–3600       |
| Fast   | 70/h     | 450    | 1200–2400       |

Segurança: comece com pouco; pare se “Action Blocked”.  
Suporte: 100% GRÁTIS → 📸 @psteczka · ⭐ Estrela.  
Licença: MIT

---

## Русский

### Обзор
GUI в стиле Instagram, работает в браузере (без API/установки), без зацикливания, многоязычно. 100% БЕСПЛАТНО.

### Быстрый старт
1) Профиль → «Подписки» → дождитесь загрузки.  
2) F12 (Консоль), вставьте скрипт, Enter.  
3) Выберите режим → Старт.

### Возможности
- GUI с лайв‑статистикой, прогресс‑бар
- Алгоритм без повторной подписки
- Человеческое поведение
- Умные лимиты + прогрессивное замедление
- Статы: отписки, в час, скорость, время, дневной прогресс

### Режимы и лимиты
| Режим  | В час | В день | Базовая задержка (мс) |
|--------|------:|-------:|------------------------|
| Safe   | 30/ч  | 200    | 2800–5200              |
| Normal | 50/ч  | 350    | 1800–3600              |
| Fast   | 70/ч  | 450    | 1200–2400              |

Безопасность: начните с малого; при “Action Blocked” — остановка 24–48 ч.  
Поддержка: 100% БЕСПЛАТНО → 📸 @psteczka · ⭐ Звезда.  
Лицензия: MIT

---

## Italiano

### Panoramica
GUI in stile Instagram, nel browser (senza API/installazioni), sicuro contro i loop, multilingua. 100% GRATUITO.

### Avvio rapido
1) Profilo → “Seguiti” → attendi il caricamento.  
2) F12 (Console), incolla lo script, Invio.  
3) Scegli modalità → Inizia.

### Funzioni
- GUI con statistiche live, barra progresso
- Algoritmo senza loop
- Comportamento umano
- Limiti per modalità + rallentamento progressivo
- Stat: non segui più, orario, velocità, tempo, progresso giornaliero

### Modalità & Limiti
| Modalità | Orario | Giorno | Delay base (ms) |
|----------|--------|--------|-----------------|
| Safe     | 30/h   | 200    | 2800–5200       |
| Normal   | 50/h   | 350    | 1800–3600       |
| Fast     | 70/h   | 450    | 1200–2400       |

Sicurezza: inizia con poco; stop se “Action Blocked”.  
Supporto: 100% GRATUITO → 📸 @psteczka · ⭐ Stella.  
Licenza: MIT

---

## Contributing
PRs welcome (new languages, UX/accessibility, safety heuristics). Open an Issue/Discussion before large changes.

## License
MIT — this tool is and will remain 100% FREE.

## Star History
[![Star History Chart](https://api.star-history.com/svg?repos=legolasek/Instagram-Bulk-Unfollow-Tool&type=Date)](https://star-history.com/#legolasek/Instagram-Bulk-Unfollow-Tool&Date)

---

Made with ❤️ for the Instagram community  
If this saved you hours, please:
- 📸 Follow @psteczka
- ⭐ Star this repository so others can find it too
