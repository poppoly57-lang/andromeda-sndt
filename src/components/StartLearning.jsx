import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/StartLearning.css";

function StartLearning() {
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
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`start-learning${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="start-learning-title"
    >
      <div className="start-learning-image" aria-hidden="true">
        <img
          src="/images/hero/academy-learning-night-sky.webp"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="start-learning-content">
        <p className="start-learning-eyebrow">A CONTINUING EDUCATION</p>
        <h2 id="start-learning-title">
          <span>YOUR JOURNEY INTO MARKET</span>
          <span>UNDERSTANDING STARTS HERE.</span>
        </h2>
        <p className="start-learning-description">
          Explore educational materials, expand your understanding of the
          financial markets, and build your knowledge one concept at a time.
        </p>
        <div className="start-learning-actions">
          <Link className="start-learning-link start-learning-link-primary" to="/resources">
            EXPLORE LEARNING MATERIALS
          </Link>
          <Link className="start-learning-link start-learning-link-secondary" to="/videos">
            WATCH EDUCATIONAL VIDEOS
          </Link>
        </div>
      </div>
      <p className="start-learning-signoff" aria-hidden="true">ANDROMEDA SNDT ACADEMY</p>
    </section>
  );
}

export default StartLearning;
