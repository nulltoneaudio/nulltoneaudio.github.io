# NULLTONE

Brand and portfolio for Ethan Banker — DJ, producer, and builder of DJ software.

```
index.html            the site (single page, no build step)
styles.css            design system: Void / Bone / Lime, Space Grotesk + JetBrains Mono
script.js             oscilloscope, scroll reveal, header state
assets/mark.svg       logotype mark — ring (null) cut by a waveform (tone)
assets/favicon.svg    simplified mark for the tab
brand/brand-guide.md  naming, positioning, voice, colour, type, bios, handles, 30-day plan
instagram/...         handle plan, bios, 9-post launch grid, captions, reels, hashtags
```

## Run it

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

No dependencies, no build step. Fonts load from Google Fonts with system fallbacks.

## Before it goes public — replace these

1. **Releases** — `index.html`, the three `<article class="release">` blocks. Titles, year, BPM/key and the Spotify/Bandcamp links are placeholders. Swap the `.art--1/2/3` gradient classes for cover images when you have them (`<img src="assets/cover-x.jpg" alt="">`).
2. **Booking email** — `hello@nulltoneaudio.com` appears twice: the big link in `#contact` and in `brand/brand-guide.md`. Caveat: `nulltoneaudio.com` is registered to someone else (parked, no mail), so this address does not deliver. Swap it once a domain is actually yours.
3. **Social links** — the `.channels` block and the "All releases" link point at Instagram, SoundCloud, GitHub and YouTube. SoundCloud and YouTube are bare `https://soundcloud.com/` placeholders.
4. **Portrait** — the `.portrait` div in `#about` is a styled placeholder; replace it with `<img src="assets/portrait.jpg" alt="Ethan Banker, NULLTONE">` and keep the 4:5 ratio.
5. **Metadata** — add `assets/og.png` (1200×630) and an `og:image` tag for link previews, and set `og:url` once the domain is live.

## Deploy

Live on GitHub Pages: **https://nulltoneaudio.github.io/**

Canonical repo: `github.com/nulltoneaudio/nulltoneaudio.github.io`, Pages serving `main` from the repo root. There are two remotes: `brand` (the org repo, canonical) and `origin` (an earlier copy at `ethanbanker/nulltone`). Push to both to keep them identical. There is no build step — what's in the repo is what ships, so publishing an update is just:

```bash
git add -A && git commit -m "copy tweak" && git push brand main && git push origin main
```

Pages rebuilds in about a minute.

### Custom domain

Once you own a domain, add a file named `CNAME` at the repo root containing only the domain, then point DNS at GitHub:

- `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www`: `nulltoneaudio.github.io`

Set the domain under Settings → Pages and tick **Enforce HTTPS**. Once that resolves, update the `og:url` tag and the `mailto:` address if you set up email on the domain.

## House rules for the brand

- Display name is always `NULLTONE`, all caps. `nulltone` only in handles and URLs.
- Lime is a spotlight: about 8–10% of any layout, never a background.
- One idea per screen. Numbers over adjectives.
- The site and the social grid must use the same palette and the same 11px mono labels, or the brand stops looking like one thing.
