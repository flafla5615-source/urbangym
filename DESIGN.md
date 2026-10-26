---
name: "어반짐 평거점"
description: "A trainer's printed voice, grounded in the real people and spaces of URBAN GYM."
colors:
  accent: "#d10e1c"
  accent-hover: "#af0c17"
  ink: "#101012"
  ink-hover: "#353537"
  paper: "#f6f6f4"
  wash: "#ededeb"
  placeholder: "#e0e0dd"
  divider: "#c7c7c2"
  muted: "#64645f"
  secondary-text: "#51514d"
  white: "#ffffff"
  naver: "#087b3e"
  naver-hover: "#065d2e"
typography:
  display:
    fontFamily: "Black Han Sans, Pretendard Variable, sans-serif"
    fontSize: "clamp(42px, 13.2vw, 64px)"
    fontWeight: 400
    lineHeight: 1.01
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Black Han Sans, Pretendard Variable, sans-serif"
    fontSize: "clamp(32px, 4.3vw, 54px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "19px"
    fontWeight: 800
  body:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  supporting:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "15px"
    fontWeight: 700
rounded:
  flat: "0px"
  control: "3px"
  action: "4px"
spacing:
  paired-gap: "7px"
  compact: "10px"
  small: "12px"
  base: "16px"
  control-x: "20px"
  content: "24px"
  group: "28px"
  block: "32px"
  profile-gap: "40px"
  section-mobile: "64px"
  section-desktop: "100px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-light-hover:
    backgroundColor: "{colors.placeholder}"
  consultation-membership:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    padding: "10px"
  consultation-pt:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    padding: "10px"
  profile-disclosure:
    textColor: "{colors.ink}"
    padding: "8px 0 24px"
  mobile-booking:
    backgroundColor: "{colors.naver}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    height: "52px"
  mobile-phone:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    height: "52px"
---

# Design System: 어반짐 평거점

## Overview

**Creative North Star: "The Trainer's Printed Voice"**

A trainer speaks in large black and red type, beside an original color portrait. The visual character comes from a printed stage page: condensed weight, a slight rotation, real ink wear, and a clear speaker. Calm neutral space and plain service information make that expressive voice usable for a local gym.

Photography supplies the evidence. Keep the actual trainers, facility photographs, and U mark recognizable. The page gives membership and PT consultation equal visual weight. It uses a strong first statement, then straight photographic sections and readable profiles; the expressive material does not turn every paragraph into a poster.

**Key Characteristics:**

- Black display type with red emphasis on a light neutral field.
- Original color portraits and real facility photography.
- Printed wear confined to the lead quotation and paired consultation backgrounds.
- Flat, square photographic sections with small control corners.
- Clear booking and phone actions, including a green Naver action on mobile.

## Colors

The palette is an ink-and-paper system with a direct red accent and one service-specific green. The frontmatter owns the exact values.

### Primary

- **Spoken Red** (`accent`): emphasized quotation lines, booking buttons, links, credential subheads, selection, and the final contact field.
- **Pressed Red** (`accent-hover`): hover response for solid red controls.

### Secondary

- **Naver Green** (`naver`, `naver-hover`): the fixed mobile Naver booking action and its hover state. This identifies the service; it is not a second editorial accent.

### Neutral

- **Printed Black** (`ink`, `ink-hover`): main text, the PT consultation action, the dark program field, and the phone action; the lighter ink is an interactive dark hover.
- **Neutral Paper** (`paper`): body, sticky header, light buttons, and mobile contact-bar surface.
- **Paper Wash** (`wash`): the recovery/about field and map container.
- **Photo Ground** (`placeholder`): the photo loading ground, light-button hover, and quiet borders.
- **Rule Gray** (`divider`): profile/index dividers and disclosure closing rules.
- **Reading Gray** (`muted`, `secondary-text`): supporting information and longer secondary copy.
- **Reverse White** (`white`): text on ink, red, and service-green actions.

**The Service Color Rule.** Keep Naver green attached to Naver booking. General page emphasis remains black and red.

## Typography

**Display Font:** local Black Han Sans, falling back to Pretendard Variable and sans-serif. Load the supplied `/fonts/BlackHanSans-UI.ttf`; its implemented weight is normal (400).

**Body Font:** local Pretendard Variable, followed by Pretendard, platform sans fonts, and sans-serif. Load `/fonts/PretendardVariable.woff2` with its variable weight range.

**Character:** The display face is blunt and tightly packed. Pretendard keeps navigation, names, qualifications, and practical information clear. Preserve Korean words with `word-break: keep-all` and allow emergency wrapping.

### Hierarchy

- **Display:** the lead quotation uses the frontmatter's mobile clamp; desktop changes to `clamp(72px, 7.1vw, 96px)` with line-height `.94`. At widths below 360px it is `43px`. The quotation rotates `-4deg`; each semantic line is horizontally compressed to `.86`.
- **Headline:** section titles use the recorded fluid headline role. The lead service heading uses `clamp(24px, 7.4vw, 32px)` on mobile and `clamp(42px, 5vw, 66px)` from 768px, rotated `-3deg`. Trainer-section heading is `48px` on desktop.
- **Title:** facility captions use the title role. Trainer names are heavier reading type: `29px` on mobile and `27px` from 768px; the adjacent role is smaller and muted.
- **Body:** ordinary narrative sits around `15–16px` with open `1.7–1.85` line-height. Program and about copy stay near `38–43ch`.
- **Supporting:** captions, qualifications, and profile secondary lines use the supporting role.
- **Label:** action text uses the label role. The hero's paired consultation labels use the display family, reaching `27px` on desktop.

**The Speaker Rule.** Keep the large quotation as selectable semantic text with an adjacent attribution. The ink mask is a decorative layer, never an image replacement for the words.

## Layout

The common centered container has a maximum width of `1320px`, including its padding. Default horizontal padding is `24px`, then `40px` from 768px and `56px` from 1024px. Header, opening composition, and trainer section use `16px` side padding below 768px.

Use a single column for main content on mobile. From 768px, trainer profiles form three equal columns with a `22px` gap; programs use two equal columns with a `64px` gap; the facility grid uses two columns, with its final featured image spanning both. About and location use unequal two-column layouts. Standard sections use the section-mobile and section-desktop spacing tokens.

The two hero consultation actions remain equal columns at every viewport: a `7px` gap and `64px` minimum height on mobile; a `14px` gap, `86px` minimum height, and `16px 24px` padding from 768px. Their desktop group is capped at `900px`.

The header is sticky: `64px` high on mobile and `76px` from 768px. Desktop navigation replaces the menu control at 1024px. Below that breakpoint, reserve `67px + env(safe-area-inset-bottom)` beneath the document for the fixed contact bar. Anchor scrolling leaves room for the header.

Below 360px, tighten header gaps and consultation padding, hide consultation arrows, and keep the two consultation paths intact. Do not force the large-screen layout onto narrow screens.

## Elevation & Depth

The active page has no box-shadow vocabulary. Depth comes from full-width tonal fields, typography in front of the portrait, image crops, thin rules, and the sticky/fixed layers. Header and hero controls use stacking only where the composition or navigation requires it.

**The Flat Evidence Rule.** Let real photographs and type establish the hierarchy. Keep profile, program, and facility content flat rather than lifting it into repeated floating cards.

The lead quotation enters once over `.6s` with `cubic-bezier(.16,1,.3,1)`, moving only `5px` while retaining its rotation. Control background/color changes and the disclosure indicator use `.2s ease`. With reduced motion, disable animation, shorten transitions to `.01ms`, and use immediate anchor scrolling. Body sections do not depend on reveal animation.

## Shapes

Photographs and section fields are rectangular and unframed. Small controls use the control radius; paired consultations and fixed contact actions use the action radius. The U logo is a reusable vector silhouette rendered in one ink or reversed against a dark field.

Printed wear comes from the actual raster luminance mask imported by the hero, repeated at `640px 640px`. Apply it to the lead quotation lines and to the background pseudo-elements of the paired consultations. Keep button labels, icons, and focus outlines outside the mask. The short red underline is a decorative raster accent with empty alternative text.

Use thin one-pixel rules to organize profiles and service lists. Inline icons use the established `24×24` SVG viewBox, current color, rounded strokes, and a default `1.5` stroke width.

## Components

### Buttons

Direct, compact actions with a minimum height of `48px`; the frontmatter records the control shape and padding. The three implemented variants are red solid, black outline, and light reverse. Hover darkens the red, fills the outline with ink, or changes the light field to Photo Ground. Keep the optional arrow as inline SVG.

Keyboard focus uses a red `3px` outline with a `4px` offset. Do not introduce disabled, validation, or loading styles as though they already exist; the current page has no form fields.

### Paired consultations

Equal choices with distinct fills: red membership and ink PT. Each contains a line icon, a display label, a brief description, and an optional trailing arrow. Both open the confirmed booking destination. Their shared print mask belongs to the background pseudo-element, preserving legibility of the white contents.

### Trainer profiles and disclosures

Original color photos lead flat profiles. Use the `4 / 4.8` image ratio and preserve the supplied crop intent. A name, role, actual quotation, and short credentials precede a native `details / summary` disclosure.

The summary has a minimum height of `56px`, an ink top rule, and a light lower rule. A CSS plus becomes a minus when open, and the label changes from opening the full profile to collapsing it. Expanded credentials use grouped headings and readable lists. Focus sits inside the summary edge with a negative outline offset.

### Navigation

The header pairs the U mark with URBAN GYM and a small location subtitle. This location text is factual identity information. Desktop links are medium-weight reading type and turn red on hover. The booking action remains visible beside the mobile menu control.

The mobile menu uses `52px` minimum-height ruled rows, an explicit expanded state, Escape-to-close behavior, and scrollable overflow. Closing it restores document scroll. Keep the skip link hidden until keyboard focus.

### Mobile contact bar

A two-column fixed bar, visible below 1024px, gives Naver booking and telephone contact equal widths. Actions are `52px` high, green and ink respectively. The container includes safe-area padding and a top rule. Do not let it cover the final page content.

### Photography and map

Facility photos remain original color images of the actual location, with descriptive alternative text and deliberate object positions. Standard facility figures use `4/3`; the desktop feature uses `2.3`. The full-bleed opening facility photograph is a separate spatial beat.

The map lives in an iframe within the neutral map panel. Keep the textual address, direct Naver-map link, and existing parking inquiry copy accessible when the third-party map cannot render. The map caption remains outside the iframe.

## Do's and Don'ts

### Do:

- **Do** preserve original color trainer portraits, real facility photographs, and the vector U identity.
- **Do** keep membership and PT consultation equal in width and visual importance.
- **Do** use the supplied local display and body fonts with the observed role separation.
- **Do** keep the lead quotation selectable, attributed, and linked in meaning to the real profile.
- **Do** preserve keyboard focus, native profile disclosure, reduced motion, safe-area spacing, and a direct map fallback.
- **Do** use confirmed names, credentials, contact details, and service facts from the product sources.

### Don't:

- **Don't** replace real people or facilities with generated or stock evidence, fabricated testimonials, or invented performance claims.
- **Don't** desaturate the user-approved original color portraits.
- **Don't** turn printed wear into a treatment for body copy, profile credentials, or control labels.
- **Don't** add floating-card shadows, pill-shaped photo frames, or repeated reveal effects to the flat sections.
- **Don't** use Naver green as a general brand accent.
- **Don't** invent prices, discounts, parking terms, or round-the-clock consultation staffing from the confirmed 24-hour gym operation.
