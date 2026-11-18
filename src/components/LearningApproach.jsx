import { useEffect, useRef, useState } from "react";
import "../styles/LearningApproach.css";

const principles = [
  {
    title: "FOUNDATION FIRST",
    description:
      "Build a clear understanding of forex fundamentals, including currency pairs, pips, spreads, market sessions and how the forex market operates.",
  },
  {
    title: "TECHNICAL UNDERSTANDING",
    description:
      "Explore charts, candlesticks, trends, support and resistance, and commonly used technical-analysis concepts through educational examples.",
  },
  {
    title: "PRACTICAL DEMONSTRATIONS",
    description:
      "Learn how market concepts are interpreted through guided chart demonstrations and structured educational examples.",
  },
  {
    title: "DISCIPLINE & RISK AWARENESS",
    description:
      "Understand why patience, critical thinking, risk awareness and responsible decision-making matter when studying financial markets.",
  },
];

function LearningApproach() {
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
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`learning-approach${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="learning-approach-title"
    >
      <div className="learning-approach-inner">
        <div className="learning-approach-intro">
          <div className="learning-approach-heading">
            <p className="learning-approach-label">OUR LEARNING APPROACH</p>
            <h2 id="learning-approach-title">
              LEARN WITH STRUCTURE. UNDERSTAND WITH PURPOSE.
            </h2>
          </div>
          <p className="learning-approach-description">
            Our learning approach is built around clear explanations, structured
            lessons and practical educational demonstrations. We aim to make forex
            concepts easier to understand while encouraging patience, critical
            thinking and responsible financial awareness.
          </p>
        </div>

        <div className="learning-approach-principles">
          {principles.map((principle, index) => {
            const cardNumber = String(index + 1).padStart(2, "0");

            return (
            <article
              className={`approach-principle approach-principle-${cardNumber}`}
              key={principle.title}
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <div className="approach-principle-copy">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LearningApproach;
