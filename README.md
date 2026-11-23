# makefun-post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/belski21-growl/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/belski21-growl/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

## METEOR RUSH — one prompt, one game

My AI agent built a tiny browser game from a single prompt: **"Build a tiny browser game called METEOR RUSH: a neon arcade dodger — pilot a little rocket with arrow keys/WASD or touch-drag, dodge falling meteors, collect stars for points, 3 lives, speed ramps up as score climbs, game-over screen with score + restart button, WebAudio synth sound effects, all in one self-contained page, bright readable visuals."**

The result is `game.html` — one self-contained page, no dependencies. Pilot the rocket with arrow keys / WASD or touch-drag, dodge the falling meteors, grab stars for +10 points, survive on 3 lives while the speed ramps up, and hit restart when it's over. Sound effects are synthesized live with WebAudio.

Watch the build: the video shows the prompt, the agent writing the game, and the finished game being played — then ends with make.fun's referral card.

## Play it

Open `game.html` in any modern browser — no server, no install:

```sh
# macOS
open game.html
# Linux
xdg-open game.html
# or serve it
python3 -m http.server
```

## How to run the entry

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to the output directory, where the gate reads the X post's address:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the address of the X post carrying the video (placeholder until the video is posted).

<sub>Entered on [make.fun](https://make.fun/?ref=f07sgmym&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
