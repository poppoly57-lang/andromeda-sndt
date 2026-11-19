import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/ExploreAcademy.css";

const learningCategories = [
  {
    number: "",
    title: "FOREX FUNDAMENTALS",
    description:
      "Understand currency pairs, pips, spreads, market sessions and how the forex market operates.",
    image: "/images/education/academy-forex-fundamentals.webp",
    imageAlt: "A close view of US dollar banknotes",
    className: "explore-card-fundamentals",
  },
  {
    number: "",
    title: "TECHNICAL ANALYSIS",
    description:
      "Explore candlesticks, price movements, trends, support and resistance, and chart interpretation.",
    image: "/images/education/academy-technical-analysis.webp",
    imageAlt: "Candlesticks and chart lines on a dark market chart",
    className: "explore-card-technical",
  },
  {
    number: "",
    title: "FUNDAMENTAL ANALYSIS",
    description:
      "Learn how economic events, financial news, interest rates and other economic factors can influence currencies.",
    image: "/images/education/academy-fundamental-analysis.webp",
    imageAlt: "Newspapers opened to a world business section",
    className: "explore-card-fundamental-analysis",
  },
  {
    number: "",
    title: "RISK MANAGEMENT",
    description:
      "Understand risk exposure, uncertainty, responsible decision-making and the importance of disciplined learning.",
    image: "/images/education/academy-risk-management.webp",
    imageAlt: "People reviewing notes together at a desk",
    className: "explore-card-risk",
  },
];

function ExploreAcademy() {
  return (
    <section className="explore-academy" aria-labelledby="explore-academy-title">
      <div className="explore-academy-inner">
        <header className="explore-academy-intro">
          <div className="explore-academy-heading">
            <p className="explore-academy-label">EXPLORE THE ACADEMY</p>
            <h2 id="explore-academy-title">EXPLORE WHAT YOU CAN LEARN.</h2>
          </div>
          <p className="explore-academy-description">
            Build your understanding of the forex market through structured educational
            topics designed to introduce important concepts, develop market awareness
            and encourage responsible learning.
          </p>
        </header>

        <div className="explore-academy-grid">
          {learningCategories.map((category) => (
            <Link
              className={`explore-card ${category.className}`}
              key={category.number}
              to="/academy"
              aria-label={`${category.title}: explore the academy`}
            >
              <img
                className="explore-card-image"
                src={category.image}
                alt={category.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <span className="explore-card-shade" aria-hidden="true" />
              <span className="explore-card-number" aria-hidden="true">
                {category.number}
              </span>
              <span className="explore-card-content">
                <span className="explore-card-title">{category.title}</span>
                <span className="explore-card-description">
                  {category.description}
                </span>
                <span className="explore-card-action">
                  EXPLORE TOPIC
                  <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreAcademy;