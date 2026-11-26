import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LearningResources.css";

const resourceItems = [
  {
    title: "VIDEO LEARNING",
    description:
      "Educational video lessons that explain forex concepts and market principles.",
    action: "EXPLORE LESSONS",
    href: "/videos",
    image: "/images/resources/resource-video-learning.jpg",
    imageAlt: "A teacher leading a lesson in a classroom",
    className: "resource-video",
  },
  {
    title: "STUDY MATERIALS",
    description:
      "Learning materials, notes and educational resources to reinforce understanding.",
    action: "VIEW MATERIALS",
    href: "/resources",
    image: "/images/resources/resource-study-materials.jpg",
    imageAlt: "A stack of books ready for study",
    className: "resource-study",
  },
  {
    title: "MARKET KNOWLEDGE",
    description:
      "Explore foundational concepts, market structure and educational chart explanations.",
    action: "LEARN MORE",
    href: "/academy",
    image: "/images/resources/resource-market-knowledge.jpg",
    imageAlt: "Shelves of books in a quiet library",
    className: "resource-market",
  },
];

function LearningResources() {
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
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`learning-resources${hasEnteredViewport ? " is-visible" : ""}`}
      aria-labelledby="learning-resources-title"
    >
      <div className="learning-resources-inner">
        <header className="learning-resources-intro">
          <div className="learning-resources-heading">
            <p className="learning-resources-eyebrow">EXPLORE OUR RESOURCES</p>
            <h2 id="learning-resources-title">
              YOUR JOURNEY INTO MARKET KNOWLEDGE STARTS HERE.
            </h2>
          </div>
          <p className="learning-resources-description">
            Explore educational materials designed to help you understand forex
            concepts, market behaviour, financial terminology and the foundations
            of technical and fundamental analysis.
          </p>
        </header>

        <div className="learning-resources-showcase">
          {resourceItems.map((item, index) => (
            <article
              className={`resource-preview ${item.className}`}
              key={item.title}
              style={{ "--resource-delay": `${index * 130}ms` }}
            >
              <Link className="resource-preview-link" to={item.href}>
                <span className="resource-preview-image-wrap">
                  <img
                    className="resource-preview-image"
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="resource-preview-image-shade" aria-hidden="true" />
                </span>
                <span className="resource-preview-copy">
                  <span className="resource-preview-title">{item.title}</span>
                  <span className="resource-preview-description">
                    {item.description}
                  </span>
                  <span className="resource-preview-action">
                    {item.action}
                    <ArrowUpRight size={16} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningResources;