import { Link } from "react-router-dom";
import LearningApproach from "../components/LearningApproach";
import ExploreAcademy from "../components/ExploreAcademy";
import WhyAndromeda from "../components/WhyAndromeda";
import "../styles/Home.css";

function Home() {
    return (
        <>
            <main className="home-hero">
                <div className="hero-inner">
                    <div className="hero-visual" aria-hidden="true">
                        <img
                            className="hero-bull"
                            src="/images/hero/academy-market-bull.jpg"
                            alt=""
                            fetchPriority="high"
                        />
                        <svg className="hero-globe" viewBox="0 0 520 520" fill="none">
                            <defs>
                                <radialGradient id="globe-light" cx="38%" cy="30%" r="72%">
                                    <stop offset="0" stopColor="#74c8ee" stopOpacity="0.16" />
                                    <stop offset="1" stopColor="#122e45" stopOpacity="0" />
                                </radialGradient>
                                <linearGradient id="globe-line" x1="100" y1="90" x2="420" y2="430">
                                    <stop stopColor="#b4e5f6" stopOpacity="0.72" />
                                    <stop offset="0.55" stopColor="#438bb5" stopOpacity="0.38" />
                                    <stop offset="1" stopColor="#c49a45" stopOpacity="0.58" />
                                </linearGradient>
                                <clipPath id="globe-clip">
                                    <circle cx="260" cy="260" r="190" />
                                </clipPath>
                            </defs>
                            <circle cx="260" cy="260" r="190" fill="url(#globe-light)" />
                            <circle cx="260" cy="260" r="190" stroke="url(#globe-line)" strokeWidth="1.2" />
                            <g clipPath="url(#globe-clip)" stroke="url(#globe-line)">
                                <ellipse cx="260" cy="260" rx="86" ry="190" />
                                <ellipse cx="260" cy="260" rx="150" ry="190" opacity="0.65" />
                                <ellipse cx="260" cy="260" rx="190" ry="72" />
                                <ellipse cx="260" cy="260" rx="190" ry="132" opacity="0.65" />
                                <path d="M72 260h376M94 174h332M94 346h332" opacity="0.45" />
                                <path d="M150 154c46 38 84 74 110 106 30 37 62 68 112 106" strokeDasharray="3 8" />
                                <path d="M132 354c47-69 82-105 128-121 36-12 75-38 117-74" strokeDasharray="2 9" />
                                <circle cx="180" cy="212" r="3" fill="#d5eff9" />
                                <circle cx="278" cy="254" r="3" fill="#d5eff9" />
                                <circle cx="340" cy="316" r="3" fill="#c49a45" />
                                <circle cx="218" cy="338" r="2.5" fill="#c49a45" />
                                <circle cx="328" cy="190" r="2.5" fill="#d5eff9" />
                            </g>
                            <circle cx="260" cy="260" r="215" stroke="#438bb5" strokeOpacity="0.2" />
                            <path d="M80 366c75 49 169 73 260 48" stroke="#c49a45" strokeOpacity="0.72" strokeWidth="1.2" />
                        </svg>
                        <span className="hero-light hero-light-blue" />
                        <span className="hero-light hero-light-gold" />
                    </div>
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
            <ExploreAcademy />
            <WhyAndromeda />
        </>
    );
}

export default Home;