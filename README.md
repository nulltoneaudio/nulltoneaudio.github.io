# NULLTONE

Music brand site for Ethan Banker — DJ and producer, California.

**Live: https://nulltoneaudio.github.io/**

## What's here

```
index.html              hero, music, shows, about, booking
styles.css              design system: Anton display, marquee, full-bleed feature
script.js               signal strip, scroll reveal, wordmark parallax, footer year
assets/mark.svg         ring + waveform mark
assets/favicon.svg      simplified mark for the browser tab
brand/brand-guide.md    name, positioning, voice, visuals, bios, 30-day plan
instagram/              handle, bios, launch grid, captions, reels, posting schedule
strategy/launch-plan.md the 90-day path from no releases to paid bookings
```

No dependencies, no build step. Fonts load from Google Fonts with system fallbacks.

## Run it locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Before it goes public — replace these

1. **Feature release** — `index.html`, the `<article class="feature">` block. Label, headline, copy and the "Follow for the drop" button are placeholders. When the single is out, swap the button for real Spotify / Apple / SoundCloud links.
2. **Archive tiles** — the three `.tile` blocks are placeholders labelled `Single / Mix / Single — Coming soon`. Replace the `.cover--1/2/3` gradient classes with `<img src="assets/cover-x.jpg" alt="">` when you have covers.
3. **Shows** — `.dates` currently shows the empty state. Replace `.dates-copy` with real rows using the `.show` pattern in the brand guide, newest first.
4. **Portrait** — the `.portrait` div in `#about` is a styled placeholder. Replace it with `<img src="assets/portrait.jpg" alt="Ethan Banker, NULLTONE">`, keeping the 4:5 ratio.
5. **Social links** — the `.socials` grid. SoundCloud, YouTube and TikTok are bare platform URLs; Instagram points at `@nulltone.wav`.
6. **Metadata** — add `assets/og.png` (1200×630) and an `og:image` tag, and set `og:url` once a domain is live.
7. **Domain** — served from `nulltoneaudio.github.io`. `nulltoneaudio.com` belongs to someone else; `nulltone.audio` and `nulltone.fm` are unregistered.

Booking email: `nulltone@icloud.com` (in `#book`, the shows CTA and the masthead button).

## Deploy

Canonical repo: `github.com/nulltoneaudio/nulltoneaudio.github.io`, Pages serving `main` from the repo root. Two remotes exist: `brand` (the org repo, canonical) and `origin` (an earlier copy at `ethanbanker/nulltone`). Push to both to keep them identical.

```bash
git add -A && git commit -m "copy tweak" && git push brand main && git push origin main
```

Pages rebuilds in about a minute. There is no build step — what's in the repo is what ships.

### Custom domain

Once you own a domain, add a file named `CNAME` at the repo root containing only the domain, then point DNS at GitHub:

- `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www`: `nulltoneaudio.github.io`

Set the domain under Settings → Pages and tick **Enforce HTTPS**. Then update `og:url`, the `.socials` links and the Instagram bio link.

## House rules for the brand

- Display name is always `NULLTONE`, all caps. `nulltone` only in handles and URLs.
- Lime is a spotlight, but it's also allowed as one full-bleed band (the marquee) — never as a page background.
- Big type is the decoration. No stock photos, no illustration, no gradients beyond the release art.
- One idea per screen. Numbers over adjectives.
- The music leads. Gear, software and side projects never appear in copy unless someone asks.
