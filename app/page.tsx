import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section with banner */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Floating decorative dots */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute w-5 h-5 rounded-full animate-float"
            style={{ background: "var(--orange)", top: "12%", left: "8%", opacity: 0.25 }}
          />
          <div
            className="absolute w-4 h-4 rounded-full animate-float delay-300"
            style={{ background: "var(--blue)", top: "20%", right: "12%", opacity: 0.2 }}
          />
          <div
            className="absolute w-6 h-6 rounded-full animate-float delay-500"
            style={{ background: "var(--pink)", bottom: "25%", left: "15%", opacity: 0.18 }}
          />
          <div
            className="absolute w-3 h-3 rounded-full animate-float delay-200"
            style={{ background: "var(--green)", bottom: "30%", right: "10%", opacity: 0.22 }}
          />
          <div
            className="absolute w-4 h-4 rounded-full animate-float delay-700"
            style={{ background: "var(--yellow)", top: "45%", left: "5%", opacity: 0.2 }}
          />
          {/* Star shapes */}
          <svg className="absolute animate-wiggle" style={{ top: "8%", right: "20%", opacity: 0.15 }} width="28" height="28" viewBox="0 0 24 24" fill="var(--yellow)">
            <polygon points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" />
          </svg>
          <svg className="absolute animate-wiggle delay-400" style={{ bottom: "15%", right: "25%", opacity: 0.12 }} width="22" height="22" viewBox="0 0 24 24" fill="var(--orange)">
            <polygon points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" />
          </svg>
        </div>

        {/* Banner image */}
        <div className="animate-bounce-in max-w-3xl w-full mb-10">
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              boxShadow: "0 8px 40px rgba(255, 107, 53, 0.18), 0 2px 12px rgba(43, 45, 66, 0.08)",
              border: "4px solid rgba(255, 209, 102, 0.4)",
            }}
          >
            <Image
              src="/PopiBanner.png"
              alt="PopiLearn — ¡Canta, baila, pop! y aprende una vez más!"
              width={1200}
              height={675}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Coming Soon text */}
        <div className="text-center max-w-2xl">
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up delay-300"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(135deg, var(--orange), var(--pink), var(--blue))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.03em",
            }}
          >
            ¡Próximamente!
          </h1>

          <p
            className="text-xl md:text-2xl mb-3 animate-fade-in-up delay-400"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            ¡Canta, baila, <span style={{ color: "var(--orange)", fontWeight: 800 }}>pop!</span> y aprende una vez más
          </p>

          <p
            className="text-base md:text-lg mb-10 animate-fade-in-up delay-500"
            style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
          >
            Un canal de YouTube para niños de 3 a 7 años — canciones, aventuras y
            aprendizaje con Papá Leo, Mamá Ana, Lucas, Luna, Rob y toda la familia.
          </p>

          {/* Character color dots */}
          <div className="flex items-center justify-center gap-3 mb-10 animate-fade-in delay-600">
            {[
              { color: "#FF6B35", name: "Papá Leo" },
              { color: "#4D9DE0", name: "Mamá Ana" },
              { color: "#06D6A0", name: "Lucas & Rob" },
              { color: "#EF476F", name: "Luna" },
              { color: "#8D6E63", name: "Trufo" },
              { color: "#F0F0F0", name: "Michi" },
            ].map((char, i) => (
              <div
                key={char.name}
                className="animate-pop-in"
                style={{ animationDelay: `${600 + i * 80}ms` }}
                title={char.name}
              >
                <div
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full transition-transform duration-200 hover:scale-150 cursor-pointer"
                  style={{
                    background: char.color,
                    border: char.color === "#F0F0F0" ? "2px solid var(--border)" : "2px solid rgba(255,255,255,0.6)",
                    boxShadow: `0 2px 8px ${char.color}44`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Subscribe / notify CTA */}
          <div className="animate-fade-in-up delay-700">
            <a
              href="https://www.youtube.com/@PopiLearn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "var(--font-display)",
                background: "linear-gradient(135deg, #FF0000, #CC0000)",
                color: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(255, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Suscríbete en YouTube
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-8 text-sm animate-fade-in delay-800"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
      >
        Un proyecto de{" "}
        <a
          href="https://www.1000problems.com"
          className="transition-colors duration-200 hover:underline"
          style={{ color: "var(--text-secondary)" }}
        >
          1000Problems
        </a>
      </footer>
    </div>
  );
}
