import { useEffect, useRef, useState } from "react";
import "../styles/RiskAndDiscipline.css";

const principles = [
  {
    title: "Emotional awareness",
    description:
      "Fear, excitement, frustration and overconfidence can influence decisions. Learning to recognize emotions is part of developing sound judgment.",
    theme: "emotion",
    note: "NOTICE WHAT SHAPES A DECISION",
  },
  {
    title: "Discipline & patience",
    description:
      "Knowledge takes time to develop. Patience, consistency and resisting impulsive decisions are important principles of responsible learning.",
    theme: "patience",
    note: "UNDERSTANDING TAKES TIME",
  },
  {
    title: "Critical thinking",
    description:
      "Question assumptions, examine evidence, understand context and avoid conclusions based on emotion or hype.",
    theme: "critical",
    note: "ASK. EXAMINE. REFLECT.",
  },
  {
    title: "Responsible learning",
    description:
      "Financial education should prioritize understanding rather than unrealistic expectations, guaranteed outcomes or promises of quick success.",
    theme: "responsible",
    note: "UNDERSTANDING BEFORE EXPECTATION",
  },
];

function RiskAndDiscipline() {
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
      className={`risk-discipline${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="risk-discipline-title"
    >
      <div className="risk-discipline-inner">
        <header className="risk-discipline-intro">
          <p className="risk-discipline-eyebrow">A PAUSE FOR PERSPECTIVE</p>
          <h2 id="risk-discipline-title">
            <span>KNOWLEDGE MATTERS.</span>
            <span>DISCIPLINE MATTERS <em>MORE.</em></span>
          </h2>
          <p className="risk-discipline-lede">
            Understanding the financial markets goes beyond learning charts and
            economic concepts. It also means recognizing uncertainty, developing
            patience, questioning assumptions and understanding the role of
            discipline in decision-making.
          </p>
        </header>

        <div className="risk-discipline-feature">
          <figure className="risk-discipline-image">
            <img
              src="/images/education/academy-risk-discipline.jpg"
              alt="A quiet road crossing a mountain pass beneath an open sky"
              loading="lazy"
              decoding="async"
            />
            <figcaption>THE VALUE OF TAKING THE LONG VIEW</figcaption>
          </figure>

          <article className="risk-discipline-risk">
            <p className="risk-discipline-kicker">BEGIN WITH UNCERTAINTY</p>
            <h3>Understanding risk</h3>
            <p>
              Financial markets involve uncertainty. Outcomes are unpredictable,
              and losses are possible. Understanding risk begins by recognizing
              what cannot be known in advance.
            </p>
            <p className="risk-discipline-pullquote">
              Clarity begins with what we do not know.
            </p>
          </article>
        </div>

        <div className="risk-discipline-principles">
          {principles.map((principle, index) => (
            <article
              className={`risk-principle risk-principle-${principle.theme}`}
              key={principle.title}
              style={{ "--risk-principle-delay": `${(index + 1) * 90}ms` }}
            >
              <p className="risk-principle-note">{principle.note}</p>
              <h3>{principle.title}</h3>
              <p className="risk-principle-description">{principle.description}</p>
            </article>
          ))}
        </div>

        <p className="risk-discipline-closing">
          RESPONSIBLE FINANCIAL EDUCATION STARTS WITH UNDERSTANDING.
        </p>
      </div>
    </section>
  );
}

export default RiskAndDiscipline;
