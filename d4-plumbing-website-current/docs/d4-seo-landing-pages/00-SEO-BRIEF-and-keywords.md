# D4 Plumbing — SEO Landing Pages Brief

## What this is

Five SEO landing pages targeting the top cities within 30 miles of Temple, GA. Each page is built to rank for **"plumber [city] GA"**, **"[city] plumber"**, and related local/service combinations. All pages share NAP (Name/Address/Phone), brand voice, and schema patterns — but the body content of each page is **unique and locally specific** so Google doesn't flag them as doorway pages.

---

## City selection (top 5)

Ranked by population and search demand within a 30-mile radius of Temple, GA 30179:

| # | City | Population (2024) | Distance | County | Why it makes the list |
|---|---|---|---|---|---|
| 1 | **Douglasville** | 43,419 | 12.7 mi E | Douglas | Largest city in service area, highest absolute search volume |
| 2 | **Carrollton** | 27,392 | 15.4 mi SW | Carroll | County seat, UWG, established market — already in site footer |
| 3 | **Villa Rica** | 20,095 | 6.9 mi E | Carroll/Douglas | Closest larger city — easy same-day promise, high volume |
| 4 | **Dallas, GA** | 15,291 | 11.1 mi N | Paulding | Paulding County seat, fastest growth, lots of new construction |
| 5 | **Bremen** | 7,426 | 9 mi W | Haralson | Closest western city, mostly older housing — high job-value mix |

**Cities considered and excluded:**
- **Hiram (5,661)** — Similar to Bremen in population, but search demand and housing diversity is lower; Bremen also gets us a stake in Haralson County. Worth a Page 6 if the budget grows.
- **Powder Springs / Rockmart / Cedartown** — Either at the edge of the 30-mile radius or have established local incumbents with strong rankings; better as Page 7-10.

---

## Primary keyword targets per page

| Page | Primary keyword | Secondary keywords | Long-tail targets |
|---|---|---|---|
| Villa Rica | plumber Villa Rica GA | Villa Rica plumber, plumbing Villa Rica | emergency plumber Villa Rica, water heater repair Villa Rica, drain cleaning Villa Rica, plumber near me (geo-triggered) |
| Douglasville | plumber Douglasville GA | Douglasville plumber, plumbing Douglasville | 24 hour plumber Douglasville, water heater Douglasville GA, sewer line repair Douglasville, slab leak Douglasville |
| Carrollton | plumber Carrollton GA | Carrollton plumber, plumbing Carrollton | emergency plumber Carrollton, water heater Carrollton GA, drain cleaning Carrollton, plumber near UWG |
| Dallas, GA | plumber Dallas GA | Dallas GA plumber, Paulding County plumber | water heater Dallas GA, plumber Seven Hills GA, emergency plumber Paulding County, plumber Riverwood Dallas GA |
| Bremen | plumber Bremen GA | Bremen plumber, Haralson County plumber | emergency plumber Bremen, water heater Bremen GA, drain cleaning Bremen, plumber Tallapoosa GA |

**Cross-page shared keyword themes** (rank-and-file, organic supporting content over time):
- "plumber near me" (geo-triggered automatically by Google)
- "24/7 emergency plumber"
- "free estimate plumber"
- "family-owned plumber West Metro Atlanta"
- "licensed plumber Georgia"

---

## Page structure (shared template)

Every city page follows this structure to maintain consistency and ranking pattern:

1. **H1** — Primary city + "plumber" keyword
2. **Subhead** — Trust signal (years in business + family-owned)
3. **Hero CTAs** — Click-to-call + estimate form
4. **Intro paragraph** — Primary keyword in first 100 words, location signal, NAP mention
5. **H2: Services** — H3 service blocks (water heater, drains, leaks, etc.)
6. **H2: Why us** — Trust/differentiation bullets
7. **H2: Neighborhoods served** — Hyper-local proof signal
8. **H2: Local plumbing realities** — Unique value content (avoids doorway-page penalty)
9. **H2: Same-day service** — Proximity + speed proof
10. **H2: FAQs** — 7-9 questions (powers FAQ schema + featured snippets)
11. **H2: Final CTA** — Phone, address, brand
12. **JSON-LD schema** — LocalBusiness/Plumber + FAQPage

**Target word count:** 1,500-2,000 words per page. All five pages hit this range.

---

## Schema strategy

Three schema types to deploy:

### 1. Organization schema (on homepage only, not city pages)
Keep top-level Organization markup on the homepage and About page. Don't duplicate it across city pages.

### 2. LocalBusiness/Plumber schema (on each city page)
Each city page gets its own JSON-LD `Plumber` schema with:
- Unique `@id` per page (e.g., `#business-villa-rica`)
- Same NAP (Temple, GA address — that's the actual physical location)
- `areaServed` set to the specific city
- `geo` coordinates of the **city center**, not the Temple shop

The full JSON-LD block is included at the bottom of each page file.

### 3. FAQPage schema (on each city page)
Build a `FAQPage` block from the FAQs already on each page. Each page has 7-9 questions — that maps to:
- Higher likelihood of FAQ rich results in SERP
- Featured snippet eligibility for "how fast can a plumber..." and "are you licensed in..." queries

---

## Avoiding the doorway-page penalty

Google penalizes service-area pages that are just copy-pasted with city names swapped. To stay clear of this, each page in this set has:

- **40-60% unique-value content** — neighborhood lists, local water utility names, county-specific permitting notes, housing-stock history that's actually different per city
- **City-specific local references** — Mirror Lake/Fairfield Plantation for Villa Rica; Chapel Hill/Mt. Carmel/Arbor Place for Douglasville; Adamson Square/UWG for Carrollton; Seven Hills/Riverwood for Dallas, GA; Sewell Mill/Tallapoosa Street for Bremen
- **Different service emphasis per page** — Bremen and Carrollton lean into repipes (older housing); Dallas, GA leans into new construction and builder-grade fixture replacement; Villa Rica leans into Mirror Lake-era homes
- **Truly useful information** — water utility notes, county permit nuance, housing-decade plumbing realities — not just marketing fluff

---

## NAP consistency (critical)

Every page must use the exact same NAP block:

```
D4 Plumbing
902 McBrayer Road
Temple, GA 30179
(770) 562-0406
```

Phone format in `tel:` links must be `tel:+17705620406`.
Phone format in schema must be `"+17705620406"`.
Phone format in display copy must be `(770) 562-0406`.

**Do not** localize the NAP to each city. The physical business is in Temple. The `areaServed` schema field is what tells Google you serve other cities.

---

## URL & sitemap

All five new URLs:

- `/plumber-villa-rica-ga/`
- `/plumber-douglasville-ga/`
- `/plumber-carrollton-ga/`
- `/plumber-dallas-ga/`
- `/plumber-bremen-ga/`

Add all five to `sitemap.xml` with `<priority>0.8</priority>` and submit the updated sitemap to Google Search Console.

Set self-referential canonical tags on each page (already specified in the meta tag blocks).

---

## Internal linking plan

**From the homepage**, add a "Service Areas" or "Where We Work" section that links to all 5 city pages.

**From the Services page**, link to all 5 city pages in a "Local Coverage" footer block.

**From each city page**, link to the other 4 city pages in a "We Also Serve" block (link anchors specified in each page file).

**From the footer (site-wide)**, list all 5 cities as quick links.

This builds the topical cluster Google needs to understand that D4 Plumbing is the authoritative West Metro Atlanta plumbing site.

---

## Google Business Profile coordination

These pages will only rank as well as your **Google Business Profile** allows. Make sure:

- GBP is verified at 902 McBrayer Road, Temple, GA 30179
- Service areas in GBP include Temple, Villa Rica, Douglasville, Carrollton, Dallas (GA), Bremen — match the page set
- Primary category: **Plumber**
- Add **photos taken in each of the 5 cities** over the next few months — geo-tagged Google Business Profile photos boost local pack rankings
- Encourage customers to leave reviews that mention the city they're in (this is a strong local ranking signal)

---

## Reviews & testimonials (to add post-launch)

Each city page is built with a placeholder for testimonials. Within 60-90 days of launch, swap in 2-3 real testimonials per city, each with:

- Customer first name + last initial
- City + neighborhood
- Service performed
- Wrap each in `Review` schema inside the parent `LocalBusiness` schema

This turns the pages from "good" to "very hard to beat" in local rankings.

---

## Antigravity build instructions (paste this to Antigravity)

> Build 5 SEO landing pages using the markdown files in this folder. For each file:
>
> 1. Use the H1, subhead, and body content exactly as written.
> 2. Use the meta tags exactly as written (title, description, keywords, canonical, Open Graph).
> 3. Embed the JSON-LD schema block in the `<head>`.
> 4. Build a second JSON-LD `FAQPage` block from the FAQ section of each page and embed it in the `<head>`.
> 5. Use the existing site template (header, footer, branding, color scheme).
> 6. Convert hero CTAs to actual buttons: primary = `tel:+17705620406`, secondary = link to existing estimate form.
> 7. Add a "We Also Serve" footer block to each page linking to the 4 sibling city pages.
> 8. Use the URL slugs exactly as specified.
> 9. Add all 5 URLs to `sitemap.xml` with priority 0.8 and lastmod of today.
> 10. After build, submit the updated sitemap to Google Search Console.
> 11. Use real photos where placeholders are noted. Every image alt tag must include the city name + the service shown.
> 12. Ensure every page is mobile-responsive and passes Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms).

---

## Post-launch checklist (week 1)

- [ ] All 5 pages published
- [ ] Sitemap updated & submitted to Google Search Console
- [ ] Each URL manually requested for indexing in GSC
- [ ] LocalBusiness + FAQPage schema validated in Google's [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Homepage links to all 5 city pages
- [ ] Footer links updated across all site pages
- [ ] Google Business Profile service areas updated to match
- [ ] PageSpeed Insights run on each new URL — fix anything red

## Post-launch checklist (months 1-3)

- [ ] Real testimonials added per city (2-3 each)
- [ ] Real city-specific project photos added (geo-tagged where possible)
- [ ] GBP photos uploaded with location metadata for each city
- [ ] Citation building: Yelp, Nextdoor, Yellow Pages, BBB — all listing matching NAP and listing the 5 cities as service areas
- [ ] Monitor rankings weekly in GSC for "plumber [city] GA" keywords
- [ ] Expand to Hiram, Powder Springs, or other secondary cities once top 5 are ranking
