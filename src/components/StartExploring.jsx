import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/StartExploring.css";

function StartExploring() {
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
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`start-exploring${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="start-exploring-title"
    >
      <div className="start-exploring-atmosphere" aria-hidden="true">
        <span className="start-exploring-ring start-exploring-ring-outer" />
        <span className="start-exploring-ring start-exploring-ring-inner" />
      </div>
      <div className="start-exploring-inner">
        <p className="start-exploring-eyebrow">YOUR NEXT STEP</p>
        <h2 id="start-exploring-title">
          <span>START WITH KNOWLEDGE.</span>
          <span>BUILD WITH <i>UNDERSTANDING.</i></span>
        </h2>
        <div className="start-exploring-bottom">
          <p className="start-exploring-description">
            Explore the academy, discover educational resources and begin developing
            your understanding of the forex market through structured learning.
          </p>
          <div className="start-exploring-actions">
            <Link className="start-exploring-primary" to="/academy">
              EXPLORE THE ACADEMY
              <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
            </Link>
            <Link className="start-exploring-secondary" to="/resources">
              VIEW LEARNING RESOURCES
              <ArrowUpRight size={16} strokeWidth={1.7} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartExploring;