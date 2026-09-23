import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  gallery,
  midnightScene,
  neonScene,
  oceanScene,
  palmScene,
  scenes,
  sunsetScene,
} from "../data/scenes";

function Reveal({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HomeHero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="hero">
      <motion.img
        src={sunsetScene.image}
        alt="Original tropical city at sunset"
        className="hero-image"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.2, ease: "easeOut" }}
      />
      <div className="hero-wash" />
      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          WELCOME TO VICE CITY
        </motion.p>
        <h1>
          {["CREATE", "YOUR OWN", "VICE."].map((line, index) => (
            <motion.span
              key={line}
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.18 + index * 0.12,
                duration: 0.8,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <p>
            Choose a scene. Shape the moment. Create a poster that feels like it
            belongs to your own Vice City.
          </p>
          <div>
            <Link to="/creator" className="primary-action">
              CREATE YOUR VICE <ArrowUpRight />
            </Link>
            <a href="#scenes" className="text-action">
              EXPLORE SCENES <ArrowDown />
            </a>
          </div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#story">
        SCROLL TO EXPLORE <ArrowDown size={14} />
      </a>
    </section>
  );
}

export function StorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "7%"]);
  return (
    <section id="story" className="story-section" ref={ref}>
      <div className="story-image-wrap">
        <motion.img
          style={{ y }}
          src={oceanScene.image}
          alt="Ocean Avenue at coral sunset"
          loading="lazy"
        />
      </div>
      <Reveal className="story-copy">
        <p className="eyebrow coral">THE CITY IS YOUR CANVAS</p>
        <h2>
          EVERY NIGHT
          <br />
          TELLS A STORY.
        </h2>
        <p className="body-copy">
          Vice City is more than neon lights and palm trees. It is the places
          you discover, the moments you capture and the stories you create.
        </p>
        <span className="editorial-number">
          // 06 SCENES · INFINITE STORIES
        </span>
      </Reveal>
    </section>
  );
}

export function ScenesSection() {
  return (
    <section id="scenes" className="scenes-section">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">SELECT YOUR WORLD</p>
          <h2>
            CHOOSE YOUR
            <br />
            <em>SCENE</em>
          </h2>
        </div>
        <p>Pick the atmosphere for your next story.</p>
      </Reveal>
      <div className="scene-grid">
        {scenes.map((scene, index) => (
          <motion.article
            className={`scene-card scene-card--${index + 1}`}
            key={scene.id}
            whileHover={{ y: -6 }}
          >
            <img src={scene.image} alt={scene.title} loading="lazy" />
            <div className="scene-shade" />
            <span className="scene-number">{scene.number}</span>
            <div className="scene-copy">
              <h3>{scene.title}</h3>
              <p>{scene.description}</p>
              <Link to="/creator" aria-label={`Create with ${scene.title}`}>
                <ArrowUpRight />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function FeatureSection() {
  const steps = [
    ["01", "CHOOSE", "Start with a cinematic Vice City scene.", palmScene],
    [
      "02",
      "CREATE",
      "Customize the image using the built-in image editor.",
      neonScene,
    ],
    [
      "03",
      "OWN IT",
      "Export your creation as a poster and share your vision.",
      midnightScene,
    ],
  ];
  return (
    <section className="feature-section">
      <Reveal className="feature-title">
        <p className="eyebrow coral">THE PROCESS</p>
        <h2>
          YOUR STORY.
          <br />
          <span>YOUR FRAME.</span>
        </h2>
      </Reveal>
      <div className="feature-flow">
        {steps.map(([number, title, copy, scene], index) => (
          <Reveal
            key={title}
            className={`feature-row ${index % 2 ? "feature-row--reverse" : ""}`}
          >
            <div className="feature-image">
              <img src={scene.image} alt="" loading="lazy" />
            </div>
            <div className="feature-copy">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              {index === 2 && (
                <Link to="/creator" className="text-action">
                  OPEN THE STUDIO <ArrowRight />
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="gallery-section">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">COMMUNITY CUTS</p>
          <h2>
            MADE IN <em>VICE</em>
          </h2>
        </div>
        <p>Moments created by the community.</p>
      </Reveal>
      <div className="gallery-grid">
        {gallery.map(({ scene, creator, date, position }, index) => (
          <figure
            className={`gallery-item gallery-item--${position}`}
            key={`${scene.id}-${index}`}
          >
            <img
              src={scene.image}
              alt={`${scene.title} poster by ${creator}`}
              loading="lazy"
            />
            <figcaption>
              <div>
                <strong>{scene.title}</strong>
                <span>{creator}</span>
              </div>
              <span>{date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <Reveal>
        <p className="eyebrow coral">ABOUT THE EXPERIENCE</p>
        <h2>
          BUILT FOR
          <br />
          THE CITY
          <br />
          <em>AFTER DARK.</em>
        </h2>
      </Reveal>
      <Reveal className="about-copy">
        <p>
          Vice City Studio is an interactive creative experience built around
          image editing, cinematic storytelling and the atmosphere of a city
          that never sleeps.
        </p>
        <div className="tech-line">
          <span>BUILT WITH REACT</span>
          <span>REACT IMAGE EDITOR</span>
          <span>FRAMER MOTION</span>
        </div>
      </Reveal>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="final-cta">
      <img
        src={midnightScene.image}
        alt="Midnight highway toward the city"
        loading="lazy"
      />
      <div className="final-wash" />
      <Reveal>
        <p className="eyebrow">ONE CITY. YOUR STORY.</p>
        <h2>
          WHAT'S
          <br />
          YOUR <em>VICE?</em>
        </h2>
        <p>Create the moment. Make it yours.</p>
        <Link to="/creator" className="primary-action">
          CREATE YOUR VICE <ArrowUpRight />
        </Link>
      </Reveal>
    </section>
  );
}
