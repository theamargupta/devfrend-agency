# Devfrend Brand Voice Guide

_Single source of truth for how Devfrend sounds in writing — web, email, pitches, social._
_Companion to the design tokens in `src/app/globals.css` and the constants in `src/lib/constants.ts`._

---

## 1. Positioning

> **Devfrend is a boutique engineering studio that ships interactive, performant, accessibility-first websites.**

We are not a "creative agency" that also codes. We are engineers first, and the craft of interaction design is a discipline we practice on top of that. Clients hire us when the default Webflow/Framer template isn't enough — when the interaction, the 3D scene, or the performance budget has to be defended in code review, not just in Figma.

## 2. Audience

1. **Technical founders** building a DTC / SaaS / AI product who need a site that signals "this team ships real software."
2. **Design-forward marketing leads** at Series A–C startups whose current site can't render WebGL or hit Lighthouse 90+.
3. **Studios / agencies** sub-contracting the engineering-heavy parts of a build.

Everything we write should pass the sniff test of a staff engineer reading it on a Tuesday afternoon.

## 3. Tone

Three dials — always set together.

| Dial         | Devfrend is…             | Devfrend is NOT…         |
| ------------ | ------------------------ | ------------------------ |
| Energy       | Confident, specific      | Hype-y, cheerleader-y    |
| Warmth       | Warm, human, slightly dry | Corporate, sterile       |
| Authority    | Senior engineer           | Junior, hand-wavy, vague |

The voice should feel like a senior IC engineer who happens to have great taste — not a salesperson, and not a hype beast.

## 4. Voice Rules

**Do:**
- Name specific tools, techniques, numbers. "Lighthouse 94 on 3G" beats "blazing fast."
- Use concrete verbs: _ship, render, instrument, audit, animate._
- Use short, declarative sentences. One idea per sentence.
- Earn adjectives. If you say "performant," show the Lighthouse number nearby.
- Acknowledge trade-offs — we are the studio that admits WebGL has a cost.

**Don't:**
- "Unlock your potential." "Elevate your brand." "Reimagine." "Cutting-edge." "Synergy."
- Emoji 🚀 — ever. (One ✦ or ⟶ in decorative contexts is fine.)
- Exclamation marks in marketing copy. None. Zero.
- "We just…" / "simply…" — it minimizes the engineering.
- Stock-photo language ("teams," "solutions," "journeys").

## 5. CTA Language

Canonical CTAs (mirrored in `constants.ts → CTA`):

| Key        | Copy                | Where                          |
| ---------- | ------------------- | ------------------------------ |
| primary    | **Start a project** | Hero, contact, sticky navbar   |
| secondary  | **See the work**    | Hero alt, portfolio entry      |
| contact    | **Book a 20-min call** | Contact section, footer     |
| tertiary   | **Peek under the hood** | Case study openings        |

**Rules:**
- Always verb-first. Never noun-only ("Our Work").
- Never "Click here," "Learn more," "Get in touch."
- If a CTA has a time cost, name it ("20-min call" — the user knows what they're committing to).
- In the body, reference CTAs by the exact words on the button. Consistency over cleverness.

## 6. Messaging Pillars

Every page, email, and pitch threads at least one of these three:

1. **Engineering-grade craft** — We review each other's code. We ship Lighthouse 90+. We hit WCAG 2.1 AA by default, not as an upgrade.
2. **Interaction as a first-class deliverable** — The animation, the cursor, the scroll feel — these are specified, not bolted on.
3. **Boutique, senior-only team** — You talk to the person building it. No account managers. No juniors learning on your project.

## 7. Taglines

Primary: **"Engineering-grade websites that feel alive."**

Rotating (hero cycle, in order):
1. Engineering-grade websites.
2. Interfaces that feel alive.
3. Interactive. Accessible. Fast.
4. Built by engineers, not templates.

Each is a standalone claim and a promise; we deliver on all four.

## 8. Do-Over Examples

| ❌ Draft | ✅ Rewrite |
| ------- | --------- |
| "We help brands unlock their full digital potential." | "We build the parts of your site that the template can't." |
| "Blazing-fast performance!" | "Lighthouse 94 on a throttled 3G connection." |
| "Cutting-edge 3D experiences." | "WebGL scenes that stay under a 120 kB bundle." |
| "Click here to learn more." | "Peek under the hood." |
| "Let's take your brand to the next level!" | "Book a 20-min call — we'll tell you if we're a fit." |

## 9. Length & Rhythm

- **Hero headline**: ≤ 7 words.
- **Hero subhead**: ≤ 20 words.
- **Section intro**: 1–2 sentences.
- **Case study opener**: 3–5 sentences; name the constraint first.
- **Footer**: sentence fragments only.

Vary sentence length in prose. Two short. Then one longer that breathes. Then short again.

## 10. Accessibility as Voice

Accessibility language is non-negotiable brand voice:
- "Accessibility-first" never "accessible" (first is a posture, not a label).
- Mention keyboard navigation and reduced motion **by name** when listing what we deliver.
- Never call a11y work "nice to have."

---

_Last updated: Phase 1 · DA-12_
