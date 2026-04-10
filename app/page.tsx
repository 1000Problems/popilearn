import Image from "next/image";

/* ──────────────────────────────────────────────
   SHARED MINI-COMPONENTS
────────────────────────────────────────────── */

function FloatingBlock({
  letter,
  bg,
  shadow,
  x,
  y,
  size = 44,
  animName,
  duration,
  delay,
}: {
  letter: string;
  bg: string;
  shadow: string;
  x: string;
  y: string;
  size?: number;
  animName: string;
  duration: number;
  delay: number;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        background: bg,
        borderRadius: size * 0.22,
        border: "2.5px solid rgba(0,0,0,0.1)",
        boxShadow: `2px 4px 0 ${shadow}, inset 0 1px 0 rgba(255,255,255,0.5)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-baloo)",
        fontWeight: 800,
        fontSize: size * 0.44,
        color: "rgba(0,0,0,0.38)",
        animation: `${animName} ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        userSelect: "none",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {letter}
    </div>
  );
}

function WaveBars({
  color = "#4CBFA0",
  count = 9,
}: {
  color?: string;
  count?: number;
}) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 3, height: 36 }}
    >
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          style={{
            width: 4,
            borderRadius: 999,
            background: color,
            animation: `wave-bar 0.75s ease-in-out infinite`,
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
    </div>
  );
}


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
      <span
        style={{
          display: "inline-block",
          background: "rgba(76,191,160,0.12)",
          border: "1.5px solid rgba(76,191,160,0.28)",
          borderRadius: 999,
          padding: "5px 18px",
          fontWeight: 700,
          fontSize: 12,
          color: "#33A085",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {children}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────
   NAV
────────────────────────────────────────────── */

function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "rgba(245,236,218,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "2px solid rgba(0,0,0,0.07)",
        padding: "0 28px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              background: "var(--teal)",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-baloo)",
              fontWeight: 800,
              fontSize: 22,
              color: "white",
              boxShadow: "2px 3px 0 var(--teal-dark)",
            }}
          >
            P
          </div>
          <span
            style={{
              fontFamily: "var(--font-baloo)",
              fontWeight: 800,
              fontSize: 22,
              color: "var(--navy)",
              letterSpacing: "-0.01em",
            }}
          >
            PopiLearn
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Features", "Learn", "About"].map((l) => (
            <a key={l} href="#" className="nav-link">
              {l}
            </a>
          ))}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(76,191,160,0.12)",
            border: "1.5px solid rgba(76,191,160,0.3)",
            borderRadius: 999,
            padding: "8px 16px",
            fontFamily: "var(--font-baloo)",
            fontWeight: 700,
            fontSize: 13,
            color: "var(--teal-dark)",
          }}>
            <span>🚀</span> Coming Soon
          </div>
          <a
            href="https://www.youtube.com/channel/UCH7ZAZ4VvAlRSu6Uyo8IAfg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "#FF0000",
              color: "white",
              fontFamily: "var(--font-baloo)",
              fontWeight: 700,
              fontSize: 14,
              padding: "9px 18px",
              borderRadius: 999,
              textDecoration: "none",
              boxShadow: "0 4px 0 #CC0000",
              transition: "transform 0.12s, box-shadow 0.12s",
            }}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
              <path d="M15.68 1.88A2 2 0 0 0 14.29.46C13.04.1 8 .1 8 .1s-5.04 0-6.29.36A2 2 0 0 0 .32 1.88C0 3.14 0 5.76 0 5.76s0 2.62.32 3.88a2 2 0 0 0 1.39 1.42C2.96 11.42 8 11.42 8 11.42s5.04 0 6.29-.36a2 2 0 0 0 1.39-1.42C16 8.38 16 5.76 16 5.76s0-2.62-.32-3.88zM6.4 8.2V3.32l4.21 2.44L6.4 8.2z"/>
            </svg>
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────────────────
   BANNER (full-width welcome image)
────────────────────────────────────────────── */

function BannerSection() {
  return (
    <section style={{ background: "var(--cream)", lineHeight: 0 }}>
      <Image
        src="/PopiBanner.png"
        alt="PopiLearn — Sing, Learn & Grow!"
        width={1920}
        height={1080}
        style={{ width: "100%", height: "auto", display: "block" }}
        priority
      />
    </section>
  );
}

/* ──────────────────────────────────────────────
   HERO CTA (centered waitlist below the banner)
────────────────────────────────────────────── */

function HeroCTASection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "72px 28px 96px",
        background: "var(--cream)",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Floating alphabet blocks */}
      <FloatingBlock letter="A" bg="#E05535" shadow="#B83A20" x="3%"  y="8%"  size={50} animName="float-a" duration={3.2} delay={0}   />
      <FloatingBlock letter="B" bg="#5AA8DC" shadow="#3880B8" x="6%"  y="55%" size={40} animName="float-b" duration={2.9} delay={0.7} />
      <FloatingBlock letter="C" bg="#F5C830" shadow="#C89C10" x="2%"  y="32%" size={34} animName="float-c" duration={3.8} delay={1.5} />
      <FloatingBlock letter="1" bg="#B8A2FF" shadow="#8065CC" x="88%" y="10%" size={44} animName="float-d" duration={3.1} delay={0.3} />
      <FloatingBlock letter="2" bg="#65BF48" shadow="#429630" x="92%" y="50%" size={38} animName="float-a" duration={2.7} delay={1.1} />
      <FloatingBlock letter="3" bg="#E05535" shadow="#B83A20" x="85%" y="72%" size={46} animName="float-b" duration={3.5} delay={1.9} />
      <FloatingBlock letter="★" bg="#F5C830" shadow="#C89C10" x="9%"  y="78%" size={30} animName="float-c" duration={4.0} delay={2.4} />
      <FloatingBlock letter="♪" bg="#4EC9A6" shadow="#2EA882" x="89%" y="28%" size={32} animName="float-d" duration={3.3} delay={0.9} />

      {/* Content */}
      <div
        style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}
      >
        {/* Badge */}
        <div className="anim-slide-up delay-0" style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(78,201,166,0.14)",
              border: "1.5px solid rgba(78,201,166,0.32)",
              borderRadius: 999,
              padding: "7px 18px",
            }}
          >
            <span style={{ fontSize: 16 }}>🌟</span>
            <span
              style={{
                fontFamily: "var(--font-nunito)",
                fontWeight: 700,
                fontSize: 14,
                color: "#2A9075",
              }}
            >
              Coming Soon — Be the First to Know!
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className="anim-slide-up delay-2"
          style={{
            fontSize: 18,
            lineHeight: 1.75,
            color: "var(--navy-light)",
            marginBottom: 36,
            fontWeight: 500,
          }}
        >
          We&apos;re putting the finishing touches on hundreds of songs, games,
          and stories for little learners ages&nbsp;2–7. Sign up and we&apos;ll
          let you know the moment it&apos;s ready.
        </p>

        {/* Email form */}
        <form
          className="anim-slide-up delay-3"
          action="#"
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            style={{
              flex: 1,
              minWidth: 240,
              maxWidth: 340,
              padding: "15px 22px",
              borderRadius: 999,
              border: "2px solid rgba(0,0,0,0.12)",
              background: "white",
              fontFamily: "var(--font-nunito)",
              fontWeight: 600,
              fontSize: 15,
              color: "var(--navy)",
              outline: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          />
          <button
            type="submit"
            className="btn-teal"
            style={{ fontFamily: "var(--font-baloo)", fontSize: 16 }}
          >
            Notify Me →
          </button>
        </form>

        {/* Sound wave */}
        <div
          className="anim-slide-up delay-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              background: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              fontSize: 18,
              flexShrink: 0,
            }}
          >
            🎵
          </div>
          <WaveBars color="var(--teal)" count={10} />
          <span
            style={{
              fontWeight: 700,
              fontSize: 13,
              color: "var(--navy-light)",
              whiteSpace: "nowrap",
            }}
          >
            ABC Song — Coming Soon
          </span>
        </div>
      </div>

      {/* Wave into trust bar */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -2,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <svg
          viewBox="0 0 1440 56"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 56 }}
        >
          <path
            d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
            fill="var(--teal)"
          />
        </svg>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   TRUST BAR
────────────────────────────────────────────── */

function TrustBar() {
  const stats = [
    { value: "200+",     label: "Songs in Development", icon: "🎵" },
    { value: "6",        label: "Learning Areas",        icon: "📚" },
    { value: "Ages 2–7", label: "Designed For",          icon: "🧒" },
    { value: "2026",     label: "Launching Soon",        icon: "🚀" },
  ];

  return (
    <div
      style={{
        background: "var(--teal)",
        padding: "32px 28px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center", color: "white" }}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>{s.icon}</div>
            <div
              style={{
                fontFamily: "var(--font-baloo)",
                fontWeight: 800,
                fontSize: 34,
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 12,
                opacity: 0.82,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   FEATURES — SING / LEARN / GROW
────────────────────────────────────────────── */

function FeaturesSection() {
  const features = [
    {
      emoji: "🎵",
      title: "Sing",
      sub: "Music That Teaches",
      body: "200+ original songs covering letters, numbers, colors, and seasons. Each track is crafted by early childhood educators and professional composers.",
      bg: "#FF9B7E",
      shadow: "#C86848",
      check: "#FFE0D8",
    },
    {
      emoji: "🌈",
      title: "Learn",
      sub: "Games That Stick",
      body: "Adaptive mini-games that make learning feel like pure play. Difficulty adjusts in real time so every child is perfectly challenged.",
      bg: "#6BB5FF",
      shadow: "#3A78CC",
      check: "#D8EAFF",
    },
    {
      emoji: "🌱",
      title: "Grow",
      sub: "Progress You Can See",
      body: "Weekly milestone reports, achievement badges, and detailed breakdowns help parents track — and celebrate — every step forward.",
      bg: "#B8A2FF",
      shadow: "#7858CC",
      check: "#EDE8FF",
    },
  ];

  return (
    <section
      style={{
        padding: "88px 28px 80px",
        background: "var(--cream)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Why PopiLearn</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-baloo)",
            fontWeight: 800,
            fontSize: "clamp(30px, 4vw, 50px)",
            color: "var(--navy)",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 56,
          }}
        >
          Learning Should Feel Like Play
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="card-lift"
              style={{
                background: f.bg,
                borderRadius: 28,
                padding: "40px 36px",
                boxShadow: `5px 8px 0 ${f.shadow}`,
                border: "2px solid rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ fontSize: 52, marginBottom: 18 }}>{f.emoji}</div>
              <div
                style={{
                  fontFamily: "var(--font-baloo)",
                  fontWeight: 800,
                  fontSize: 42,
                  color: "white",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {f.title}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.75)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 18,
                }}
              >
                {f.sub}
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.68,
                  fontSize: 15,
                  fontWeight: 500,
                  marginBottom: 24,
                }}
              >
                {f.body}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-baloo)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Explore →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   LEARNING AREAS GRID
────────────────────────────────────────────── */

function LearningSection() {
  const subjects = [
    { emoji: "🔤", title: "Alphabet",    desc: "A to Z, step by step",    bg: "#FFE8CC", border: "rgba(255,130,70,0.3)",  shadow: "rgba(255,130,70,0.35)" },
    { emoji: "🔢", title: "Numbers",     desc: "Count, add & discover",    bg: "#D4F5F0", border: "rgba(76,191,160,0.3)", shadow: "rgba(76,191,160,0.35)" },
    { emoji: "🎨", title: "Colors",      desc: "The whole rainbow",        bg: "#EDE8FF", border: "rgba(160,130,255,0.3)", shadow: "rgba(160,130,255,0.35)" },
    { emoji: "🔷", title: "Shapes",      desc: "Circles, stars & more",    bg: "#D8EAFF", border: "rgba(70,140,220,0.3)", shadow: "rgba(70,140,220,0.35)" },
    { emoji: "🎵", title: "Songs",       desc: "200+ original tracks",     bg: "#FFD8D8", border: "rgba(220,80,80,0.3)",  shadow: "rgba(220,80,80,0.35)" },
    { emoji: "📚", title: "Stories",     desc: "Tales that teach & inspire", bg: "#D8F5D4", border: "rgba(70,180,60,0.3)",  shadow: "rgba(70,180,60,0.35)" },
  ];

  return (
    <section
      style={{
        padding: "80px 28px",
        background: "var(--cream-mid)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Curriculum</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-baloo)",
            fontWeight: 800,
            fontSize: "clamp(30px, 4vw, 50px)",
            color: "var(--navy)",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          What They&apos;ll Love Learning
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--navy-light)",
            fontSize: 17,
            fontWeight: 500,
            maxWidth: 520,
            margin: "0 auto 52px",
            lineHeight: 1.65,
          }}
        >
          Six rich curriculum areas, hundreds of activities — all developed
          with early childhood educators.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 18,
          }}
        >
          {subjects.map((s) => (
            <div
              key={s.title}
              className="card-lift"
              style={{
                background: s.bg,
                borderRadius: 22,
                padding: "28px 20px",
                textAlign: "center",
                border: `2px solid ${s.border}`,
                boxShadow: `3px 5px 0 ${s.shadow}`,
              }}
            >
              <div style={{ fontSize: 42, marginBottom: 12 }}>{s.emoji}</div>
              <div
                style={{
                  fontFamily: "var(--font-baloo)",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "var(--navy)",
                  marginBottom: 6,
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--navy-light)",
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   HOW IT WORKS
────────────────────────────────────────────── */

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Create Your Account",
      body: "Sign up in 60 seconds. Tell us your child's name and age — no credit card required to start.",
      emoji: "✨",
      color: "var(--teal)",
    },
    {
      num: "02",
      title: "Pick a Learning Path",
      body: "Choose where to begin — letters, numbers, colors — or let Popi the robot suggest the perfect starting point.",
      emoji: "🗺️",
      color: "var(--coral)",
    },
    {
      num: "03",
      title: "Watch Them Bloom",
      body: "Your child learns through songs, games, and stories. You get weekly reports showing every milestone reached.",
      emoji: "🌸",
      color: "var(--purple)",
    },
  ];

  return (
    <section style={{ padding: "80px 28px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Getting Started</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-baloo)",
            fontWeight: 800,
            fontSize: "clamp(30px, 4vw, 50px)",
            color: "var(--navy)",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 60,
          }}
        >
          Up and Running in Minutes
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: "white",
                borderRadius: 26,
                padding: "36px 32px",
                border: "2px solid rgba(0,0,0,0.06)",
                boxShadow: "4px 7px 0 rgba(0,0,0,0.07)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Big ghost step number */}
              <div
                aria-hidden
                style={{
                  fontFamily: "var(--font-baloo)",
                  fontWeight: 800,
                  fontSize: 80,
                  color: "rgba(0,0,0,0.05)",
                  lineHeight: 1,
                  position: "absolute",
                  top: 12,
                  right: 20,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {step.num}
              </div>

              {/* Step circle */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: step.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  marginBottom: 20,
                  boxShadow: `0 4px 0 rgba(0,0,0,0.15)`,
                }}
              >
                {step.emoji}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-baloo)",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "var(--navy)",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "var(--navy-light)",
                  lineHeight: 1.68,
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ──────────────────────────────────────────────
   DOWNLOAD / CTA
────────────────────────────────────────────── */

function DownloadSection() {
  return (
    <section
      style={{
        background: "var(--teal)",
        padding: "88px 28px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      {[
        { w: 300, t: -80,  l: "8%",  op: 0.08 },
        { w: 200, t: 120,  l: "-4%", op: 0.06 },
        { w: 240, t: -40,  l: "78%", op: 0.08 },
        { w: 180, t: "60%", l: "88%", op: 0.06 },
      ].map((c, i) => (
        <div
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            width: c.w,
            height: c.w,
            top: c.t,
            left: c.l,
            borderRadius: "50%",
            background: `rgba(255,255,255,${c.op})`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 52, marginBottom: 20 }}>🌟</div>
        <h2
          style={{
            fontFamily: "var(--font-baloo)",
            fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 58px)",
            color: "white",
            lineHeight: 1.08,
            marginBottom: 18,
          }}
        >
          Be First in Line
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.84)",
            fontSize: 17,
            fontWeight: 500,
            maxWidth: 480,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          PopiLearn is coming soon. Drop your email and we&apos;ll let you know
          the moment it&apos;s ready — plus early access perks for waitlist families.
        </p>

        <form
          action="#"
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: 500,
            margin: "0 auto 28px",
          }}
        >
          <input
            type="email"
            placeholder="Your email address"
            style={{
              flex: 1,
              minWidth: 220,
              padding: "16px 24px",
              borderRadius: 999,
              border: "none",
              fontFamily: "var(--font-nunito)",
              fontWeight: 600,
              fontSize: 15,
              color: "var(--navy)",
              outline: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
          <button
            type="submit"
            className="btn-white"
            style={{ fontFamily: "var(--font-baloo)", fontSize: 16 }}
          >
            Join the Waitlist →
          </button>
        </form>

        <div
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          ✓ No spam, ever &nbsp;·&nbsp; ✓ Early access for subscribers &nbsp;·&nbsp; ✓ Free at launch
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   FOOTER
────────────────────────────────────────────── */

function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Features", "For Schools", "API"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Privacy Policy", "Terms"],
    },
  ];

  return (
    <footer
      style={{
        background: "var(--navy)",
        padding: "52px 28px 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand blurb */}
          <div style={{ maxWidth: 240 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  background: "var(--teal)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-baloo)",
                  fontWeight: 800,
                  fontSize: 20,
                  color: "white",
                }}
              >
                P
              </div>
              <span
                style={{
                  fontFamily: "var(--font-baloo)",
                  fontWeight: 800,
                  fontSize: 20,
                  color: "white",
                }}
              >
                PopiLearn
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.65,
                fontWeight: 500,
              }}
            >
              Where little minds sing, learn &amp; grow — every single day.
            </p>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 10,
              }}
            >
              {["🐦", "📸", "📘"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  {icon}
                </div>
              ))}
              <a
                href="https://www.youtube.com/channel/UCH7ZAZ4VvAlRSu6Uyo8IAfg"
                target="_blank"
                rel="noopener noreferrer"
                title="Subscribe on YouTube"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: "rgba(255,0,0,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                  <path d="M15.68 1.88A2 2 0 0 0 14.29.46C13.04.1 8 .1 8 .1s-5.04 0-6.29.36A2 2 0 0 0 .32 1.88C0 3.14 0 5.76 0 5.76s0 2.62.32 3.88a2 2 0 0 0 1.39 1.42C2.96 11.42 8 11.42 8 11.42s5.04 0 6.29-.36a2 2 0 0 0 1.39-1.42C16 8.38 16 5.76 16 5.76s0-2.62-.32-3.88zM6.4 8.2V3.32l4.21 2.44L6.4 8.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {cols.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontFamily: "var(--font-baloo)",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 15,
                    marginBottom: 14,
                  }}
                >
                  {col.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                  }}
                >
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.42)",
                        textDecoration: "none",
                        fontWeight: 500,
                        transition: "color 0.15s",
                      }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 13,
            color: "rgba(255,255,255,0.3)",
            fontWeight: 500,
          }}
        >
          <span>© 2026 PopiLearn. All rights reserved.</span>
          <span>Made with ♥ for little learners everywhere.</span>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   PAGE ROOT
────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <BannerSection />
        <HeroCTASection />
        <TrustBar />
        <FeaturesSection />
        <LearningSection />
        <HowItWorksSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
