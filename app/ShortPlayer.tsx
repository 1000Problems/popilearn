"use client";

import { useState } from "react";

/**
 * Vertical (9:16) click-to-play YouTube Short.
 *
 * Renders a lightweight facade — branded thumbnail + play button — and only
 * swaps in YouTube's iframe once the user taps it. This keeps the heavy embed
 * out of the initial page load and means nothing autoplays on arrival.
 *
 * This is the ONLY client component on the site; every other section stays
 * server-rendered.
 */
export default function ShortPlayer({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "9 / 16",
        borderRadius: 24,
        overflow: "hidden",
        background: "var(--navy)",
        boxShadow: "0 10px 0 rgba(42,56,72,0.18)",
        border: "3px solid rgba(0,0,0,0.06)",
      }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          aria-label={`Play ${title}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            padding: 0,
            border: "none",
            cursor: "pointer",
            background: `#2A3848 url(https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg) center / cover no-repeat`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* legibility gradient */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0) 32%, rgba(0,0,0,0.38) 100%)",
            }}
          />
          {/* play circle */}
          <span
            aria-hidden
            style={{
              position: "relative",
              width: 72,
              height: 72,
              borderRadius: 999,
              background: "var(--teal)",
              boxShadow: "0 6px 0 var(--teal-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: hover ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.15s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <svg width="26" height="30" viewBox="0 0 26 30" fill="white" style={{ marginLeft: 4 }}>
              <path d="M0 2.5C0 0.9 1.8 -0.1 3.1 0.8L24 13.3c1.3 0.8 1.3 2.7 0 3.5L3.1 29.2C1.8 30.1 0 29.1 0 27.5V2.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
