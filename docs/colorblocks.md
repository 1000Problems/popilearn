# ColorBlocks — How They're Made

The floating letter/number blocks on the PopiLearn hero are built entirely from HTML `<div>` elements and CSS. No images, no canvas, no animation library. Here's exactly how every part works.

---

## 1. The HTML Element

Each block is a single `<div>` with text inside:

```html
<div class="block">A</div>
```

That's it. Everything visual comes from CSS applied to that div.

---

## 2. The Shape

```css
width: 44px;
height: 44px;
border-radius: 10px;       /* ~22% of the width — rounded but square */
```

The key ratio is `border-radius ≈ 22% of width`. Go lower and it looks like a plain square. Go higher and it becomes a circle. At ~22% you get the toy block sweet spot — clearly a square, but soft enough to feel friendly.

---

## 3. The 3D / Physical Look

This is the most important part. Three CSS properties stack together to create the illusion of a physical object:

```css
/* 1. Hard offset shadow underneath — creates the "lifted off the page" depth */
box-shadow:
  2px 4px 0px #C06848,                    /* outer shadow, same hue but darker */
  inset 0 1px 0 rgba(255, 255, 255, 0.5); /* inner highlight on the top edge */

/* 2. Subtle border — defines the edges cleanly */
border: 2.5px solid rgba(0, 0, 0, 0.10);

/* 3. Flat background color — the face of the block */
background: #FF9B7E;
```

**The outer shadow** uses `0` blur (hard edge, not soft/glowy) and is the same hue as the block but 30–40% darker. This mimics a physical object casting a shadow directly below and to the right.

**The inner highlight** is a 1px white-ish line at the very top of the block. It suggests a light source above, making the face of the block look slightly convex and lit.

**Together** these two shadows — one outside underneath, one inside at the top — are the entire 3D effect. No gradients, no transforms.

---

## 4. The Letter

```css
font-family: 'Baloo 2', cursive;   /* rounded, chunky display font */
font-weight: 800;                   /* maximum weight for stamped look */
font-size: 19px;                    /* ~44% of block width */
color: rgba(0, 0, 0, 0.38);        /* semi-transparent dark — looks stamped in */

display: flex;
align-items: center;
justify-content: center;            /* perfectly centered in the block */
```

The letter color is intentionally semi-transparent (`0.38` opacity) rather than solid black or white. This makes it look embossed or stamped into the surface — like ink pressed into a wooden block — instead of painted on top.

The font size at ~44% of block width keeps the letter comfortably inside without touching the edges.

---

## 5. The Float Animation

Each block uses one of four named keyframe animations. Having four variations (not one) is what makes them feel organic rather than mechanical — they all drift slightly differently:

```css
@keyframes float-a {
  0%, 100% { transform: translateY(0px)   rotate(-8deg); }
  50%       { transform: translateY(-20px) rotate(-4deg); }
}

@keyframes float-b {
  0%, 100% { transform: translateY(0px)   rotate(6deg); }
  50%       { transform: translateY(-16px) rotate(10deg); }
}

@keyframes float-c {
  0%, 100% { transform: translateY(0px)   rotate(-3deg); }
  50%       { transform: translateY(-24px) rotate(3deg); }
}

@keyframes float-d {
  0%, 100% { transform: translateY(0px)   rotate(12deg); }
  50%       { transform: translateY(-14px) rotate(6deg); }
}
```

**`translateY`** moves the block up and back down in a smooth sine-wave arc. The distance varies (14px–24px) so some blocks drift more than others.

**`rotate`** adds a slight tilt that changes as the block rises. A block tilted at -8° at rest might tilt to -4° at the top of its arc, then back to -8°. This makes them feel like they're gently tumbling in air, not just sliding up and down on a rail.

**`ease-in-out`** on the timing function rounds off the top and bottom of each movement so the block decelerates as it reaches its highest point, just like something floating in water would.

---

## 6. De-syncing the Blocks

If all blocks had the same duration and delay, they'd move in lockstep and look robotic. Two properties break the sync:

```css
animation-duration: 3.2s;    /* each block gets a slightly different duration */
animation-delay: 0.7s;       /* each block starts at a different moment */
```

The durations used across all blocks: `2.7s, 2.9s, 3.1s, 3.2s, 3.3s, 3.5s, 3.8s, 4.0s`

The delays used: `0s, 0.3s, 0.7s, 0.9s, 1.1s, 1.5s, 1.9s, 2.4s`

Because the durations are all slightly different prime-ish numbers, no two blocks ever return to the same position at the same time. They stay permanently out of phase.

---

## 7. Positioning

The blocks sit outside the main content column. Each is `position: absolute` inside the `position: relative` hero section, placed at percentage-based coordinates:

```css
position: absolute;
left: 3.5%;   /* percentage of the parent section width */
top: 12%;     /* percentage of the parent section height */
pointer-events: none;   /* clicks/taps pass straight through */
user-select: none;      /* text inside is not selectable */
z-index: 0;             /* sits behind the content column */
```

Left-side blocks use `left: 2%–10%`. Right-side blocks use `left: 84%–92%`. This keeps them in the margins so they never cover the headline or CTAs.

---

## 8. The Color System

Each block gets a background color and a matching shadow that is the same hue but noticeably darker:

| Block | Background | Shadow    |
|-------|-----------|-----------|
| A     | `#FF9B7E` | `#D06848` |
| B     | `#6BB5FF` | `#4080CC` |
| C     | `#FFD060` | `#C09030` |
| 1     | `#B8A2FF` | `#8065CC` |
| 2     | `#7DD47A` | `#4CA049` |
| 3     | `#FF9B7E` | `#D06848` |
| ★     | `#FFD060` | `#C09030` |
| ♪     | `#4CBFA0` | `#229070` |

The shadow color is derived by reducing the lightness of the background by roughly 25–30% in HSL space. No opacity tricks — a solid darker color gives a crisper physical shadow than a semi-transparent one.

---

## 9. Complete Example — One Block from Scratch

Here is everything needed to reproduce a single floating block, self-contained:

```html
<!DOCTYPE html>
<html>
<head>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap');

  body {
    background: #FFF3DC;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }

  .block {
    width: 60px;
    height: 60px;
    background: #FF9B7E;
    border-radius: 13px;
    border: 2.5px solid rgba(0, 0, 0, 0.10);
    box-shadow:
      3px 5px 0px #D06848,
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.38);
    animation: float-a 3.2s ease-in-out infinite;
  }

  @keyframes float-a {
    0%, 100% { transform: translateY(0px)   rotate(-8deg); }
    50%       { transform: translateY(-20px) rotate(-4deg); }
  }
</style>
</head>
<body>
  <div class="block">A</div>
</body>
</html>
```

Paste that into any HTML file and open it in a browser. Change the letter, color, size, duration, and rotation values to make new blocks.

---

## Summary

| Property | What it does |
|----------|-------------|
| `border-radius: ~22%` | Rounded-square toy block shape |
| `box-shadow: Npx Npx 0 [darker]` | Hard physical depth shadow |
| `box-shadow: inset 0 1px 0 rgba(white)` | Top-edge highlight, makes surface feel lit |
| `border: 2.5px solid rgba(black, 0.1)` | Clean edge definition |
| `color: rgba(0,0,0,0.38)` | Stamped/embossed letter appearance |
| `translateY` in keyframes | Vertical floating drift |
| `rotate` in keyframes | Gentle tumbling tilt as it rises |
| Varied `duration` per block | Permanently de-synced movement |
| Varied `animation-delay` per block | Different starting phase |
| `pointer-events: none` | Decorative only, never interferes |
