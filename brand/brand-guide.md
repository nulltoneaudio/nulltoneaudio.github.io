# NULLTONE — brand guide

Version 3.1 · November 2026
Owner: NULLTONE

---

## 1. The name

**NULLTONE** — noun. The tone that shouldn't exist.

Two halves, both true of the sound:

- **Null** — zero, absence, silence. The room before the first kick.
- **Tone** — pitch, weight, character. What you actually feel.

The name is the thesis: you start from nothing and make pressure out of it. It reads as a producer alias first, and it doesn't lock you into a genre you might leave in two years.

### Why this name works

| Test | Result |
| --- | --- |
| Says music without saying a genre | Yes — no lock-in if the sound moves |
| One word, no explanation needed | Yes |
| Works as a wordmark | Yes — 8 characters, even weight, no ascenders fighting |
| Works as a producer tag | Yes — "nulltone" is two clean syllables |
| Ownable | Handle `@nulltone` is taken, so you lead with `@nulltone.wav`; the mark and the writing carry the identity |

**Known collision to be aware of:** Nu:Tone (Hospital Records) is an established DnB artist. Different spelling, different scene, and your mark and palette are nothing alike — but if you ever pitch UK DnB press, spell it out as NULLTONE so nobody files you as a tribute act.

### Naming rules

- Always written **NULLTONE** in display type, all caps.
- Lowercase `nulltone` only inside handles and URLs.
- Never "Null Tone", "Nulltone.", or "NULL TONE".
- One name only. No side projects, no second alias, no sub-brand.

---

## 2. Positioning

**Positioning statement**
NULLTONE is a California DJ and producer making bass-heavy records and hand-built sets.

**One-liner**
California DJ and producer. Low end first.

**Taglines** (approved, in order of preference)

1. **Nothing sounds like this.** — primary, used on the site
2. Low end first. — short, good for stickers and social bios
3. Built by hand. Played loud. — descriptive, for press and flyers

**What you are not:** a "creative technologist", a "sonic storyteller", a "multi-hyphenate". The music is the product. If a track isn't finished, the site doesn't pretend it is.

### Audience

1. **Bookers and promoters (45%)** — need the genre, the room size and proof you'll turn up with a working setup. Give them a one-page press kit, a mix that loads fast, and a clear fee conversation.
2. **Listeners and DJs in the same lane (35%)** — arrive from a clip, a mix or a support slot. They stay for the records.
3. **Scene peers and radio (20%)** — the people who pass your track along. Send it to them before you post it.

---

## 3. Voice

Straight, specific, a little dry. You're a person who measures things, not a person who "crafts sonic journeys."

| Do | Don't |
| --- | --- |
| "128, A minor, built for the 3am slot." | "A transcendent journey through sound." |
| "Kick first. Everything else is a guest." | "Blending genres into a unique sonic tapestry." |
| "Cues placed by ear, keys checked twice." | "Seamlessly curated vibes." |
| Name the gear, the key, the BPM | Vague hype about energy |
| Short sentences. Full stops. | Exclamation marks, emoji strings |

**Sample copy — release announcement**
> "Half Step" is out. 128, A minor, built for the 3am slot. First track I've finished since I stopped mixing in headphones.

**Sample copy — show announcement**
> San Francisco, March 14. Two hours, opening for [ARTIST]. Bringing a set built for that room — different low end than the last one.

**Sample copy — booking reply**
> Happy to. Send the room, the rig and the set length and I'll come back with a plan and a fee. I bring my own controller and a backup USB.

---

## 4. Visual identity

### The mark

A dome head under a four-spike mohawk crest, with one wide visor slot and a small mouth slot. No eyes — the visor does the work, so it reads as a masked DJ before it reads as a cartoon. This is the archetype of the great dance-music logos (Monstercat's cat head, the deadmau5 mouse head): a flat silhouette with a face you can recognise at a glance and print on a hat.

Ours is concept 07 from the icon set — chosen from ten. What makes it work is that the crest tips clear the dome by 20–26px: the hair reads as hair at 200px and as a spiked crown at 16px. Nothing else in the silhouette is optional, so it never gets busier.

It should never be described as a mouse and never gain round ears — that shape is taken.

Files: `assets/mark.svg` (full), `assets/favicon.svg` (same mark, visor enlarged for small sizes), `assets/avatar.svg` / `assets/avatar-1000.png` (social avatar).

**Rules**

- Clear space: at least half the head's diameter on all sides.
- Minimum size: 24px digital, 8mm print. Below 24px use the favicon file, which thickens the visor.
- On light backgrounds the glyph stays Lime; never outline it or add a second colour.
- Never rotate, add a gradient, outline it in a second colour, or place it on a busy photo without a solid tile behind it.
- The mark and the wordmark are set side by side, never stacked, never overlapping.

### Colour

| Name | Hex | Use | Share of a layout |
| --- | --- | --- | --- |
| Void | `#08090A` | Backgrounds, the default surface | ~70% |
| Bone | `#EDE9E3` | Body text, primary type | ~20% |
| Lime | `#D8FF3E` | The signal: links, the mark, one word per headline | ~8% |
| Coral | `#FF6A3D` | Secondary accent, release art only | ~2% |
| Smoke | `#8E8E86` | Metadata, captions, mono labels | supporting |

Lime is a spotlight, not a paint. If a layout has more than about one-tenth lime, it's wrong.

### Type

- **Display:** Anton, all caps, tight leading (0.84–0.88), near-zero tracking. This is the voice of the brand: posters, headlines, the wordmark. Never use it for body copy.
- **Body:** Inter Tight, 400–600, sentence case, line height 1.5.
- **Metadata / labels:** JetBrains Mono, 11px, `0.18em` tracking, uppercase — track titles, keys, BPM, dates, cities.
- Fallbacks: system stacks so the site degrades cleanly offline.

### Layout

- Sharp corners (2px radius maximum). No pills, no soft cards, no drop shadows except the waveform glow.
- Hairline rules at `rgba(237,233,227,0.14)`.
- 12-column feel, generous margins, one idea per screen.
- Numbers do the work: `01` `02` `03` section markers, BPM, key, show dates.
- The wordmark is the layout. On the hero it spans the full viewport, one letter per column, with a single letter in Lime. Big type is the decoration; no illustration, no stock photography in the layout.
- Full-bleed colour bands (the Lime marquee, the Void feature panel) separate sections. Corners stay square and edges run to the viewport.

### Motion

Slow and mechanical, never bouncy. The oscilloscope moves; everything else fades up 18px over 0.7s. Always honour `prefers-reduced-motion`.

### Photography

One hard light source, black surroundings, gear in frame, no smiling at the camera. Cables visible. Honest, not glossy.

Shot list for the first session:
1. Portrait, 4:5, side light, holding nothing
2. Hands on the decks, top-down
3. Crowd from behind the booth, mid-set, motion blur
4. Full rig wide shot with the mark on a sticker on the case
5. A detail: RCA cable, cue button, filter knob

### Release art template

Square, Void background, a single Lime or Coral geometric element (ring, bar, waveform), the wordmark at 8% height in a bottom corner, no track title in the image. Titles live in the caption, which keeps the grid clean and the covers reusable.

---

## 5. Copy bank

**Bio — 50 characters**
> California DJ and producer.

**Bio — 150 characters**
> NULLTONE — California DJ and producer. Low end first, sets built by hand. Bookings: nulltone@icloud.com

**Bio — press / 300 characters**
> NULLTONE is a California DJ and producer. His records are built from the low end up — bass-heavy, deliberate, one idea per track — and his sets are assembled by ear, with keys and tempo matched by hand rather than by playlist.

**Boilerplate — long**
> NULLTONE is a California DJ and producer working across bass-heavy club music, building sets by hand rather than by playlist. His records start from silence and add only what earns its place: weight in the low end, tension before release, nothing decorative. He is currently finishing his first release.

**Producer tag (spoken, for tracks)**
> "nulltone."

---

## 6. Handles and accounts

| Platform | Handle | Status | Notes |
| --- | --- | --- | --- |
| Instagram | `@nulltone.wav` | appears available — confirm at signup | **Primary.** Bio, grid and captions in `instagram/instagram-kit.md` |
| Instagram (backup) | `@nulltone.audio`, `@nulltone.mp3` | appear available | Use only if `.wav` is taken |
| Instagram (taken) | `@nulltone`, `@nulltonemusic` | taken | Don't chase these |
| Email | `nulltone@icloud.com` | live | Booking address, on the site and in every bio. Paste-ready bios in `brand/bio-kit.md` |
| Website | `nulltoneaudio.github.io` | live | Move to a real domain when you buy one — see below |
| Domain | `nulltone.audio` / `nulltone.fm` | unregistered, available | `nulltoneaudio.com` is taken by someone else — do not use it |
| SoundCloud | `nulltoneaudio` | live | The public home for finished tracks — linked from the site |
| [untitled] | `nulltoneaudio` | private | Unreleased and work-in-progress only; share a project link, never a profile |
| Bandcamp | `nulltone` | check | |
| YouTube | `@nulltoneaudio` | live | Full sets, clips — linked from the site |
| TikTok | `@nulltone.wav` | check | Clip-first, same handle as IG |

**Consistency rule:** display name is always `NULLTONE`. Handles carry a suffix only where forced, and it's the same suffix everywhere (`.wav`). Never mix `@nulltone.audio` on Instagram with `@nulltoneaudio` on SoundCloud.

Personal accounts (GitHub, and anything else under your own name) stay personal and are not linked from the music site.

---

## 7. Asset checklist

- [x] Mark (SVG) and favicon
- [x] Site with palette, type and motion applied
- [ ] Portrait set (5 shots, section 4)
- [ ] Release covers (1340×1340, template above)
- [ ] Social avatar: mark on Void, 1000×1000
- [ ] Story highlight covers: 1080×1920, mono label on Void
- [ ] One-page press kit PDF: bio, 3 photos, 2 links, rider
- [ ] Sticker: mark + "LOW END FIRST"
- [ ] Email signature: mark, name, site, email

---

## 8. First 30 days

**Week 1 — claim and clean**
Claim Instagram `@nulltone.wav`, SoundCloud, Bandcamp, YouTube, TikTok. Same avatar, same display name, same bio length, same link everywhere. Put the site live.

**Week 2 — finish the record**
Finish the first single. One idea, mixed on monitors and checked on a phone. Cover art from the template. Set a release date and say it out loud.

**Week 3 — release it**
Post the clip, then the track, then the story behind it. Send it directly to ten DJs you rate and three radio shows before you post publicly. Do not wait for the algorithm.

**Week 4 — the mix and the ask**
Record a 45–60 minute set and publish it on SoundCloud and YouTube. Send the press kit to five promoters, mix attached — before you post it publicly, so they hear it first. Anything unreleased goes as a private [untitled] project link, not a public upload.

**Measure:** saves, shares, SoundCloud plays, and replies to booking emails. Nothing else for the first month.
