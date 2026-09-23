# Nalar Ruang

Build the NalarRuang landing page from scratch. Follow this exactly, it is based directly on a real screenshot of thinkpolicy.id, do not deviate into a generic AI template.

=== BANNED PATTERNS ===

No gradient backgrounds anywhere, especially no purple, blue, or pink gradients. Every background is one flat solid color or a real photograph.

No browser window mockup cards, no fake URL bars, no traffic light dots, no floating UI panel placed on top of a fake map or fake screenshot.

No headline with part of the words colored differently as a highlight effect. Every headline is one solid color.

No two column hero with text on one side and a product mockup card on the other side.

No glassmorphism, no blurred translucent panels.

No emoji anywhere.

No em dash or en dash characters in interface text, use a period or comma instead.

No decorative starburst shapes, no stickers, no 3D cartoon illustration, no rotated or tilted cards.

=== PROJECT ===

NalarRuang is a WebGIS that helps people find their ideal place to live in Jabodetabek based on lifestyle personas: Commuter, Driver, Social and Vibe, Zen. Core features: persona onboarding, a six layer interactive map called Visual Explorer, Requirement Search producing Top 3 recommendations from spatial intersection, Smart Point Inspector with Persona Grading on a 0 to 3 star scale, and a Commute Simulator. No login, no accounts, only public secondary data such as OpenStreetMap, Overpass API, InaRISK, and ATR/BPN. Scope is Jabodetabek only.

=== TECH ===

React, Vite, TypeScript, Tailwind, react-router. Routes: "/" for this landing page, "/app" for the map app, a plain placeholder page for now with the text Segera hadir. Animation: GSAP with ScrollTrigger for subtle fade and slight upward slide reveals only. Icons: lucide-react used sparingly. Copy language: professional plain Bahasa Indonesia, no slang, no emoji, no dash punctuation.

=== TYPOGRAPHY ===

Load two Google Fonts. Fraunces for large section headlines, used at a serif elegant weight, given generous size and tight line height. Inter for navigation, body text, labels, and buttons. Never mix these roles, headlines always use Fraunces, everything else always uses Inter.

=== COLOR SYSTEM ===

Background: warm off white, hex FAF9F6.

Alternate section background: soft cream, hex F1EEE6.

Dark section background: solid deep navy, hex 0B1E3D, flat, no gradient.

Primary text on light background: near black, hex 1A1A1A.

Primary text on dark background: off white, hex FAF9F6.

Secondary text: gray, hex 5B5B5B.

Accent: one solid navy blue, hex 1B3A6B, used for buttons and small highlights only.

Diagram colors, used only inside the concept diagram, muted earth tones: terracotta orange hex C2703D, olive green hex 6B7A4F, deep navy hex 1B3A6B.

Persona indicator colors used only as a small dot or thin left border on cards, never as a card background: Commuter blue, Driver burnt orange, Social and Vibe deep rose, Zen forest green.

Define all colors, radii, shadows, and spacing in one Tailwind config file.

=== SHARED COMPONENT STYLE ===

Pill buttons, fully rounded corners, solid flat fill, plain text label, small icon allowed to the right of the text such as an arrow icon inside a small circle, matching the reference screenshot style of buttons like Watch on Youtube or Read the Substack.

Cards: rectangular with small border radius up to 12px, flat white or cream fill, no border needed, use a very soft shadow only if needed for separation.

Small eyebrow labels: plain small caps text, centered above section headlines, no line or dash decoration in front of them.

=== PAGE STRUCTURE ===

1. Navbar

White background, thin bottom border. Left side plain bold text wordmark NalarRuang. Center or right side plain text nav links: Cara Kerja, Persona, Layer Peta, FAQ. Right side one small pill badge labeled Baru linking to the FAQ or a highlights section, followed by one solid navy pill button with plain text Mulai Cari Hunian.

2. Hero, full bleed real photograph

A full width, tall section using one real looking photograph of a Jabodetabek street or aerial cityscape as the actual background image, with a dark gradient overlay fading in from the bottom for text legibility. Bottom left of the image: a plain small caps label reading Platform Pencarian Hunian. Below it, a large Fraunces headline in white: Mencari Hunian, Membaca Kota. Below that, one small plain text link in white with a small arrow icon: Baca ceritanya.

Directly under the hero image, add a thin solid navy bar containing four short plain text items separated by generous spacing, representing quick highlights: Visual Explorer, Requirement Search, Smart Point Inspector, Commute Simulator. Include the word Scroll in small caps on the far right of this bar.

3. Mission statement, cream background, centered content

A centered Fraunces headline: Peta yang memahami cara hidupmu.

Below it, a centered paragraph in Inter, medium width, describing that NalarRuang combines spatial data and lifestyle preference to help people choose housing with evidence, not guesswork.

Below the paragraph, a horizontal row of four or five real looking photographs of city and neighborhood scenes, arranged overlapping each other slightly with alternating vertical offset, like a filmstrip, using rounded corners on each photo.

4. Impact numbers, cream background

A row of four white cards, each with a large bold number and a short caption underneath: 6 Layer Data, 4 Persona Gaya Hidup, Top 3 Rekomendasi, 100 Persen Data Publik.

5. Concept section, off white background

Small caps label above: Kerangka Persona NalarRuang.

Centered Fraunces headline: Empat cara memandang satu kota.

Below it, one large rounded card with a soft cream background containing a simple diagram of four overlapping circles, each labeled with one persona name, Commuter, Driver, Social and Vibe, Zen, using the muted earth tone colors defined above, similar in spirit to a Venn diagram, showing that personas can overlap.

6. Tiga fitur utama, off white background

Small caps label: Fitur Utama.

Centered Fraunces headline: Tiga cara menjelajah.

Below it, a grid of three cards, each with one real looking preview image, a bold title, and one or two sentences of description, for Requirement Search, Smart Point Inspector, and Commute Simulator. Each card ends with a plain text link with a small arrow icon reading Pelajari lebih lanjut.

7. Dark section, solid deep navy background

Small caps label in light gray: Jelajahi Peta.

Centered Fraunces headline in white: Enam layer, satu kota.

Below it, a horizontal row of three small preview thumbnails representing different map layers, each with a short caption underneath in light gray text.

Below the thumbnails, one white pill button with plain text and a small arrow icon: Lihat Semua Layer.

Further down within the same dark section, a second row for Data Terbuka, showing four small plain text or logo style items in light gray: OpenStreetMap, Overpass API, InaRISK, ATR/BPN, followed by one white pill button with plain text: Pelajari Sumber Data.

8. Coba cepat, off white background

Small caps label: Contoh Data.

Centered Fraunces headline: Klik, nilai, baru yakin.

Below it, one centered white card with a thin light border showing star ratings for the four personas for one example location, a toggle between Titik and Wilayah, and a short summary sentence that updates based on the toggle.

9. FAQ, off white background

Small caps label: Pertanyaan Umum.

Simple accordion list with thin dividers, plus or minus icon on the right of each question. Questions: Datanya dari mana, Perlu login atau tidak, Apakah preferensi persona disimpan, Seberapa akurat skornya, Apa cakupan wilayahnya.

10. Closing CTA, solid deep navy background

Centered Fraunces headline in white: Siap membaca kotamu sendiri.

Below it, one solid off white pill button with dark text: Mulai Cari Hunian.

11. Footer, solid deep navy background, matching the reference footer layout

Left side, small caps label Hubungi Kami, followed by a short fictional address style line for the project such as Sekolah Vokasi IPB, Bogor, Jawa Barat, Indonesia.

Middle, small caps label Kontak, followed by two lines, Kerja Sama and Media, each with a placeholder email style text.

Right side, small caps label Ikuti, followed by a row of small plain social icons.

Bottom of the footer, a thin divider line, then plain small text with the wordmark and a one line disclaimer that scores and recommendations are estimates from public secondary data.

=== MOTION ===

GSAP ScrollTrigger for subtle fade combined with a small upward slide, staggered slightly for items inside a row. No bouncing, no spinning, no looping animation. Respect prefers-reduced-motion.

=== QUALITY ===

Fully responsive across desktop, tablet, and mobile. AA text contrast everywhere, especially white text over the hero photograph and dark navy sections. All interactive elements keyboard focusable with a visible focus ring. Semantic HTML headings in order. SEO meta title NalarRuang, Cari Hunian Sesuai Gaya Hidup di Jabodetabek, meta description, Open Graph tags. Organize code with one component per section, a separate constants file for copy, and a separate design tokens file. Do not add authentication or a backend in this pass.

Before finishing, compare the output section by section against this specification and confirm the hero uses one full bleed photograph with no mockup card, confirm no headline has partial color highlighting, and confirm every button and card uses a flat solid color with no gradient.Build the NalarRuang landing page from scratch. Follow this exactly, it is based directly on a real screenshot of thinkpolicy.id, do not deviate into a generic AI template.

=== BANNED PATTERNS ===

No gradient backgrounds anywhere, especially no purple, blue, or pink gradients. Every background is one flat solid color or a real photograph.

No browser window mockup cards, no fake URL bars, no traffic light dots, no floating UI panel placed on top of a fake map or fake screenshot.

No headline with part of the words colored differently as a highlight effect. Every headline is one solid color.

No two column hero with text on one side and a product mockup card on the other side.

No glassmorphism, no blurred translucent panels.

No emoji anywhere.

No em dash or en dash characters in interface text, use a period or comma instead.

No decorative starburst shapes, no stickers, no 3D cartoon illustration, no rotated or tilted cards.

=== PROJECT ===

NalarRuang is a WebGIS that helps people find their ideal place to live in Jabodetabek based on lifestyle personas: Commuter, Driver, Social and Vibe, Zen. Core features: persona onboarding, a six layer interactive map called Visual Explorer, Requirement Search producing Top 3 recommendations from spatial intersection, Smart Point Inspector with Persona Grading on a 0 to 3 star scale, and a Commute Simulator. No login, no accounts, only public secondary data such as OpenStreetMap, Overpass API, InaRISK, and ATR/BPN. Scope is Jabodetabek only.

=== TECH ===

React, Vite, TypeScript, Tailwind, react-router. Routes: "/" for this landing page, "/app" for the map app, a plain placeholder page for now with the text Segera hadir. Animation: GSAP with ScrollTrigger for subtle fade and slight upward slide reveals only. Icons: lucide-react used sparingly. Copy language: professional plain Bahasa Indonesia, no slang, no emoji, no dash punctuation.

=== TYPOGRAPHY ===

Load two Google Fonts. Fraunces for large section headlines, used at a serif elegant weight, given generous size and tight line height. Inter for navigation, body text, labels, and buttons. Never mix these roles, headlines always use Fraunces, everything else always uses Inter.

=== COLOR SYSTEM ===

Background: warm off white, hex FAF9F6.

Alternate section background: soft cream, hex F1EEE6.

Dark section background: solid deep navy, hex 0B1E3D, flat, no gradient.

Primary text on light background: near black, hex 1A1A1A.

Primary text on dark background: off white, hex FAF9F6.

Secondary text: gray, hex 5B5B5B.

Accent: one solid navy blue, hex 1B3A6B, used for buttons and small highlights only.

Diagram colors, used only inside the concept diagram, muted earth tones: terracotta orange hex C2703D, olive green hex 6B7A4F, deep navy hex 1B3A6B.

Persona indicator colors used only as a small dot or thin left border on cards, never as a card background: Commuter blue, Driver burnt orange, Social and Vibe deep rose, Zen forest green.

Define all colors, radii, shadows, and spacing in one Tailwind config file.

=== SHARED COMPONENT STYLE ===

Pill buttons, fully rounded corners, solid flat fill, plain text label, small icon allowed to the right of the text such as an arrow icon inside a small circle, matching the reference screenshot style of buttons like Watch on Youtube or Read the Substack.

Cards: rectangular with small border radius up to 12px, flat white or cream fill, no border needed, use a very soft shadow only if needed for separation.

Small eyebrow labels: plain small caps text, centered above section headlines, no line or dash decoration in front of them.

=== PAGE STRUCTURE ===

1. Navbar

White background, thin bottom border. Left side plain bold text wordmark NalarRuang. Center or right side plain text nav links: Cara Kerja, Persona, Layer Peta, FAQ. Right side one small pill badge labeled Baru linking to the FAQ or a highlights section, followed by one solid navy pill button with plain text Mulai Cari Hunian.

2. Hero, full bleed real photograph

A full width, tall section using one real looking photograph of a Jabodetabek street or aerial cityscape as the actual background image, with a dark gradient overlay fading in from the bottom for text legibility. Bottom left of the image: a plain small caps label reading Platform Pencarian Hunian. Below it, a large Fraunces headline in white: Mencari Hunian, Membaca Kota. Below that, one small plain text link in white with a small arrow icon: Baca ceritanya.

Directly under the hero image, add a thin solid navy bar containing four short plain text items separated by generous spacing, representing quick highlights: Visual Explorer, Requirement Search, Smart Point Inspector, Commute Simulator. Include the word Scroll in small caps on the far right of this bar.

3. Mission statement, cream background, centered content

A centered Fraunces headline: Peta yang memahami cara hidupmu.

Below it, a centered paragraph in Inter, medium width, describing that NalarRuang combines spatial data and lifestyle preference to help people choose housing with evidence, not guesswork.

Below the paragraph, a horizontal row of four or five real looking photographs of city and neighborhood scenes, arranged overlapping each other slightly with alternating vertical offset, like a filmstrip, using rounded corners on each photo.

4. Impact numbers, cream background

A row of four white cards, each with a large bold number and a short caption underneath: 6 Layer Data, 4 Persona Gaya Hidup, Top 3 Rekomendasi, 100 Persen Data Publik.

5. Concept section, off white background

Small caps label above: Kerangka Persona NalarRuang.

Centered Fraunces headline: Empat cara memandang satu kota.

Below it, one large rounded card with a soft cream background containing a simple diagram of four overlapping circles, each labeled with one persona name, Commuter, Driver, Social and Vibe, Zen, using the muted earth tone colors defined above, similar in spirit to a Venn diagram, showing that personas can overlap.

6. Tiga fitur utama, off white background

Small caps label: Fitur Utama.

Centered Fraunces headline: Tiga cara menjelajah.

Below it, a grid of three cards, each with one real looking preview image, a bold title, and one or two sentences of description, for Requirement Search, Smart Point Inspector, and Commute Simulator. Each card ends with a plain text link with a small arrow icon reading Pelajari lebih lanjut.

7. Dark section, solid deep navy background

Small caps label in light gray: Jelajahi Peta.

Centered Fraunces headline in white: Enam layer, satu kota.

Below it, a horizontal row of three small preview thumbnails representing different map layers, each with a short caption underneath in light gray text.

Below the thumbnails, one white pill button with plain text and a small arrow icon: Lihat Semua Layer.

Further down within the same dark section, a second row for Data Terbuka, showing four small plain text or logo style items in light gray: OpenStreetMap, Overpass API, InaRISK, ATR/BPN, followed by one white pill button with plain text: Pelajari Sumber Data.

8. Coba cepat, off white background

Small caps label: Contoh Data.

Centered Fraunces headline: Klik, nilai, baru yakin.

Below it, one centered white card with a thin light border showing star ratings for the four personas for one example location, a toggle between Titik and Wilayah, and a short summary sentence that updates based on the toggle.

9. FAQ, off white background

Small caps label: Pertanyaan Umum.

Simple accordion list with thin dividers, plus or minus icon on the right of each question. Questions: Datanya dari mana, Perlu login atau tidak, Apakah preferensi persona disimpan, Seberapa akurat skornya, Apa cakupan wilayahnya.

10. Closing CTA, solid deep navy background

Centered Fraunces headline in white: Siap membaca kotamu sendiri.

Below it, one solid off white pill button with dark text: Mulai Cari Hunian.

11. Footer, solid deep navy background, matching the reference footer layout

Left side, small caps label Hubungi Kami, followed by a short fictional address style line for the project such as Sekolah Vokasi IPB, Bogor, Jawa Barat, Indonesia.

Middle, small caps label Kontak, followed by two lines, Kerja Sama and Media, each with a placeholder email style text.

Right side, small caps label Ikuti, followed by a row of small plain social icons.

Bottom of the footer, a thin divider line, then plain small text with the wordmark and a one line disclaimer that scores and recommendations are estimates from public secondary data.

=== MOTION ===

GSAP ScrollTrigger for subtle fade combined with a small upward slide, staggered slightly for items inside a row. No bouncing, no spinning, no looping animation. Respect prefers-reduced-motion.

=== QUALITY ===

Fully responsive across desktop, tablet, and mobile. AA text contrast everywhere, especially white text over the hero photograph and dark navy sections. All interactive elements keyboard focusable with a visible focus ring. Semantic HTML headings in order. SEO meta title NalarRuang, Cari Hunian Sesuai Gaya Hidup di Jabodetabek, meta description, Open Graph tags. Organize code with one component per section, a separate constants file for copy, and a separate design tokens file. Do not add authentication or a backend in this pass.

Before finishing, compare the output section by section against this specification and confirm the hero uses one full bleed photograph with no mockup card, confirm no headline has partial color highlighting, and confirm every button and card uses a flat solid color with no gradient.Build the NalarRuang landing page from scratch. Follow this exactly, it is based directly on a real screenshot of thinkpolicy.id, do not deviate into a generic AI template.

=== BANNED PATTERNS ===

No gradient backgrounds anywhere, especially no purple, blue, or pink gradients. Every background is one flat solid color or a real photograph.

No browser window mockup cards, no fake URL bars, no traffic light dots, no floating UI panel placed on top of a fake map or fake screenshot.

No headline with part of the words colored differently as a highlight effect. Every headline is one solid color.

No two column hero with text on one side and a product mockup card on the other side.

No glassmorphism, no blurred translucent panels.

No emoji anywhere.

No em dash or en dash characters in interface text, use a period or comma instead.

No decorative starburst shapes, no stickers, no 3D cartoon illustration, no rotated or tilted cards.

=== PROJECT ===

NalarRuang is a WebGIS that helps people find their ideal place to live in Jabodetabek based on lifestyle personas: Commuter, Driver, Social and Vibe, Zen. Core features: persona onboarding, a six layer interactive map called Visual Explorer, Requirement Search producing Top 3 recommendations from spatial intersection, Smart Point Inspector with Persona Grading on a 0 to 3 star scale, and a Commute Simulator. No login, no accounts, only public secondary data such as OpenStreetMap, Overpass API, InaRISK, and ATR/BPN. Scope is Jabodetabek only.

=== TECH ===

React, Vite, TypeScript, Tailwind, react-router. Routes: "/" for this landing page, "/app" for the map app, a plain placeholder page for now with the text Segera hadir. Animation: GSAP with ScrollTrigger for subtle fade and slight upward slide reveals only. Icons: lucide-react used sparingly. Copy language: professional plain Bahasa Indonesia, no slang, no emoji, no dash punctuation.

=== TYPOGRAPHY ===

Load two Google Fonts. Fraunces for large section headlines, used at a serif elegant weight, given generous size and tight line height. Inter for navigation, body text, labels, and buttons. Never mix these roles, headlines always use Fraunces, everything else always uses Inter.

=== COLOR SYSTEM ===

Background: warm off white, hex FAF9F6.

Alternate section background: soft cream, hex F1EEE6.

Dark section background: solid deep navy, hex 0B1E3D, flat, no gradient.

Primary text on light background: near black, hex 1A1A1A.

Primary text on dark background: off white, hex FAF9F6.

Secondary text: gray, hex 5B5B5B.

Accent: one solid navy blue, hex 1B3A6B, used for buttons and small highlights only.

Diagram colors, used only inside the concept diagram, muted earth tones: terracotta orange hex C2703D, olive green hex 6B7A4F, deep navy hex 1B3A6B.

Persona indicator colors used only as a small dot or thin left border on cards, never as a card background: Commuter blue, Driver burnt orange, Social and Vibe deep rose, Zen forest green.

Define all colors, radii, shadows, and spacing in one Tailwind config file.

=== SHARED COMPONENT STYLE ===

Pill buttons, fully rounded corners, solid flat fill, plain text label, small icon allowed to the right of the text such as an arrow icon inside a small circle, matching the reference screenshot style of buttons like Watch on Youtube or Read the Substack.

Cards: rectangular with small border radius up to 12px, flat white or cream fill, no border needed, use a very soft shadow only if needed for separation.

Small eyebrow labels: plain small caps text, centered above section headlines, no line or dash decoration in front of them.

=== PAGE STRUCTURE ===

1. Navbar

White background, thin bottom border. Left side plain bold text wordmark NalarRuang. Center or right side plain text nav links: Cara Kerja, Persona, Layer Peta, FAQ. Right side one small pill badge labeled Baru linking to the FAQ or a highlights section, followed by one solid navy pill button with plain text Mulai Cari Hunian.

2. Hero, full bleed real photograph

A full width, tall section using one real looking photograph of a Jabodetabek street or aerial cityscape as the actual background image, with a dark gradient overlay fading in from the bottom for text legibility. Bottom left of the image: a plain small caps label reading Platform Pencarian Hunian. Below it, a large Fraunces headline in white: Mencari Hunian, Membaca Kota. Below that, one small plain text link in white with a small arrow icon: Baca ceritanya.

Directly under the hero image, add a thin solid navy bar containing four short plain text items separated by generous spacing, representing quick highlights: Visual Explorer, Requirement Search, Smart Point Inspector, Commute Simulator. Include the word Scroll in small caps on the far right of this bar.

3. Mission statement, cream background, centered content

A centered Fraunces headline: Peta yang memahami cara hidupmu.

Below it, a centered paragraph in Inter, medium width, describing that NalarRuang combines spatial data and lifestyle preference to help people choose housing with evidence, not guesswork.

Below the paragraph, a horizontal row of four or five real looking photographs of city and neighborhood scenes, arranged overlapping each other slightly with alternating vertical offset, like a filmstrip, using rounded corners on each photo.

4. Impact numbers, cream background

A row of four white cards, each with a large bold number and a short caption underneath: 6 Layer Data, 4 Persona Gaya Hidup, Top 3 Rekomendasi, 100 Persen Data Publik.

5. Concept section, off white background

Small caps label above: Kerangka Persona NalarRuang.

Centered Fraunces headline: Empat cara memandang satu kota.

Below it, one large rounded card with a soft cream background containing a simple diagram of four overlapping circles, each labeled with one persona name, Commuter, Driver, Social and Vibe, Zen, using the muted earth tone colors defined above, similar in spirit to a Venn diagram, showing that personas can overlap.

6. Tiga fitur utama, off white background

Small caps label: Fitur Utama.

Centered Fraunces headline: Tiga cara menjelajah.

Below it, a grid of three cards, each with one real looking preview image, a bold title, and one or two sentences of description, for Requirement Search, Smart Point Inspector, and Commute Simulator. Each card ends with a plain text link with a small arrow icon reading Pelajari lebih lanjut.

7. Dark section, solid deep navy background

Small caps label in light gray: Jelajahi Peta.

Centered Fraunces headline in white: Enam layer, satu kota.

Below it, a horizontal row of three small preview thumbnails representing different map layers, each with a short caption underneath in light gray text.

Below the thumbnails, one white pill button with plain text and a small arrow icon: Lihat Semua Layer.

Further down within the same dark section, a second row for Data Terbuka, showing four small plain text or logo style items in light gray: OpenStreetMap, Overpass API, InaRISK, ATR/BPN, followed by one white pill button with plain text: Pelajari Sumber Data.

8. Coba cepat, off white background

Small caps label: Contoh Data.

Centered Fraunces headline: Klik, nilai, baru yakin.

Below it, one centered white card with a thin light border showing star ratings for the four personas for one example location, a toggle between Titik and Wilayah, and a short summary sentence that updates based on the toggle.

9. FAQ, off white background

Small caps label: Pertanyaan Umum.

Simple accordion list with thin dividers, plus or minus icon on the right of each question. Questions: Datanya dari mana, Perlu login atau tidak, Apakah preferensi persona disimpan, Seberapa akurat skornya, Apa cakupan wilayahnya.

10. Closing CTA, solid deep navy background

Centered Fraunces headline in white: Siap membaca kotamu sendiri.

Below it, one solid off white pill button with dark text: Mulai Cari Hunian.

11. Footer, solid deep navy background, matching the reference footer layout

Left side, small caps label Hubungi Kami, followed by a short fictional address style line for the project such as Sekolah Vokasi IPB, Bogor, Jawa Barat, Indonesia.

Middle, small caps label Kontak, followed by two lines, Kerja Sama and Media, each with a placeholder email style text.

Right side, small caps label Ikuti, followed by a row of small plain social icons.

Bottom of the footer, a thin divider line, then plain small text with the wordmark and a one line disclaimer that scores and recommendations are estimates from public secondary data.

=== MOTION ===

GSAP ScrollTrigger for subtle fade combined with a small upward slide, staggered slightly for items inside a row. No bouncing, no spinning, no looping animation. Respect prefers-reduced-motion.

=== QUALITY ===

Fully responsive across desktop, tablet, and mobile. AA text contrast everywhere, especially white text over the hero photograph and dark navy sections. All interactive elements keyboard focusable with a visible focus ring. Semantic HTML headings in order. SEO meta title NalarRuang, Cari Hunian Sesuai Gaya Hidup di Jabodetabek, meta description, Open Graph tags. Organize code with one component per section, a separate constants file for copy, and a separate design tokens file. Do not add authentication or a backend in this pass.

Before finishing, compare the output section by section against this specification and confirm the hero uses one full bleed photograph with no mockup card, confirm no headline has partial color highlighting, and confirm every button and card uses a flat solid color with no gradient.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/be9e34fb-d7c0-4479-b6d1-51cf3d94bce5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
