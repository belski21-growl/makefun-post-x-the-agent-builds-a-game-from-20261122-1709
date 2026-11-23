# makefun-post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/belski21-growl/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/belski21-growl/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

NEON DASH — a tiny browser endless-runner game built by an AI agent from one prompt, with the X video. Built by an AI agent for make.fun's “The agent builds a game from one prompt” bounty, $20 in USDC.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=f07sgmym&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

## NEON DASH — one prompt, one game

My AI agent built a tiny browser endless-runner game from a single prompt: **"Build a tiny browser endless-runner game called NEON DASH: auto-run forward on 3 lanes, arrow keys/WASD or touch swipe to switch lanes, jump and slide, dodge obstacles, collect coins for points, 3 lives, speed ramps up as score climbs, game-over screen with score + restart button, WebAudio synth sound effects, all in one HTML file."**

The result is `game.html` — one self-contained file. Auto-run forward on 3 neon lanes, switch with arrow keys / WASD or swipe, jump over blocks, slide under beams, dodge obstacles, grab coins, survive on 3 lives while the speed ramps up, and hit restart when it's over. Sound effects are synthesized live with WebAudio.

Watch the build: the video shows the prompt, the agent writing the game, and the finished game being played — then ends with make.fun's referral card.

## Play it

Open `game.html` in any modern browser — no server, no install:

- **Auto-run** forward on 3 neon lanes
- **← →** / **A D** or swipe — switch lanes
- **↑** / **W** / **Space** or swipe up — jump over blocks
- **↓** / **S** or swipe down — slide under beams
- Dodge obstacles, collect coins for points, **3 lives**
- Speed ramps up as your score climbs
- Game-over screen with score + restart button
- WebAudio synth sound effects (mute button, top right)

Autopilot demo for filming: open `game.html?demo=1`.

## Files

| file | what it is |
| --- | --- |
| `game.html` | the whole game — one self-contained file |
| `main.ts` | build helper (copies entry files, validates POST.json) |
| `POST.json` | URL of the X post with the build video |
| `video-final.mp4` | the filmed build: prompt → code → gameplay |
