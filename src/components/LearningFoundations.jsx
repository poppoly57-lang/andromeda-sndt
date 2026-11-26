import { useEffect, useRef, useState } from "react";
import "../styles/LearningFoundations.css";

const foundations = [
  {
    title: "PIPS & PRICE MOVEMENT",
    description:
      "Learn the terminology used to describe changes in quoted currency prices.",
    visual: "pips",
  },
  {
    title: "SPREADS",
    description:
      "Understand the difference between the quoted buying and selling prices.",
    visual: "spread",
  },
  {
    title: "MARKET SESSIONS",
    description:
      "Explore major global trading-session periods and why market activity can vary.",
    visual: "sessions",
  },
  {
    title: "MARKET STRUCTURE",
    description:
      "Learn the basic language used to describe how price movements develop over time.",
    visual: "structure",
  },
];

function FoundationVisual({ type }) {
  if (type === "pips") {
    return (
      <span className="foundation-visual foundation-pips" aria-hidden="true">
        <span>PRICE</span>
        <span className="foundation-pips-change">MOVEMENT <b>↗</b></span>
        <span className="foundation-pips-cells"><i /><i /><i /><i /><i /></span>
      </span>
    );
  }

  if (type === "spread") {
    return (
      <span className="foundation-visual foundation-spread" aria-hidden="true">
        <span>SELL</span>
        <span className="foundation-spread-gap" />
        <span>BUY</span>
      </span>
    );
  }

  if (type === "sessions") {
    return (
      <span className="foundation-visual foundation-sessions" aria-hidden="true">
        <span>ASIA</span>
        <span>EUROPE</span>
        <span>N. AMERICA</span>
      </span>
    );
  }

  return (
    <span className="foundation-visual foundation-structure" aria-hidden="true">
      <span>HIGH</span>
      <span>LOW</span>
      <span>HIGH</span>
      <span>LOW</span>
    </span>
  );
}

function LearningFoundations() {
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

    if (reduceMotion || !("IntersectionObserver" in window) || !section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`learning-foundations${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="learning-foundations-title"
    >
      <div className="learning-foundations-inner">
        <header className="learning-foundations-intro">
          <p className="learning-foundations-eyebrow">A CLEAR PLACE TO BEGIN</p>
          <h2 id="learning-foundations-title">
            BUILD YOUR UNDERSTANDING FROM THE GROUND UP.
          </h2>
          <p className="learning-foundations-description">
            Forex becomes easier to understand when its fundamental concepts are
            introduced clearly. Start with the language of the currency market, how
            prices are represented, and the concepts used to describe market activity.
          </p>
        </header>

        <div className="learning-foundations-layout">
          <article className="foundation-feature">
            <p className="foundation-feature-kicker">THE LANGUAGE OF EXCHANGE</p>
            <h3>CURRENCY PAIRS</h3>
            <p className="foundation-feature-description">
              Forex compares the value of one currency against another. That
              relationship is represented as a pair, such as EUR/USD.
            </p>
            <div className="currency-pair-visual" aria-label="Euro compared with US dollar">
              <span className="currency-unit">
                <span className="currency-code">EUR</span>
                <span className="currency-name">EURO</span>
              </span>
              <span className="currency-separator" aria-hidden="true">/</span>
              <span className="currency-unit currency-unit-quote">
                <span className="currency-code">USD</span>
                <span className="currency-name">US DOLLAR</span>
              </span>
            </div>
            <p className="foundation-feature-note">
              BASE CURRENCY <span>COMPARED WITH</span> QUOTE CURRENCY
            </p>
          </article>

          <div className="foundation-list" aria-label="More foundational concepts">
            {foundations.map((foundation, index) => (
              <article
                className={`foundation-item foundation-item-${foundation.visual}`}
                key={foundation.title}
                style={{ "--foundation-delay": `${(index + 1) * 110}ms` }}
              >
                <FoundationVisual type={foundation.visual} />
                <div className="foundation-item-copy">
                  <h3>{foundation.title}</h3>
                  <p>{foundation.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningFoundations;