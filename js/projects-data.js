/* ===========================================================
   PROJECTS DATA  —  single source of truth
   -----------------------------------------------------------
   To add / remove a project: add or delete an object below.
   To add a demo:
     • Video    → set  video: "assets/projects/<folder>/demo.mp4"
     • Screens  → list filenames in  shots: [ ... ]
   Drop the actual files into the matching assets/projects/<folder>/.
   If a project has neither, a tidy "demo coming soon" placeholder shows.
   =========================================================== */

const PROJECTS = [
  {
    title: "Playthrough",
    date: "Jan 2026 — Present",
    desc: "Music gamification platform that integrates Spotify & Last.fm to track listening, remaining tracks, and album completion in real time.",
    tags: ["Python", "TypeScript", "Next.js", "Flask", "PostgreSQL", "Redis", "Vercel"],
    links: [
      { label: "GitHub", url: "https://github.com/ArjunR27" }
    ],
    folder: "playthrough",
    video: "",          // e.g. "assets/projects/playthrough/demo.mp4"
    shots: []           // e.g. ["assets/projects/playthrough/dashboard.png"]
  },
  {
    title: "PolyMaps",
    date: "Jan 2025 — Dec 2025",
    desc: "Interactive map of Cal Poly's campus with multi-layer indoor navigation and dynamic routing across building floor plans.",
    tags: ["Next.js", "TypeScript", "Mapbox GL JS", "Vercel"],
    links: [
      { label: "GitHub", url: "https://github.com/ArjunR27" }
    ],
    folder: "polymaps",
    video: "",
    shots: []
  },
  {
    title: "Vision-Based RL Racing Agents",
    date: "May 2026 — Present",
    desc: "DQN, Double DQN, and PPO agents that learn to drive from raw pixels on CarRacing-v3, reaching 66.2% track completion.",
    tags: ["Python", "PyTorch", "Gymnasium"],
    links: [
      { label: "GitHub", url: "https://github.com/ArjunR27" }
    ],
    folder: "rl-racing",
    video: "",
    shots: []
  },
  {
    title: "SoundMap",
    date: "May 2026 — Present",
    desc: "Convolutional music-embedding models trained on 13k mel spectrograms; UMAP/PCA reveal acoustically coherent 10-genre clustering.",
    tags: ["Python", "PyTorch", "Librosa", "UMAP"],
    links: [
      { label: "GitHub", url: "https://github.com/ArjunR27" }
    ],
    folder: "soundmap",
    video: "",
    shots: []
  }
];
