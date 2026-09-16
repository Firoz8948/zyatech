"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      {/* Animated Background */}
      <div className={styles.bgOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`}></div>
        <div className={`${styles.orb} ${styles.orb2}`}></div>
        <div className={`${styles.orb} ${styles.orb3}`}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className={styles.gridPattern}></div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Building the Future
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>Zyatech</span>
          <span className={`${styles.titleLine} ${styles.titleAccent}`}>
            Private Limited
          </span>
        </h1>

        <p className={styles.subtitle}>
          Innovative technology solutions crafted to simplify everyday life.
          We build digital products that make a real difference.
        </p>

        <div className={styles.actions}>
          <a href="#about" className={styles.btnPrimary}>
            Discover More
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>1+</span>
            <span className={styles.statLabel}>Products</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2026</span>
            <span className={styles.statLabel}>Founded</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>India</span>
            <span className={styles.statLabel}>Based In</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  );
}
