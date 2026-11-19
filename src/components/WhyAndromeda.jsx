import { useEffect, useRef, useState } from "react";
import "../styles/WhyAndromeda.css";

const strengths = [
  {
    title: "STRUCTURED LEARNING",
    description:
      "Educational topics arranged in a clear learning progression, helping learners build their understanding step by step.",
  },
  {
    title: "PRACTICAL DEMONSTRATIONS",
    description:
      "Visual explanations and educational examples that make market concepts easier to understand.",
  },
  {
    title: "ACCESSIBLE EDUCATION",
    description:
      "Learning materials available publicly without requiring student accounts.",
  },
  {
    title: "DISCIPLINE & AWARENESS",
    description:
      "An emphasis on patience, critical thinking and understanding financial risk.",
  },
];

function WhyAndromeda() {
  const sectionRef = useRef(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(
    () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const section = sectionRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`why-andromeda${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="why-andromeda-title"
    >
      <div className="why-andromeda-inner">
        <div className="why-andromeda-copy">
          <header className="why-andromeda-intro">
            <p className="why-andromeda-eyebrow">WHY ANDROMEDA</p>
            <h2 id="why-andromeda-title">
              A BETTER FOUNDATION FOR UNDERSTANDING THE MARKETS.
            </h2>
          </header>

          <div className="why-andromeda-strengths">
            {strengths.map((strength, index) => (
              <article
                className="why-andromeda-strength"
                key={strength.title}
                style={{ "--strength-delay": `${index * 100}ms` }}
              >
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="why-andromeda-visual" aria-hidden="true">
          <svg className="why-andromeda-globe" viewBox="0 0 640 640" fill="none">
            <defs>
              <radialGradient id="why-globe-fill" cx="40%" cy="34%" r="68%">
                <stop offset="0" stopColor="#438bb5" stopOpacity="0.16" />
                <stop offset="1" stopColor="#122e45" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="why-globe-stroke" x1="125" y1="124" x2="510" y2="522">
                <stop stopColor="#b4e5f6" stopOpacity="0.5" />
                <stop offset="0.66" stopColor="#438bb5" stopOpacity="0.3" />
                <stop offset="1" stopColor="#c49a45" stopOpacity="0.44" />
              </linearGradient>
              <clipPath id="why-globe-clip">
                <circle cx="320" cy="320" r="224" />
              </clipPath>
            </defs>
            <circle cx="320" cy="320" r="224" fill="url(#why-globe-fill)" />
            <circle cx="320" cy="320" r="224" stroke="url(#why-globe-stroke)" />
            <g clipPath="url(#why-globe-clip)" stroke="url(#why-globe-stroke)">
              <ellipse cx="320" cy="320" rx="103" ry="224" />
              <ellipse cx="320" cy="320" rx="174" ry="224" opacity="0.6" />
              <ellipse cx="320" cy="320" rx="224" ry="82" />
              <ellipse cx="320" cy="320" rx="224" ry="154" opacity="0.6" />
              <path d="M98 320h444M120 210h400M120 430h400" opacity="0.46" />
              <path d="M160 430c69-96 132-148 200-170 56-18 99-61 137-117" strokeDasharray="2 10" />
              <circle cx="232" cy="244" r="3" fill="#b4e5f6" />
              <circle cx="374" cy="292" r="3" fill="#b4e5f6" />
              <circle cx="410" cy="408" r="3" fill="#c49a45" />
              <circle cx="268" cy="426" r="2.5" fill="#c49a45" />
            </g>
            <circle cx="320" cy="320" r="249" stroke="#438bb5" strokeOpacity="0.18" />
          </svg>
          <img
            className="why-andromeda-bull"
            src="/images/hero/academy-market-bull.jpg"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span className="why-andromeda-light" />
        </div>
      </div>
    </section>
  );
}

export default WhyAndromeda;