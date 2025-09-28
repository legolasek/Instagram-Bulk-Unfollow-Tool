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
- 🎛️ GUI (Start/Pause/Stop) with live stats and a real-time progress bar.
- 💾 **Progress Saving**: Remembers who you've already unfollowed between sessions.
- 🛡️ **Action Block Detection**: Automatically stops the script if it detects that Instagram has blocked you.
- 📈 **Smarter Stats**: Reads your total "following" count to provide accurate progress (e.g., "50 / 750").
- 🔄 Loop‑safe algorithm: never re‑follows the same account.
- 🧠 Human‑like pacing (in Safe/Normal/Fast modes) to reduce risk.

### Modes & Limits
| Mode   | Hourly | Daily | Base delay (ms) | Notes |
|--------|--------|-------|-----------------|-------|
| Safe   | 30/h   | 200   | 2800–5200       | Human-like breaks and pacing. |
| Normal | 50/h   | 350   | 1800–3600       | Human-like breaks and pacing. |
| Fast   | 70/h   | 450   | 1200–2400       | Human-like breaks and pacing. |
| Rapid  | ∞      | ∞     | 250-500         | **High Risk.** No human-like breaks. Stops on block. |

Breaks in Safe/Normal/Fast modes: short every 10, long every 50 (randomized). Progressive slowdown prevents spikes.

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
- 🎛️ GUI (Start/Pauza/Stop) ze statystykami i paskiem postępu w czasie rzeczywistym.
- 💾 **Zapisywanie Postępów**: Pamięta, które konta już usunięto, nawet między sesjami.
- 🛡️ **Wykrywanie Blokad**: Automatycznie zatrzymuje skrypt, jeśli wykryje blokadę ze strony Instagrama.
- 📈 **Inteligentne Statystyki**: Odczytuje całkowitą liczbę obserwowanych, aby pokazać precyzyjny postęp (np. "50 / 750").
- 🔄 Algorytm bez pętli: nigdy nie odobserwuje i zaobserwuje tego samego konta.
- 🧠 Naturalne tempo (w trybach Safe/Normal/Fast) w celu zmniejszenia ryzyka.

### Tryby i limity
| Tryb   | Godzinowo | Dziennie | Bazowy delay (ms) | Uwagi |
|--------|-----------|----------|-------------------|-------|
| Safe   | 30/h      | 200      | 2800–5200         | Ludzkie przerwy i tempo. |
| Normal | 50/h      | 350      | 1800–3600         | Ludzkie przerwy i tempo. |
| Fast   | 70/h      | 450      | 1200–2400         | Ludzkie przerwy i tempo. |
| Rapid  | ∞         | ∞        | 250-500           | **Wysokie Ryzyko.** Brak przerw. Zatrzymuje się po blokadzie. |

Przerwy w trybach Safe/Normal/Fast: krótka co 10, długa co 50 (losowe). Progresywne spowalnianie zmniejsza ryzyko blokad.

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
- GUI con estadísticas en vivo y barra de progreso
- **Guardado de Progreso**: Recuerda a quién has dejado de seguir.
- **Detección de Bloqueo**: Se detiene si Instagram te bloquea.
- **Estadísticas Inteligentes**: Lee tu número total de "siguiendo".
- Modo **Rapid (Alto Riesgo)** para máxima velocidad.

### Modos y límites
| Modo   | Por hora | Diario | Delay base (ms) |
|--------|----------|--------|-----------------|
| Safe   | 30/h     | 200    | 2800–5200       |
| Normal | 50/h     | 350    | 1800–3600       |
| Fast   | 70/h     | 450    | 1200–2400       |
| Rapid  | ∞        | ∞      | 250-500         |

Seguridad: empieza con 10–20. Detente si ves “Action Blocked”.

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
- GUI avec stats en direct et barre de progression.
- **Sauvegarde de la Progression**: Mémorise les comptes déjà traités.
- **Détection de Blocage**: S'arrête automatiquement si Instagram vous bloque.
- **Statistiques Intelligentes**: Lit votre nombre total d'abonnements.
- Mode **Rapid (Risque Élevé)** pour une vitesse maximale.

### Modes & limites
| Mode   | Par heure | Jour | Délai de base (ms) |
|--------|-----------|------|--------------------|
| Safe   | 30/h      | 200  | 2800–5200          |
| Normal | 50/h      | 350  | 1800–3600          |
| Fast   | 70/h      | 450  | 1200–2400          |
| Rapid  | ∞         | ∞    | 250-500            |

Sécurité: commencez petit. Arrêtez si “Action Blocked”.
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
- GUI mit Live-Statistiken und Fortschrittsbalken.
- **Fortschrittsspeicherung**: Merkt sich, wem du bereits entfolgt bist.
- **Block-Erkennung**: Stoppt automatisch, wenn Instagram dich blockiert.
- **Intelligente Statistiken**: Liest deine Gesamtzahl der "Abonniert".
- **Rapid-Modus (Hohes Risiko)** für maximale Geschwindigkeit.

### Modi & Limits
| Modus  | Stündlich | Täglich | Basis‑Delay (ms) |
|--------|-----------|---------|------------------|
| Safe   | 30/h      | 200     | 2800–5200        |
| Normal | 50/h      | 350     | 1800–3600        |
| Fast   | 70/h      | 450     | 1200–2400        |
| Rapid  | ∞         | ∞       | 250-500          |

Sicherheit: klein anfangen. Bei “Action Blocked” stoppen.
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
- GUI com estatísticas e barra de progresso em tempo real.
- **Salvar Progresso**: Lembra de quem você já deixou de seguir.
- **Detecção de Bloqueio**: Para automaticamente se o Instagram te bloquear.
- **Estatísticas Inteligentes**: Lê o número total de "seguindo".
- Modo **Rapid (Alto Risco)** para velocidade máxima.

### Modos & Limites
| Modo   | Por hora | Diário | Delay base (ms) |
|--------|----------|--------|-----------------|
| Safe   | 30/h     | 200    | 2800–5200       |
| Normal | 50/h     | 350    | 1800–3600       |
| Fast   | 70/h     | 450    | 1200–2400       |
| Rapid  | ∞        | ∞      | 250-500         |

Segurança: comece com pouco. Pare se “Action Blocked”.
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
- GUI с лайв-статистикой и прогресс-баром.
- **Сохранение прогресса**: Запоминает, от кого вы уже отписались.
- **Обнаружение блокировки**: Автоматически останавливается, если Instagram вас блокирует.
- **Умная статистика**: Считывает общее количество ваших подписок.
- Режим **Rapid (Высокий риск)** для максимальной скорости.

### Режимы и лимиты
| Режим  | В час | В день | Базовая задержка (мс) |
|--------|------:|-------:|------------------------|
| Safe   | 30/ч  | 200    | 2800–5200              |
| Normal | 50/ч  | 350    | 1800–3600              |
| Fast   | 70/ч  | 450    | 1200–2400              |
| Rapid  | ∞     | ∞      | 250-500                |

Безопасность: начните с малого. При “Action Blocked” — остановитесь.
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
- GUI con statistiche e barra di avanzamento in tempo reale.
- **Salvataggio Progressi**: Ricorda chi hai già smesso di seguire.
- **Rilevamento Blocchi**: Si ferma automaticamente se Instagram ti blocca.
- **Statistiche Intelligenti**: Legge il tuo numero totale di "seguiti".
- Modalità **Rapid (Rischio Elevato)** per la massima velocità.

### Modalità & Limiti
| Modalità | Orario | Giorno | Delay base (ms) |
|----------|--------|--------|-----------------|
| Safe     | 30/h   | 200    | 2800–5200       |
| Normal   | 50/h   | 350    | 1800–3600       |
| Fast     | 70/h   | 450    | 1200–2400       |
| Rapid    | ∞      | ∞      | 250-500         |

Sicurezza: inizia con poco. Fermati se vedi “Action Blocked”.
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
