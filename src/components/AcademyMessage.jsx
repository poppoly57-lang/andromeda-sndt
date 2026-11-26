import { useEffect, useRef, useState } from "react";
import "../styles/AcademyMessage.css";

const backgroundCandles = [
  { left: 5, top: 10, wick: 96, body: 18, bodyTop: 25, delay: -8, tone: "gold", depth: "distant" },
  { left: 12, top: 33, wick: 72, body: 14, bodyTop: 33, delay: -17, tone: "silver", depth: "near" },
  { left: 18, top: 65, wick: 112, body: 24, bodyTop: 42, delay: -4, tone: "green", depth: "middle" },
  { left: 25, top: 15, wick: 82, body: 16, bodyTop: 52, delay: -20, tone: "silver", depth: "distant" },
  { left: 31, top: 48, wick: 88, body: 20, bodyTop: 28, delay: -11, tone: "gold", depth: "middle" },
  { left: 37, top: 78, wick: 64, body: 13, bodyTop: 38, delay: -26, tone: "silver", depth: "near" },
  { left: 43, top: 22, wick: 120, body: 26, bodyTop: 44, delay: -2, tone: "green", depth: "middle" },
  { left: 49, top: 56, wick: 76, body: 15, bodyTop: 31, delay: -14, tone: "silver", depth: "distant" },
  { left: 55, top: 7, wick: 104, body: 22, bodyTop: 36, delay: -23, tone: "gold", depth: "near" },
  { left: 61, top: 37, wick: 92, body: 17, bodyTop: 48, delay: -6, tone: "silver", depth: "middle" },
  { left: 67, top: 72, wick: 116, body: 23, bodyTop: 26, delay: -19, tone: "green", depth: "distant" },
  { left: 73, top: 20, wick: 70, body: 14, bodyTop: 34, delay: -10, tone: "gold", depth: "middle" },
  { left: 79, top: 52, wick: 108, body: 21, bodyTop: 41, delay: -28, tone: "silver", depth: "near" },
  { left: 85, top: 4, wick: 86, body: 17, bodyTop: 29, delay: -15, tone: "green", depth: "distant" },
  { left: 91, top: 42, wick: 126, body: 25, bodyTop: 46, delay: -1, tone: "gold", depth: "middle" },
  { left: 97, top: 75, wick: 78, body: 15, bodyTop: 32, delay: -21, tone: "silver", depth: "near" },
  { left: 9, top: 84, wick: 90, body: 19, bodyTop: 40, delay: -13, tone: "silver", depth: "distant" },
  { left: 28, top: 91, wick: 68, body: 13, bodyTop: 27, delay: -25, tone: "gold", depth: "middle" },
  { left: 58, top: 88, wick: 98, body: 20, bodyTop: 49, delay: -7, tone: "silver", depth: "near" },
  { left: 89, top: 89, wick: 74, body: 16, bodyTop: 35, delay: -18, tone: "green", depth: "distant" },
];

function AcademyMessage() {
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
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`academy-message${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="academy-message-title"
    >
      <div className="academy-message-candles" aria-hidden="true">
        {backgroundCandles.map((candle, index) => (
          <span
            className={`academy-message-candle candle-${candle.tone} candle-${candle.depth}`}
            key={`${candle.left}-${index}`}
            style={{
              "--candle-left": `${candle.left}%`,
              "--candle-top": `${candle.top}%`,
              "--candle-wick": `${candle.wick}px`,
              "--candle-body": `${candle.body}px`,
              "--candle-body-top": `${candle.bodyTop}%`,
              "--candle-delay": `${candle.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="academy-message-inner">
        <p className="academy-message-eyebrow">A MESSAGE FROM THE ACADEMY</p>

        <h2 className="academy-message-heading" id="academy-message-title">
          <span className="academy-message-line message-line-opening">
            <span>THE MARKET REWARDS</span>
          </span>
          <span className="academy-message-line message-line-understanding">
            <span>UNDERSTANDING.</span>
          </span>
          <span className="academy-message-line message-line-assumptions">
            <span>NOT ASSUMPTIONS.</span>
          </span>
        </h2>

        <div className="academy-message-body">
          <p className="academy-message-paragraph">
            Forex is a market that demands understanding, patience and continuous
            learning. At ANDROMEDA SNDT ACADEMY, we believe education should come
            before expectations.
          </p>
          <p className="academy-message-paragraph">
            Our focus is not on shortcuts or unrealistic promises, but on helping
            learners build knowledge, understand market behaviour and develop a
            disciplined approach to financial education.
          </p>
        </div>

        <p className="academy-message-signoff" aria-label="Knowledge first. Discipline always.">
          <span>KNOWLEDGE FIRST.</span>
          <span>DISCIPLINE ALWAYS.</span>
        </p>
      </div>
    </section>
  );
}

export default AcademyMessage;