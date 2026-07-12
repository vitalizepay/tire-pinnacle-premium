## Scope

Large multi-part update to the Qasr Al Bustan Tyres site. Preserve existing branding, hero video, header/footer, animations, and typography. Build in this order:

---

## PART 1 — Homepage

### 1. New Premium Banner (below Hero video)
- Create `src/components/sections/PremiumBanner.tsx`.
- Full-width dark banner using uploaded reference image (`user-uploads://image-8.png`) as background via Lovable Assets.
- Subtle dark overlay + gold accent eyebrow + large headline about durability/performance/safety for UAE roads + short subcopy + gold CTA "Explore Our Tyres" → `/tyres`.
- Fade-in animation using existing `useInViewAnimation` hook. Matches black/gold theme.

### 2. Header logo change
- In `src/components/Header.tsx`: remove the small logo image, keep only the wordmark "Qasr Al Bustan Tyres" — increase font size and let it breathe (larger text, single line, still responsive). Mobile menu logo removed too.

### 3. Remove sections from homepage
- Delete `FeatureCards` usage (Premium Truck Tyres / Fleet Management / Professional Fleet Support cards) from `src/routes/index.tsx`.
- Delete `CommercialTyres` usage from homepage (component file kept for possible reuse but removed from route).

### 4. Vehicle Categories section (homepage)
- Create `src/components/sections/VehicleCategories.tsx` with 7 premium cards: Passenger Car, SUV & 4×4, Commercial Van, Medium Truck, Heavy Truck, Bus, Off-road Buggy.
- Each card: AI-generated image (generated via imagegen), title, short description, gold hover animation (lift + glow + image zoom, consistent with existing card styling).
- Clicking a card navigates to `/tyres#<slug>` and scrolls to matching section.

### 5. Contact information update
- Update `src/data/site.ts` with new head office (Deira, Dubai), service/warehouse (Industrial Area C-14, Sharjah), email `qasralbustantyres@gmail.com`.
- Update `FindUs` / Footer to display both locations professionally with location icons, Directions and Maps links per location.

### 6. Floating contact buttons
- Update `src/components/FloatingActions.tsx`: use official WhatsApp SVG logo (inline SVG with brand green), Call, Instagram (link to `https://www.instagram.com/qasralbustan.tyres/`). Maintain premium spacing/responsiveness.

### 7. Multilingual (EN / AR / FA)
- Extend `src/contexts/LanguageContext.tsx`: add `"fa"` to `Lang`, add `fa` translations to every dict key (nav, hero, banner, categories, tyres page, contact, footer, forms, buttons).
- LanguageToggle becomes a 3-way cycle (EN → AR → FA) or dropdown; auto-set `dir="rtl"` for `ar` and `fa`.
- Persist to localStorage as before.

---

## PART 2 — New `/tyres` page

Create `src/routes/tyres.tsx` with same header/footer (root layout handles it) and matching theme.

### Structure
1. **Hero**: full-width AI-generated image of all vehicle types on a UAE highway with Dubai skyline + desert. Heading "Golden Horse Tyre Range" + subtitle. Dark overlay, gold accents.
2. **Category nav strip**: 7 gold chips/cards linking to in-page anchors (`#passenger-car`, `#suv-4x4`, `#commercial-van`, `#medium-truck`, `#heavy-truck`, `#bus`, `#offroad-buggy`) with smooth scroll.
3. **7 alternating sections** (image left/right). Each has:
   - AI-generated image
   - Title, description, best applications line
   - Sizes rendered as elegant gold chips (border, gold text, subtle glow)
   - Two buttons: Request Quote (opens mailto to `qasralbustantyres@gmail.com`), WhatsApp (opens site.whatsapp)
4. **Why Choose Golden Horse** — feature grid with animated gold icons (7 features listed).
5. **Need Help? CTA** — heading "Looking for the Right Tyre?" + subcopy + Call / WhatsApp / Request Quote buttons.

### Data
- Add `src/data/tyre-categories.ts` with the 7 categories, slugs, descriptions, and full size arrays as specified.

### SEO
- Route `head()` with title/description/og:*, canonical `/tyres`, og:url `/tyres`.

---

## Technical details

- All new copy goes through the `t()` dictionary so EN/AR/FA all render.
- Images generated via `imagegen--generate_image` into `src/assets/` as `.jpg`, imported directly.
- No new npm packages required.
- Smooth scroll via `scrollIntoView({ behavior: "smooth" })` in a small helper or CSS `scroll-behavior: smooth` already global.
- Keep `TyreSizes`, `FindTyres`, `WhyChooseUs`, `Testimonials`, `BrandMarquee`, `FindUs` sections on homepage (only remove the three specified).

## Final homepage order
Hero → PremiumBanner (new) → TyreSizes → VehicleCategories (new) → IntroStatement → ValueCards → WhyChooseUs → FindTyres → BrandMarquee → Testimonials → FindUs

## Out of scope
- No tyre search / filter box (explicitly excluded).
- No changes to existing hero video, header nav structure (aside from logo removal + wordmark sizing), footer aesthetics (only contact data), or animations.
