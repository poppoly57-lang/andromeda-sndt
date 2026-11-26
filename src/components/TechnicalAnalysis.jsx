import { useEffect, useRef, useState } from "react";
import "../styles/TechnicalAnalysis.css";

const candles = [
  { x: 54, high: 270, low: 352, open: 304, close: 329, tone: "down" },
  { x: 92, high: 292, low: 366, open: 338, close: 314, tone: "up" },
  { x: 130, high: 264, low: 345, open: 316, close: 286, tone: "up" },
  { x: 168, high: 246, low: 326, open: 280, close: 302, tone: "down" },
  { x: 206, high: 266, low: 351, open: 311, close: 326, tone: "down" },
  { x: 244, high: 286, low: 360, open: 332, close: 300, tone: "up" },
  { x: 282, high: 247, low: 329, open: 298, close: 270, tone: "up" },
  { x: 320, high: 221, low: 302, open: 272, close: 246, tone: "up" },
  { x: 358, high: 238, low: 318, open: 254, close: 284, tone: "down" },
  { x: 396, high: 252, low: 339, open: 296, close: 319, tone: "down" },
  { x: 434, high: 278, low: 354, open: 326, close: 300, tone: "up" },
  { x: 472, high: 254, low: 331, open: 294, close: 270, tone: "up" },
  { x: 510, high: 223, low: 306, open: 274, close: 246, tone: "up" },
  { x: 548, high: 198, low: 281, open: 242, close: 216, tone: "up" },
  { x: 586, high: 214, low: 292, open: 224, close: 256, tone: "down" },
  { x: 624, high: 231, low: 308, open: 270, close: 294, tone: "down" },
  { x: 662, high: 250, low: 329, open: 300, close: 272, tone: "up" },
  { x: 700, high: 218, low: 302, open: 270, close: 238, tone: "up" },
  { x: 738, high: 190, low: 278, open: 240, close: 211, tone: "up" },
  { x: 776, high: 172, low: 252, open: 208, close: 184, tone: "up" },
];

const concepts = [
  {
    title: "Candlestick reading",
    description:
      "Each candle summarizes opening, closing, highest and lowest prices over a selected period.",
    theme: "candles",
    detail: <span className="concept-candle-key"><i /><i /><i /><i /></span>,
  },
  {
    title: "Trends & price direction",
    description:
      "Upward, downward and sideways movement describe the general direction visible on a chart.",
    theme: "direction",
    detail: <span className="concept-direction-key"><i>UP</i><i>DOWN</i><i>RANGE</i></span>,
  },
  {
    title: "Support & resistance",
    description:
      "Areas where price has previously reacted are useful chart references, not guaranteed reversal points.",
    theme: "levels",
    detail: <span className="concept-level-key"><i /><i /></span>,
  },
  {
    title: "Chart patterns",
    description:
      "Recurring formations are visual patterns analysts study; they do not predict future outcomes.",
    theme: "patterns",
    detail: <span className="concept-pattern-key"><i /><i /><i /><i /></span>,
  },
  {
    title: "Technical indicators",
    description:
      "Indicators are mathematical calculations based on price or other market data, used to study behaviour.",
    theme: "indicators",
    detail: <span className="concept-indicator-key"><i /><i /><i /></span>,
  },
];

function StudyChart() {
  return (
    <figure className="technical-chart-figure">
      <div className="technical-chart-frame">
        <div className="technical-chart-heading" aria-hidden="true">
          <span>PRICE STUDY</span>
          <span>ILLUSTRATIVE SEQUENCE</span>
        </div>
        <svg
          className="technical-chart-svg"
          viewBox="0 0 820 430"
          role="img"
          aria-labelledby="technical-chart-title technical-chart-description"
        >
          <title id="technical-chart-title">Illustrative candlestick study chart</title>
          <desc id="technical-chart-description">
            A static educational drawing of candlesticks showing varied price movement, two areas of prior reaction, and an example range. It contains no live prices or market data.
          </desc>
          <defs>
            <linearGradient id="technical-chart-wash" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#c49a45" stopOpacity="0.16" />
              <stop offset="1" stopColor="#c49a45" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="technical-chart-rise" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#bfc2c7" stopOpacity="0.05" />
              <stop offset="1" stopColor="#c49a45" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <g className="technical-chart-grid" aria-hidden="true">
            <path d="M22 72h776M22 142h776M22 212h776M22 282h776M22 352h776" />
            <path d="M92 36v330M222 36v330M352 36v330M482 36v330M612 36v330M742 36v330" />
          </g>

          <path className="technical-chart-area" d="M30 341c78-12 104-76 164-61s92 46 154 4 87-57 150-41 88 25 153-39 99-63 153-112v274H30z" />
          <path className="technical-chart-trace" d="M30 341c78-12 104-76 164-61s92 46 154 4 87-57 150-41 88 25 153-39 99-63 153-112" />

          <g className="technical-reaction-zone" aria-hidden="true">
            <path d="M22 328h776M22 166h776" />
            <path d="M22 322h776M22 172h776" />
          </g>

          <g className="technical-chart-candles">
            {candles.map((candle) => {
              const bodyTop = Math.min(candle.open, candle.close);
              const bodyHeight = Math.max(12, Math.abs(candle.close - candle.open));

              return (
                <g className={`technical-candle candle-${candle.tone}`} key={candle.x}>
                  <line x1={candle.x} y1={candle.high} x2={candle.x} y2={candle.low} />
                  <rect x={candle.x - 8} y={bodyTop} width="16" height={bodyHeight} rx="1" />
                </g>
              );
            })}
          </g>

          <path className="technical-chart-baseline" d="M22 366h776" />
          <g className="technical-chart-labels" aria-hidden="true">
            <text x="28" y="315">REACTION AREA</text>
            <text x="28" y="154">REACTION AREA</text>
          </g>
          <g className="technical-chart-markers" aria-hidden="true">
            <circle cx="195" cy="281" r="3" />
            <circle cx="493" cy="205" r="3" />
            <circle cx="643" cy="166" r="3" />
          </g>
        </svg>
        <div className="technical-chart-legend" aria-hidden="true">
          <span><i className="legend-candle" /> PRICE BARS</span>
          <span><i className="legend-area" /> AREAS OF PRIOR REACTION</span>
        </div>
      </div>
      <figcaption>
        An educational illustration only. No live market feed, prices or trading signals.
      </figcaption>
    </figure>
  );
}

function TechnicalAnalysis() {
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
      className={`technical-analysis${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="technical-analysis-title"
    >
      <div className="technical-analysis-inner">
        <header className="technical-analysis-intro">
          <p className="technical-analysis-eyebrow">A VISUAL LANGUAGE OF PRICE</p>
          <h2 id="technical-analysis-title">READ THE CHART. UNDERSTAND THE STORY.</h2>
          <p className="technical-analysis-lede">
            Charts provide a visual representation of price movement. Technical
            analysis introduces a framework for studying historical price behaviour,
            identifying patterns and understanding how market structure is represented visually.
          </p>
        </header>

        <div className="technical-analysis-layout">
          <div className="technical-concepts technical-concepts-left">
            {concepts.slice(0, 2).map((concept) => (
              <article className={`technical-concept concept-${concept.theme}`} key={concept.title}>
                <div className="technical-concept-detail" aria-hidden="true">{concept.detail}</div>
                <h3>{concept.title}</h3>
                <p>{concept.description}</p>
              </article>
            ))}
          </div>

          <StudyChart />

          <div className="technical-concepts technical-concepts-right">
            {concepts.slice(2).map((concept) => (
              <article className={`technical-concept concept-${concept.theme}`} key={concept.title}>
                <div className="technical-concept-detail" aria-hidden="true">{concept.detail}</div>
                <h3>{concept.title}</h3>
                <p>{concept.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalAnalysis;