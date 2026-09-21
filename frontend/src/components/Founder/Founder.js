"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import BlurText from "@/components/BlurText/BlurText";
import styles from "./Founder.module.css";

export default function Founder() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateIn}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -12;
    const tiltY = (x - 0.5) * 12;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className={styles.founder} ref={sectionRef}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={`${styles.label} ${styles.animateIn}`}>Leadership</span>
          <h2 className={styles.heading}>
            <BlurText text="Meet the Founder" delay={150} animateBy="words" direction="top" />
          </h2>
          <p className={`${styles.subheading} ${styles.animateIn}`}>
            The vision and drive behind Zyatech Private Limited.
          </p>
        </div>

        <div className={`${styles.founderLayout} ${styles.animateIn}`}>
          {/* Profile Card */}
          <div
            ref={cardRef}
            className={styles.profileCard}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isHovered
                ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                : "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            }}
          >
            {/* Behind Glow */}
            <div className={styles.behindGlow}></div>

            {/* Card Inner */}
            <div className={styles.cardInner}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/card.webp"
                  alt="Firoz Khan - Founder of Zyatech"
                  width={280}
                  height={350}
                  className={styles.avatar}
                  priority
                />
                <div className={styles.avatarOverlay}></div>
              </div>

              <div className={styles.cardInfo}>
                <div className={styles.statusRow}>
                  <span className={styles.statusDot}></span>
                  <span className={styles.statusText}>Building the Future</span>
                </div>
                <h3 className={styles.cardName}>Firoz Khan</h3>
                <p className={styles.cardTitle}>Founder & CEO</p>
                <a
                  href="#contact"
                  className={styles.contactBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className={`${styles.bioContent} ${styles.animateIn}`}>
            <div className={styles.quoteIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h3 className={styles.bioTitle}>
              From Software Developer to Entrepreneur
            </h3>
            <p className={styles.bioText}>
              What started as a passion for writing clean code transformed into a
              mission to build technology that empowers communities. <strong>Firoz Khan</strong> is
              a self-driven software developer who chose to channel his technical
              expertise into entrepreneurship — founding <strong>Zyatech Private Limited</strong> with
              a bold vision to bring digital innovation to underserved towns and cities
              across India.
            </p>
            <p className={styles.bioText}>
              With a deep understanding of real-world challenges faced by local
              businesses and communities, Firoz builds products that aren&apos;t just
              technically sound — they&apos;re meaningful. From launching <strong>LalganjEats</strong>,
              the first food delivery app for his hometown, to developing <strong>Fagson</strong>,
              a scalable multi-city platform, every product reflects his belief that
              great technology should be accessible to everyone, everywhere.
            </p>

            <div className={styles.highlights}>
              <SpotlightCard className={styles.highlight} spotlightColor="rgba(0, 212, 255, 0.2)">
                <span className={styles.highlightIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>
                <div>
                  <strong>Developer at Heart</strong>
                  <p>Full-stack engineer with a passion for building scalable systems</p>
                </div>
              </SpotlightCard>
              <SpotlightCard className={styles.highlight} spotlightColor="rgba(139, 92, 246, 0.2)">
                <span className={styles.highlightIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6-7 6 7" />
                    <path d="M12 2v20" />
                    <path d="M2 18h20" />
                    <path d="M6 15l6-6 6 6" />
                  </svg>
                </span>
                <div>
                  <strong>Entrepreneur by Choice</strong>
                  <p>Turning technical skills into real-world businesses that serve communities</p>
                </div>
              </SpotlightCard>
              <SpotlightCard className={styles.highlight} spotlightColor="rgba(16, 185, 129, 0.2)">
                <span className={styles.highlightIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <strong>Made in India</strong>
                  <p>Building proudly from Lalganj Ajhara, Uttar Pradesh for the nation</p>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
