import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import LearningFoundations from "../components/LearningFoundations";
import CurriculumRoadmap from "../components/CurriculumRoadmap";
import TechnicalAnalysis from "../components/TechnicalAnalysis";
import FundamentalAnalysis from "../components/FundamentalAnalysis";
import RiskAndDiscipline from "../components/RiskAndDiscipline";
import StartLearning from "../components/StartLearning";
import "../styles/Academy.css";

const chartCandles = [
  { x: 63, high: 210, low: 333, open: 282, close: 247, tone: "down" },
  { x: 103, high: 225, low: 347, open: 268, close: 302, tone: "up" },
  { x: 143, high: 202, low: 322, open: 291, close: 242, tone: "down" },
  { x: 183, high: 190, low: 308, open: 236, close: 269, tone: "up" },
  { x: 223, high: 171, low: 297, open: 264, close: 216, tone: "down" },
  { x: 263, high: 177, low: 316, open: 229, close: 274, tone: "up" },
  { x: 303, high: 156, low: 281, open: 263, close: 207, tone: "down" },
  { x: 343, high: 141, low: 272, open: 201, close: 239, tone: "up" },
  { x: 383, high: 124, low: 254, open: 231, close: 178, tone: "down" },
  { x: 423, high: 135, low: 266, open: 184, close: 218, tone: "up" },
  { x: 463, high: 111, low: 244, open: 211, close: 158, tone: "down" },
  { x: 503, high: 98, low: 235, open: 164, close: 196, tone: "up" },
  { x: 543, high: 82, low: 218, open: 191, close: 133, tone: "down" },
];

const atmosphereCandles = [
  { left: "4%", top: "15%", height: 74, bodyTop: "34%", bodyHeight: 23, tone: "silver", delay: "-12s" },
  { left: "15%", top: "70%", height: 92, bodyTop: "24%", bodyHeight: 28, tone: "green", delay: "-25s" },
  { left: "29%", top: "8%", height: 68, bodyTop: "42%", bodyHeight: 18, tone: "gold", delay: "-7s" },
  { left: "72%", top: "19%", height: 82, bodyTop: "29%", bodyHeight: 26, tone: "silver", delay: "-19s" },
  { left: "85%", top: "64%", height: 104, bodyTop: "38%", bodyHeight: 30, tone: "green", delay: "-4s" },
  { left: "96%", top: "34%", height: 72, bodyTop: "23%", bodyHeight: 22, tone: "gold", delay: "-31s" },
];

function MarketChart() {
  return (
    <figure className="academy-chart" aria-labelledby="academy-chart-caption">
      <div className="academy-chart-stage">
        <svg
          className="academy-chart-svg"
          viewBox="0 0 620 440"
          role="img"
          aria-labelledby="academy-chart-title academy-chart-description"
        >
          <title id="academy-chart-title">Illustrative candlestick chart</title>
          <desc id="academy-chart-description">
            A decorative educational chart showing varied bullish and bearish candles. It does not display live market data.
          </desc>
          <defs>
            <linearGradient id="academy-chart-fade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#bfc2c7" stopOpacity="0.34" />
              <stop offset="0.56" stopColor="#c49a45" stopOpacity="0.45" />
              <stop offset="1" stopColor="#79927f" stopOpacity="0.28" />
            </linearGradient>
            <linearGradient id="academy-chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c49a45" stopOpacity="0.1" />
              <stop offset="1" stopColor="#c49a45" stopOpacity="0" />
            </linearGradient>
            <clipPath id="academy-chart-clip">
              <rect x="34" y="42" width="552" height="338" />
            </clipPath>
          </defs>

          <g className="academy-chart-grid" aria-hidden="true">
            <path d="M34 86h552M34 158h552M34 230h552M34 302h552M34 374h552" />
            <path d="M74 42v338M194 42v338M314 42v338M434 42v338M554 42v338" />
          </g>

          <g clipPath="url(#academy-chart-clip)">
            <path
              className="academy-chart-area"
              d="M42 332c54-15 58-48 103-45 44 3 48 30 88 1 43-31 63-24 100-42 38-18 51-50 95-38 44 12 55-17 91-50 27-25 46-35 77-51v288H42z"
              fill="url(#academy-chart-fill)"
            />
            <path
              className="academy-chart-trace"
              d="M42 332c54-15 58-48 103-45 44 3 48 30 88 1 43-31 63-24 100-42 38-18 51-50 95-38 44 12 55-17 91-50 27-25 46-35 77-51"
              fill="none"
              stroke="url(#academy-chart-fade)"
              strokeWidth="1.5"
              strokeDasharray="5 8"
            />
            {chartCandles.map((candle) => {
              const bodyY = Math.min(candle.open, candle.close);
              const bodyHeight = Math.max(12, Math.abs(candle.close - candle.open));

              return (
                <g className={`academy-chart-candle chart-${candle.tone}`} key={candle.x}>
                  <line x1={candle.x} y1={candle.high} x2={candle.x} y2={candle.low} />
                  <rect x={candle.x - 8} y={bodyY} width="16" height={bodyHeight} rx="1" />
                </g>
              );
            })}
          </g>

          <path className="academy-chart-axis" d="M34 380h552" />
          <circle className="academy-chart-marker" cx="517" cy="158" r="4" />
          <circle className="academy-chart-marker academy-chart-marker-soft" cx="233" cy="288" r="3" />
        </svg>

        <div className="academy-chart-note" aria-hidden="true">
          <span>PRICE STRUCTURE</span>
          <MoveUpRight size={15} strokeWidth={1.5} />
        </div>
      </div>
      <figcaption id="academy-chart-caption">
        An educational illustration of price movement
      </figcaption>
    </figure>
  );
}

function Academy() {
  return (
    <main className="academy-page">
      <section className="academy-hero" aria-labelledby="academy-hero-title">
        <div className="academy-hero-atmosphere" aria-hidden="true">
          {atmosphereCandles.map((candle) => (
            <span
              className={`academy-atmosphere-candle academy-atmosphere-${candle.tone}`}
              key={candle.left}
              style={{
                "--academy-candle-left": candle.left,
                "--academy-candle-top": candle.top,
                "--academy-candle-height": `${candle.height}px`,
                "--academy-candle-body-top": candle.bodyTop,
                "--academy-candle-body-height": `${candle.bodyHeight}px`,
                "--academy-candle-delay": candle.delay,
              }}
            />
          ))}
        </div>

        <div className="academy-hero-inner">
          <div className="academy-hero-copy">
            <p className="academy-hero-eyebrow">ANDROMEDA SNDT <span>/</span> ACADEMY</p>
            <h1 id="academy-hero-title">
              <span>UNDERSTANDING</span>
              <span>THE MARKETS</span>
              <span>STARTS WITH</span>
              <span><em>KNOWLEDGE.</em></span>
            </h1>
            <p className="academy-hero-description">
              Explore the foundations of forex, understand how currency markets
              function, and develop your knowledge through structured educational
              content, visual explanations and guided learning.
            </p>
            <div className="academy-hero-actions">
              <Link className="academy-hero-primary" to="/academy">
                EXPLORE THE CURRICULUM
                <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
              </Link>
              <Link className="academy-hero-secondary" to="/resources">
                <span>BROWSE LEARNING MATERIALS</span>
                <ArrowDownRight size={16} strokeWidth={1.6} aria-hidden="true" />
              </Link>
            </div>
            <p className="academy-hero-footnote">A FOUNDATION BUILT THROUGH LEARNING</p>
          </div>

          <MarketChart />
        </div>
      </section>
      <LearningFoundations />
      <CurriculumRoadmap />
      <TechnicalAnalysis />
      <FundamentalAnalysis />
      <RiskAndDiscipline />
      <StartLearning />
    </main>
  );
}

export default Academy;