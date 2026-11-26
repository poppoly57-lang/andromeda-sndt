import { useEffect, useRef, useState } from "react";
import "../styles/FundamentalAnalysis.css";

function FundamentalAnalysis() {
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
      className={`fundamental-analysis${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="fundamental-analysis-title"
    >
      <div className="fundamental-analysis-inner">
        <header className="fundamental-analysis-intro">
          <div className="fundamental-analysis-heading">
            <p className="fundamental-analysis-eyebrow">ECONOMIC DISPATCH <span>/</span> A WIDER VIEW</p>
            <h2 id="fundamental-analysis-title">BEYOND THE CHARTS. <em>INTO THE ECONOMY.</em></h2>
          </div>
          <p className="fundamental-analysis-lede">
            Currency values exist within a wider economic environment. Fundamental
            analysis introduces the economic conditions, policies and global
            developments that help explain why currencies may experience changes in value.
          </p>
        </header>

        <div className="fundamental-feature">
          <figure className="fundamental-feature-image">
            <img
              src="/images/education/academy-fundamental-editorial.jpg"
              alt="Modern city towers viewed from below against an open sky"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>THE BUILT ENVIRONMENT</span>
              <span>Economic life in a global city</span>
            </figcaption>
          </figure>

          <article className="fundamental-global-story">
            <p className="fundamental-note-label">A WORLD IN MOTION</p>
            <p className="fundamental-global-quote" aria-hidden="true">“</p>
            <h3>Global events</h3>
            <p>
              Geopolitical developments, international trade, major economic events
              and global uncertainty can all affect economic conditions.
            </p>
            <p className="fundamental-global-note">
              Currency values are shaped by an interconnected world.
            </p>
          </article>
        </div>

        <div className="fundamental-editorial-grid">
          <article className="fundamental-note fundamental-interest">
            <p className="fundamental-note-label">POLICY &amp; BORROWING</p>
            <h3>Interest rates</h3>
            <p>
              Interest rates describe the cost of borrowing and the return on
              savings. Central bank decisions about rates can influence economic
              conditions and currencies.
            </p>
            <div className="fundamental-policy-sequence" aria-hidden="true">
              <span>POLICY</span><i /><span>ECONOMIC CONDITIONS</span>
            </div>
          </article>

          <article className="fundamental-note fundamental-inflation">
            <p className="fundamental-note-label">PRICES &amp; PURCHASING POWER</p>
            <p className="fundamental-inflation-phrase" aria-hidden="true">
              PRICE<br /><em>LEVELS</em>
            </p>
            <h3>Inflation</h3>
            <p>
              Inflation is an increase in the general price level. It relates to
              purchasing power and forms part of the wider picture of an economy.
            </p>
          </article>

          <article className="fundamental-note fundamental-indicators">
            <p className="fundamental-note-label">READING THE ECONOMY</p>
            <h3>Economic indicators</h3>
            <p>
              Economic reports offer measures of activity and conditions over time.
            </p>
            <ul className="fundamental-report-list">
              <li><span>EMPLOYMENT</span><i>Work &amp; livelihoods</i></li>
              <li><span>ECONOMIC GROWTH</span><i>Output &amp; change</i></li>
              <li><span>ACTIVITY</span><i>Production &amp; demand</i></li>
            </ul>
          </article>

          <article className="fundamental-note fundamental-central-banks">
            <div>
              <p className="fundamental-note-label">INSTITUTIONS &amp; MONETARY POLICY</p>
              <h3>Central banks</h3>
              <p>
                Central banks guide monetary policy and work to manage economic
                conditions. Their decisions can influence interest rates and the
                financial environment in which currencies are valued.
              </p>
            </div>
            <div className="fundamental-bank-terms" aria-label="Central bank roles">
              <span>MONETARY POLICY</span>
              <span>ECONOMIC CONDITIONS</span>
              <span>INTEREST RATES</span>
            </div>
          </article>
        </div>

        <p className="fundamental-analysis-footnote">
          Economic concepts are introduced for educational purposes and do not predict currency movements.
        </p>
      </div>
    </section>
  );
}

export default FundamentalAnalysis;