# NEON DASH

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-ff2d78)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![HTML5 single file](https://img.shields.io/badge/HTML5-single--file-blue)](game.html)

A tiny browser endless-runner game, built from **one prompt** by an AI agent —
for the [$20 make.fun bounty](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## Play

Open [`game.html`](game.html) in any browser — no install, no server, no dependencies.

- **Auto-run** forward on 3 neon lanes
- **← →** / **A D** or swipe — switch lanes
- **↑** / **W** / **Space** or swipe up — jump over blocks
- **↓** / **S** or swipe down — slide under beams
- Dodge obstacles, collect coins for points, **3 lives**
- Speed ramps up as your score climbs
- Game-over screen with score + restart button
- WebAudio synth sound effects (mute button, top right)

Autopilot demo for filming: open `game.html?demo=1`.

## The one prompt

> "Build a tiny browser endless-runner game called NEON DASH: auto-run forward
> on 3 lanes, arrow keys/WASD or touch swipe to switch lanes, jump and slide,
> dodge obstacles, collect coins for points, 3 lives, speed ramps up as score
> climbs, game-over screen with score + restart button, WebAudio synth sound
> effects, all in one HTML file."

No edits. No second prompt.

## Build

```sh
node main.ts        # copies game.html + POST.json + LICENSE + README.md to work/out
```

`main.ts` is Node 22 stdlib-only. `POST.json` holds the URL of the X post
showing the build video.

## Files

| file | what it is |
| --- | --- |
| `game.html` | the whole game — one self-contained file |
| `main.ts` | build helper (copies entry files, validates POST.json) |
| `POST.json` | URL of the X post with the build video |
| `video-final.mp4` | the filmed build: prompt → code → gameplay |
