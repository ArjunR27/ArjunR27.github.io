# Assets — how to add your media

Everything visual on the site lives here. No build step — just drop files in and refresh.

## Profile photo
Replace `profile/arjun.jpg` with your photo (square works best; it's shown in a circle).
Keep the filename `arjun.jpg`, or update the `src` in `index.html`.
If the file is missing, the site shows a tidy placeholder instead of breaking.

## Company logos
`logos/` holds `calpoly.svg`, `western-digital.svg`, `celona.svg`.
These are clean monochrome text wordmarks by default. To use official logos,
just replace the file (same filename). SVG or PNG both work — they're colored
by the theme automatically when they use `currentColor`; otherwise they display as-is.

## Project demos (screenshots / videos)
Each project has a folder: `projects/playthrough/`, `projects/polymaps/`,
`projects/rl-racing/`, `projects/soundmap/`.

To show a demo, edit **`../js/projects-data.js`** for that project:

- **Video:** put `demo.mp4` in the folder, then set
  `video: "assets/projects/playthrough/demo.mp4"`
- **Screenshots:** put the images in the folder, then list them:
  `shots: ["assets/projects/playthrough/dashboard.png", "assets/projects/playthrough/album.png"]`

Screenshots show in a gallery and enlarge on click. A project with neither a
video nor screenshots shows a "demo coming soon" placeholder.

To **add a whole new project**, copy one object block in `projects-data.js`,
make a new folder under `projects/`, and fill in the details.
