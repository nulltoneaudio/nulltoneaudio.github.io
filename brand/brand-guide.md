# NULLTONE — brand guide

Version 1.0 · November 2026
Owner: Ethan Banker

---

## 1. The name

**NULLTONE** — noun. The tone that shouldn't exist.

Two halves, both true of you:

- **Null** — zero, absence, silence, the null pointer. The programmer half.
- **Tone** — pitch, character, weight. The producer half.

The name is the thesis: you start from nothing and make pressure out of it. It's also a small joke that lands with exactly the right people — engineers who DJ, DJs who read a stack trace.

### Why this name works

| Test | Result |
| --- | --- |
| Says music without saying a genre | Yes — no lock-in if your sound moves |
| Says software without saying "dev" | Yes — it reads as a producer alias first |
| One word, no explanation needed | Yes |
| Works as a wordmark | Yes — 8 characters, even weight, no ascenders fighting |
| Works as a producer tag | Yes — "nulltone" is two clean syllables |
| Ownable | Handle `@nulltone` is taken, so you lead with `@nulltone.wav`; the mark and the writing carry the identity |

**Known collision to be aware of:** Nu:Tone (Hospital Records) is an established DnB artist. Different spelling, different scene, and your mark and palette are nothing alike — but if you ever pitch to UK DnB press, lead with the `NULLTONE` spelling and the software angle so nobody files you as a tribute act.

### Naming rules

- Always written **NULLTONE** in display type, all caps.
- Lowercase `nulltone` only inside handles, URLs and code.
- Never "Null Tone", "Nulltone.", or "NULL TONE".
- The software arm is not a separate brand. It's **NULLTONE** too — described as "tools by NULLTONE". One name, two outputs.

---

## 2. Positioning

**Positioning statement**
NULLTONE is the alias of Ethan Banker, a California DJ and producer who writes the software he performs with — hand-built harmonic sets, local-first tools, nothing in the cloud.

**One-liner**
DJ, producer, and the person who wrote the software he's playing on.

**Taglines** (approved, in order of preference)

1. **Nothing sounds like this.** — primary, used on the site
2. Sets shaped by hand. Tools that stay on your machine. — descriptive, use in bios
3. Low end, no cloud. — short, good for stickers and IG bio

**What you are not:** a "creative technologist", a "sonic storyteller", a "multi-hyphenate". Never lead with the fact that you're a developer — lead with the set, then let the tools be the proof.

### Audience

1. **Bookers and promoters (35%)** — need to know the genre, the room size, and that you'll turn up with a working setup. Give them a one-page press kit and a SoundCloud link that loads fast.
2. **DJs who hate rekordbox friction (40%)** — your tools are the hook. They arrive from GitHub and a Reddit thread, then discover the music. This is your unfair advantage; almost no DJ has it.
3. **Producers and gear people (25%)** — follow for the rig, the process, the FLX4 + OSC setup. They convert into the first two groups.

---

## 3. Voice

Straight, specific, a little dry. You're a person who measures things, not a person who "crafts sonic journeys."

| Do | Don't |
| --- | --- |
| "300-track build from a 3,000-track library in a couple of seconds." | "Blazing-fast AI-powered set generation." |
| "Cues placed by ear, keys checked twice." | "Taking you on a journey through sound." |
| "It reads your rekordbox database. Nothing leaves your machine." | "Seamlessly integrated cloud workflow." |
| Name the gear, the key, the BPM | Vague hype about "vibes" |
| Short sentences. Full stops. | Exclamation marks, emoji strings |

**Sample copy — release announcement**
> "Half Step" is out. 128, A minor, built for the 3am slot. First track I've finished since I stopped mixing in headphones.

**Sample copy — tool launch**
> Cuewire is public. Your FLX4 can now drive Syndicate, Resolume and the lights at the same time. Latency readout included, because guessing is worse.

**Sample copy — booking reply**
> Happy to. Send the room, the rig and the set length and I'll come back with a plan and a fee. I bring my own controller and a backup USB.

---

## 4. Visual identity

### The mark

A ring cut by a signal. The ring is the null — a zero, a jack socket, an empty channel. The waveform running through it is the tone. It should read at 24px and at 8 feet.

Files: `assets/mark.svg` (full), `assets/favicon.svg` (simplified).

**Rules**

- Clear space: at least half the ring's diameter on all sides.
- Minimum size: 24px digital, 8mm print.
- On light backgrounds, swap the green stroke to `#08090A` and keep the black tile.
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

- **Display / body:** Space Grotesk. Headlines tight (`-0.03em` to `-0.045em`), sentence case, never all caps except the wordmark.
- **Metadata / labels:** JetBrains Mono, 11px, `0.16em` tracking, uppercase. This is what makes the software half legible as a design choice rather than a hobby.
- Fallbacks: the site ships with system stacks so it degrades cleanly offline.

### Layout

- Sharp corners (2px radius maximum). No pills, no soft cards, no drop shadows except the waveform glow.
- Hairline rules at `rgba(237,233,227,0.14)`.
- 12-column feel, generous margins, one idea per screen.
- Numbers do the work: `01` `02` `03` section markers, BPM, key, star count.

### Motion

Slow and mechanical, never bouncy. The oscilloscope moves; everything else fades up 18px over 0.7s. Always honour `prefers-reduced-motion`.

### Photography

One hard light source, black surroundings, gear in frame, no smiling at the camera. Cables visible. Honest, not glossy.

Shot list for the first session:
1. Portrait, 4:5, side light, holding nothing (the current placeholder slot)
2. Hands on the FLX4, top-down
3. Laptop screen running Parity, room dark
4. Full rig wide shot with the mark on the wall or sticker on the case
5. A detail: RCA cable, cue button, filter knob

### Release art template

Square, Void background, a single Lime or Coral geometric element (ring, bar, waveform), the wordmark at 8% height in a bottom corner, no track title in the image. Titles live in the caption, which keeps the grid clean and the covers reusable.

---

## 5. Copy bank

**Bio — 50 characters**
> California DJ. I build the tools I play on.

**Bio — 150 characters**
> NULLTONE — Ethan Banker. DJ and producer in California. I write the software I play on: harmonic sets by hand, local-first tools. Bookings: hello@nulltoneaudio.com

**Bio — press / 300 characters**
> NULLTONE is Ethan Banker, a California DJ and producer who writes the software he performs with. His sets are built harmonically by hand; his tools — Parity, a rekordbox set builder, and Cuewire, a controller-to-OSC router — run entirely on the user's machine. He plays a DDJ-FLX4 and exports nothing to the cloud.

**Boilerplate — long**
> Ethan Banker records and performs as NULLTONE. Based in California, he works across DJing, production and music software. He built Parity, a harmonic set builder that reads rekordbox libraries directly and fits a program to an energy curve, and Cuewire, a controller-to-OSC router that lets one DDJ-FLX4 drive several applications at once. Both are open source, local-first, and free of accounts. His sets are assembled by ear and checked for key and tempo compatibility; his production sits in the low end.

**Producer tag (spoken, for tracks)**
> "nulltone."

---

## 6. Handles and accounts

| Platform | Handle | Status | Notes |
| --- | --- | --- | --- |
| Instagram | `@nulltone.wav` | appears available — confirm at signup | **Primary.** Bio, grid and captions in `instagram/instagram-kit.md` |
| Instagram (backup) | `@nulltone.audio`, `@nulltone.mp3` | appear available | Use only if `.wav` is taken |
| Instagram (taken) | `@nulltone`, `@nulltonemusic` | taken | Don't chase these |
| Domain | `nulltoneaudio.com` | check at a registrar | Primary site + email. `.wav` is a handle, not a TLD — the site needs a real domain |
| Domain (backup) | `nulltone.fm`, `nulltoneaudio.net` | check | Redirect to primary |
| SoundCloud | `nulltone` or `nulltoneaudio` | check | If `nulltone` is taken, use `nulltoneaudio` and keep it identical on every platform |
| Bandcamp | `nulltone` | check | |
| YouTube | `@nulltone` | check | Long-form sets, build videos |
| TikTok | `@nulltone.wav` | check | Clip-first, same handle as IG |
| GitHub | keep `ethanbanker` | live | Personal account stays; link the tools to the site rather than renaming |

**Consistency rule:** display name is always `NULLTONE`. Handles carry a suffix only where forced, and it's the same suffix everywhere (`.wav`). Never mix `@nulltone.audio` on Instagram with `@nulltoneaudio` on SoundCloud.

---

## 7. Asset checklist

- [x] Mark (SVG) and favicon
- [x] Site with palette, type and motion applied
- [ ] Portrait set (5 shots, section 4)
- [ ] Release covers (1340×1340, template above)
- [ ] Social avatar: mark on Void, 1000×1000
- [ ] Story highlight covers: 1080×1920, mono label on Void
- [ ] One-page press kit PDF: bio, 3 photos, 2 links, rider
- [ ] Sticker: mark + "LOW END, NO CLOUD"
- [ ] Email signature: mark, name, site, GitHub

---

## 8. First 30 days

**Week 1 — claim and clean**
Register `nulltoneaudio.com`, set the booking address, claim Instagram `@nulltone.wav`, SoundCloud, Bandcamp, YouTube, TikTok. Same avatar, same display name, same bio length, same link everywhere. Put the site live (see README).

**Week 2 — prove the tools**
Post Parity and Cuewire properly: a 30-second screen recording each, one clear sentence about the problem, GitHub link in bio. Pin both to your GitHub profile and add "Tools by NULLTONE" to both READMEs.

**Week 3 — the set**
Record a 45–60 minute set built in Parity. Publish it on SoundCloud and YouTube with the energy curve and harmonic percentage in the description. That number is your differentiator; make it the headline, not a footnote.

**Week 4 — the ask**
Send the press kit to five promoters and three radio shows. Attach the set, not the software. Mention the software only as the reason the set sounds the way it does.

**Measure:** profile visits per post, saves, GitHub stars per tool post, and replies to booking emails. Nothing else for the first month.
