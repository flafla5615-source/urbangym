---
name: "Urban Gym Pyeonggeo"
description: "Architectural open house: real gym photography, restrained Korean typography and clear contact actions."
colors:
  ink: "#202627"
  warm-50: "#ffffff"
  warm-100: "#f3f5f2"
  warm-200: "#e8ece8"
  warm-300: "#cdd4cf"
  warm-400: "#8b9790"
  warm-500: "#59645f"
  warm-600: "#49544f"
  accent: "#344d43"
  accent-soft: "#b5c5bd"
  mineral: "#dce5df"
  action-hover: "#3a5146"
  tab-hover: "#e0e7e1"
typography:
  display:
    fontFamily: "\"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, \"Apple SD Gothic Neo\", sans-serif"
    fontSize: "clamp(48px, 5.25vw, 78px)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "\"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, \"Apple SD Gothic Neo\", sans-serif"
    fontSize: "clamp(32px, 3.3vw, 48px)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  title:
    fontFamily: "\"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, \"Apple SD Gothic Neo\", sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "\"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, \"Apple SD Gothic Neo\", sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "\"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, \"Apple SD Gothic Neo\", sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.7
  label-small:
    fontFamily: "\"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, \"Apple SD Gothic Neo\", sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.7
  navigation:
    fontFamily: "\"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, \"Apple SD Gothic Neo\", sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
  wordmark:
    fontFamily: "Manrope, \"Pretendard Variable\", Pretendard, sans-serif"
    fontSize: "21px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  tab:
    fontFamily: "\"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, \"Apple SD Gothic Neo\", sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  flat: "0px"
spacing:
  detail: "8px"
  control-block: "16px"
  content: "24px"
  grid: "32px"
  layout: "40px"
  heading-bottom: "56px"
  desktop-gutter: "64px"
  section-mobile: "68px"
  section-tablet: "84px"
  section-desktop: "112px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-50}"
    typography: "{typography.label}"
    rounded: "{rounded.flat}"
    padding: "16px 24px"
  button-dark-hover:
    backgroundColor: "{colors.action-hover}"
  button-white:
    backgroundColor: "{colors.warm-50}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.flat}"
    padding: "16px 24px"
  button-white-hover:
    backgroundColor: "{colors.mineral}"
  text-action:
    typography: "{typography.label}"
    rounded: "{rounded.flat}"
    padding: "13px 0"
  facility-tab:
    textColor: "{colors.warm-600}"
    typography: "{typography.tab}"
    rounded: "{rounded.flat}"
    padding: "12px 24px"
  facility-tab-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-50}"
  facility-tab-hover:
    backgroundColor: "{colors.tab-hover}"
  header-navigation:
    backgroundColor: "{colors.warm-50}"
    textColor: "{colors.ink}"
    typography: "{typography.navigation}"
  trainer-disclosure:
    textColor: "{colors.ink}"
    typography: "{typography.label-small}"
    rounded: "{rounded.flat}"
  program-row:
    rounded: "{rounded.flat}"
    padding: "42px 0"
  mobile-contact:
    backgroundColor: "{colors.warm-50}"
    textColor: "{colors.ink}"
    typography: "{typography.label-small}"
    padding: "10px 16px calc(10px + env(safe-area-inset-bottom, 0px))"
---

# Design System: Urban Gym Pyeonggeo

## Overview

**Creative North Star: "Architectural open house"**

Urban Gym is presented as a real place to enter and inspect. Broad photographs, clean Korean headings and generous circulation take their character from the gym's white interiors, dark equipment and mineral-green furnishings. The interface feels like restrained architectural signage: direct, spacious and easy to follow.

White and pale surfaces keep the page open, while graphite anchors text, selected states and contact actions. Rectangular image frames, thin rules and quiet controls leave the actual facility and supplied portraits in charge. The approved world is recorded from the finished homepage; DESIGN.reference.md is a reference study, not the implemented system.

**Key Characteristics:**
- Real facility photographs and supplied portraits carry the visual identity.
- Pretendard carries Korean content; Manrope gives the Latin wordmark and functional metadata a distinct voice.
- Wide rectangular images, ruled rows and square actions establish the form language.
- White, graphite and mineral surfaces create depth without lifting the main page into cards.
- Responsive single-column flow retains a persistent route to membership and PT enquiries.

Source of truth: the rendered `app/page.tsx` route, `app/globals.css`, `app/layout.tsx` and the components imported by that route. Desktop and mobile hero captures in `.impeccable/review/` confirm the photographic scale, type relationship and square controls. This record follows the approved direction in `.impeccable/urban-direction.md`.

## Colors

The palette echoes white interiors, graphite equipment and quiet mineral-green furnishings. The frontmatter owns exact color values; the existing `warm-*` names are retained even though these are neutral-to-green greys.

### Primary

- **Graphite** (`ink`): main text, selected facility tabs, dark actions and the final contact field.
- **Deep mineral** (`accent`): restrained link-hover emphasis and profile-history group labels.
- **Action green** (`action-hover`): the hover surface of the dark rectangular action.

### Neutral

- **White** (`warm-50`): page ground, header, inverse text and light actions.
- **Gallery ground** (`warm-100`): facility and footer backgrounds.
- **Pale stone** (`warm-200`): image loading ground, caption band, mobile booking action and light separators.
- **Fine rule** (`warm-300`): repeated dividers and tab underlines.
- **Muted mineral** (`warm-400`): small list markers and the scrollbar thumb.
- **Secondary text** (`warm-500`): descriptive copy, captions and supporting information.
- **Reading grey** (`warm-600`): longer descriptive text and inactive tab labels.
- **Selection sage** (`accent-soft`): text-selection background.
- **Mineral wash** (`mineral`): the broad philosophy section and white-action hover.
- **Tab wash** (`tab-hover`): inactive facility-tab hover.

**The Graphite Anchor Rule.** Use graphite for the strongest reading and action anchors. Mineral surfaces support the photographs and quiet sections; they do not compete with contact actions.

The sidecar's tonal strips are synthesized inspection aids, not additional colors shipped by the page.

## Typography

**Display Font:** Pretendard Variable, with the source fallback stack recorded in the frontmatter.  
**Body Font:** Pretendard Variable, using the same Korean-capable stack.  
**Latin Identity Font:** Manrope, loaded through `next/font`, with Pretendard fallback.

**Character:** Korean text remains calm and clear, with semibold headings rather than heavy sports-poster lettering. The tighter Latin wordmark provides a compact signature without changing the headline voice.

### Hierarchy

- **Display:** the hero headline uses the frontmatter display role. At widths up to 1099px it is 64px; up to 700px it becomes `clamp(41px, 10.8vw, 66px)`.
- **Headline:** standard section headings use the frontmatter headline role. On small screens they become 34px, then 31px below 360px. Recovery, philosophy and contact have local size adjustments to suit their split layouts.
- **Title:** program titles use the title role. Trainer names use the same semibold, tight-tracked character at 27px desktop and 26px mobile.
- **Body:** default reading text uses the body role. Supporting descriptions commonly use 15px, with line heights between 1.85 and 1.9; section introductions are capped at 52ch and program descriptions at 42ch.
- **Label:** actions use the label role. Navigation is lighter; disclosure and mobile-contact labels use the smaller semibold role.
- **Wordmark:** the Latin brand uses the wordmark role, reducing to 19px at 1250px and below. The Korean branch line remains in Pretendard.
- **Functional metadata:** Manrope is also used for small Latin program translations, photo counters and the contact number. These remain subordinate to Korean content.

**The Korean First Rule.** Set Korean headlines in the content family at a restrained semibold weight. Reserve Manrope for the Latin wordmark, short Latin metadata and tabular counters.

Body copy uses `word-break: keep-all` and `overflow-wrap: break-word`. Section headings use balanced wrapping; the hero preserves its deliberate line break.

## Layout

The content container is centered, capped at 1488px including its gutters. Horizontal padding steps from 64px to 40px at 1250px, 24px at 800px, and 20px below 360px. Standard section padding is 112px, then 84px at 1099px and 68px at 700px. These are observed layout roles, not a fabricated universal spacing scale.

Section introductions use a 1.2:1 grid with a 64px gap and a 56px bottom margin. They stack at 800px, with a 24px gap and 36px bottom margin. The program list uses title, description and action columns; actions move below descriptions at 800px and the entire row becomes one column at 700px. The three-column trainer layout becomes one column at 700px.

The hero spans the viewport width. Its copy and bottom action group align to the content gutters. At desktop the photograph has a 610px minimum height and a viewport-related height capped at 760px; mobile keeps a generous photograph with a 590px minimum. Facility photography uses a wide frame, while trainer portraits use a 4:5 ratio. Image crops are individually set with `object-position`, not stretched.

The header is sticky and measures 88px high on desktop, 76px below 1100px, and 72px at 700px. Below 1100px the navigation becomes a button-controlled menu and a fixed bottom contact strip appears. The strip includes safe-area padding, paired with page-bottom clearance so content remains reachable. Horizontal facility-tab scrolling stays inside the tab region.

The sidecar records every CSS breakpoint that changes the main layout. The map integration additionally uses Tailwind's 640px and 1024px layout variants.

## Elevation & Depth

The main page has no card shadows. It gains depth from the photography itself, light and dark section planes, restrained rules and spacing. The hero uses two dark photographic overlays to preserve white-text contrast while retaining the room's windows and equipment. This is an image-legibility treatment, not a reusable decorative surface.

**The Flat Frame Rule.** Main page surfaces stay flat. Establish hierarchy through photographs, tonal sections, whitespace and thin rules rather than repeating elevated cards.

The retained Naver map marker has its own rounded, shadowed treatment. That existing integration exception is not a page-surface elevation token, so the sidecar's normative shadow list is empty.

## Shapes

Actions, tabs, main content panels and photographs have square corners. Thin horizontal rules organize information; they replace the need for a raised enclosure around each item. The circular outline in the U monogram is an identity mark, not a general container shape.

Inline SVG icons use a 24-unit view box, current-color strokes and rounded stroke ends. Action arrows render at 21px; header-contact arrows at 18px; mobile-contact icons at 19px. Icons support real actions and disclosures.

## Components

### Buttons

Rectangular actions feel like clear signage.

- **Dark:** graphite ground with white text, using the frontmatter padding and label role. Minimum height is 58px; content and arrow are separated by 32px.
- **White:** white ground and graphite text, used over the hero photograph and dark contact field. Hover shifts to mineral wash.
- **States:** color transitions take 180ms. Global keyboard focus uses a 3px mineral-green outline with a 5px offset; on dark hero/contact fields it becomes a pale outline.
- **Mobile hero:** action height becomes at least 53px with 13px text and narrower inline padding. The page does not force every button to use this local variant.

### Text Actions

An underlined text action is the quieter recurring route. It has a 48px minimum target height, bottom border, 28px text-to-icon gap and the recorded block padding. Only its arrow moves on hover, translating 4px over 180ms. The hero reservation link uses a related dedicated underline treatment.

### Facility Tabs

These are functional tabs, not category badges. Inactive tabs carry reading-grey text and a fine bottom rule; the selected tab has a graphite fill and white text. Hover uses tab wash. The focus outline moves inside the tab so it remains visible within the scrolling row.

Only the active panel is shown. Arrow keys, Home and End move focus and selection; inactive tabs leave the regular tab order. The photograph reveals with a restrained 500ms right-edge clip animation using `cubic-bezier(.16,1,.3,1)`. Reduced-motion preference disables it.

### Ruled Rows / Containers

Programs use flat, ruled rows with a stronger top border on the list and quieter dividers between rows. Their desktop columns distinguish the program title, explanation and action without a card background. Introductory facts use the same rule-first approach in a three-column arrangement that stacks on mobile.

### Trainer Profiles and Disclosures

Portraits are rectangular, followed by name, role, the person's own words and a short history. A native `details` disclosure holds the complete profile. The summary is a 58px minimum target between thin rules; its arrow rotates from down to up and its text changes when open. The native disclosure provides the interactive state without a decorative container.

### Navigation

The white sticky header has a pale bottom rule. Latin identity sits to the left, understated Korean section links occupy the center, and the contact action sits to the right. Desktop links underline on hover. The mobile menu uses full-width ruled rows; its toggle exposes expanded state, Escape closes it and returns focus, and crossing to desktop closes it.

### Mobile Contact Strip

Two square actions stay visible below 1100px: a graphite membership/PT action and a pale booking action. Each has a 48px minimum target; the strip uses a 1.15:1 split and safe-area-aware padding. Its previews in the sidecar show the control itself without fixing it to the preview canvas.

### Fields

The shipped homepage has no input or form-field primitive. None is invented in this record.

## Do's and Don'ts

### Do:

- **Do** use the actual gym photographs and supplied trainer portraits, with deliberate object-position crops.
- **Do** keep square actions, large rectangular image frames and fine dividers as the shared form language.
- **Do** use the recorded display and headline roles with balanced Korean line breaks.
- **Do** retain visible focus, keyboard tab navigation, native trainer disclosures and reduced-motion behavior.
- **Do** preserve the mobile contact strip's safe-area spacing and matching page-bottom clearance.

### Don't:

- **Don't** introduce decorative eyebrows above the page's Korean section headings.
- **Don't** replace real facility evidence with generated gym imagery.
- **Don't** turn the main page into repeated rounded, shadowed icon cards.
- **Don't** promote the unused legacy pill-button component or the scoped map-widget styling into the new page system.
- **Don't** add ambient scroll reveals, parallax or image zoom to the current photographic surfaces.

Not canonized or repaired: unused legacy `Button`, `Audience`, `Reveal` and `SectionHeading` patterns; the retained map marker's rounded shadow; and the map loading/error fallback's pill link and glyph arrow. These are unmounted legacy code or a scoped integration exception, not durable rules for new surfaces. This documentation pass changes no frontend behavior.

