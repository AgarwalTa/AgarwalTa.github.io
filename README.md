# Whisker & Brew — Cat Café Lab 🐈☕

An interactive, welfare-first cat café concept built as a portfolio web project.

## V1.3

- Modern responsive single-page UI with light/dark mode
- Eight fictional resident cats with original SVG portraits
- Resident detail modals, favorites and activity profiles
- Five-pillar feline welfare explorer with live demo indicators
- Body-language response lab
- Source-aware Pune café data loaded from `cat-cafe/data/live.json`
- Café Designer with a dynamic welfare heuristic
- Six-scenario human training game
- Simulated café activity timeline and Pune map layer
- Clearly labelled fictional/demo data vs external source links
- Community signup interaction (demo-only, no data storage)
- Inline CSS and JavaScript for reliable GitHub Pages delivery

## Architecture

```text
cat-cafe/
├── index.html              # V1.3 app shell, styles and interactions
├── assets/cats/             # Original SVG resident portraits
├── data/live.json           # Structured source-aware demo snapshot
├── app-v12.js               # Legacy V1.2 asset retained for history
└── styles.css               # Legacy V1.2 stylesheet retained for history
```

The live-data boundary is intentionally simple: the frontend fetches a JSON snapshot today, while a future Python/API ingestion layer can replace that snapshot without changing the UI contract.

## Data note

Whisker & Brew and its residents are fictional. Real-world links are provided for verification and context. Venue hours, availability and other current details should always be checked with the linked source before visiting.

## Live site

https://agarwalta.github.io/cat-cafe/
