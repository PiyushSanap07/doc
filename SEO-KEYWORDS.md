# SEO Keyword Map — Dr. Neha Shinde Skin Clinic, Nashik

Deliverable: keyword research + meta copy. **No code changed.** Apply manually or hand to dev.

---

## 1. Blocker: the domain does not exist

`drnehashinde.com` currently **fails DNS resolution**. Everything below assumes a real domain.

Until DNS is live, nothing here can rank. Placeholder used in this doc:

```
https://drnehashinde.com/
```

Replace every occurrence when the real domain is confirmed. Files that hardcode it:

| File | What's hardcoded |
|---|---|
| `index.html` | `canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD `url`/`image` |
| `public/robots.txt` | `Sitemap:` line |
| `public/sitemap.xml` | all 60 `<loc>` values |

---

## 2. The "best dermatologist in Nashik" question

Your choice: **soft claim in body copy only.** Two different things, keep them separate:

| | Status | Note |
|---|---|---|
| Targeting the *phrase* "best dermatologist in nashik" in titles/H1/URLs | **Fine** | It's a search term. Optimising for it is normal SEO. |
| Asserting "we are the best dermatologist" | **Avoid** | MCI Code of Medical Ethics prohibits superiority claims in medical advertising. |

So this doc **does target** those keywords, but the body copy uses softer trust language
(*leading dermatologist*, *experienced in*, *evidence-based*) rather than *best* / *no. 1* / *top*.

**Resolved in the NMC-compliance pass**:
- `index.html` — `<title>` and meta descriptions no longer use "best" / "leading"
- `portfolioData.js` — clinic subtitle is now neutral
- `Experience.jsx` — testimonial no longer claims "Nashik's best dermatologist"

The same changes also removed the keyword-stuffed title phrasing that read as spam to Google.

---

## 3. Keyword clusters (site-wide)

Organise internal links by cluster. Each cluster page links to its children.

| Cluster | Primary head term | Supporting terms |
|---|---|---|
| **Dermatologist** | dermatologist in nashik | skin specialist nashik, cosmetologist nashik, dermatologist near me, best skin doctor nashik, acne doctor nashik |
| **Hair & scalp** | hair loss treatment nashik | hair fall treatment, hair transplant nashik, PRP for hair, hair growth treatment, alopecia treatment nashik, female hair fall |
| **Pigmentation** | melasma treatment nashik | pigmentation removal, dark spots treatment, skin lightening nashik, hyperpigmentation, melasma doctor |
| **Acne & scars** | acne treatment nashik | acne scar removal, pimple treatment, scar treatment nashik, microneedling for acne, chemical peel for acne |
| **Anti-ageing** | anti ageing treatment nashik | skin tightening, anti aging doctor nashik, HIFU, thread lift, wrinkles treatment |
| **Lasers** | laser treatment nashik | laser hair reduction nashik, Q switched laser, fractional CO2 laser, laser resurfacing, tattoo removal nashik |
| **Injectables** | botox treatment nashik | fillers nashik, skin boosters, dermal fillers cost, anti wrinkle injections |
| **Procedures** | skin biopsy nashik | mole removal nashik, skin tag removal, wart removal, ear piercing nashik, dermatosurgery |

---

## 4. Page-level map

### Homepage `/`

- **Primary:** dermatologist in nashik
- **Secondary:** skin clinic nashik, aesthetic physician nashik, acne pigmentation hair treatment

**Meta title** (58 chars)
```
Dermatologist in Nashik | Dr Neha Shinde Skin Clinic
```

**Meta description** (157 chars)
```
Looking for a dermatologist in Nashik? Dr. Neha Shinde offers evidence-based care for acne, pigmentation, hair loss, lasers and injectables. Book a consultation.
```

**H1 (current, keep):** "The care that nurtures your skin, hair & confidence"

> Note: current H1 targets nobody. Consider an H1 that carries "dermatologist in Nashik".
> Soft-claim option: *Expert dermatology and aesthetic care in Nashik.*

---

### Core pages

| Page | Primary keyword | Meta title | Meta description |
|---|---|---|---|
| `/services` | skin treatments nashik | `Skin Treatments in Nashik \| Dr Neha Shinde Clinic` | `Explore 44 dermatologist-led treatments in Nashik — peels, facials, hair loss therapy, lasers, injectables and skin surgery. Tailored plans for every skin type.` |
| `/gallery` | clinic photos nashik | `Our Clinic & Results \| Dr Neha Shinde Nashik` | `Step inside our Nashik dermatology clinic and view our treatment rooms, laser suite and clinical approach to skin, hair and aesthetic care.` |
| `/contact` | book dermatologist nashik | `Book an Appointment \| Dermatologist in Nashik` | `Book your consultation with Dr. Neha Shinde, dermatologist and aesthetic physician in Nashik. Clinic address, timings and phone to book directly.` |
| `/blog` | skin care tips nashik | `Skin, Hair & Dermatology Blog \| Dr Neha Shinde` | `Practical dermatology guidance from Dr. Neha Shinde on acne, melasma, hair fall, laser hair reduction and anti-ageing — written for Nashik patients.` |

> `/contact` is **missing from `sitemap.xml`** — add it.

---

### Peels — 9 services

| Slug | Primary keyword | Meta title | Meta description |
|---|---|---|---|
| `acne-peel` | acne peel nashik | `Acne Peel in Nashik \| Acne Scar Treatment` | `Medical-grade acne peel treatment in Nashik to control breakouts, unclog pores and fade post-acne marks. 3–6 sessions, 30 minutes each.` |
| `glow-peel` | glow peel nashik | `Glow Peel in Nashik \| Brightening Facial Peel` | `Superficial glow peel in Nashik to brighten dull skin, even out tone and get instant radiance with no downtime. Ideal before weddings and events.` |
| `party-peel` | party peel nashik | `Party Peel in Nashik \| Pre-Event Skin Peel` | `Quick 15-minute party peel in Nashik for instant glow before weddings and functions. No downtime, no peeling — you can carry on the same day.` |
| `yellow-peel` | yellow peel nashik | `Yellow Peel in Nashik \| Melasma & Pigmentation` | `Yellow retinol peel in Nashik for melasma, sun damage and fine lines. Medium-depth formula that fades pigmentation and boosts collagen.` |
| `antiaging-peel` | anti ageing peel nashik | `Anti Ageing Peel in Nashik \| Wrinkle Treatment` | `Glycolic and lactic acid peel in Nashik to soften fine lines, fade age spots and stimulate collagen for firmer, younger-looking skin.` |
| `dermaplaning` | dermaplaning nashik | `Dermaplaning in Nashik \| Peach Fuzz Removal` | `Dermaplaning in Nashik to remove dead skin and peach fuzz for smoother texture and better product absorption. 30 minutes, no downtime.` |
| `phenol-peel` | phenol peel nashik | `Deep Phenol Peel in Nashik \| Skin Resurfacing` | `Deep phenol peel in Nashik for severe sun damage, deep wrinkles and scarring. Dramatic resurfacing by an experienced dermatologist, with guided aftercare.` |
| `scalp-peel` | scalp peel nashik | `Scalp Peel in Nashik \| Dandruff & Hair Fall` | `Scalp peel treatment in Nashik to clear dandruff, excess oil and product buildup. Creates a cleaner scalp for healthier, thicker hair growth.` |
| `body-peel` | body peel nashik | `Body Peel in Nashik \| Body Acne & Dark Patches` | `Body peel for back, arms and legs in Nashik — treats body acne, keratosis pilaris, dark patches and rough texture. 30–45 minutes per session.` |

---

### Facials — 6 services

| Slug | Primary keyword | Meta title | Meta description |
|---|---|---|---|
| `cleanup` | skin cleanup nashik | `Skin Cleanup in Nashik \| Blackhead Extraction` | `Professional skin cleanup in Nashik with deep cleansing, steaming and blackhead extraction. Monthly maintenance for congested, breakout-prone skin.` |
| `hydrafacial` | hydrafacial nashik | `Hydrafacial in Nashik \| Deep Cleansing Facial` | `Medical-grade hydrafacial in Nashik for instant hydration, pore cleansing and glow. Zero downtime — ideal for dull, dehydrated or congested skin.` |
| `medifacial` | medifacial nashik | `Medifacial in Nashik \| Customised Clinical Facial` | `Doctor-led medifacial in Nashik, customised to your skin type and concern using clinical-grade actives for acne, pigmentation and ageing.` |
| `oxygeno-facial` | oxygeno facial nashik | `Oxygen Infusion Facial in Nashik` | `Oxygen infusion facial in Nashik that boosts cell metabolism and delivers deep hydration for an instant natural glow. Perfect pre-event, no downtime.` |
| `vampire-prp-facial` | vampire facial nashik | `Vampire PRP Facial in Nashik \| Microneedling` | `Vampire PRP facial in Nashik combining microneedling with your own platelet-rich plasma to treat acne scars, pores and fine lines naturally.` |
| `fire-ice-facials` | fire and ice facial nashik | `Fire & Ice Facial in Nashik \| Resurfacing` | `Fire and Ice resurfacing facial in Nashik — glycolic and retinol resurfacing finished with a cooling hyaluronic layer. Visible glow, no downtime.` |

---

### Hair & scalp — 6 services

| Slug | Primary keyword | Meta title | Meta description |
|---|---|---|---|
| `hair-transplant` | hair transplant nashik | `Hair Transplant in Nashik \| Dr Neha Shinde` | `Hair transplant in Nashik for male pattern baldness, receding hairline and thinning crowns. Permanent, natural-looking results under local anaesthesia.` |
| `prp-injection-hair` | prp for hair nashik | `PRP for Hair Loss in Nashik \| Platelet-Rich Plasma` | `PRP injections for hair fall in Nashik — uses your own growth factors to reduce shedding and stimulate new growth. Natural, no risk of allergy.` |
| `gfc-injection` | gfc hair treatment nashik | `GFC Hair Treatment in Nashik \| Growth Factor` | `GFC injection in Nashik delivers a concentrated dose of growth factors to the scalp for severe hair fall and androgenetic alopecia. 3–4 sessions.` |
| `hair-botox` | hair botox nashik | `Hair Botox in Nashik \| Deep Hair Repair` | `Hair botox in Nashik repairs frizzy, dry and heat-damaged hair with a protein filler. Adds shine and volume for 2–4 months, no harsh chemicals.` |
| `micropigmentation-scalp` | scalp micropigmentation nashik | `Scalp Micropigmentation in Nashik \| SMP` | `Scalp micropigmentation in Nashik — non-surgical tattoo creating the look of fuller hair. Effective for bald patches, thinning and scar camouflage.` |
| `meso-hair` | mesotherapy for hair nashik | `Hair Mesotherapy in Nashik \| Scalp Treatment` | `Scalp mesotherapy in Nashik delivers vitamins and growth factors directly to the follicles to reduce hair fall and nourish new growth. 6–8 sessions.` |

---

### Energy-based devices — 7 services

| Slug | Primary keyword | Meta title | Meta description |
|---|---|---|---|
| `q-switch-laser` | q switched laser nashik | `Q-Switched Laser in Nashik \| Pigmentation` | `Q-switched laser in Nashik for melasma, dark spots and tattoo removal. Safely breaks down pigment without damaging surrounding skin.` |
| `laser-hair-reduction` | laser hair reduction nashik | `Laser Hair Reduction in Nashik \| Sessions & Cost` | `Laser hair reduction in Nashik — 6–8 sessions for lasting reduction on all body areas. Safe on Indian skin when settings are adjusted by a dermatologist.` |
| `rf-cautery` | skin tag removal nashik | `Skin Tag, Mole & Wart Removal in Nashik` | `RF cautery in Nashik to remove skin tags, moles and warts precisely with minimal scarring. Quick, largely bloodless and no stitches needed.` |
| `dermaroller` | dermaroller nashik | `Dermaroller Microneedling in Nashik \| Scars` | `Dermaroller microneedling in Nashik to treat acne scars, large pores and uneven texture. Stimulates collagen and boosts serum absorption.` |
| `fractional-co2-laser` | fractional co2 laser nashik | `Fractional CO2 Laser in Nashik \| Scar Resurfacing` | `Fractional CO2 laser in Nashik for deep acne scars, wrinkles and skin laxity. Advanced resurfacing with 1–2 weeks downtime and long-lasting results.` |
| `hifu` | hifu treatment nashik | `HIFU Treatment in Nashik \| Non-Surgical Face Lift` | `HIFU skin tightening in Nashik for sagging skin, jowls and neck laxity. Non-invasive face lift with no downtime — results build over 2–6 months.` |
| `lipolysis` | lipolysis nashik | `Lipolysis Treatment in Nashik \| Non-Surgical Fat Loss` | `Non-surgical lipolysis in Nashik for double chin, love handles and stubborn fat. Laser or radiofrequency body contouring with minimal downtime.` |

---

### Injectables — 8 services

| Slug | Primary keyword | Meta title | Meta description |
|---|---|---|---|
| `iv-glutathione` | iv glutathione nashik | `IV Glutathione in Nashik \| Skin Whitening Drip` | `IV glutathione infusion in Nashik for skin brightening and detoxification. Delivered straight into the bloodstream for far better absorption than creams.` |
| `botox` | botox treatment nashik | `Botox Treatment in Nashik \| Anti Wrinkle Injections` | `Botox in Nashik to smooth forehead lines, frown lines and crow's feet. 15-minute appointment, results in 4–6 days, lasts 3–6 months.` |
| `mesobotox` | mesobotox nashik | `Mesobotox in Nashik \| Pore & Oil Control` | `Mesobotox in Nashik reduces large pores and controls oil for a glass-skin finish without freezing your expression. 20–30 minutes, no downtime.` |
| `fillers` | dermal fillers nashik | `Dermal Fillers in Nashik \| Lip & Cheek Enhancement` | `Hyaluronic acid dermal fillers in Nashik to restore cheek volume, enhance lips and smooth deep folds. Results visible immediately.` |
| `profhilo` | profhilo nashik | `Profhilo in Nashik \| Skin Quality & Hydration` | `Profhilo bio-remodeling in Nashik for skin laxity, dehydration and fine lines. Stimulates your own collagen for firmer, radiant skin.` |
| `prp-injectable` | prp facial nashik | `PRP Skin Treatment in Nashik \| Platelet-Rich Plasma` | `PRP skin treatment in Nashik using your own growth factors to soften fine lines, brighten tone and improve under-eye circles naturally.` |
| `skin-boosters` | skin boosters nashik | `Skin Boosters in Nashik \| Deep Hydration Injections` | `Skin boosters in Nashik for dehydrated, dull, finely lined skin. Micro-dosed hyaluronic acid for real dewy glow rather than surface shine.` |
| `pdo-thread-lift` | pdo thread lift nashik | `PDO Thread Lift in Nashik \| Non-Surgical Face Lift` | `PDO thread lift in Nashik to lift sagging jowls, cheeks and neck without surgery. Immediate lift plus collagen stimulation over the following months.` |

---

### Other procedures — 8 services

| Slug | Primary keyword | Meta title | Meta description |
|---|---|---|---|
| `dermapen-microneedling` | dermapen microneedling nashik | `Dermapen Microneedling in Nashik \| Acne Scars` | `Dermapen microneedling in Nashik for acne scars, stretch marks and pores. Adjustable needle depth for precise, safe treatment. 4–6 sessions.` |
| `cosmetic-gynecology` | cosmetic gynaecology nashik | `Non-Surgical Cosmetic Gynaecology in Nashik` | `Discreet non-surgical cosmetic gynaecology in Nashik for vaginal laxity and intimate area concerns using laser and radiofrequency. Private and respectful.` |
| `nail-surgery` | nail surgery nashik | `Nail Surgery in Nashik \| Ingrown Toenail Treatment` | `Nail surgery in Nashik for recurring ingrown toenails and chronic nail infection under local anaesthesia. Permanent correction in 30–60 minutes.` |
| `dermatosurgery` | skin surgery nashik | `Dermatosurgery in Nashik \| Cyst & Mole Removal` | `Minor skin surgery in Nashik — cyst and lipoma removal, mole excision and scar revision under local anaesthesia in a sterile clinical setting.` |
| `old-scar-treatment` | scar treatment nashik | `Old Scar Treatment in Nashik \| Acne & Burn Scars` | `Treatment for old surgical, burn and acne scars in Nashik using subcision, microneedling, laser and fillers in one planned multi-modal plan.` |
| `skin-biopsy` | skin biopsy nashik | `Skin Biopsy in Nashik \| Mole Check by Dermatologist` | `Skin biopsy in Nashik for changing moles, non-healing ulcers and persistent rashes. Accurate diagnosis under local anaesthesia in 15–20 minutes.` |
| `ear-piercing` | ear piercing nashik | `Medical Ear Piercing in Nashik \| Dermatologist` | `Sterile medical ear piercing in Nashik using single-use devices. Safer than a jewellery counter for keloid-prone or infection-prone ears.` |
| `eyebrow-microblading` | eyebrow microblading nashik | `Eyebrow Microblading in Nashik \| Semi-Permanent Brows` | `Eyebrow microblading in Nashik for sparse, over-plucked or asymmetric brows. Natural hair-like semi-permanent strokes with a touch-up after healing.` |

---

### Blog posts — 6

| Slug | Primary keyword | Meta title | Meta description |
|---|---|---|---|
| `why-acne-happens-and-what-actually-clears-it` | what causes acne | `What Causes Acne & What Actually Clears It` | `Why acne keeps coming back, why scrubs make it worse, and how a dermatologist builds a plan that clears breakouts and fades marks.` |
| `melasma-why-it-comes-back-and-how-to-keep-it-away` | melasma treatment | `Melasma: Why It Keeps Coming Back \| Dermatologist` | `Melasma is driven by hormones, sun and heat. Why it returns after treatment, and the two-phase routine that keeps it away.` |
| `hair-fall-in-women-causes-and-doctor-backed-fixes` | hair fall in women | `Hair Fall in Women: Causes & Doctor-Backed Fixes` | `Shedding 50–100 strands a day is normal. The correctable causes of hair fall in women, and when to test ferritin and thyroid first.` |
| `botox-fillers-or-skin-boosters-which-one-do-you-need` | botox vs fillers vs skin boosters | `Botox vs Fillers vs Skin Boosters \| Which Do You Need?` | `The three most requested injectables solve three different problems. How to tell which one your skin actually needs.` |
| `dermatologist-morning-to-night-routine-for-humid-climate` | skincare routine for humid climate | `Dermatologist's Routine for Humid Weather \| Nashik` | `Humidity swells skin cells and congests pores. A dermatologist's morning-to-night routine for Nashik's monsoon months.` |
| `laser-hair-reduction-how-many-sessions-really` | laser hair reduction sessions | `Laser Hair Reduction: How Many Sessions Really` | `Why 6–8 spaced sessions are needed, why weekly appointments waste time, and why laser does not work on grey hair.` |

---

## 5. Schema.org additions

Current JSON-LD (`index.html:26`) is `Physician` only. For "dermatologist in nashik" you need
local signals. Add to the existing block:

```json
"@type": ["Physician", "MedicalClinic"],
"description": "Dermatologist and aesthetic physician in Nashik offering evidence-based care for acne, pigmentation, hair loss, laser treatments and injectables.",
"medicalSpecialty": "Dermatology",
"knowsAbout": ["Dermatology", "Cosmetic Dermatology", "Trichology", "Laser Medicine"],
"openingHoursSpecification": [{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
  "opens": "10:00", "closes": "19:00"
}],
"geo": { "@type": "GeoCoordinates", "latitude": "<FILL>", "longitude": "<FILL>" },
"priceRange": "₹₹",
"currenciesAccepted": "INR",
"availableLanguage": ["en", "mr", "hi"],
"sameAs": [
  "https://www.instagram.com/dr.nehashinde_dermacure/",
  "https://www.youtube.com/@DrNehaShinde"
]
```

Two more, ideally per service page:

- `MedicalProcedure` — name, description, bodySite, preparation, followup
- `FAQPage` — only if you add visible FAQ blocks (do not mark up hidden FAQ; Google ignores it)

**`geo` is the single highest-value field here** for local pack ranking. Get exact lat/long from Google
Business Profile and drop it in.

---

## 6. Technical fixes, in priority order

| # | Fix | File | Why |
|---|---|---|---|
| 1 | Register the domain + DNS | infra | Nothing ranks until the domain resolves |
| 2 | Per-page `<title>` / meta description | `index.html` + all pages | Currently all 51 pages ship **identical** title + description |
| 3 | Self-referencing canonical per page | `index.html:10` | Static canonical points every page to `/` — Google will treat service pages as duplicates |
| 4 | Fix `og:image` to a real URL | `index.html:17,23` | Points at `/images/doctor-hero.png` which doesn't exist |
| 5 | Add `/contact` to sitemap | `public/sitemap.xml` | Route exists but isn't listed |
| 6 | Add `geo` + `openingHours` + `sameAs` | `index.html` JSON-LD | Local pack ranking |
| 7 | Fix hero image aspect ratio | `Hero.jsx:96` | Declares 430×500 but `doctor.png` is 1086×1448 — causes layout shift |
| 8 | Drop `<meta name="keywords">` | `index.html` | Done — removed during the compliance pass |

**Note on #2 and #3:** this is a client-rendered React Router SPA with **zero** `document.title`
handling anywhere in `src`. React 19 (already installed) natively hoists `<title>` and `<meta>`
rendered anywhere in the tree to `<head>` — so this can be fixed with no new dependency, just a
`<title>` element per page component. Worth doing before any further content work.

---

## 7. Content & compliance checklist

Status after the NMC-compliance content pass. Items marked **TODO** need real details from the doctor before launch.

| # | Issue | Status |
|---|---|---|
| 1 | MBBS listed as "B.P. Koirala Institute" — a Nepal institution; looks like a placeholder | Fixed — replaced with `[ADD MBBS INSTITUTION]` placeholder (**TODO**) |
| 2 | MD institution just says "Post Graduate Institute" with no name | Fixed — replaced with `[ADD MD INSTITUTION]` placeholder (**TODO**) |
| 3 | No NMC/MCI registration number anywhere on the site | Removed — doctor does not have a number to display; no registration placeholder remains |
| 4 | "Best Dermatologist" claims (MCI ethics exposure) | Fixed in title, meta, doctor data, About and testimonials |
| 5 | Patient before/after gallery — confirm documented written consent exists | Fixed — patient results category removed from gallery |
| 6 | Skin boosters: blog says "under the skin", service says "into the skin" | Fixed — both now say "into the skin" |
| 7 | Typo `'Alexandrian'` → `'Alexandrite'` | Fixed |
| 8 | "Cutibacterium acnes — a bacteria" → "a bacterium" | Fixed |
| 9 | Redundant "scrubs … and physical scrubs" | Fixed |
| 10 | Placeholder titles "Clinical Result 1…5" | Fixed — removed with the patient results category |
| 11 | Unverified claims: "20+ Publications", "10+ Conferences", "5000+ Patients" | Fixed — replaced with verifiable qualification-based stats |
| 12 | Service descriptions with invented clinical specifics and absolute/superiority claims | Softened across `servicesData.js`; **still needs a dermatologist's sign-off** before launch |

---

## 8. What this doc does *not* cover

- Real search volume — no keyword tool was run. Volumes and difficulty are assumed.
- Competitor gap analysis for Nashik
- Backlink / `GBP` strategy (the actual local pack lever)
- Content after the first 6 blog posts
- Hindi/Marathi keyword sets — `availableLanguage` is listed in schema but no Marathi keywords mapped here
