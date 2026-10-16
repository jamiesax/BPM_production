# BPM — Bad Man Piddy

An independent music production and studio portfolio for **BPM (Bad Man Piddy)**, owned by **Adelaja Oladipupo**. The site brings the studio’s work, services, approach, and project inquiry flow together in one polished, dark-themed experience.

## What problem this project solves

Artists often have to piece together a producer’s sound, credits, services, and contact details from separate social profiles, streaming links, and messages. BPM gives prospective clients one clear place to:

- Understand the studio’s production, mixing, and mastering services.
- Browse selected releases and production credits.
- Explore the studio’s approach and equipment.
- Send a project inquiry through a guided frontend form.

The goal is to make it easier for artists to decide whether BPM is the right creative partner and take the next step.

## Features

- **Home page:** Studio introduction, featured releases, and an interactive before/after comparison panel.
- **Music page:** Release cards and a credits list.
- **Services page:** Service descriptions, indicative pricing, and an inquiry form.
- **About page:** Studio and owner introduction, expandable gear list, and working principles.
- **Persistent audio player:** Shared React Context state keeps the selected track and playback controls available across the site.
- **Responsive layout:** Navigation, grids, forms, and page sections adapt to smaller screens.
- **CSS Modules:** Component and page styles are scoped to their respective `.module.css` files. `app/globals.css` contains only shared theme tokens, reset rules, and global defaults.

## Technology

- Next.js 15 App Router
- React 19 and TypeScript
- CSS Modules (no Tailwind CSS)
- React Context API for shared audio player state
- Prepared for deployment to Vercel

## Getting started

### Requirements

- Node.js 20 LTS or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Create and run a production build

```bash
npm run build
npm run start
```

The build also runs Next.js type and lint checks.

## Project structure

```text
app/
  about/
    page.tsx                  About page
    about.module.css
  music/
    page.tsx                  Releases and credits
    music.module.css
  services/
    page.tsx                  Services and inquiry form
    services.module.css
  globals.css                 Global reset, fonts, and theme tokens
  layout.tsx                  Root layout, metadata, and shared components
  page.tsx                    Home page
  page.module.css
components/
  ABTrackSwitcher.tsx         Interactive before/after panel
  ABTrackSwitcher.module.css
  Footer.tsx
  Footer.module.css
  GearAccordion.tsx           Expandable equipment list
  GearAccordion.module.css
  GlobalAudioPlayer.tsx
  GlobalAudioPlayer.module.css
  InquiryForm.tsx             Frontend-only inquiry flow
  InquiryForm.module.css
  Navbar.tsx
  Navbar.module.css
  TrackCard.tsx
  TrackCard.module.css
context/
  AudioContext.tsx            Shared audio player state
data/
  tracks.ts                   Demo release data
public/
  audio/                      Add licensed audio previews here
```

## Replacing the demo content

The site currently uses sample releases, artists, credits, equipment, service prices, and studio copy. Replace these with verified studio information before publishing.

### Releases and audio previews

Edit `data/tracks.ts`. Each track has an `id`, `title`, `artist`, `year`, `role`, `artwork`, and optional `audioUrl`.

1. Add audio files you own or are licensed to use under `public/audio/`.
2. Set a track’s `audioUrl` to its public path, for example `/audio/track-name.mp3`.
3. Replace the sample track information and artwork gradients in the data file.

The shared player is ready to play tracks with an `audioUrl`. Demo tracks without one show as previews coming soon and cannot play.

The before/after panel currently changes its selected state and illustrative waveform only; it does not yet play A/B audio. Add real before and after audio sources if you want that panel to perform a sound comparison.

### Studio details and links

- Update the owner biography and studio copy in `app/about/page.tsx` and `app/page.tsx`.
- Update the social and email links in `components/Footer.tsx`.
- Adjust service descriptions and prices in `app/services/page.tsx`.
- Update title and description metadata in `app/layout.tsx`.
- Update the expandable equipment list in `components/GearAccordion.tsx`.

## Inquiry flow: frontend demo behavior

The inquiry form validates its fields in the browser, then displays a confirmation view. For this prototype, the submitted name, email, service, and timeline are written to the browser’s `sessionStorage` under `bpm-demo-inquiry` for the current tab session.

**No inquiry is emailed, sent to a server, or stored as a real booking.** Connect a form provider or backend endpoint before using the form to accept client requests. The site does not currently check studio availability or create calendar appointments.

## Styling guidelines

- Keep component-specific styles in the matching `.module.css` file.
- Keep shared color and layout tokens in `app/globals.css`.
- The current visual system uses charcoal surfaces, subtle borders, warm amber accents, and generous spacing.
- No Tailwind CSS is used.

## Deployment

The project is configured as a standard Next.js application. To deploy with Vercel:

1. Push the project to a Git repository.
2. Import that repository into Vercel.
3. Keep the Next.js framework preset and default build command (`next build`).
4. Deploy and check each route and any real audio preview URLs.

No environment variables are required for the current frontend prototype. Add and document the required variables if a booking backend, email provider, analytics service, or other integration is connected later.
