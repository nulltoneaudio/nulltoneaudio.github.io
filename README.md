# NULLTONE

Music brand site for Ethan Banker — DJ and producer, California.

**Live: https://nulltoneaudio.github.io/**

## What's here

```
index.html            the whole site — hero, music, shows, about, booking
styles.css            design tokens and all layout
script.js             oscilloscope canvas, scroll reveal, sticky header, footer year
assets/mark.svg       ring + waveform mark
assets/favicon.svg    simplified mark for the browser tab
brand/brand-guide.md  name, positioning, voice, visuals, bios, 30-day plan
instagram/            handle, bios, launch grid, captions, reels, posting schedule
```

No dependencies, no build step. Fonts load from Google Fonts with system fallbacks.

## Run it locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Before it goes public — replace these

1. **First release** — `index.html`, the `<article class="feature">` block. The title, copy, kicker and the "Follow for the drop" button are placeholders. When the single is out, swap the button for real Spotify / Apple / SoundCloud links.
2. **Shows** — the `.shows` block currently shows an empty state. Replace it with `.show` rows; there's a commented example in the HTML, and `.show` is already styled.
3. **Portrait** — the `.portrait` div in `#about` is a styled placeholder. Replace it with `<img src="assets/portrait.jpg" alt="Ethan Banker, NULLTONE">` and keep the 4:5 ratio.
4. **Social links** — the `.channels` block and the "SoundCloud →" link. SoundCloud and YouTube are bare `https://soundcloud.com/` and `https://youtube.com/` placeholders. Instagram points at `@nulltone.wav`.
5. **Metadata** — add `assets/og.png` (1200×630) and an `og:image` tag for link previews, and set `og:url` once a domain is live.
6. **Domain** — the site is served from `nulltoneaudio.github.io`. `nulltoneaudio.com` belongs to someone else; `nulltone.audio` and `nulltone.fm` are unregistered.

Booking email: `nulltone@icloud.com` (appears in `#booking`, `brand/brand-guide.md` and `instagram/instagram-kit.md`).

## Deploy

Canonical repo: `github.com/nulltoneaudio/nulltoneaudio.github.io`, Pages serving `main` from the repo root. There are two remotes: `brand` (the org repo, canonical) and `origin` (an earlier copy at `ethanbanker/nulltone`). Push to both to keep them identical.

```bash
git add -A && git commit -m "copy tweak" && git push brand main && git push origin main
```

Pages rebuilds in about a minute. There is no build step — what's in the repo is what ships.

### Custom domain

Once you own a domain, add a file named `CNAME` at the repo root containing only the domain, then point DNS at GitHub:

- `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www`: `nulltoneaudio.github.io`

Set the domain under Settings → Pages and tick **Enforce HTTPS**. Then update `og:url`, the `.channels` links and the Instagram bio link.

## House rules for the brand

- Display name is always `NULLTONE`, all caps. `nulltone` only in handles and URLs.
- Lime is a spotlight: about 8–10% of any layout, never a background.
- One idea per screen. Numbers over adjectives.
- The site and the social grid must use the same palette and the same 11px mono labels, or the brand stops looking like one thing.
- The music leads. Software, day job and side projects never appear on the site unless someone asks.
