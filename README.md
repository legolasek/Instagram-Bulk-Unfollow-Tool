# Instagram Bulk Unfollow Tool 🚀

[![Version](https://img.shields.io/badge/version-1.2-blue.svg)](https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Free](https://img.shields.io/badge/price-100%25%20FREE-brightgreen.svg)](https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool)
[![Languages](https://img.shields.io/badge/languages-8-success.svg)](#languages)
[![GUI](https://img.shields.io/badge/GUI-Instagram%20styled-ff69b4.svg)](#features)

Professional, Instagram‑styled GUI tool to safely bulk unfollow, built for cleanup after account compromise or follow-spam.

This tool is 100% FREE. If it saves you time:
- 📸 Follow on Instagram: @psteczka → https://www.instagram.com/psteczka
- ⭐ Star this repo: https://github.com/legolasek/Instagram-Bulk-Unfollow-Tool

---

## What’s new in v1.2

- ✅ Loop‑safe unfollowing (no more unfollow/follow on the same account)
- ✅ Beautiful GUI styled like Instagram (dark/light auto)
- ✅ Multilingual UI (auto-detect): EN, ES, FR, DE, PT, PL, RU, IT
- ✅ Modes with smart limits: Safe / Normal / Fast
- ✅ Progressive delays, random behavior and breaks to reduce blocks
- ✅ No page reloads, no API, no installs — single-file paste in console

---

## Important

You must manually open your Following list before starting:
- Profile → “Following” → wait until the list loads
- Then run the script (see Quick Start below)

The tool does NOT navigate or reload pages (to keep the script alive).

---

## Quick Start (30 seconds)

Method A — Browser console (recommended):
1) Go to Instagram → your profile → click “Following”
2) Open DevTools Console:
   - Windows/Linux: F12 or Ctrl+Shift+I
   - macOS: Cmd+Option+I
3) Copy & paste the entire script from instagram-unfollow-tool.js
4) Press Enter, choose mode, click Start

Method B — Bookmarklet (one‑click):
- Create a bookmark with this URL:
```
javascript:(function(){fetch('https://raw.githubusercontent.com/legolasek/Instagram-Bulk-Unfollow-Tool/main/instagram-unfollow-tool.js').then(r=>r.text()).then(eval)})();
```
- Open Instagram → your profile → “Following” → click the bookmark

Mobile: Use Chrome/Firefox in Desktop Mode. Console support varies between devices.

---

## Features

- 🎛️ Instagram‑styled GUI (Start/Pause/Stop, live stats, progress bar)
- 🌍 Multilingual UI (auto-detect: EN, ES, FR, DE, PT, PL, RU, IT)
- 🔄 Loop‑safe algorithm:
  - Click only “Following” state
  - Confirm Unfollow strictly in dialog
  - Wait for row to change to “Follow”
  - Mark row processed; scroll to next
- 🧠 Human-like behavior: random delays, hesitation/misclicks, natural scroll
- 🛡️ Smart rate limits per mode + progressive slowdown
- 📈 Live statistics: unfollowed, hourly, rate, elapsed time, daily progress
- 🧱 No API, no login sharing, no installs — runs entirely in your browser

---

## Modes & Limits

| Mode   | Hourly | Daily | Base delay (ms) |
|--------|--------|-------|-----------------|
| Safe   | 30/h   | 200   | 2800–5200       |
| Normal | 50/h   | 350   | 1800–3600       |
| Fast   | 70/h   | 450   | 1200–2400       |

Extras:
- Progressive slowdown: +400 ms every 100 unfollows
- Breaks: short every 10, long every 50 unfollows (randomized)

Tip: Start with Safe/Normal, then tune if your account tolerates more.

---

## How it works (high level)

1) Requires you to open the Following list manually  
2) Finds “Following” buttons (never clicks “Follow”)  
3) Clicks “Following”, waits for confirmation dialog, clicks “Unfollow”  
4) Waits until the same row changes to “Follow” state  
5) Marks row as processed and scrolls to the next one  
6) Applies pacing rules (delays, breaks, hourly/daily limits)

This prevents the classic “unfollow → follow again” loop.

---

## Safety & Best Practices

- Start small: test with 10–20 unfollows
- Prefer Safe/Normal mode if you’ve been blocked recently
- Mix with normal activity, avoid 24/7 automation
- Stop immediately if you see “Action Blocked”, wait 24–48h
- Use different times of day; take rest days
- Respect hourly/daily limits shown in the GUI

---

## Troubleshooting

- Script does nothing:
  - Make sure you’re on your profile’s “Following” view (list open)
  - Wait a few seconds until the list fully loads
  - Scroll a bit and press Start again
- It keeps “Searching for accounts…”:
  - Switch language in Instagram settings or set CONFIG.LANGUAGE inside the script
  - Make sure you’re not on a different page (e.g., “Followers”)
- Action blocked:
  - Switch to Safe, take longer breaks, try the next day
- Mobile issues:
  - Use Desktop Mode; some mobile browsers hide console features

If something still doesn’t work, open an Issue with details (IG language, browser/OS, console logs).

---

## Security & Privacy

- No passwords, no external servers, nothing installed
- Executes only in your browser, against the visible page (DOM)
- Open source, auditable, and 100% FREE

---

## FAQ

- Will I get banned?  
  No one can guarantee it. We minimize risk with limits, delays and human-like behavior. Always respect limits and stop if Instagram warns you.

- Can it run in the background or after page reload?  
  No. Console scripts die on navigation/reload by design. Keep the page open.

- Does it auto-navigate to Following?  
  No — to keep the script alive. Please open “Following” manually.

- Can I customize behavior?  
  Yes. Inside the script you can adjust mode, delays, randomization and breaks.

---

## Languages

This README is primarily in English. Quick‑start in multiple languages:

- English  
  Open your “Following” list → F12 → paste script → Enter → Start.  
  100% FREE. If it helps: follow @psteczka and star the repo.

- Español  
  Abre tu lista de “Siguiendo” → F12 → pega el script → Enter → Iniciar.  
  100% GRATIS. Si te ayuda: sigue a @psteczka y da estrella al repo.

- Français  
  Ouvrez “Abonnements” → F12 → collez le script → Entrée → Démarrer.  
  100% GRATUIT. Si cela aide : suivez @psteczka et mettez une étoile.

- Deutsch  
  “Abonniert”-Liste öffnen → F12 → Skript einfügen → Enter → Starten.  
  100% KOSTENLOS. Wenn es hilft: folge @psteczka und gib einen Stern.

- Português  
  Abra “Seguindo” → F12 → cole o script → Enter → Iniciar.  
  100% GRÁTIS. Se ajudar: siga @psteczka e dê estrela no repositório.

- Polski  
  Otwórz “Obserwujesz” → F12 → wklej skrypt → Enter → Start.  
  100% DARMOWE. Jeśli pomaga: zaobserwuj @psteczka i daj gwiazdkę repo.

- Русский  
  Откройте “Подписки” → F12 → вставьте скрипт → Enter → Старт.  
  100% БЕСПЛАТНО. Если помогло: подпишитесь на @psteczka и поставьте звезду.

- Italiano  
  Apri “Seguiti” → F12 → incolla lo script → Invio → Inizia.  
  100% GRATIS. Se aiuta: segui @psteczka e lascia una stella al repo.

---

## Contributing

PRs welcome! Ideas:
- More languages
- Accessibility and UX improvements
- New safe strategies and heuristics

Please open an Issue/Discussion before large changes.

---

## License

MIT — free to use, modify and share. This tool is and will remain 100% FREE.

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=legolasek/Instagram-Bulk-Unfollow-Tool&type=Date)](https://star-history.com/#legolasek/Instagram-Bulk-Unfollow-Tool&Date)

---

Made with ❤️ for the Instagram community  
If this saved you hours, please:
- 📸 Follow @psteczka on Instagram
- ⭐ Give this repo a star so others can find it too
