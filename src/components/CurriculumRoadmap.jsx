import { useEffect, useRef, useState } from "react";
import "../styles/CurriculumRoadmap.css";

const stages = [
  {
    title: "FOREX FUNDAMENTALS",
    description:
      "Introduce the forex market, its purpose, currency pairs, essential terminology, and how exchange rates are represented.",
    topics: [
      "Introduction to Forex",
      "Currency Pairs",
      "Base & Quote Currency",
      "Pips and Spreads",
      "Forex Terminology",
    ],
    theme: "fundamentals",
    visualLabel: "THE LANGUAGE OF EXCHANGE",
  },
  {
    title: "UNDERSTANDING THE MARKET",
    description:
      "Explore the structure of the forex market and the different economic and global factors that influence currency values.",
    topics: [
      "Market Participants",
      "Forex Market Sessions",
      "Liquidity & Volatility",
      "Economic Indicators",
      "Central Banks",
    ],
    theme: "market",
    visualLabel: "A GLOBAL MARKET",
  },
  {
    title: "CHART READING & ANALYSIS",
    description:
      "Learn how financial charts visually represent price movements and how analytical concepts are used to study market behaviour.",
    topics: [
      "Candlestick Charts",
      "Trends",
      "Support & Resistance",
      "Chart Patterns",
      "Technical Analysis Concepts",
    ],
    theme: "analysis",
    visualLabel: "OBSERVE PRICE STRUCTURE",
  },
  {
    title: "RISK AWARENESS & PSYCHOLOGY",
    description:
      "Understand uncertainty, risk awareness, emotional decision-making, patience, and discipline in financial education.",
    topics: [
      "Understanding Risk",
      "Emotional Awareness",
      "Discipline & Patience",
      "Responsible Financial Learning",
      "Decision-Making Psychology",
    ],
    theme: "awareness",
    visualLabel: "THE PRACTICE OF LEARNING",
  },
];

function CurriculumVisual({ theme }) {
  if (theme === "fundamentals") {
    return (
      <div className="curriculum-art curriculum-art-quote" aria-hidden="true">
        <p className="curriculum-art-caption">ILLUSTRATIVE CURRENCY QUOTE</p>
        <div className="curriculum-quote-pair">
          <span>EUR</span><i>/</i><span>USD</span>
        </div>
        <div className="curriculum-quote-detail">
          <span>EURO</span><span>US DOLLAR</span>
        </div>
        <p className="curriculum-quote-value">1.0842 <span>USD per EUR</span></p>
        <div className="curriculum-quote-scale"><span /><span /><span /><span /><span /></div>
      </div>
    );
  }

  if (theme === "market") {
    return (
      <div className="curriculum-art curriculum-art-sessions" aria-hidden="true">
        <p className="curriculum-art-caption">ACTIVITY ACROSS THE DAY</p>
        <div className="curriculum-session-bars">
          <span className="session-bar session-asia"><i /></span>
          <span className="session-bar session-europe"><i /></span>
          <span className="session-bar session-americas"><i /></span>
        </div>
        <div className="curriculum-session-labels">
          <span>ASIA</span><span>EUROPE</span><span>AMERICAS</span>
        </div>
        <p className="curriculum-session-note">Market activity can vary by session</p>
      </div>
    );
  }

  if (theme === "analysis") {
    return (
      <div className="curriculum-art curriculum-art-chart" aria-hidden="true">
        <p className="curriculum-art-caption">PRICE MOVEMENT / STUDY VIEW</p>
        <svg viewBox="0 0 520 230" role="presentation">
          <path className="curriculum-chart-grid" d="M18 45h484M18 105h484M18 165h484M88 18v184M208 18v184M328 18v184M448 18v184" />
          <path className="curriculum-chart-zone" d="M18 141h484" />
          <path className="curriculum-chart-trace" d="M22 174c35-13 37-54 70-38s36 40 66 8 39-39 67-19 42 17 70-21 39-8 65 19 42 7 65-32 44-21 73-47" />
          <g className="curriculum-chart-candles">
            <path d="M54 132v47m-6-29h12M106 102v53m-6-37h12M158 116v42m-6-20h12M210 78v52m-6-39h12M262 86v48m-6-19h12M314 55v58m-6-43h12M366 68v48m-6-31h12M418 39v57m-6-44h12" />
          </g>
          <circle className="curriculum-chart-point" cx="458" cy="51" r="4" />
        </svg>
        <div className="curriculum-chart-legend"><span>PRICE</span><span>SUPPORT AREA</span></div>
      </div>
    );
  }

  return (
    <div className="curriculum-art curriculum-art-awareness" aria-hidden="true">
      <div className="awareness-orbit awareness-orbit-outer" />
      <div className="awareness-orbit awareness-orbit-inner" />
      <p className="curriculum-awareness-center">LEARN<br />WITH INTENTION</p>
      <span className="awareness-word awareness-word-one">PATIENCE</span>
      <span className="awareness-word awareness-word-two">AWARENESS</span>
      <span className="awareness-word awareness-word-three">DISCIPLINE</span>
    </div>
  );
}

function CurriculumRoadmap() {
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
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`curriculum-roadmap${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="curriculum-roadmap-title"
    >
      <div className="curriculum-roadmap-inner">
        <header className="curriculum-roadmap-intro">
          <p className="curriculum-roadmap-eyebrow">THE ANDROMEDA CURRICULUM</p>
          <h2 id="curriculum-roadmap-title">A LEARNING PATH BUILT ON UNDERSTANDING.</h2>
          <p className="curriculum-roadmap-description">
            Explore the curriculum through a progressive learning journey that
            introduces the forex market, develops market understanding, builds
            chart-reading knowledge, and introduces the importance of discipline
            and risk awareness.
          </p>
        </header>

        <div className="curriculum-roadmap-stages">
          {stages.map((stage, index) => (
            <article
              className={`curriculum-stage curriculum-stage-${stage.theme}`}
              key={stage.title}
              style={{ "--curriculum-delay": `${index * 100}ms` }}
              aria-labelledby={`curriculum-stage-${stage.theme}-title`}
            >
                <div className="curriculum-stage-art-wrap">
                  <CurriculumVisual theme={stage.theme} />
                </div>
              <div className="curriculum-stage-copy">
                <p className="curriculum-stage-kicker">{stage.visualLabel}</p>
                <h3 id={`curriculum-stage-${stage.theme}-title`}>{stage.title}</h3>
                <p className="curriculum-stage-description">{stage.description}</p>
                <ul className="curriculum-stage-topics">
                  {stage.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurriculumRoadmap;