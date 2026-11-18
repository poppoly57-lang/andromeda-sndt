import { Link } from "react-router-dom";
import LearningApproach from "../components/LearningApproach";
import "../styles/Home.css";

const candles = [
    { x: 38, high: 125, low: 238, open: 184, close: 203, tone: "silver" },
    { x: 68, high: 146, low: 251, open: 204, close: 187, tone: "gold" },
    { x: 98, high: 118, low: 221, open: 188, close: 211, tone: "gold" },
    { x: 128, high: 139, low: 246, open: 210, close: 194, tone: "silver" },
    { x: 158, high: 126, low: 228, open: 193, close: 178, tone: "silver" },
    { x: 188, high: 111, low: 219, open: 179, close: 196, tone: "gold" },
    { x: 218, high: 137, low: 251, open: 198, close: 181, tone: "silver" },
    { x: 248, high: 116, low: 227, open: 182, close: 205, tone: "gold" },
    { x: 278, high: 143, low: 255, open: 204, close: 190, tone: "silver" },
    { x: 308, high: 129, low: 234, open: 191, close: 213, tone: "gold" },
    { x: 338, high: 151, low: 260, open: 212, close: 195, tone: "silver" },
    { x: 368, high: 128, low: 235, open: 196, close: 177, tone: "silver" },
    { x: 398, high: 112, low: 222, open: 178, close: 197, tone: "gold" },
    { x: 428, high: 137, low: 249, open: 198, close: 181, tone: "silver" },
    { x: 458, high: 119, low: 229, open: 182, close: 204, tone: "silver" },
    { x: 488, high: 145, low: 256, open: 205, close: 189, tone: "gold" },
    { x: 518, high: 129, low: 239, open: 190, close: 208, tone: "gold" },
];

function MarketChart() {
    return (
        <svg
            className="market-chart"
            viewBox="0 0 544 360"
            role="img"
            aria-labelledby="chart-title chart-description"
        >
            <title id="chart-title">Illustrative forex candlestick chart</title>
            <desc id="chart-description">
                A decorative, non-live sequence of gold and silver candlesticks on a fine grid.
            </desc>
            <g className="chart-grid" aria-hidden="true">
                {[64, 128, 192, 256, 320].map((y) => (
                    <line key={y} x1="0" y1={y} x2="544" y2={y} />
                ))}
                {[108, 216, 324, 432].map((x) => (
                    <line key={x} x1={x} y1="20" x2={x} y2="340" />
                ))}
            </g>
            <g className="chart-candles" aria-hidden="true">
                {candles.map((candle) => {
                    const bodyY = Math.min(candle.open, candle.close);
                    const bodyHeight = Math.max(Math.abs(candle.close - candle.open), 8);
                    return (
                        <g className={`candle-${candle.tone}`} key={candle.x}>
                            <line x1={candle.x} y1={candle.high} x2={candle.x} y2={candle.low} />
                            <rect x={candle.x - 5} y={bodyY} width="10" height={bodyHeight} />
                        </g>
                    );
                })}
            </g>
            <line className="chart-axis" x1="0" y1="340" x2="544" y2="340" />
        </svg>
    );
}

function Home() {
    return (
        <>
            <main className="home-hero">
                <div className="hero-candle-field" aria-hidden="true">
                    {Array.from({ length: 16 }, (_, index) => (
                        <span
                            className={`field-candle field-candle-${index % 2}`}
                            key={index}
                            style={{
                                left: `${index * 6.4}%`,
                                top: `${12 + ((index * 23) % 70)}%`,
                                height: `${34 + ((index * 17) % 38)}px`,
                                "--field-delay": `${(index % 8) * -1.6}s`,
                            }}
                        />
                    ))}
                </div>
                <div className="hero-inner">
                    <section className="hero-copy" aria-labelledby="hero-title">
                        <p className="hero-eyebrow">
                            <span /> ANDROMEDA SNDT ACADEMY <i aria-hidden="true">|</i> FOREX EDUCATION
                        </p>
                        <h1 id="hero-title">
                            MASTER THE MARKETS.
                            <span>BUILD YOUR KNOWLEDGE.</span>
                        </h1>
                        <p className="hero-introduction">
                            Welcome to ANDROMEDA SNDT ACADEMY — a learning platform dedicated to
                            helping you understand the forex market through structured education,
                            practical demonstrations and disciplined learning.
                        </p>
                        <div className="hero-actions">
                            <Link className="hero-button hero-button-primary" to="/academy">
                                EXPLORE THE ACADEMY
                                <span aria-hidden="true">↗</span>
                            </Link>
                            <Link className="hero-button hero-button-secondary" to="/videos">
                                <span className="play-mark" aria-hidden="true">▶</span>
                                WATCH LESSONS
                            </Link>
                        </div>
                    </section>
                    <section className="hero-chart-wrap" aria-label="Forex education visual">
                        <MarketChart />
                    </section>
                </div>
            </main>

            <section className="about-section" aria-labelledby="about-title">
                <div className="about-inner">
                    <div className="about-intro">
                        <div className="about-heading-block">
                            <p className="about-eyebrow">WHO WE ARE</p>
                            <h2 id="about-title">EDUCATION BEFORE EVERYTHING.</h2>
                        </div>
                        <div className="about-description">
                            <p>
                                ANDROMEDA SNDT ACADEMY is an open learning platform dedicated to
                                forex education. We believe that understanding the financial markets
                                begins with knowledge, patience and a disciplined approach to learning.
                            </p>
                            <p>
                                Our goal is to make forex concepts easier to understand through
                                structured educational materials, video lessons and practical demonstrations.
                            </p>
                        </div>
                    </div>

                    <div className="learning-principles" aria-label="Learning principles">
                        <article className="learning-principle">
                            <p className="principle-number">01</p>
                            <h3>MARKET FUNDAMENTALS</h3>
                            <p>
                                Understand the structure of the forex market, currency pairs and the
                                factors that influence currency movements.
                            </p>
                        </article>
                        <article className="learning-principle">
                            <p className="principle-number">02</p>
                            <h3>TECHNICAL UNDERSTANDING</h3>
                            <p>
                                Explore charts, price movements and commonly used technical-analysis
                                concepts through educational examples.
                            </p>
                        </article>
                        <article className="learning-principle">
                            <p className="principle-number">03</p>
                            <h3>RISK AWARENESS</h3>
                            <p>
                                Understand the importance of risk management, patience and discipline
                                in financial-market education.
                            </p>
                        </article>
                    </div>
                    <p className="about-disclaimer">
                        All materials are for educational purposes and are not recommendations to trade with real money.
                    </p>
                </div>
            </section>

            <LearningApproach />
        </>
    );
}

export default Home;