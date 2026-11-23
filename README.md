# VICE CHASE — make.fun entry

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/belski21-growl/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/belski21-growl/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

**VICE CHASE** — a tiny browser endless car-chase game built by an AI agent from one prompt, in the style of GTA 6's Vice City, for make.fun's "The agent builds a game from one prompt" bounty, $20 in USDC.

You are the getaway driver. Outrun Leonida PD down a 3-lane neon highway at sunset — palm silhouettes, pink-orange sky, skyline glowing behind you — dodging traffic and roadblocks, grabbing bundles of cash, threading near-misses for bonus points while your wanted stars climb from 1 to 5 and the heat closes in. Three lives. Nitro, shield, and magnet power-ups. Speed and traffic ramp up the longer you survive.

## The prompt

> "Build a tiny browser endless car-chase game called VICE CHASE in the style of GTA 6's Vice City: drive a getaway car down a 3-lane neon highway at sunset, arrow keys/WASD or touch swipe to switch lanes, dodge traffic and roadblocks, collect cash, near-misses earn bonus points, wanted stars rise as police close in, 3 lives, nitro boost, shield and magnet power-ups, speed and traffic ramp up, game-over screen with score + restart button, WebAudio synth sound effects, all in one HTML file."

## How to play

Open `game.html` in any modern browser — no install, no network, no external assets. Everything (art, sound, logic) lives in that one file.

| Control | Action |
| --- | --- |
| ← → or A / D, or swipe left / right | Switch lane |
| ↑ or W, or swipe up | Nitro boost (drains the nitro meter; smashes traffic while active) |
| ↓ or S, or swipe down | Brake |
| 🔊 button (top right) | Mute / unmute sound |
| Enter | Start / restart |

**Scoring:** distance ticks up your score, cash bundles are worth $100 each, and a near-miss (slipping past a car in the next lane) pays a bonus and raises your combo multiplier up to x8. Wanted stars rise with time and score — higher stars mean more police cars and denser traffic. A crash costs 1 life plus a short invulnerability window and a screen shake; a shield power-up absorbs one crash, and a magnet pulls nearby cash toward you for 8 seconds.

**Autopilot demo:** open `game.html?demo=1` and the AI drives itself — same rules, same road, no input needed. It only reacts to threats in its own lane, with a fair look-ahead, and uses nitro only when the road ahead is clear.

## Files

| File | What it is |
| --- | --- |
| `game.html` | The whole game — canvas art, logic, WebAudio synth SFX, autopilot demo |
| `main.ts` | Build script (Node stdlib only): validates `POST.json` + `game.html` markers, copies the entry files to the output dir |
| `POST.json` | make.fun post metadata for this bounty |
| `video-final.mp4` | Gameplay video |

Build it with:

```sh
node main.ts            # copies files to work/out
node main.ts ./my-out   # or pick your own output dir
```

---

Built for [make.fun](https://make.fun/?ref=f07sgmym&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) — the agent builds a game from one prompt.
