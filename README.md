# NULLTONE

Music brand site for Ethan Banker — DJ and producer, California.

**Live: https://nulltoneaudio.github.io/**

## What's here

```
index.html              hero, listen, about, booking
styles.css              Anton display type, spacing system, listen cards
gl.js                   Three.js shader hero — pointer-warped signal, no build step
script.js               header state, scroll reveal, footer year
assets/mark.svg         ring + waveform mark
assets/favicon.svg      simplified mark for the browser tab
assets/avatar.svg       avatar master (1000px canvas)
assets/avatar-1000.png  upload-ready avatar for Instagram / YouTube / SoundCloud
brand/brand-guide.md    name, positioning, voice, visuals, bios, 30-day plan
brand/bio-kit.md        paste-ready bios and avatar rules for every platform
instagram/              handle, bios, launch grid, captions, reels, posting schedule
strategy/launch-plan.md the 90-day path from no releases to paid bookings
```

No build step. Fonts come from Google Fonts, Three.js from a CDN; if either fails the page still renders and reads normally.

## Run it locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## The hero

`gl.js` renders a full-screen shader: flowing noise, concentric rings and a soft lime glow that bends toward the pointer. It pauses when the hero is off-screen or the tab is hidden, renders a single still frame under `prefers-reduced-motion`, and hides itself if WebGL or the CDN is unavailable.

Tuning lives in the fragment shader: `t = uTime * 0.11` sets speed, `r * 26.0` sets ring density, and the `lime`/`coral` vectors set the palette. Keep the result dim — the wordmark has to stay the brightest thing on screen.

## Before it goes public — replace these

1. **Hero copy** — the blurb says the first single is finishing; update it the day the track is out.
2. **Listen cards** — YouTube and Instagram point at the real accounts. Add a SoundCloud card once that profile exists (`.listen` is a 3-up grid).
3. **About** — two short paragraphs; the avatar doubles as the mark. Swap in a portrait only if it's better than the avatar at 120px.
4. **Metadata** — add `assets/og.png` (1200×630) and an `og:image` tag, and set `og:url` once a domain is live.
5. **Domain** — served from `nulltoneaudio.github.io`. `nulltoneaudio.com` belongs to someone else; `nulltone.audio` and `nulltone.fm` are unregistered.

Booking email: `nulltone@icloud.com`.

## Deploy

Single canonical repo: `github.com/nulltoneaudio/nulltoneaudio.github.io`, Pages serving `main` from the repo root.

```bash
git add -A && git commit -m "copy tweak" && git push brand main
```

Pages rebuilds in about a minute. There is no build step — what's in the repo is what ships.

### Custom domain

Once you own a domain, add a file named `CNAME` at the repo root containing only the domain, then point DNS at GitHub:

- `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www`: `nulltoneaudio.github.io`

Set the domain under Settings → Pages and tick **Enforce HTTPS**. Then update `og:url`, the listen links and every bio that carries the URL.

## House rules for the brand

- Display name is always `NULLTONE`, all caps. `nulltone` only in handles and URLs.
- Lime is a spotlight — the shader glow, one accent, the mascot's shell. Never a page background.
- The mascot is a speaker cabinet, never a mouse: square head, horn ears. No round ears, no animal head.
- Big type is the decoration. No stock photos, no illustration, no gradients beyond the release art and the hero.
- One idea per screen. Numbers over adjectives.
- The music leads. Gear, software and side projects never appear in copy unless someone asks.
