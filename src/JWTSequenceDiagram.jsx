import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Login Request",
    description:
      "The client submits credentials over HTTPS. The payload is a lightweight Pydantic model — only the fields the API needs, nothing more.",
    actors: ["client", "api", null],
    arrows: [
      { dir: "right", label: "POST /auth/login", accent: true },
    ],
    pills: ["email", "password"],
  },
  {
    num: "02",
    title: "Credential Verification",
    description:
      "The API queries MySQL via SQLModel, loads the Account row, and runs bcrypt comparison. No raw passwords persist in memory longer than needed.",
    actors: [null, "api", "db"],
    arrows: [
      { dir: "right", label: "SELECT * FROM accounts WHERE email=?", accent: true },
      { dir: "left", label: "hashed_password row", accent: true },
    ],
    pills: ["bcrypt.verify()"],
  },
  {
    num: "03",
    title: "Token Issuance",
    description:
      "On success, the server signs a JWT containing structured claims — user ID, expiration, and role — using a private HS256 secret. The client receives and stores the token.",
    actors: ["client", "api", null],
    arrows: [
      { dir: "left", label: "200 OK — signed JWT", accent: true },
    ],
    pills: ["sub: user_id", "exp: +1h", "role: user"],
    token: true,
  },
  {
    num: "04",
    title: "Protected Request",
    description:
      "Every subsequent request attaches the token in the Authorization header. No session state on the server — the token is the identity proof.",
    actors: ["client", "api", null],
    arrows: [
      { dir: "right", label: "GET /messages", accent: true },
    ],
    authHeader: true,
  },
  {
    num: "05",
    title: "Token Validation",
    description:
      "A FastAPI dependency intercepts the request, verifies the HMAC signature, checks expiration, then loads the matching SQLModel Account from the database.",
    actors: [null, "api", "db"],
    arrows: [
      { dir: "right", label: "SELECT * FROM accounts WHERE id=?", accent: true },
    ],
    pills: ["verify_signature()", "check_expiry()", "get_account(sub)"],
  },
  {
    num: "06",
    title: "Protected Resource Returned",
    description:
      "The dependency injects a verified Account object into the route handler. Sensitive fields like password hashes are stripped by the response model — only safe fields reach the client.",
    actors: ["client", "api", null],
    arrows: [
      { dir: "left", label: "200 OK — filtered response", accent: true },
    ],
    pills: ["id", "username", "messages[]"],
    stripped: true,
  },
];

const ACTOR_ICONS = {
  client: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  api: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  db: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
};

const ACTOR_LABELS = { client: "Client", api: "FastAPI", db: "MySQL" };

function FlowCard({ step, active }) {
  const definedActors = step.actors.filter(Boolean);

  return (
    <div
      className="rounded-xl border border-white/10 p-4 transition-all duration-500"
      style={{
        background: active ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
        borderColor: active ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)",
      }}
    >
      {/* Actors row */}
      <div className="flex justify-between mb-4">
        {step.actors.map((actor, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5" style={{ opacity: actor ? 1 : 0.2 }}>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300"
              style={{
                background: active && actor ? "rgba(52,211,153,0.12)" : "rgba(255,255,255,0.05)",
                border: active && actor ? "1px solid rgba(52,211,153,0.3)" : "1px solid rgba(255,255,255,0.1)",
                color: active && actor ? "#34d399" : "#9ca3af",
              }}
            >
              {actor ? ACTOR_ICONS[actor] : ACTOR_ICONS.db}
            </div>
            <span className="text-[10px]" style={{ color: active && actor ? "#6ee7b7" : "#6b7280" }}>
              {actor ? ACTOR_LABELS[actor] : ACTOR_LABELS.db}
            </span>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex flex-col gap-2 mb-3">
        {step.arrows.map((arrow, i) => (
          <div key={i} className="flex items-center gap-2">
            {arrow.dir === "left" && (
              <svg width="8" height="8" viewBox="0 0 8 8" style={{ flexShrink: 0, color: active ? "#34d399" : "#4b5563" }}>
                <path d="M8 4H1M1 4L4 1M1 4L4 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            )}
            <div
              className="flex-1 h-px transition-colors duration-300"
              style={{ background: active ? "rgba(52,211,153,0.5)" : "rgba(255,255,255,0.1)" }}
            />
            <span
              className="text-[10px] font-mono transition-colors duration-300 text-center"
              style={{ color: active ? "#6ee7b7" : "#4b5563", maxWidth: "160px" }}
            >
              {arrow.label}
            </span>
            <div
              className="flex-1 h-px transition-colors duration-300"
              style={{ background: active ? "rgba(52,211,153,0.5)" : "rgba(255,255,255,0.1)" }}
            />
            {arrow.dir === "right" && (
              <svg width="8" height="8" viewBox="0 0 8 8" style={{ flexShrink: 0, color: active ? "#34d399" : "#4b5563" }}>
                <path d="M0 4H7M7 4L4 1M7 4L4 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Pills */}
      {step.pills && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {step.pills.map((p, i) => (
            <span
              key={i}
              className="font-mono text-[11px] px-2 py-0.5 rounded transition-colors duration-300"
              style={{
                background: active ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.04)",
                border: active ? "1px solid rgba(52,211,153,0.25)" : "1px solid rgba(255,255,255,0.08)",
                color: active ? "#34d399" : "#6b7280",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      )}

      {/* JWT token anatomy */}
      {step.token && (
        <div
          className="mt-3 font-mono text-[11px] rounded-lg px-3 py-2 break-all leading-relaxed"
          style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span style={{ color: active ? "#34d399" : "#4b5563" }}>eyJhbGciOiJIUzI1NiJ9</span>
          <span style={{ color: "#6b7280" }}>.</span>
          <span style={{ color: active ? "#6ee7b7" : "#374151" }}>eyJzdWIiOiI0MiIsImV4cCI6MTcwMH0</span>
          <span style={{ color: "#6b7280" }}>.</span>
          <span style={{ color: "#4b5563" }}>HMAC_sig…</span>
        </div>
      )}

      {/* Auth header */}
      {step.authHeader && (
        <div
          className="mt-3 font-mono text-[11px] rounded-lg px-3 py-2"
          style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span style={{ color: "#6b7280" }}>Authorization: Bearer </span>
          <span style={{ color: active ? "#34d399" : "#4b5563" }}>eyJhbGci…</span>
        </div>
      )}

      {/* Stripped fields note */}
      {step.stripped && (
        <p className="text-[11px] mt-2" style={{ color: "#4b5563" }}>
          — <span style={{ color: "#ef4444" }}>password_hash</span> stripped by response model
        </p>
      )}
    </div>
  );
}

export default function JWTSequenceDiagram() {
  const stepRefs = useRef([]);
  const [visibleSet, setVisibleSet] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setVisibleSet((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-[#31343d]">
      {/* Section header */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <span
          className="inline-block text-xs font-mono tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
          style={{ background: "rgb(255, 255, 255)", color: "#000000" }}
        >
          Auth System
        </span>
        <h2
          className="text-5xl font-semibold mb-4"
          style={{
            color: "#f9fafb",
            fontFamily: "'Geist', 'Inter', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          JWT Authentication Lifecycle
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#6b7280" }}>
          A stateless, signature-verified flow that keeps sensitive fields hidden
          while ensuring only verified users reach protected routes.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto relative">
        {/* Vertical spine */}
        <div
          className="absolute left-[19px] top-0 bottom-0 w-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {steps.map((step, i) => {
          const active = visibleSet.has(i);
          return (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              data-index={i}
              className="flex gap-6 mb-16 last:mb-0"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.55s ease, transform 0.55s ease",
                transitionDelay: "0.05s",
              }}
            >
              {/* Step number bubble */}
              <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-medium z-10 transition-all duration-500"
                  style={{
                    background: active ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.05)",
                    border: active ? "1px solid rgba(52,211,153,0.4)" : "1px solid rgba(255,255,255,0.1)",
                    color: active ? "#34d399" : "#4b5563",
                    boxShadow: active ? "0 0 0 4px rgba(52,211,153,0.06)" : "none",
                  }}
                >
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="mb-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: "#ffffff" }}>
                    Step {step.num}
                  </span>
                </div>
                <h3
                  className="text-lg font-medium mb-2 transition-colors duration-500"
                  style={{
                    color: active ? "#f9fafb" : "#374151",
                    fontFamily: "'Geist', 'Inter', sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 transition-colors duration-500"
                  style={{ color: active ? "#9ca3af" : "#374151" }}
                >
                  {step.description}
                </p>
                <FlowCard step={step} active={active} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
