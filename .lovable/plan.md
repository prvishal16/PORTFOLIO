# Work Experience — Add AI Track + Out-of-the-Box Morph Animation

## The idea (out of the box)

Instead of just appending two more cards to the same timeline, split Work Experience into **two parallel tracks** — **Engineering** and **AI / Deep Learning** — with a single elegant **track switcher pill** at the top ("Engineering · AI"). The timeline morphs between the two tracks using a **fade + vertical shift + timeline-line redraw** motion — like turning a page in a portfolio book.

# ✅ 1. Heading change (Compulsory)

Instead of:

```

```

```
Engineering • AI
```

Use:

```

```

```
Software Engineering • AI Engineering
```

Reason:

-   
"Engineering" alone generic.  

-   
"Software Engineering" immediately clear.  

-   
"AI Engineering" matches it perfectly.
  # ✅ 2. Default Track
  Default should be:
  ```

  ```
  ```
  Software Engineering
  ```
  Because recruiter first chusedi software experience.
  # ✅ 3. AI Track Icon
  Instead of only
  ```

  ```
  ```
  Engineering ● AI
  ```
  Do
  ```

  ```
  ```
  💻 Software Engineering

  🤖 AI Engineering
  ```
  Very subtle.
  Professional.
  usee this...it looks premium..use in both experience...
  &nbsp;
  ```
  ◎
  │
  │
  │
  ```
  Small glowing ring.
  Looks premium.
  # Timeline Animation
  When switching
  Software
  ↓
  AI
  Don't instantly disappear.
  Better
  ```

  ```
  ```
  Software cards

  ↓

  Opacity 100

  ↓

  80

  ↓

  40

  ↓

  0

  ↓

  Timeline redraw

  ↓

  AI cards

  ↓

  0

  ↓

  30

  ↓

  70

  ↓

  100
  ```
  Feels like opening another chapter.

Key motion moves (all Framer Motion, no new libs):

- **AnimatePresence + mode="wait"** — outgoing cards fade + slide up with a subtle blur, incoming cards fade + rise from below with staggered children
- **layoutId on the switcher pill** — the red active indicator glides smoothly between "Engineering" and "AI" tabs
- **Timeline spine redraw** — the vertical red line animates `scaleY` from top on every switch, feeling like ink being drawn
- **Dot pulse** on the currently-active track's first dot (soft ring ping) — same style as the "Current" badge, keeps design language consistent
- **Track accent** — AI track uses the same red `#ff2a2a` accent but dot uses a subtle indigo-tinted ring to differentiate without breaking palette

Default track on load: **Engineering** (matches recruiter expectation, and the hero is Full-Stack × AI).

## New AI experience entries (rewritten, punchy, recruiter-grade — not the raw bullets provided)

**1. Artificial Intelligence Developer Intern** — *Microsoft & SAP · TechSaksham CSR Program* — *Jan 2025 — Mar 2025*

- Engineered an end-to-end **Potato Leaf Disease Detection** platform combining **CNN with VGG16 transfer learning**, reaching **92%+ multi-class accuracy** on field-captured crop imagery.
- Cut diagnostic turnaround by **40%** through an accelerated preprocessing pipeline and confidence-scored inference, giving farmers instant, trust-calibrated predictions.
- Shipped the model behind a lightweight **Streamlit** interface with real-time upload, class probabilities and severity insight — production-ready for low-bandwidth rural use.

**2. Deep Learning Developer Intern** — *Infosys Springboard · Program v5.0* — *Oct 2024 — Dec 2024*

- Architected **DigitWise**, a comparative handwriting recognition system benchmarking **MLP, CNN and LeNet-5**, achieving **96.16% on MNIST** and **71.6% on CIFAR-10** with aggressive augmentation and cross-dataset generalization.
- Rebuilt the data pipeline with custom augmentation, normalization and metric-driven checkpoints — lifting preprocessing efficiency and training stability by **30%**.
- Delivered a reproducible experiment framework with per-architecture confusion matrices and per-class F1 dashboards for clean model comparability.

## Layout

```text
                 [ Career Path ]
              Work  Experience
        ┌──────────────────────────┐
        │  Engineering  ●  AI      │   ← animated pill switcher
        └──────────────────────────┘

        │● Full-Stack Intern — PraNaga    CURRENT
        │  ...cards fade/slide in on switch...
        │● Web Developer — VaultofCodes
        │● Full-Stack — EY GDS
```

Same card design, same red spine, same typography — nothing else changes.

## Technical changes

`**src/data/portfolio.js**` — restructure `experience`:

- Add a `track: 'engineering' | 'ai'` field to each existing job (all current 3 → `engineering`).
- Append the two new AI entries above with `track: 'ai'`, `current: false`, ids `techsaksham` and `infosys`.

`**src/components/Experience.jsx**` — rebuild render layer only (no restyle of cards):

- Add `useState('engineering')` for active track.
- Add a **track switcher** above the timeline: two pill buttons with a shared `layoutId="trackPill"` motion background sliding between them.
- Wrap the timeline in `<AnimatePresence mode="wait">`, keyed by active track, so switching triggers exit → enter.
- Filter `experience` by track before mapping.
- Timeline spine gets `initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}` with `transformOrigin: top` and re-keys per track for the redraw effect.
- Cards keep existing fade+slide entrance; add a subtle exit (`opacity: 0, y: -20, filter: blur(4px)`) for the page-turn feel.

`**src/data/portfolio.js` — assistant knowledge** — extend the `experience` answer to mention the two AI internships (TechSaksham Microsoft/SAP and Infosys Springboard) so the AI assistant stays in sync.

**Yes. Idi approve cheyyachu.** Kani nenu final version ni konchem polish chestha. Ee version direct ga Cursor/Claude ki ivvochu. Idi clearer, implementation-friendly, unnecessary ambiguity lekunda untundi.

---

# Work Experience — Dual Career Track (Software Engineering + AI Engineering)

## Objective

Transform the existing **Work Experience** section into a **dual-track timeline** without changing the overall design language.

Instead of placing all internships into a single timeline, separate them into two professional career paths:

- 💻 **Software Engineering**
- 🤖 **AI Engineering**

This allows recruiters to immediately switch between my software engineering experience and AI engineering experience while preserving the existing premium timeline design.

---

# Design Principles

- Preserve the current card UI.
- Preserve typography.
- Preserve spacing.
- Preserve overall layout.
- Preserve the red accent color.
- Do **not** redesign the section.
- Only introduce a premium animated track switcher.

---

# Track Switcher

Place a centered pill switcher directly below the section title.

```
────────────────────────────────

Career Path

Work Experience

┌────────────────────────────────────┐
│ 💻 Software Engineering | 🤖 AI Engineering │
└────────────────────────────────────┘

────────────────────────────────

```

Requirements

- Default selected tab:
  - **💻 Software Engineering**
- Active pill smoothly slides between tabs.
- Use Framer Motion `layoutId`.
- Rounded premium pill.
- Keep existing red accent.

---

# Timeline

The timeline remains identical.

Instead of changing the design,

only replace the data source.

Current:

```
│● PraNaga

│● VaultofCodes

│● EY GDS

```

Software Track

```
◎
│
│
◎
│
│
◎

```

AI Track

```
◎
│
│
◎

```

Replace the filled circle with a premium glowing ring.

```
◎

```

The first node of the active timeline softly pulses.

Very subtle.

No flashy animation.

---

# Timeline Transition

When switching tracks:

Software Engineering

↓

Cards

100%

↓

80%

↓

40%

↓

0%

↓

Timeline redraw

↓

AI cards

0%

↓

30%

↓

70%

↓

100%

Feels like opening the next chapter of a portfolio rather than replacing content.

---

# Motion

Use only Framer Motion.

No new libraries.

### Switcher

- layoutId animation
- spring transition

### Timeline

Animate

```
scaleY

0

↓

1

```

with

```
transformOrigin: top

```

to create a redraw effect.

### Cards

Exit

```
opacity:0
y:-20
blur:4px

```

Enter

```
opacity:0 → 100
y:20 → 0

```

with staggered children.

Use

```
AnimatePresence
mode="wait"

```

---

# Software Engineering Track

Contains the existing experience only.

```
PraNaga

VaultofCodes

EY GDS

```

Each entry receives

```
track:"software"

```

---

# AI Engineering Track

## Artificial Intelligence Developer Intern

Microsoft & SAP

TechSaksham CSR Program

Jan 2025 — Mar 2025

- Engineered an end-to-end Potato Leaf Disease Detection platform using CNN with VGG16 transfer learning, achieving 92%+ multi-class accuracy on real-world crop imagery.
- Reduced diagnosis turnaround by 40% through optimized preprocessing and confidence-based inference for faster decision-making.
- Built a Streamlit interface supporting real-time image uploads, prediction confidence and disease insights for production-ready deployment.

---

## Deep Learning Developer Intern

Infosys Springboard

Program Version 5.0

Oct 2024 — Dec 2024

- Developed DigitWise, a handwritten digit recognition platform using MLP, CNN and LeNet-5, achieving 96.16% accuracy on MNIST and 71.6% on CIFAR-10.
- Improved preprocessing efficiency and training stability by 30% through optimized augmentation and custom data pipelines.
- Built reusable evaluation workflows with confusion matrices and per-class performance metrics for reliable model comparison.

Each entry

```
track:"ai"

```

---

# Technical Implementation

## portfolio.js

Each experience object should include

```
track

software

or

ai

```

Software

```
PraNaga

VaultofCodes

EY

```

↓

```
track:"software"

```

AI

```
TechSaksham

Infosys

```

↓

```
track:"ai"

```

---

## Experience.jsx

- useState("software")
- Filter experiences by track.
- Shared layoutId pill.
- AnimatePresence.
- Timeline redraw.
- Staggered card animations.

---

# Out of Scope

Do **not** modify:

- Hero
- About
- Skills
- Projects
- Resume Viewer
- Contact
- Navigation
- Footer
- Color Palette
- Card Design
- Typography
- Spacing

Only enhance the **Work Experience** section with a premium dual-track interaction.

---

## ⭐ Final suggestion

Oka small naming change matram recommend chestha:

Instead of:

- **Engineering**
- **AI**

Use:

- **💻 Software Engineering**
- **🤖 AI Engineering**

Endukante recruiter first glance lo ne distinction clear ga untundi. "Engineering" ane generic label kanna "Software Engineering" ane label much more professional and self-explanatory. Ee prompt implementation-wise clean ga undi, maintainable ga undi, and premium UX ni preserve chestundi.

## Out of scope

- No changes to Skills, About, Hero, Projects, Resume viewer, or any other section.
- No new libraries — framer-motion is already in use.
- No color palette changes.