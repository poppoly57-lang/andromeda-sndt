import { ArrowUpRight, BookOpen, ChartNoAxesCombined, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LearningExperience.css";

const experiences = [
  {
    title: "VIDEO LESSONS",
    description:
      "Learn through visual explanations and guided educational content designed to make forex concepts easier to understand.",
    href: "/videos",
    image: "/images/education/academy-forex-fundamentals.webp",
    imageAlt: "Currency notes used to illustrate forex learning",
    icon: Play,
    className: "video-lessons",
    action: "VIEW LESSONS",
  },
  {
    title: "STUDY MATERIALS",
    description:
      "Explore educational resources that help reinforce forex concepts, market terminology and foundational knowledge.",
    href: "/resources",
    image: "/images/education/academy-fundamental-analysis.webp",
    imageAlt: "Business newspapers for financial market study",
    icon: BookOpen,
    className: "study-materials",
    action: "BROWSE RESOURCES",
  },
  {
    title: "PRACTICAL EXPLANATIONS",
    description:
      "Follow educational chart examples to understand how market concepts and technical principles appear in real market charts.",
    href: "/academy",
    image: "/images/education/academy-technical-analysis.webp",
    imageAlt: "Candlesticks and chart lines on a dark market chart",
    icon: ChartNoAxesCombined,
    className: "practical-explanations",
    action: "EXPLORE THE ACADEMY",
  },
];

function LearningExperience() {
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
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`learning-experience${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="learning-experience-title"
    >
      <div className="learning-experience-inner">
        <header className="learning-experience-intro">
          <p className="learning-experience-eyebrow">YOUR LEARNING EXPERIENCE</p>
          <h2 id="learning-experience-title">
            KNOWLEDGE THAT GOES BEYOND THE BASICS.
          </h2>
          <p className="learning-experience-description">
            Explore forex education through structured lessons, visual explanations,
            market concepts and learning resources designed to help you develop a
            deeper understanding of how financial markets work.
          </p>
        </header>

        <div className="learning-experience-layout">
          <figure className="learning-experience-feature">
            <img
              src="/images/education/academy-risk-management.webp"
              alt="Learners reviewing notes together at a desk"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>SHARED STUDY</span>
              <span>Educational example</span>
            </figcaption>
          </figure>

          <div className="learning-experience-list" aria-label="Learning experiences">
            {experiences.map((experience, index) => {
              const ExperienceIcon = experience.icon;

              return (
                <Link
                  className={`learning-experience-item ${experience.className}`}
                  key={experience.title}
                  to={experience.href}
                  style={{ "--experience-delay": `${index * 130}ms` }}
                >
                  <span className="learning-experience-media" aria-hidden="true">
                    <img src={experience.image} alt="" loading="lazy" decoding="async" />
                    <span className="learning-experience-icon">
                      <ExperienceIcon size={18} strokeWidth={1.7} />
                    </span>
                  </span>
                  <span className="learning-experience-copy">
                    <span className="learning-experience-item-title">
                      {experience.title}
                    </span>
                    <span className="learning-experience-item-description">
                      {experience.description}
                    </span>
                    <span className="learning-experience-action">
                      {experience.action}
                      <ArrowUpRight size={15} strokeWidth={1.7} />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningExperience;